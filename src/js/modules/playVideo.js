export default class VideoPlayer {
	constructor(triggers, popup) {
		this.buttons = document.querySelectorAll(triggers);
		this.popup = document.querySelector(popup);
		this.close = this.popup.querySelector('.close');
	}

	createPlayer(url) {
		this.player = new YT.Player('frame', {
			height: '100%',
			width: '100%',
			videoId: url,
		});
		this.popup.style.display = 'flex';

	}

	bindTriggers() {
		this.buttons.forEach(btn => {
			btn.addEventListener('click', () => {
				if (document.querySelector('iframe#frame')) {
					if (this.videoId !== btn.getAttribute('data-url')) {
						this.videoId = btn.getAttribute('data-url');
						this.player.loadVideoById({
							videoId: this.videoId
						});
					}
				} else {
					this.videoId = btn.getAttribute('data-url');
					this.createPlayer(this.videoId);
				}
			});
		});

	}

	bindClose() {
		this.close.addEventListener('click', () => {
			try {
				this.popup.style.display = 'none';
				this.player.stopVideo();
				this.player.destroy();
			} catch (e) {
				console.error(e);
			}
		});
	}

	init() {
		if (this.buttons.length > 0) {
			const tag = document.createElement('script');
			tag.src = "http://www.youtube.com/iframe_api";
			const firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			this.bindTriggers();
			this.bindClose();
		}
	}
}