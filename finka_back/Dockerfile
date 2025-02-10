FROM python:3.11

RUN apt-get update && apt-get install -y \
    libpq-dev gcc netcat-openbsd

WORKDIR /finka_back

COPY requirements.txt /finka_back/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /finka_back/

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "finka.wsgi:application"]