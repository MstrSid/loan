import Slider from "./slider";

export default class MiniSlider extends Slider {
	constructor(prefs) {
		super(prefs);
	}

	bindTriggers() {
		this.next.addEventListener('click', () => {
			this.nextSlide();
			console.log(this.slides);
		});

		this.prev.addEventListener('click', () => {
			this.prevSlide();
			console.log(this.slides);
		});
	}

	excludeButtons() {
		[...this.slides].forEach(item => {
			if (item.tagName.toLowerCase() === 'button') {
				this.container.appendChild(item);
			}
		});
	}

	nextSlide() {
		this.container.appendChild(this.slides[0]);
		this.excludeButtons();
		this.decorSlides();
	}

	prevSlide() {
		this.excludeButtons();
		let active = this.slides[this.slides.length - 3];
		this.container.insertBefore(active, this.slides[0]);
		this.decorSlides();
	}

	decorSlides() {
		[...this.slides].forEach(slide => {
			try {
				slide.classList.remove(this.activeClass);
				if (this.animate) {
					slide.querySelector('.card__title').style.opacity = '0.4';
					slide.querySelector('.card__controls-arrow').style.opacity = '0';
				}
			} catch (e) {
				console.error(e);
			}
		});
		this.slides[0].classList.add(this.activeClass);
		if (this.animate) {
			this.slides[0].querySelector('.card__title').style.opacity = '1';
			this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
		}
	}

	init() {
		this.container.style.cssText = `
			display: flex;
			flex-wrap: wrap;
			overflow: hidden;
			align-items: flex-start;
		`;

		this.bindTriggers();
		this.decorSlides();

		if (this.autoplay) {
			setInterval(() => {
				this.nextSlide();
			}, 5000);
		}
	}
}