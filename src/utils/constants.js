export const selectors = {
  cardsList: ".cards__list",
  cardTemplate: "#card-element",
  previewPopup: "#image-modal",
  editFormPopup: "#edit-modal",
  addFormPopup: "#add-modal",
  profileName: ".profile__name",
  profileProfession: ".profile__profession",
  formModalContainer: ".modal__container",
  imageModalContainer: ".modal__popup",
  formInputName: "#name",
  formInputProfession: "#profession",
};

export const validationSettings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
  formSelector: "form",
};

export const errorMessages = {
  invalidUrl: "Please enter a valid image URL (must start with http or https).",
  imageNotFound: "The URL does not load a valid image.",
};
