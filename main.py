import time

print("Зaadawdadwadawaапуск долгоживущего процесса. Нажмите Ctrl+C для остановки.")

counter = 0
try:
    while True:
        print(f"Процесс работает... Шаwwwг {counter}")
        counter += 1
        time.sleep(5) 
except KeyboardInterrupt:
    print("Процесс завершён пользователем.")
