// relocate on route implementation
export const handleScroll = () => {
	const navigations = document.querySelectorAll('nav > a');

	// resets all
	for (let i = 0; i < navigations.length; i++) {
		navigations[i].style.color = '#677c9b';
		navigations[i].style.zoom = 1;
	}

	const target = getTarget();
	navigations[target].style.zoom = 1.25;
	navigations[target].style.color = '#fff';
};

export const setListeners = () => {
	const content = document.querySelector('main');
	const navigations = document.querySelectorAll('nav > a');

	for (let i = 0; i < navigations.length; i++) {
		navigations[i].addEventListener('click', () => {
			content.scrollTo({
				top: i * content.offsetHeight,
				behavior: 'smooth',
			});
		});
	}
};

// not implemented yet.
export const handleProgressBar = () => {
	throw new Error('not implemented yet');
};

const getTarget = () => {
	const { scrollHeight, offsetHeight, scrollTop } = document.querySelector('main');
	const target = Math.round((scrollTop / scrollHeight) * (scrollHeight / offsetHeight));
	return target;
};
