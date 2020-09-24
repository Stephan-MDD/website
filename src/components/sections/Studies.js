import React from 'react';

// libraries
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

// components
import Section from '../modules/Section';

// scripts
import * as styles from '../../scripts/styles';
import { studies } from '../../scripts/context';

const Studies = () => {
	const isSmallMedia = useMediaQuery(styles.mediaBounds.small);

	return (
		<SSection isSmallMedia={isSmallMedia}>
			{studies.map((study, index) => {
				const { semesters, ...rest } = study;

				return (
					<React.Fragment key={index}>
						<Study content={rest} />
						<Semesters content={semesters} />
					</React.Fragment>
				);
			})}
		</SSection>
	);
};

const Study = ({ content }) => (
	<div className="study">
		<div className="info-container">
			<span>{content.formal}</span>
			<span>{content.title}</span>
			<span>{content.institute}</span>

			<p>{content.content}</p>
		</div>

		<div className="about-container">
			<div className="image-container">
				{content.images.map((image, index) => (
					<img src={image.src} alt={image.alt} height="64px" key={index} />
				))}
			</div>
			<h2>About</h2>
			<p>{content.about}</p>
		</div>
	</div>
);

const Semesters = ({ content }) => (
	<div className="semester">
		<div>
			<h2>Semesters</h2>
			<span>click the subject to get description</span>
		</div>
		{content.map((period, index) => (
			<Semester content={period} key={index} />
		))}
	</div>
);

const Semester = ({ content }) => (
	<div>
		<h2>{content.period}</h2>
		<div className={`subject ${!content.passed && 'TBD'}`}>
			{content.subjects.map(({ grade, title, description }, index) => (
				<React.Fragment key={index}>
					<span>{grade}</span>
					<span onClick={() => console.log(description)}>{title}</span>
				</React.Fragment>
			))}
			{content.passed && <div className="progress"></div>}
		</div>
	</div>
);

const SSection = styled(Section)`
	display: grid;

	.study {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		height: 100vh;
		${({ isSmallMedia }) => !isSmallMedia && styles.shadows.studiesSeparator}

		.info-container {
			padding: 3rem 4rem;

			display: flex;
			flex-direction: column;

			span:nth-child(1) {
				color: ${styles.colors.blue.light};
			}

			span:nth-child(2) {
				font-size: 3rem;
				color: ${styles.colors.grey.light};
			}

			span:nth-child(3) {
				color: ${styles.colors.grey.regular};
			}

			p {
				color: ${styles.colors.grey.light};
				font-style: italic;
			}
		}

		.about-container {
			position: relative;
			padding: 3rem 4rem;

			background: ${styles.colors.grey.mid_deep};

			.image-container {
				position: absolute;
				top: -50%;
				left: 50%;
				transform: translateY(50%) translateX(-50%);
				width: 80%;
				display: flex;
				justify-content: space-evenly;
				padding: 1rem;

				background: ${styles.gradients.blueTo('left')};
				${styles.shadows.default}
			}
		}
	}

	.semester {
		padding: 3rem;

		display: flex;
		flex-direction: column;
		justify-content: center;

		div:first-child {
			text-align: center;

			h2 {
				color: ${styles.colors.grey.light};
			}
		}

		h2 {
			color: ${styles.colors.blue.regular};
		}

		h3 {
			color: ${styles.colors.grey.regular};
		}

		.TBD {
			color: ${styles.colors.grey.regular};
		}

		.subject {
			position: relative;

			display: grid;
			grid-template-columns: 4rem auto;

			font-size: 1rem;
			font-weight: bold;

			align-items: center;

			* {
				padding: 0.6rem;
			}

			.progress {
				padding: 0;
				position: absolute;
				top: 0;
				left: 4rem;
				bottom: 0;
				width: 0.2rem;
				border-radius: 0.2rem;
				background: ${styles.gradients.blueTo('top')};
			}
		}
	}

	${({ isSmallMedia }) => (isSmallMedia ? 'grid-template-columns: 1fr' : 'grid-template-columns: 2fr 1fr;')}
`;

export default Studies;
