export function emailHandler (value: string, required: boolean = true): string {
    if (value.length === 0 && !required) {
        return 'success';
    }

    if (value.length === 0 && required) {
        return 'Поле почты не может быть пустым';
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(value) ? 'success' : 'Неверный формат ввода почты';
}