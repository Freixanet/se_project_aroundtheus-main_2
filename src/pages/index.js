import "./index.css";
import { selectors, validationSettings } from "../utils/constants";

// Import all the classes
import Api from "../components/Api";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";

// API instantiation
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "17110c9b-5c8a-4181-9d61-1ca5d24672ce",
    "Content-Type": "application/json",
  },
});

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
function createCard(data, userId) {
  const cardElement = new Card(
    {
      data,
      userId,
      handleImageClick: (imageData) => {
        cardPreviewPopup.open(imageData);
      },
      handleDeleteClick: (card) => {
        deleteConfirmationPopup.open(card);
      },
      handleLikeClick: (card) => {
        if (card.isLiked()) {
          api
            .unlikeCard(card._id)
            .then((updatedCard) => {
              card.updateLikes(updatedCard.likes);
            })
            .catch((err) => {
              console.error("Error unliking card:", err);
            });
        } else {
          api
            .likeCard(card._id)
            .then((updatedCard) => {
              card.updateLikes(updatedCard.likes);
            })
            .catch((err) => {
              console.error("Error liking card:", err);
            });
        }
      },
    },
    selectors.cardTemplate
  );

  return cardElement.getView();
}

// Inicializa la sección de tarjetas
let cardSection;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);

    cardSection = new Section(
      {
        items: initialCards,
        renderer: (data) => {
          return createCard(data, userData._id);
        },
      },
      selectors.cardsList
    );
    cardSection.renderItems();

    const addFormPopup = new PopupWithForm(
      selectors.addFormPopup,
      (formData) => {
        addFormPopup.setLoading(true);
        api
          .addCard({ name: formData.name, link: formData.link })
          .then((newCardData) => {
            const newCard = createCard(newCardData, userData._id);
            cardSection.addItem(newCard, true); // Prepend the new card
            addFormPopup.close();
          })
          .catch((err) => {
            console.error("Error adding card:", err);
          })
          .finally(() => {
            addFormPopup.setLoading(false);
          });
      },
      {
        errorSelector: "#add-card-form-error",
      }
    );

    addButton.addEventListener("click", () => {
      formValidators[addCardForm.getAttribute("name")].resetValidation();
      addFormPopup.clearError();
      addFormPopup.open();
    });

    addFormPopup.setEventListeners();
  })
  .catch((err) => {
    console.error("Error loading user or cards:", err);
  });

/* -------------------------------------------------------------------------- */
/*                             Profile Information                            */
/* -------------------------------------------------------------------------- */

// Create the user info instance
const userInfo = new UserInfo(
  selectors.profileName,
  selectors.profileProfession,
  selectors.profileAvatar
);

// Create the edit form instance
const editFormPopup = new PopupWithForm(selectors.editFormPopup, (values) => {
  editFormPopup.setLoading(true);
  api
    .setUserInfo({ name: values.name, about: values.profession })
    .then((updatedUser) => {
      userInfo.setUserInfo(updatedUser.name, updatedUser.about);
      editFormPopup.close();
    })
    .catch((err) => {
      console.error("Error updating user info:", err);
    })
    .finally(() => {
      editFormPopup.setLoading(false);
    });
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

/* -------------------------------------------------------------------------- */
/*                              Delete Confirmation                           */
/* -------------------------------------------------------------------------- */

const deleteConfirmationPopup = new PopupWithForm(
  selectors.deleteConfirmationPopup,
  (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        card.remove();
        deleteConfirmationPopup.close();
      })
      .catch((err) => {
        console.error("Error deleting card:", err);
      });
  }
);

deleteConfirmationPopup.setEventListeners();

const editAvatarPopup = new PopupWithForm(
  selectors.editAvatarPopup,
  (values) => {
    editAvatarPopup.setLoading(true);
    api
      .setUserAvatar({ avatar: values.link })
      .then((updatedUser) => {
        userInfo.setUserAvatar(updatedUser.avatar);
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.error("Error updating avatar:", err);
      })
      .finally(() => {
        editAvatarPopup.setLoading(false);
      });
  }
);
editAvatarPopup.setEventListeners();

document.querySelector(".profile__avatar-container").addEventListener("click", () => {
  formValidators["avatar-form"].resetValidation();
  editAvatarPopup.clearError();
  editAvatarPopup.open();
});