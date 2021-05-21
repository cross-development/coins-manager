//Components
import { SignIn } from 'components/Auth';
import { Container } from 'components/Shared';

const SignInPage = () => {
	const handleSubmit = credentials => console.log('Submitted: ', { ...credentials });

	return (
		<section>
			<Container>
				<SignIn onSubmit={handleSubmit} />
			</Container>
		</section>
	);
};

export default SignInPage;
