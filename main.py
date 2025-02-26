import time

print("Запуск долгоживущего процесса. Нажмите Ctrl+C для остановки.")

counter = 0
try:
    while True:
        print(f"Процесс работает... Шаawdawfг {counter}")
        counter += 1
        time.sleep(5) 
except KeyboardInterrupt:
    print("Процесс завершён пользователем.")
