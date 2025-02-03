FROM python:3.11

RUN apt-get update && apt-get install -y \
    libpq-dev gcc

WORKDIR /finka_back

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# # RUN python manage.py migrate
# RUN python manage.py collectstatic --noinput

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "finka_back/finka/wsgi.py"]