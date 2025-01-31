// @ts-ignore
const emailHandler = ({value, required}) => {
    if (value.length === 0 && !required) {
        return 'success';
    }

    if (value.length === 0 && required) {
        return 'Данное поле не может быть пустым';
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(value) ? 'success' : 'Неверный формат ввода почты';
}

export default emailHandler;