import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".popup__form");
  }

  _getInputValues() {
    this._inputsList = this._popupForm.querySelectorAll(".popup__input");

    this._inputValues = {};
    this._inputsList.forEach(
      (input) => (this._inputValues[input.name] = input.value)
    );

    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}

export default PopupWithForm;
