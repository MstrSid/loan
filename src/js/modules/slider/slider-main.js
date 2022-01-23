import Slider from "./slider";

export default class MainSlider extends Slider {
	constructor(prefs) {
		super(prefs);
	}

	showSlides(n) {
		try {
			if (n > this.slides.length - 1) {
				this.slideIndex = 0;
			}

			if (n < 0) {
				this.slideIndex = this.slides.length - 1;
			}

			try {
				this.hanson.style.opacity = '0';
				if (n === 2) {
					this.hanson.classList.add('animated');
					setTimeout(() => {
						this.hanson.style.opacity = '1';
						this.hanson.classList.add('slideInUp');
					}, 3000);
				} else {
					this.hanson.style.opacity = '0';
					this.hanson.classList.remove('animated');
					this.hanson.classList.remove('slideInUp');
				}
			} catch (e) {}


			[...this.slides].forEach(slide => {
				slide.style.display = 'none';
				if (slide.classList.contains('animated')) {
					slide.classList.remove('animated');
				}
				if (slide.classList.contains('fadeIn')) {
					slide.classList.remove('fadeIn');
				}
			});

			this.slides[this.slideIndex].style.display = 'block';
			this.slides[this.slideIndex].classList.add('animated', 'fadeIn');
		} catch (e) {}
	}

	plusSlides(n) {
		this.showSlides(this.slideIndex += n);
	}

	bindTriggers() {
		this.buttons.forEach(button => {
			button.addEventListener('click', () => {
				this.plusSlides(1);
			});
			button.parentNode.previousElementSibling.addEventListener('click', (e) => {
				e.preventDefault();
				this.slideIndex = 0;
				this.showSlides(this.slideIndex);
			});
		});

		this.additionalPrev.forEach(item => {
			item.addEventListener('click', (e) => {
				e.stopPropagation();
				e.preventDefault();
				this.plusSlides(-1);
			});
		});

		this.additionalNext.forEach(item => {
			item.addEventListener('click', (e) => {
				e.stopPropagation();
				e.preventDefault();
				this.plusSlides(1);
			});
		});
	}

	render() {
		if (this.container) {
			try {
				this.hanson = document.querySelector('.hanson');
			} catch (e) {
				console.error(e);
			}
			this.bindTriggers();
			this.showSlides(this.slideIndex);

		}
	}
}