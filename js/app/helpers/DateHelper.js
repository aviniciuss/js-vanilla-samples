class DateHelper {

  constructor() {
    throw new Error('DateHelper can not be instantiated');
  }

  static textForDate(text) {
    if(!/\d{4}-\d{2}-\d{2}/.test(text)) { throw new Error('invalid format date, format yyyy-mm-dd'); }
    return new Date(...text.split('-').map((item, index) => item - index % 2));
  }

  static dateForText(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
