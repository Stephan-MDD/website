import React from 'react';

// libraries
import styled from 'styled-components';

// components
import Section from '../modules/Section';

// assets
import ProfileImageSrc from '../assets/profile.png';

const About = () => {
	return (
		<SSection>
			<h2>Software Developer</h2>
			<Paragraph>
				<b>Velkommen,</b>
				<br />
				mit navn er Stephan studere PA i Software development på CPHBusiness i Lyngby.
			</Paragraph>

			<Subjects>
				<span>AI</span>
				<span>BE</span>
				<span>FE</span>
				<span>DB</span>
				<span>IOT</span>
			</Subjects>

			<ProfileImage>
				<Image src={ProfileImageSrc} />
				<ImageText>
					<span>Stephan</span>
					<span>Djurhuus</span>
				</ImageText>
			</ProfileImage>
		</SSection>
	);
};

const Subjects = styled.div`
	background: linear-gradient(90deg, #52b6ff, #3b5afc);
	padding: 3rem;
`;

const Paragraph = styled.p`
	background: #1e2837;
`;

const ProfileImage = styled.div`
	position: absolute;
	top: 0;
	right: 4rem;

	box-shadow: 0 0 3rem #000;
`;

const Image = styled.img`
	height: 50vw;
	max-height: 90vh;
`;

const ImageText = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;

	position: absolute;
	bottom: 0;

	font-size: 4rem;
	font-weight: bold;
`;

const SSection = styled(Section)``;

export default About;
