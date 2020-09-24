// libraries
import styled from 'styled-components';

const Section = styled.section`
	position: relative;
	height: 100%;
	width: 100%;
	overflow: scroll;
	scroll-snap-align: start;

	::-webkit-scrollbar {
		width: 0;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: none;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: none;
	}
`;

export default Section;
