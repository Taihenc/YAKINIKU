import home from './public/components/home.js';
import breed from './public/components/breed.js';
import cut from './public/components/cut.js';
import cooking from './public/components/cooking.js';

(async () => {
	const loading = document.getElementById('loading');
	let append = '';

	// Prepare content
	append += home(0, true);
	append += await breed(1, false);
	append += await cut(2, false);
	append += await cooking(3, false);

	document.querySelector('#replace-me').outerHTML = append;

	// Slowly reduce opacity of the loading screen
	loading.classList.add('disappear');
	setTimeout(() => loading.remove(), 1000);

	// Dynamically load additional scripts
	await Promise.all([
		import('./public/scripts/breed-manip.js'),
		import('./public/scripts/cut-manip.js'),
		import('./public/scripts/cooking-manip.js'),
		import('./public/scripts/navigation.js'),
	]);
})();
