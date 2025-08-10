export default class Card {
  constructor(
    { data, userId, handleImageClick, handleDeleteClick, handleLikeClick },
    cardSelector
  ) {
    // Store data
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner ? data.owner._id : '';
    this._userId = userId;

    // Store state - these are placeholders, to be filled by the API response if it differs
    this._isLiked = data.isLiked;
    this._likeCount = data.likeCount;

    // Store handlers and selectors
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", () => this._handleLikeClick(this));

    const deleteButton = this._element.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", () => this._handleDeleteClick(this));

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleImageClick({ link: this._link, name: this._name })
      );
  }

  isLiked() {
    return this._isLiked;
  }

  updateState(newData) {
    this._isLiked = newData.isLiked;
    this._likeCount = newData.likeCount;
    this._renderLikes();
  }

  _renderLikes() {
    const likeCountElement = this._element.querySelector(".card__like-count");
    if (likeCountElement) {
      likeCountElement.textContent = this._likeCount || 0;
    }

    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  remove() {
    this._element.remove();
    this._element = null;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector(".card__image");
    cardImage.src = this._link;
    cardImage.alt = `Photo of ${this._name}`;
    this._element.querySelector(".card__title").textContent = this._name;
    
    // Correct order: First, find the elements in the DOM.
    this._setEventListeners();
    // Then, update their state.
    this._renderLikes();
    
    return this._element;
  }
}
