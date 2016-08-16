class NegociationController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputDate =     $('#date');
    this._inputQuantity = $('#quantity');
    this._inputPrice =    $('#price');

    this._listNegociations = new Bind(
      new ListNegociations(),
      new NegociationsView($("#negociationsView")),
      'add','clean'
    );

    this._message = new Bind(
      new Message(''),
      new MessageView($("#messageView")),
      'text'
    );
  }

  add(event) {
    event.preventDefault();
    this._listNegociations.add(this._createNegociation());
    this._message.text = 'Negociation saved with success!';
    this._clearForm();
  }

  removeAll(event) {
    event.preventDefault();
    this._listNegociations.clean();
    this._message.text = 'Deleted with success!';
  }

  _createNegociation() {
    return new Negociation(
      DateHelper.textForDate(this._inputDate.value),
      this._inputQuantity.value,
      this._inputPrice.value
    );
  }

  _clearForm() {
    this._inputDate.value = '';
    this._inputQuantity.value = '1';
    this._inputPrice.value = '0.0';

    this._inputDate.focus();
  }
}
