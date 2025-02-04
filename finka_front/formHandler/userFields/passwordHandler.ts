// @ts-ignore
const passwordHandler = ({value, required}): string => {
    if (value.length === 0 && !required) {
        return 'success';
    }
    if (value.length < 8) {
        return "Длина пароля должна быть не менее 8 символов";
    }

    if (!/[A-Z]/.test(value)) {
        return "Пароль должен содержать хотя бы 1 заглавную букву";
    }

    if (!/[a-z]/.test(value)) {
        return "Пароль должен содержать хотя бы 1 строчную букву";
    }

    if (!/[0-9]/.test(value)) {
        return "Пароль должен содержать хотя бы 1 цифру";
    }

    if (!/[@$!%*?&]/.test(value)) {
        return "Пароль должен содержать хотя бы 1 специальный символ (@$!%*?&)";
    }

    return 'success';
}

export default passwordHandler;