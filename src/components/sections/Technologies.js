import React from 'react';

// libraries
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

// components
import Section from '../modules/Section';

// scripts
import * as styles from '../../scripts/styles';
import { studies } from '../../scripts/context';

const Technologies = () => {
	const isSmallMedia = useMediaQuery(styles.mediaBounds.small);
	return <SSection />;
};

const SSection = styled(Section)`
	${({ isSmallMedia }) => (isSmallMedia ? 'grid-template-columns: auto;' : 'grid-template-columns: auto auto;')}
`;

export default Technologies;
