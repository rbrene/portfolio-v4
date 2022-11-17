import { FormStateProps, FormErrorsStateProps } from '../interfaces/interfaces';

export default function validate(formData: FormStateProps) {
    let errors: FormErrorsStateProps = {
        fullName: {
            status: false,
            message: ''
        },
        email: {
            status: false,
            message: ''
        },
        subject: {
            status: false,
            message: ''
        },
        message: {
            status: false,
            message: ''
        }
    };


    if (formData.fullName === '') {
        errors.fullName.status = true;
        errors.fullName.message = 'required.';
    }

    if (formData.email === '') {
        errors.email.status = true;
        errors.email.message = 'required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        errors.email.status = true;
        errors.email.message = 'invalid.';
    }

    if (formData.subject === '') {
        errors.subject.status = true;
        errors.subject.message = 'required.';
    }

    if (formData.message === '') {
        errors.message.status = true;
        errors.message.message = 'required.';
    }

    return errors;
}

export function checkErrors(errors: FormStateProps) {
    let success = false;

    for (const entry of Object.entries(errors)) {
        if (entry[1] !== '') {
            success = true;
        } else {
            success = false;
        }
    }
    return success;


}