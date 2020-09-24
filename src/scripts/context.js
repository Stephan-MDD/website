import imgTemplate from '../assets/img-template.png';

export const studies = [
	{
		title: 'Computer Science',
		formal: 'Academy Profession Degree Programme in',
		institute: 'Copenhagen Business Academy',
		content: `The purpose of the Academy Profession Degree Programme in Computer Science is to
				qualify the graduate to independently analyse, plan and carry out solutions for
				developing, refining and the integration of IT systems in private and public companies
				in national as well as an international settings.`,
		about:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum tellus sed arcu facilisis sollicitudin. Pellentesque dapibus metus tristique nibh pretium lacinia. Pellentesque consectetur, risus eget euismod vulputate, odio magna semper nisl, nec mattis dolor ex vel velit. Nam justo orci, pellentesque eu iaculis ac, tincidunt in augue.',
		images: [
			{ src: imgTemplate, alt: 'template image' },
			{ src: imgTemplate, alt: 'template image' },
			{ src: imgTemplate, alt: 'template image' },
		],

		semesters: [
			{
				period: 'Fall 2017',
				passed: true,
				subjects: [{ title: 'Førsteårs Prøve Del 1', grade: 10, description: '' }],
			},

			{
				period: 'Spring 2018',
				passed: true,
				subjects: [
					{ title: 'Førsteårs Prøve Del 2', grade: 12, description: '' },
					{ title: 'Samlet Vurdering', grade: 12, description: 'lorem ipsum' },
				],
			},

			{
				period: 'Fall 2018',
				passed: true,
				subjects: [
					{ title: 'Systemudvikling', grade: 10, description: 'lorem ipsum' },
					{ title: 'Programmering', grade: 10, description: 'lorem ipsum' },
				],
			},

			{
				period: 'Spring 2019',
				passed: true,
				subjects: [
					{ title: 'Internet of Things', grade: 12, description: 'lorem ipsum' },
					{ title: 'Python', grade: 12, description: 'lorem ipsum' },
					{ title: 'Fullstack JavaScript', grade: 12, description: 'lorem ipsum' },
				],
			},

			{
				period: 'Fall 2019',
				passed: true,
				subjects: [
					{ title: 'Praktik Eksammen', grade: 12, description: 'lorem ipsum' },
					{ title: 'Afsluttende Eksammen', grade: 12, description: 'lorem ipsum' },
				],
			},
		],
	},

	{
		title: 'Software Development',
		formal: 'Bachelor’s Degree Programme in',
		institute: 'Copenhagen Business Academy',
		content: `The purpose of the bachelor’s degree program in software development is to qualify
				the graduate to act independently as an IT specialist with a focus on integration and
				architecture, and to be part of teamwork about the development of large distributed
				IT systems in IT companies, IT consultancies or internal IT development departments`,
		about:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum tellus sed arcu facilisis sollicitudin. Pellentesque dapibus metus tristique nibh pretium lacinia. Pellentesque consectetur, risus eget euismod vulputate, odio magna semper nisl, nec mattis dolor ex vel velit. Nam justo orci, pellentesque eu iaculis ac, tincidunt in augue.',
		images: [
			{ src: imgTemplate, alt: 'template image' },
			{ src: imgTemplate, alt: 'template image' },
			{ src: imgTemplate, alt: 'template image' },
		],

		semesters: [
			{
				period: 'Spring 2019',
				passed: true,
				subjects: [
					{ title: 'Software Testing', grade: 12, description: 'lorem ipsum' },
					{ title: 'Databases', grade: 12, description: 'lorem ipsum' },
					{ title: 'Machine Learning', grade: 12, description: 'lorem ipsum' },
				],
			},

			{
				period: 'Fall 2020',
				passed: false,
				subjects: [
					{ title: 'Large System Development', grade: 'TBD', description: 'lorem ipsum' },
					{ title: 'System Integration', grade: 'TBD', description: 'lorem ipsum' },
					{ title: 'Investigation & Reporting', grade: 'TBD', description: 'lorem ipsum' },
					{ title: 'Business Intelligence', grade: 'TBD', description: 'lorem ipsum' },
				],
			},

			{
				period: 'Spring 2020',
				passed: false,
				subjects: [
					{ title: 'Praktik Eksammen', grade: 'TBD', description: 'lorem ipsum' },
					{ title: 'Afsluttende Eksammen', grade: 'TBD', description: 'lorem ipsum' },
				],
			},
		],
	},
];
