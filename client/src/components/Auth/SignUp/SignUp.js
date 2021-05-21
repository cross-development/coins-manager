//Core
import React from 'react';
import PropTypes from 'prop-types';
//Packages
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//Utils
import { signUpSchema } from 'helpers/validationSchemas';
//Styles
import { PromoWrap, Heading, Message } from './SignUp.styles';
import { Form, Label, Input, BtnGroup, Button, SignUpLink } from './SignUp.styles';

const SignUp = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(signUpSchema),
	});

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Heading>Регистрация</Heading>

				<Label>
					<Input
						type="text"
						name="username"
						placeholder="Имя *"
						autoComplete="off"
						ref={register}
					/>
					{<Message>{errors.username?.message}</Message>}
				</Label>

				<Label>
					<Input
						type="email"
						name="email"
						placeholder="Email *"
						autoComplete="off"
						ref={register}
					/>
					{<Message>{errors.email?.message}</Message>}
				</Label>

				<Label>
					<Input type="password" name="password" placeholder="Пароль *" ref={register} />
					{<Message>{errors.password?.message}</Message>}
				</Label>

				<BtnGroup>
					<Button type="submit">Регистрация</Button>
					<SignUpLink to="/sign-in">Вход</SignUpLink>
				</BtnGroup>
			</Form>

			<PromoWrap />
		</>
	);
};

SignUp.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SignUp;
