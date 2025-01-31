// @ts-ignore
const emailHandler = ({value}) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(value) ? 'success' : 'Неверный формат ввода почты';
}