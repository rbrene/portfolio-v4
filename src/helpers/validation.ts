import { DataProps } from '../types/hook/forms';


export function validate(formData: DataProps) {
    // let success: boolean = false;

    let errors: DataProps = {
        fullName: undefined,
        email: undefined,
        subject: undefined,
        message: undefined
    }

    if (formData.fullName.length === 0) {
        errors.fullName = 'required';
    } else if (formData.fullName.length > 0) {
        errors.fullName = '';
    }

    if (formData.email.length === 0) {
        errors.email = 'required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        errors.email = 'Invalid email';
    } else if (formData.email.length > 0) {
        errors.email = '';
    }

    if (formData.subject.length === 0) {
        errors.subject = 'required';
    } else if (formData.subject.length > 0) {
        errors.subject = '';
    }

    if (formData.message.length === 0) {
        errors.message = 'required';
    } else if (formData.message.length > 0) {
        errors.message = '';
    }

    return errors;
}

export function checkForm(formData: DataProps) {
    let success: boolean = false;


    for (const entry of Object.entries(formData)) {

        if (entry[1] === null) {
            success = false;
            console.log('form has not been completed');
        } else if (entry[1].length > 0) {
            success = false;
            console.log('form could not be sent');
        } else if (entry[1] === '') {
            success = true;
            console.log('form has been completed and ready to send')
        }
    }

    return success;
}