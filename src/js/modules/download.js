export default class Download {
	constructor(triggers, path) {
		this.btns = document.querySelectorAll(triggers);
		this.path = path;
	}

	getFile(path) {
		const link = document.createElement('a');
		link.setAttribute('href', path);
		link.setAttribute('download', 'file');
		link.style.display = 'none';
		document.body.appendChild(link);

		link.click();

		document.body.removeChild(link);
	}

	bindTriggers() {
		this.btns.forEach(item => {
			item.style.cursor = 'pointer';
			item.addEventListener('click', () => {
				this.getFile(this.path);
			});
		});
	}


	init() {
		this.bindTriggers();
	}
}