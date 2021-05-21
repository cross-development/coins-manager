//Core
import styled from 'styled-components';
//Settings
import { device, size } from 'styles/index.styles';

const StyledContainer = styled.div`
	margin-left: auto;
	margin-right: auto;

	max-width: calc(${size.mobile} - 15px - 15px);

	@media ${device.tablet} {
		max-width: calc(${size.tablet} - 87px - 87px);
	}

	@media ${device.desktop} {
		max-width: calc(${size.desktop} - 115px - 115px);
	}

	@media ${device.large} {
		max-width: calc(${size.large} - 90px - 90px);
	}
`;

export { StyledContainer };
