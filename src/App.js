import React from 'react';
import './App.scss';

// libraries
// import ScrollAnimation from 'react-animate-on-scroll'; // reference:: https://michalsnik.github.io/aos/
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

// modules
import Menu from './modules/Menu';

// sections
import About from './sections/About';
import Technologies from './sections/Technologies';
import Study from './sections/Study';
import Internship from './sections/Internship';
import Grades from './sections/Grades';
import Previews from './sections/Previews';

// scripts
import Context from './scripts/context';

const App = () => {
	const isSmallMedia = useMediaQuery(Context.smallMediaBoundary);

	return (
		<Container isSmallMedia={isSmallMedia}>
			<Menu />
			<Main>
				<About />
				<Technologies />
				<Study />
				<Internship />
				<Grades />
				<Previews />
			</Main>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;

	${({ isSmallMedia }) => (isSmallMedia ? 'flex-direction: column-reverse;' : 'flex-direction: row;')}
`;

const Main = styled.section`
	flex: 1;
	overflow-x: hidden;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
`;

export default App;
