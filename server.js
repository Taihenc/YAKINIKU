import home from './public/components/home.js';
import breed from './public/components/breed.js';
// import cut from './public/components/cut.js';
// import cooking from './public/components/cooking.js';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// let html = data;
let append = '';
(async () => {
	append += home(0, true);
	append += await breed(1, false);
	// append += home(2, false);
	// append += home(3, false);
	document.querySelector('#replace-me').outerHTML = append;
})();
