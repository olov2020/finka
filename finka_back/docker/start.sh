#!/bin/bash
set -e

if ! docker info > /dev/null 2>&1; then
  echo "Docker не запущен. Пожалуйста, запустите Docker и повторите попытку."
  exit 1
fi

if ! command -v docker-compose >/dev/null 2>&1; then
  echo "docker-compose не найден. Пожалуйста, установите docker-compose."
  exit 1
fi

echo "Сборка и запуск контейнеров..."
docker-compose up --build -d

echo "Контейнеры запущены. Для просмотра логов используйте:"
echo "  docker-compose logs -f"