export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(
      ".modal__close-button"
    );

    // Bind the _handleEscClose method to this instance once.
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    // Guardar el elemento que tenía el foco antes de abrir el modal
    this._previouslyFocused = document.activeElement;
    // open popup
    this._popupElement.classList.add("modal_opened");

    // Mover el foco al primer botón del popup
    const focusable = this._popupElement.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable) focusable.focus();

    // Add listener for the "Escape" key event
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    // close popup
    this._popupElement.classList.remove("modal_opened");

    // Restaurar el foco al elemento anterior
    if (this._previouslyFocused) {
      this._previouslyFocused.focus();
      this._previouslyFocused = null;
    }

    // Remove listener for the "Escape" key event
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    // Prevent default and if event was on ESC button call the "close" method
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    // Close the popup when users click on the shaded area outside the modal
    this._popupElement.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });

    // Close the popup when users click on the 'close' button
    this._closeButton.addEventListener("click", () => this.close());
  }
}
