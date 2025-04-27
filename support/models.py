from django.db import models

class SupportMessage(models.Model):
    message = models.TextField(verbose_name="Текст сообщения")
    tg = models.CharField(max_length=100, verbose_name="Контакт в Telegram")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Время создания")

    def __str__(self):
        return f"[{self.created_at:%Y-%m-%d %H:%M}] {self.tg}: {self.message[:20]}"