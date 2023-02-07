import { useState } from 'react';
import { checkForm } from '../helpers/validation';
import { DataProps } from '../types/hook/forms';


export function useForm() {
    const [formData, setFormData] = useState<DataProps>({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let success: boolean = false;

        let errors: DataProps = {
            fullName: undefined,
            email: undefined,
            subject: undefined,
            message: undefined
        }

        if (formData.fullName === '' || formData.fullName === null || undefined) {
            errors.fullName = 'required';
        } else {
            errors.fullName = '';
        }

        if (formData.email === '' || formData.email === null || undefined) {
            errors.email = 'required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            errors.email = 'Invalid email';
        } else {
            errors.email = '';
        }

        if (formData.subject === '' || formData.subject === null || undefined) {
            errors.subject = 'required';
        } else {
            errors.subject = '';
        }

        if (formData.message === '' || formData.message === null || undefined) {
            errors.message = 'required';
        } else {
            errors.message = '';
        }

        return errors;
    };

    return { formData, handleChange, validate, checkForm };
};