import time

print("Запуск долгоживущего процесса. Нажмите Ctrl+C для остановки.")

counter = 0
try:
    while True:
        print(f"Процесс работает... Шаг {counter}")
        counter += 1
        time.sleep(5)  # задержка в 5 секунд между выводами
except KeyboardInterrupt:
    print("Процесс завершён пользователем.")
