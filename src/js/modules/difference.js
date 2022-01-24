export default class Difference {
	constructor(featSelector, showSelector, items) {
		try {
			this.featureBlock = document.querySelector(featSelector);
			this.showButton = this.featureBlock.querySelector(showSelector);
			this.featureBlockItems = this.featureBlock.querySelectorAll(items);
			this.counter = 0;
		} catch (e) {}

	}

	hideItems(blockItems) {
		blockItems.forEach((item, i, arr) => {
			if (i !== arr.length - 1) {
				item.style.display = 'none';
			}
		});
	}

	showVisibleItem(item) {
		item.classList.add('animated', 'fadeIn');
		item.style.display = 'flex';

	}

	bindTriggers(showButton, counter, blockItems) {
		showButton.addEventListener('click', () => {
			this.showVisibleItem(blockItems[counter]);
			if (counter !== blockItems.length - 2) {
				counter++;
			} else {
				blockItems[blockItems.length - 1].classList.add('animated', 'fadeOut');
				blockItems[blockItems.length - 1].remove();
			}
		});
	}

	init() {
		try {
			this.hideItems(this.featureBlockItems);
			this.bindTriggers(this.showButton, this.counter, this.featureBlockItems);
		} catch (e) {}
	}
}