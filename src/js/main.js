import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
	const sliderMain = new MainSlider({
		container: '.page',
		buttons: '.next',
	});
	const videoPlayer = new VideoPlayer('.showup .play', '.overlay');
	const showUpSlider = new MiniSlider({
		container: '.showup__content-slider',
		prev: '.showup__prev',
		next: '.showup__next',
		activeClass: 'card-active',
		animate: true,
	});

	const modulesSlider = new MiniSlider({
		container: '.modules__content-slider',
		prev: '.modules__info-btns .slick-prev',
		next: '.modules__info-btns .slick-next',
		activeClass: 'card-active',
		animate: true,
		autoplay: true,
	});

	const feedSlider = new MiniSlider({
		container: '.feed__slider',
		prev: '.feed__slider .slick-prev',
		next: '.feed__slider .slick-next',
		activeClass: 'feed__item-active',
	});

	showUpSlider.init();
	modulesSlider.init();
	feedSlider.init();

	sliderMain.render();
	videoPlayer.init();

	new Difference('.officerold', '.plus', '.officer__card-item').init();
	new Difference('.officernew', '.plus', '.officer__card-item').init();

	new Form('#b__form','assets/question.php').init();
	new Form('#s__form','assets/question.php').init();

});