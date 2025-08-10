import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, { errorSelector } = {}) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupElement.querySelector(".form__button");
    this._originalButtonText = this._submitButton.textContent;
    this._formInputs = this._popupForm.querySelectorAll("input");
    this._handleFormSubmit = handleFormSubmit;
    this._errorElement = errorSelector
      ? this._popupForm.querySelector(errorSelector)
      : null;
  }

  setLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = this._originalButtonText;
      this._submitButton.disabled = false;
    }
  }

  clearError() {
    if (this._errorElement) {
      this._errorElement.textContent = "";
      this._errorElement.classList.remove("form__error_active");
    }
  }

  _getInputValues() {
    const inputValues = {};
    this._formInputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setInputValues(data) {
    this._formInputs.forEach((input) => {
      if (data[input.name]) {
        input.value = data[input.name];
      } else {
        input.value = "";
      }
    });
  }

  setEventListeners() {
    // Add the 'click' event listener to the close icon
    super.setEventListeners();

    // Add the 'submit' event handler to the form
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  // The close method has been removed to prevent form reset on every close.
  // The form reset logic should now be handled within the successful submission callback in index.js.
}
