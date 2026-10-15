// this is not 100% 'api' but at least it's the only file that loads the data
// data is served as static json files from ./resource (no backend / database needed)
import { backend_url } from './config.js';

/**@typedef {import('./config.js').Breed_card } Breed_card */
/**@typedef {import('./config.js').Cut_card } Cut_card */
/**@typedef {import('./config.js').Cooking_cut } Cooking_cut */

const resource_dir = 'resource/';
const cache = {};

/**
 * fetch a static json file once and reuse it
 * @param {string} name
 */
function load(name) {
	if (!cache[name]) {
		cache[name] = fetch(`${backend_url}${resource_dir}${name}/${name}.json`)
			.then((res) => res.json())
			.catch((err) => {
				console.log('err', err);
				return [];
			});
	}
	return cache[name];
}

/**
 * resolve relative image path in json to the resource dir (same as backend init)
 * @param {string} path
 * @param {string} dir
 */
function resolveImg(path, dir) {
	return path?.replace(/^(\.\/|(\.\.\/)+)/, dir);
}

/**
 * minimal mongo-like matcher ($and, $or, $regex) used by breed-query.js
 * @param {Object} doc
 * @param {Object} query
 */
function match(doc, query) {
	return Object.entries(query).every(([key, value]) => {
		if (key == '$and') return value.every((q) => match(doc, q));
		if (key == '$or') return value.some((q) => match(doc, q));
		if (value?.$regex !== undefined) {
			return new RegExp(value.$regex, value.$options).test(doc[key]);
		}
		return doc[key] == value;
	});
}

export async function get_breeds(q) {
	const query = q[0];
	const sort = q[1];
	const options = q[2];
	/**
	 * @type {Breed_card[]}
	 */
	let breeds = (await load('cow_breeds')).map((breed) => ({
		...breed,
		breed_path_img: resolveImg(
			breed.breed_path_img,
			`${resource_dir}cow_breeds/`
		),
		breed_country_img: resolveImg(breed.breed_country_img, resource_dir),
	}));
	breeds = breeds.filter((breed) => match(breed, query));
	const [field, order] = Object.entries(sort)[0] ?? [];
	if (field) {
		breeds.sort((a, b) =>
			a[field] < b[field] ? -order : a[field] > b[field] ? order : 0
		);
	}
	const skip = options.skip ?? 0;
	const limit = options.limit ? skip + options.limit : undefined;
	return breeds.slice(skip, limit);
}

export async function get_cuts() {
	/**
	 * @type {Cut_card[]}
	 */
	const cuts = (await load('cow_cuts')).map((cut) => ({
		...cut,
		cut_path_img: resolveImg(cut.cut_path_img, `${resource_dir}cow_cuts/`),
	}));

	return cuts;
}

export async function get_cookings() {
	/**
	 * @type {Cooking_cut[]}
	 */
	const cookings = (await load('cow_cooking')).map((cooking) => ({
		...cooking,
		cooking_path_img: cooking.cooking_path_img.map((path) =>
			resolveImg(path, `${resource_dir}cow_cooking/`)
		),
	}));

	return cookings;
}
