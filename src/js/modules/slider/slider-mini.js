import Slider from "./slider";

export default class MiniSlider extends Slider {
	constructor(prefs) {
		super(prefs);
		this.hasButtonsInside = false;
	}


	bindTriggers() {
		this.next.addEventListener('click', () => {
			this.nextSlide();
		});

		this.prev.addEventListener('click', () => {
			this.prevSlide();
		});
	}

	excludeButtons() {
		[...this.slides].forEach(item => {
			if (item.tagName.toLowerCase() === 'button') {
				this.container.appendChild(item);
				this.hasButtonsInside = true;
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
		let active;
		if (this.hasButtonsInside) {
			active = this.slides[this.slides.length - 3];
		} else {
			active = this.slides[this.slides.length - 1];
		}
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

	goAutoplay() {
		let startAutoplay = setInterval(() => this.nextSlide(), 5000);

		this.container.addEventListener('mouseenter', () => {
			try {
				clearInterval(startAutoplay);
			} catch (e) {
				console.error(e);
			}

		});

		this.prev.addEventListener('mouseenter', () => {
			try {
				clearInterval(startAutoplay);
			} catch (e) {
				console.error(e);
			}

		});

		this.next.addEventListener('mouseenter', () => {
			try {
				clearInterval(startAutoplay);
			} catch (e) {
				console.error(e);
			}

		});

		this.container.addEventListener('mouseleave', () => {
			try {
				startAutoplay = setInterval(() => this.nextSlide(), 5000);
			} catch (e) {
				console.error(e);
			}
		});

		this.prev.addEventListener('mouseleave', () => {
			try {
				startAutoplay = setInterval(() => this.nextSlide(), 5000);
			} catch (e) {
				console.error(e);
			}
		});

		this.next.addEventListener('mouseleave', () => {
			try {
				startAutoplay = setInterval(() => this.nextSlide(), 5000);
			} catch (e) {
				console.error(e);
			}
		});
	}

	init() {
		try {
			this.container.style.cssText = `
			display: flex;
			flex-wrap: wrap;
			overflow: hidden;
			align-items: flex-start;
		`;

			this.bindTriggers();
			this.decorSlides();

			if (this.autoplay) {
				this.goAutoplay();
			}
		} catch (e) {}

	}
}