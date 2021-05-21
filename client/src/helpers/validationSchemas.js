//Packages
import * as yup from 'yup';

const signInSchema = yup.object().shape({
	email: yup.string().email('Введите корректный email').required('Поле должно быть заполнено.'),
	password: yup
		.string()
		.min(4, 'Пароль должен быть более 4 символов.')
		.max(30, 'Пароль должен быть менее 30 символов.')
		.required('Поле должно быть заполнено.'),
});

const signUpSchema = yup.object().shape({
	email: yup.string().email('Введите корректный email').required('Поле должно быть заполнено.'),
	password: yup
		.string()
		.min(4, 'Пароль должен быть более 4 символов.')
		.max(30, 'Пароль должен быть менее 30 символов.')
		.required('Поле должно быть заполнено.'),
	username: yup
		.string()
		.min(4, 'Имя должно быть более 4 символов.')
		.max(20, 'Имя должно быть менее 20 символов.')
		.required('Поле должно быть заполнено.'),
});

export { signInSchema, signUpSchema };
