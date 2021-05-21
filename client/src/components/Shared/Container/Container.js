//Packages
import PropTypes from 'prop-types';
//Styles
import { StyledContainer } from './Container.styles';

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>;

Container.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Container;
