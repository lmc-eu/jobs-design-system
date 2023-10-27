import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';

export default class RatingItem extends BodyComponent {
  private readonly alt: string;
  private readonly href: string;
  private readonly rel: string;
  private readonly src: string;
  private readonly title: string;

  constructor(initialData = {}) {
    super(initialData);

    this.alt = this.getAttribute('alt');
    this.href = this.getAttribute('href');
    this.rel = this.getAttribute('rel');
    this.src = this.getAttribute('src');
    this.title = this.getAttribute('title');
  }

  static componentName = 'mjc-rating-item';
  static endingTag = true;
  static dependencies = {
    'mj-column': ['mjc-rating-item'],
    'mj-rating': ['mjc-rating-item'],
    'mjc-rating-item': [],
  };

  static allowedAttributes = {
    alt: 'string',
    'data-msys-linkname': 'string',
    href: 'string',
    isTableCell: 'boolean',
    rel: 'string',
    src: 'string',
    title: 'string',
  };

  headStyle = () => loadComponentStyles(`${__dirname}/RatingItem.css`);

  generateTableCell = (content: any) => {
    if (this.getAttribute('isTableCell')) {
      const tableCellClass = `RatingItem${this.props.last ? ' RatingItem--last' : ''}`;
      return `<td class="${tableCellClass}">${content}</td>`;
    }

    return content;
  };

  render() {
    return this.generateTableCell(`
      <a
        ${this.htmlAttributes({
          class: 'RatingItem__link',
          'data-msys-linkname': this.getAttribute('data-msys-linkname'),
          href: this.href,
          rel: this.rel,
          target: '_blank',
        })}
      >
        <img
          ${this.htmlAttributes({
            alt: this.alt,
            class: 'RatingItem__icon',
            src: this.src,
          })}
        />
        ${this.title && `<div class="RatingItem__text">${this.title}</div>`}
      </a>
    `);
  }
}
