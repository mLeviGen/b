import { useState } from "react";
import "./Goals.css";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const MAX_TITLE_LENGTH = 30;
  const MAX_DESC_LENGTH = 200;

  const addNewGoal = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      setGoals([...goals, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Goals Manager</h2>
      <form onSubmit={addNewGoal}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            maxLength={MAX_TITLE_LENGTH}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            value={description}
            maxLength={MAX_DESC_LENGTH}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Goal</button>
      </form>

      <div className="goals-container">
        {goals.map((goal, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className={`goal-card ${isExpanded ? "expanded" : ""}`} onClick={() => toggleExpand(index)}>
              <div className="goal-text">
                <h3 title={goal.title}>{goal.title}</h3>
                <p className={isExpanded ? "full-text" : "truncated-text"}>{goal.description}</p>
              </div>
              <button className="delete-btn" onClick={(e) => {
                e.stopPropagation();
                setGoals(goals.filter(i => i !== index));
              }}>
                ✖
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
