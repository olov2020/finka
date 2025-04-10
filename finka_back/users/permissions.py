from rest_framework import permissions

# Класс - разрешение, позволяющее доступ к объекту только его владельцу или администратору
class IsOwnerOrAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Если пользователь админ, разрешаем все действия
        if request.user.is_superuser:
            return True
        # Иначе разрешаем доступ только если объект принадлежит текущему пользователю
        return obj == request.user