import $ from 'jquery';

class modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close")
		this.events();
	}

	events() {
		this.openModalButton.click(this.openModal.bind(this));
		this.closeModalButton.click(this.closeModal.bind(this));
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	keyPressHandler(e) {
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
		return false;
	}
}

export default modal;