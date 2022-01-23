export default class Form {
	constructor(form, url) {
		this.form = document.querySelector(form);
		this.inputs = this.form.querySelectorAll('input');
		this.message = {
			loading: "Loading...",
			success: "Thank you! We are connect with you soon!",
			failure: "Oops, something went wrong...",
		};
		this.path = url;
	}

	clearInputs(inputs) {
		inputs.forEach(item => {
			item.value = '';
		});
	}

	checkMailInputs() {
		const inputs = document.querySelectorAll('[type="email"]');

		inputs.forEach(item => {
			item.addEventListener('keypress', function (e) {
				if (e.key.match(/[^a-z @ \. 0-9]/ig)) {
					e.preventDefault();
				}
			});
		});
	}

	initMask() {

		let setCursorPosition = (pos, elem) => {
			elem.addEventListener('click', () => {
				if (elem.setSelectionRange.length > 0) {
					elem.setSelectionRange(pos, pos);
				} else {
					if (elem.createTextRange.length > 0) {
						let range = elem.createTextRange();
						range.collapse(true);
						range.moveStart('character', pos);
						range.moveEnd('character', pos);
						range.select();
					}
				}
			});
		};

		function doMask(event) {
			let matrix = '+1 (___) ___-____',
				iterator = 0,
				def = matrix.replace(/\D/g, ''),
				val = this.value.replace(/\D/g, '');

			if (def.length >= val.length) {
				val = def;
			}

			this.value = matrix.replace(/./g, item => {
				return /[_\d]/.test(item) && iterator < val.length ? val.charAt(iterator++) : iterator >= val.length ? '' : item;
			});

			if (event.type == 'blur') {
				if (this.value.length === 4) {
					this.value = '';
				}
			}
			setCursorPosition(this.value.length, this);
		}

		let inputs = document.querySelectorAll('[name="phone"]');

		inputs.forEach(input => {
			input.addEventListener('input', doMask);
			input.addEventListener('focus', doMask);
			input.addEventListener('blur', doMask);
		});
	}

	async postData(url, data) {
		let res = await fetch(url, {
			method: "POST",
			body: data,
		});

		return await res.text();
	}

	init() {
		this.checkMailInputs();
		this.initMask();
		this.form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMsg = document.createElement('div');
			statusMsg.style.cssText = `
				margin-top: 15px;
				font-size: 18px;
				color: grey;
			`;
			this.form.parentNode.appendChild(statusMsg);

			statusMsg.textContent = this.message.loading;

			const formData = new FormData(this.form);

			this.postData(this.path, formData)
				.then(res => {
					console.log(res);
					statusMsg.textContent = this.message.success;
				}).catch(() => {
					statusMsg.textContent = this.message.failure;
				}).finally(() => {
					this.clearInputs(this.inputs);
					setTimeout(() => {
						statusMsg.remove();
					}, 6000);
				});
		});
	}
}