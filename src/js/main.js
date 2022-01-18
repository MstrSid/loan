import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
	const slider = new MainSlider({
		slider: '.page',
		buttons: '.next',
	});
	const videoPlayer = new VideoPlayer('.showup .play', '.overlay');

	slider.render();
	videoPlayer.init();

});