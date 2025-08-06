import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    // Pass the selector as an object, consistent with PopupWithForm
    super({ popupSelector }); 
    this._form = this._popupElement.querySelector(".form");
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
}
