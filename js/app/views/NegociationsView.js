class NegociationsView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATE</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
      ${model.negociations.map(n => { return `
        <tr>
          <td>${DateHelper.dateForText(n.createAt)}</td>
          <td>${n.quantity}</td>
          <td>${n.price}</td>
          <td>${n.volume}</td>
        </tr>
      `}).join('')}
      </tbody>

      <tfoot>
        <tr>
          <td colspan="3"></td>
          <td>${model.negociations.reduce((total, item) => total += item.volume, 0.0 )}</td>
        </tr>
      </tfoot>
    </table>
    `;
  }
}
