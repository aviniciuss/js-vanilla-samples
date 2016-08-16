class MessageView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    if(!model.text) { return '' }
    return `<p class="alert alert-info">${model.text}</p>`;
  }
}
