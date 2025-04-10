Инструкция по применению миграций:

Если вы запускаете проект без Docker:

1. Убедитесь, что настройки подключения к базе данных корректны (см. файл `.env`).
2. В корневой директории проекта выполните следующие команды:
   ```bash
   python manage.py makemigrations
   python manage.py migrate

Если вы запускаете проект с Docker:

1. Из текущей директории выполняем скрипт ./start.sh
2. Далее выполняем следующие команды:
   ```bash
   docker-compose exec web python manage.py makemigrations
   docker-compose exec web python manage.py migrate