import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Form from './modules/form';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
	new MainSlider({
		container: '.page',
		buttons: '.next',
	}).render();

	new MainSlider({
		container: '.moduleapp',
		buttons: '.next',
		additionalPrev: '.prevmodule',
		additionalNext: '.nextmodule',
	}).render();

	new MiniSlider({
		container: '.showup__content-slider',
		prev: '.showup__prev',
		next: '.showup__next',
		activeClass: 'card-active',
		animate: true,
	}).init();

	new MiniSlider({
		container: '.modules__content-slider',
		prev: '.modules__info-btns .slick-prev',
		next: '.modules__info-btns .slick-next',
		activeClass: 'card-active',
		animate: true,
		autoplay: true,
	}).init();

	new MiniSlider({
		container: '.feed__slider',
		prev: '.feed__slider .slick-prev',
		next: '.feed__slider .slick-next',
		activeClass: 'feed__item-active',
	}).init();

	new VideoPlayer('.showup .play', '.overlay').init();
	new VideoPlayer('.module__video-item .play', '.overlay').init();

	new Difference('.officerold', '.plus', '.officer__card-item').init();
	new Difference('.officernew', '.plus', '.officer__card-item').init();

	new Form('#b__form', 'assets/question.php').init();
	new Form('#s__form', 'assets/question.php').init();

	new ShowInfo('.module__info-show', '.plus').init();

	new Download('.download', 'assets/img/mainbg.jpg').init();

});