//Components
import { SignUp } from 'components/Auth';
import { Container } from 'components/Shared';

const SignUpPage = () => {
	const handleSubmit = credentials => console.log('Submitted: ', { ...credentials });

	return (
		<section>
			<Container>
				<SignUp onSubmit={handleSubmit} />
			</Container>
		</section>
	);
};

export default SignUpPage;
