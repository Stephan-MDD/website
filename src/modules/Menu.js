import React, { useState } from 'react';

// libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';

// components
import ScrollBar from '../components/ScrollBar';

// scripts
import Context from '../scripts/context';

const Menu = () => {
	const [navigationOpen, handleNavigation] = useState(false);
	const isSmallMedia = useMediaQuery(Context.smallMediaBoundary);

	return (
		<Container isSmallMedia={isSmallMedia} navigationOpen={navigationOpen}>
			<LogoContainer isSmallMedia={isSmallMedia} className="LogoContainer">
				<div>
					<span>SD</span>
					<a href="/#">en</a>
				</div>
				<span>click en for english</span>
			</LogoContainer>

			<Navigation isSmallMedia={isSmallMedia} navigationOpen={navigationOpen} className="Navigation">
				<a href="/#">om mig</a>
				<a href="/#">teknologier</a>
				<a href="/#">studie</a>
				<a href="/#">praktik</a>
				<a href="/#">karaktere</a>
				<a href="/#">previews</a>
			</Navigation>

			<ContactLinks isSmallMedia={isSmallMedia} className="ContactLinks">
				<a href="/#">
					<FontAwesomeIcon icon={faArrowDown} />
				</a>
				<a href="/#">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="/#">
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
				<a href="/#">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				{isSmallMedia && <FontAwesomeIcon icon={faGripLines} onClick={() => handleNavigation(!navigationOpen)} />}
			</ContactLinks>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: height 500ms;

	overflow: hidden;

	${({ isSmallMedia, navigationOpen }) => {
		if (isSmallMedia && navigationOpen) return 'height: 100%;';
		else if (isSmallMedia) return 'height: 4rem;';
		else return 'width: 12rem;';
	}}
`;

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	overflow: hidden;

	transition: opacity 500ms;

	${({ isSmallMedia, navigationOpen }) => {
		if (isSmallMedia && navigationOpen) return 'transform: translateY(50%); opacity: 1;';
		else if (isSmallMedia) return 'transform: translateY(50%); opacity: 0;';
		else return '';
	}}
`;

const ContactLinks = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 0.4rem 0;

	${({ isSmallMedia }) => (isSmallMedia ? 'flex-direction: row;' : 'flex-direction: column-reverse;')}
	${({ isSmallMedia }) => (isSmallMedia ? 'font-size: 2rem;' : 'font-size: 2.4rem;')}
`;

const LogoContainer = styled.div`
	${({ isSmallMedia }) => isSmallMedia && 'position: absolute; top: 0;'}
`;

export default Menu;
