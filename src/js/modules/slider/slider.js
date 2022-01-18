export default class Slider {
	constructor({
		slider = "",
		buttons = "",
		next = "",
		prev = ""
	} = {}) {
		this.slider = document.querySelector(slider);
		this.slides = [...this.slider.children];
		this.buttons = document.querySelectorAll(buttons);
		this.slideIndex = 0;
	}
}