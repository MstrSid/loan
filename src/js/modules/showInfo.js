export default class ShowInfo {
	constructor(containerSelector, showBtnSelector) {
		this.container = document.querySelectorAll(containerSelector);
		this.showBtn = showBtnSelector;
	}

	bindTriggers() {
		this.container.forEach(item => {
			item.querySelector(this.showBtn).addEventListener('click', () => {
				if (item.nextElementSibling.style.display === 'block') {
					item.nextElementSibling.style.display = 'none';
					item.nextElementSibling.classList.remove('animated', 'fadeIn');

				} else {
					item.nextElementSibling.classList.add('animated', 'fadeIn');
					item.nextElementSibling.style.display = 'block';
				}

			});
		});
	}

	init() {
		this.bindTriggers();
	}
}