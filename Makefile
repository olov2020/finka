.PHONY: run migrate createsuperuser test freeze docker-up docker-down

run:
	python manage.py runserver

migrate:
	python manage.py makemigrations
	python manage.py migrate

createsuperuser:
	python manage.py createsuperuser

test:
	python manage.py test

freeze:
	pip freeze > requirements.txt

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down