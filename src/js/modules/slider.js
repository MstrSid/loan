export default class Slider {
	constructor(slider, buttons) {
		this.slider = document.querySelector(slider);
		this.slides = [...this.slider.children];
		this.buttons = document.querySelectorAll(buttons);
		this.slideIndex = 0;
	}

	showSlides(n) {
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
		} catch (e) {
			console.error(e);
		}


		this.slides.forEach(slide => {
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
	}

	plusSlides(n) {
		this.showSlides(this.slideIndex += n);
	}

	render() {
		try {
			this.hanson = document.querySelector('.hanson');
		} catch (e) {
			console.error(e);
		}

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

		this.showSlides(this.slideIndex);
	}
}