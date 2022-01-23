export default class Slider {
	constructor({
		container = null,
		buttons = null,
		next = null,
		prev = null,
		additionalPrev = null,
		additionalNext = null,
		activeClass = '',
		animate = false,
		autoplay = false,
	} = {}) {
		this.container = document.querySelector(container);
		try {
			this.slides = this.container.children;
		} catch (e) {}
		this.buttons = document.querySelectorAll(buttons);
		this.next = document.querySelector(next);
		this.prev = document.querySelector(prev);
		this.additionalPrev = document.querySelectorAll(additionalPrev);
		this.additionalNext = document.querySelectorAll(additionalNext);
		this.activeClass = activeClass;
		this.animate = animate;
		this.autoplay = autoplay;
		this.slideIndex = 0;
	}
}