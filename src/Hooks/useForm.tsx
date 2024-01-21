import React from "react";

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ,
        message: 'Email inválido.',
    },
    password: {
        // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
        regex: /.*/
        ,
        message: ''
        // 'Sua senha deve conter no mínimo 8 caracteres 1 letra maiúscula 1 número e 1 caractere especial.'
    },
    username: {
        regex: /.*/
        ,
        message: 'Preencha um valor.'
    }
};

const useForm = (type: keyof typeof types) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState<string | null>(null);

    function validate(value: string) {
        if (value.length === 0) {
            setError('Preencha um valor.')
            return false
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true
        }
    }

    function onChange({ target }: any) {
        if (error) validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    };
}

export default useForm;