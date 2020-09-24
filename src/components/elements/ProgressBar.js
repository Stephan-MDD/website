import React, { useEffect } from 'react';

// libraries
import styled from 'styled-components';

// scripts
import { handleProgressBar } from '../../scripts/scroll';

const ProgressBar = () => {
	useEffect(() => {
		handleProgressBar();
	});

	return <Bar className="ProgressBar"></Bar>;
};

export default ProgressBar;

const Bar = styled.div`
	position: absolute;
	background: dodgerblue;
	width: 0.2rem;
	transition: all 500ms;
`;
