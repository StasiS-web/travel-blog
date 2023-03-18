import { useState } from "react";

export const useForm = (initialValue, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValue);

    const onChangeHandler = (event) => {
        setFormValues(state => ({...state, [event.target.name]: event.target.value}));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if(onSubmitHandler) {
            onSubmitHandler(formValues);
        }
    };

    return{
        formValues,
        onChangeHandler,
        onSubmit
    };
};

