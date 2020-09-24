import React, { useEffect } from 'react';

// libraries
// import ScrollAnimation from 'react-animate-on-scroll'; // reference:: https://michalsnik.github.io/aos/
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

// modules
import Menu from './components/modules/Menu';

// sections
import About from './components/sections/About';
import Technologies from './components/sections/Technologies';
import Studies from './components/sections/Studies';
import Previews from './components/sections/Previews';
import Contact from './components/sections/Contact';

// scripts
import { mediaBounds } from './scripts/styles';
import * as scroll from './scripts/scroll';

const App = () => {
	const isSmallMedia = useMediaQuery(mediaBounds.small);

	useEffect(() => {
		scroll.setListeners();
		scroll.handleScroll();
	});

	return (
		<Container isSmallMedia={isSmallMedia}>
			<Menu />
			<Main onScroll={scroll.handleScroll}>
				<Studies />
				<About />
				<Technologies />
				<Previews />
				<Contact />
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

const Main = styled.main`
	flex: 1;
	overflow-x: hidden;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
`;

export default App;
