export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    // Renders all elements on the page
    this._renderedItems.forEach((item) => {
      this.addItem(this._renderer(item));
    });
  }

  addItem(element, prepend = false) {
    // Adds the DOM element to the container
    if (prepend) {
      this._container.prepend(element);
    } else {
      this._container.append(element);
    }
  }
}
