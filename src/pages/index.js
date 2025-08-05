import "./index.css";
import { selectors, validationSettings } from "../utils/constants";
import { initialCards } from "../utils/initial-data";

// Import all the classes
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";

// Identify edit, add and close buttons as elements
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

// Find edit form input elements
const formInputName = document.querySelector("#name");
const formInputProfession = document.querySelector("#profession");

// Find form elements
const profileForm = document.forms["profile-form"];
const addCardForm = document.forms["card-form"];

/* -------------------------------------------------------------------------- */
/*                               Form Validation                              */
/* -------------------------------------------------------------------------- */

// Inicializa y almacena los validadores de formularios
const formValidators = {};
function initializeFormValidators(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}
initializeFormValidators(validationSettings);

/* -------------------------------------------------------------------------- */
/*                                 Popup Image                                */
/* -------------------------------------------------------------------------- */

// Inicializa el popup de imagen
function initializeImagePopup() {
  const popup = new PopupWithImage(selectors.previewPopup);
  popup.close();
  return popup;
}
const cardPreviewPopup = initializeImagePopup();

/* -------------------------------------------------------------------------- */
/*                                Card Section                                */
/* -------------------------------------------------------------------------- */

// This function creates a new card
function createCard(data) {
  const cardElement = new Card(
    {
      data,
      handleImageClick: (imageData) => {
        cardPreviewPopup.open(imageData);
      },
    },
    selectors.cardTemplate
  );

  return cardElement.getView();
}

// Inicializa la sección de tarjetas
function initializeCardSection(items) {
  const section = new Section(
    {
      items,
      renderer: (data) => {
        const cardElement = createCard(data);
        section.addItem(cardElement);
      },
    },
    selectors.cardsList
  );
  section.renderItems(items);
  return section;
}
const cardSection = initializeCardSection(initialCards);

/* -------------------------------------------------------------------------- */
/*                                  Add Form                                  */
/* -------------------------------------------------------------------------- */

const addFormPopup = new PopupWithForm(
  selectors.addFormPopup,
  async (formData) => {
    // Create a new card
    const newCard = createCard(formData);

    // Close the add form
    addFormPopup.close();

    // Add the new card to the section
    cardSection.addItem(newCard);
  },
  {
    errorSelector: "#add-card-form-error",
  }
);

// Open the modal when users click on the add button
addButton.addEventListener("click", () => {
  // Reset validation for the add card form
  formValidators[addCardForm.getAttribute("name")].resetValidation();
  addFormPopup.clearError();
  // Open the add card form
  addFormPopup.open();
});

// Set add form event listeners
addFormPopup.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                             Profile Information                            */
/* -------------------------------------------------------------------------- */

// Create the user info instance
const userInfo = new UserInfo(
  selectors.profileName,
  selectors.profileProfession
);

// Create the edit form instance
const editFormPopup = new PopupWithForm(selectors.editFormPopup, (values) => {
  // Add the form's input to the profile section
  userInfo.setUserInfo(values.name, values.profession);

  // Close the edit form
  editFormPopup.close();
});

/* -------------------------------------------------------------------------- */
/*                                  Edit Form                                 */
/* -------------------------------------------------------------------------- */

// Open the modal when users click on the edit button
editButton.addEventListener("click", () => {
  // Get profile info and add to the form fields
  const profileInfo = userInfo.getUserInfo();

  // Add the profile info on the page to the form's fields
  editFormPopup.setInputValues(profileInfo);

  // Disable button each time it opens
  formValidators[profileForm.getAttribute("name")].disableButton();

  // Open modal
  editFormPopup.open();
});

// Set edit form event listeners
editFormPopup.setEventListeners();
