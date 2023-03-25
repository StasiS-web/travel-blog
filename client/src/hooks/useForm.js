import { useState } from "react";

export const useForm = (initialValue, onSubmitHandler) => {
    const [values, setValues] = useState(initialValue);

    const onChangeHandler = (event) => {
        setValues(state => ({...state, [event.target.name]: event.target.value}));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if(onSubmitHandler) {
            onSubmitHandler(values);
        }
    };

    const changeValues = (newValues) =>{
        setValues(newValues);
    }

    return{
        values,
        onChangeHandler,
        changeValues,
        onSubmit
    };
};

