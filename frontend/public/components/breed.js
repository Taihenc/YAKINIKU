import { get_breeds } from '../scripts/api.js';
import { toPercentage, backend_url } from '../scripts/config.js';
import query from '../scripts/breed-query.js';

/**@typedef {import('../scripts/config.js').Breed_card} Breed_card */

export default async function breed(page_id, is_show) {
	let class_list = '';
	let style = '';
	if (is_show) {
		class_list = 'content-on-show';
	} else {
		style = 'style="display: none;"';
		class_list = 'content-on-right';
	}
	let breed = `
<div id="page-id-${page_id}" class="content-breed ${class_list}" ${style}>
    <div class="breed-tools">
        <div id="breed-filter">
            <div id='breed-filter-icon'></div>
            <div id='breed-filter-text' class='text-para-light'>Filter</div>
        </div>
        <div id="breed-search">
            <div id='breed-search-icon'></div>
            <input type='text' id="breed-input" placeholder='What are you looking for'>
        </div>
        <div id="breed-sort">
            <div id='breed-sort-icon'></div>
            <div id='breed-sort-text' class='text-para-light'>Sort</div>
            <div class='sort-pannel text-sub-header' style='display: none; opacity: 0;'>
                <div data-field='breed_name' class='name sort-option ascending'>
                        <span>
                            <img src="./img/common/arrow_down.png" alt="">
                            <img src="./img/common/arrow_up.png" alt="">
                        </span>
                    Name
                    </div> 
                    <div data-field='breed_country' class='country sort-option ascending'>
                        <span>
                            <img src="./img/common/arrow_down.png" alt="">
                            <img src="./img/common/arrow_up.png" alt="">
                        </span>
                    Country
                    </div> 
                </div>
            </div>
        <div class="breed-tools-pannel" style='display: none; opacity: 0'>
            <div class='filter-selected'>
            </div>
            <div class='filter-options'>
            </div>
        </div>
    </div>
    <div class="breed-cards" style='opacity: 0; margin-top: 4em'>
        <!-- replace me! -->
    </div>
</div>
    `;
	let append = '';
	try {
		const breeds = await get_breeds(query.getQuery());
		append = breeds.map((breed) => generateBreedCard(breed)).join('');
	} catch (error) {
		console.error('Error fetching breeds:', error);
	}

	return breed.replace('<!-- replace me! -->', append);
}

/**@param {Breed_card} breed */
export function generateBreedCard(breed) {
	const breed_card_template = `
<div class="card-breed">
    <div class="card-breed-top">
        <div class="card-breed-img">
            <img src="${backend_url}${breed.breed_path_img}" alt="${
		breed.breed_name
	}">
        </div>
        <div class="card-breed-img-filter"></div>
        <div class="card-breed-info">
            <div class="card-breed-def">
                <div class="card-breed-land text-sub-header">
                    <img src="${backend_url}${breed.breed_country_img}" alt="">
                    ${breed.breed_country}
                </div>
                <div class="card-breed-name text-header">${
					breed.breed_name
				}</div>
            </div>
            <div class="card-breed-stats">
                <div class="card-breed-stat">
                    <div class="stat-and-value text-sub-header">
                        <span class='stat-name text-header'>Price Rating</span>
                        ${breed.breed_price_level}
                    </div>
                    <div class="stat-bar">
                        <div class="stat-bar-percent" style='width: ${
							toPercentage[breed.breed_price_level]
						}%;'></div>
                    </div>
                </div>
                <div class="card-breed-stat">
                    <div class="stat-and-value text-sub-header">
                        <span class='stat-name text-header'>Marbling</span>
                        ${breed.breed_marbling_level}
                    </div>
                    <div class="stat-bar">
                        <div class="stat-bar-percent" style='width: ${
							toPercentage[breed.breed_marbling_level]
						}%;'></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-breed-expand-button"></div>
    </div>
    <div class="card-breed-more-info" style='height: 0px;'>
        <div class='text-para-light'>
            <div class='card-breed-fullname text-header'>${
				breed.breed_name
			}</div>
            ${breed.breed_info}
        </div>
    </div>
</div>`;
	return breed_card_template;
}

export function generateLoadMoreButton() {
	return `<div class="breed-loadmore">
    <div id='breed-loadmore-button' class="breed-loadmore-button text-header">
        loadmore
    </div>
</div>`;
}
