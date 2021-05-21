//Core
import styled from 'styled-components';
import { css } from '@emotion/core';

const LoaderWrapperDiv = styled.div`
	width: 100%;
	position: absolute;
	top: -85px;
	left: 0;
	height: calc(100vh + 85px);
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 10000;
`;

const beatCss = css`
	display: block;
	margin: calc(100vh * 0.4) auto;
`;

export { LoaderWrapperDiv, beatCss };
