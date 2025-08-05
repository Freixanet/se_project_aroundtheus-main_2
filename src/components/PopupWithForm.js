// ...existing code...
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, { errorSelector } = {}) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupElement.querySelector(".form__button");
    this._formInputs = this._popupForm.querySelectorAll("input");
    this._handleFormSubmit = handleFormSubmit;
    this._errorElement = errorSelector
      ? this._popupForm.querySelector(errorSelector)
      : null;
  }

  // Collects data from all the input fields and returns the data as an object
  _getInputValues() {
    // Make a input data object
    const inputObject = {};

    // Name each input by its value
    this._formInputs.forEach((input) => {
      inputObject[input.name] = input.value;
    });

    // Return the data as an object
    return inputObject;
  }

  // Use the data object to set the values of the form inputs
  setInputValues(data) {
    this._formInputs.forEach((input) => {
      // Check if the input name exists as a key in the data object
      if (Object.prototype.hasOwnProperty.call(data, input.name)) {
        // If it exists, set the input's value to the corresponding value from the data object
        input.value = data[input.name];
      }
    });
  }

  showError(message) {
    if (this._errorElement) {
      this._errorElement.textContent = message;
    }
  }

  clearError() {
    if (this._errorElement) {
      this._errorElement.textContent = "";
    }
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

  close() {
    // Reset the form
    this._popupForm.reset();
    this.clearError();

    // Close the form
    super.close();
  }
}
