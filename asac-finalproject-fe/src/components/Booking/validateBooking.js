import { yupResolver } from '@hookform/resolvers/yup';
import yup from '../Utils/YupGlobal';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const bookingSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .email('Email invalid'),
    name: yup
        .string()
        .required('Name is required'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required').max(10,'Phone number is not valid'),
    year: yup.number()
        .transform((value) => (isNaN(value) ? undefined : value)).nullable()
        .required('Year is required')
})

export default bookingSchema;
