import React, { useState } from 'react';

// libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';

// components
// import ProgressBar from '../elements/ProgressBar';

// scripts
import * as styles from '../../scripts/styles';

const Menu = () => {
	const [navigationOpen, handleNavigation] = useState(false);
	const isSmallMedia = useMediaQuery(styles.mediaBounds.small);

	return (
		<Container isSmallMedia={isSmallMedia} navigationOpen={navigationOpen}>
			<LogoContainer isSmallMedia={isSmallMedia}>
				<div>
					<span>SD</span>
					<a href="/#">en</a>
				</div>
				<span>click en for english</span>
			</LogoContainer>

			<Navigation isSmallMedia={isSmallMedia} navigationOpen={navigationOpen}>
				<a href="/#" onClick={() => handleNavigation(false)}>
					om mig
				</a>

				<a href="/#" onClick={() => handleNavigation(false)}>
					teknologier
				</a>

				<a href="/#" onClick={() => handleNavigation(false)}>
					studie
				</a>

				<a href="/#" onClick={() => handleNavigation(false)}>
					previews
				</a>

				<a href="/#" onClick={() => handleNavigation(false)}>
					contact
				</a>
			</Navigation>

			<ContactLinks isSmallMedia={isSmallMedia}>
				<a href="/#" style={{ fontWeight: 'bold' }}>
					CV
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

	${({ isSmallMedia }) => {
		if (isSmallMedia) return `height: 4rem; border-top: 2px solid ${styles.colors.grey.mid_deep};`;
		else return `width: 12rem; border-right: 2px solid ${styles.colors.grey.mid_deep};`;
	}}
`;

const Navigation = styled.nav`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	transition: top 2s;

	background: #151b24;

	width: 100%;
	z-index: 10;

	a {
		font-weight: bold;
		padding: 0.8rem 0rem;
	}

	${({ isSmallMedia, navigationOpen }) => {
		const defaultSmallMedia = `
			font-size: 2rem;
			position: absolute;
			text-align: right;
			padding: 0 2rem;
			width: calc(100% - 2*2rem);
			justify-content: flex-end;
		`;

		if (isSmallMedia && navigationOpen) return defaultSmallMedia + 'top: 0vh;  height: calc(100vh - 8rem);';
		else if (isSmallMedia) return defaultSmallMedia + 'top: 100vh; height: 0vh;';
		else return 'align-items: center;';
	}}
`;

const ContactLinks = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 0.4rem 0;

	a {
		color: #677c9b;
		padding: 0.4rem 0rem;
	}

	${({ isSmallMedia }) => (isSmallMedia ? 'flex-direction: row; font-size: 2rem;' : 'flex-direction: column-reverse; font-size: 2.4rem;')}
	${({ isSmallMedia }) => (isSmallMedia ? '' : 'margin-bottom: 2rem;')}
`;

const LogoContainer = styled.div`
	${({ isSmallMedia }) => isSmallMedia && 'position: absolute; top: 0;'}
	z-index: 15;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	margin: 2rem;

	div:first-child {
		display: flex;
		justify-content: space-around;
		align-items: center;

		span {
			font-size: 2rem;
			font-weight: bold;
			color: #00b2ff;
			padding-right: 0.6rem;
			border-right: 1px solid #677c9b;
		}

		a {
			color: #677c9b;
			padding-left: 0.6rem;
		}
	}

	span:last-child {
		color: #677c9b;
		font-size: 0.6rem;
	}
`;

export default Menu;
