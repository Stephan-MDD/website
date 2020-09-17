import React from 'react';

// libraries
import styled from 'styled-components';

window.onscroll = () => {
	const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	// const winHeight = window.innerHeight;
	const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	// const scrolled = Math.min((winScroll / height) * 100, 100);
	// document.getElementById('scrollbar').style.height = `${scrolled}%`;

	try {
		const navItems = document.querySelectorAll('nav > a');
		const target = Math.floor((winScroll / height) * navItems.length);
		document.getElementById('scrollbar').style.height = `${Math.min((100 / navItems.length) * (target + 1), 100)}%`;
		[...navItems].map((item, index) => (item.style.fontWeight = index == target ? 'bold' : 'normal'));
	} catch (error) {}
};

const ScrollBar = () => {
	return (
		<Container>
			<Bar id="scrollbar"></Bar>
		</Container>
	);
};

export default ScrollBar;

const Container = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 0.2rem;
	height: 100%;
	// background: #ccc;
`;

const Bar = styled.div`
	height: 8px;
	background: dodgerblue;
	width: 0.2rem;
	transition: all 500ms;
`;
