import home from './public/components/home.js';
import breed from './public/components/breed.js';
import cut from './public/components/cut.js';
import cooking from './public/components/cooking.js';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// let html = data;
const breedManip_script = document.createElement('script');
breedManip_script.type = 'module';
breedManip_script.src = './public/scripts/breed-manip.js';

const cutManip_script = document.createElement('script');
cutManip_script.type = 'module';
cutManip_script.src = './public/scripts/cut-manip.js';

const cookingManip_script = document.createElement('script');
cookingManip_script.type = 'module';
cookingManip_script.src = './public/scripts/cooking-manip.js';

let append = '';
(async () => {
	append += home(0, true);
	append += await breed(1, false);
	append += await cut(2, false);
	append += await cooking(3, false);
	document.querySelector('#replace-me').outerHTML = append;
	document.head.appendChild(breedManip_script);
	document.head.appendChild(cutManip_script);
	document.head.appendChild(cookingManip_script);
})();
