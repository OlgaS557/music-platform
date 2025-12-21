import { useState } from "react";

export const useFormField = (initialValue: string) => {
    type inputElement = HTMLInputElement | HTMLTextAreaElement;

    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<inputElement>) => {
        setValue(e.target.value);
    }

    return {
        value, onChange, setValue,
    }
};

