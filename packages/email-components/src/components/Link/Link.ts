import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-column': ['mjc-link'],
  'mjc-content': ['mjc-link'],
  'mjc-link': [],
});

export default class MjcText extends BodyComponent {
  private readonly color: string;
  private readonly isUnderline: boolean;
  private readonly size: string;

  constructor(initialData = {}) {
    super(initialData);
    this.color = this.getAttribute('color');
    this.isUnderline = Boolean(this.getAttribute('underline') === 'underline');
    this.size = this.getAttribute('size');
  }

  static componentName = 'mjc-link';
  static endingTag = true;
  static dependencies = {
    'mj-column': ['mjc-link'],
    'mjc-link': [],
  };

  static allowedAttributes = {
    align: 'enum(left,right,center)',
    color: 'enum(primary,secondary,inverted)',
    'data-msys-linkname': 'string',
    'font-family': 'string',
    'font-size': 'unit(px)',
    href: 'string',
    'line-height': 'unit(px,%,)',
    'padding-bottom': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
    padding: 'unit(px,%){1,4}',
    rel: 'string',
    size: 'enum(xsmall,small,medium,large)',
    underline: 'enum(underline,none)',
  };

  static defaultAttributes = {
    align: 'left',
    color: 'primary',
    'font-family': 'Arial, -apple-system, sans-serif',
    'font-size': '16px',
    'line-height': '1.5',
    size: 'medium',
    underline: 'underline',
  };

  getStyles() {
    return {
      link: {
        'font-family': this.getAttribute('font-family'),
        'font-size': this.getAttribute('font-size'),
        'line-height': this.getAttribute('line-height'),
      },
    };
  }

  headStyle = () => loadComponentStyles(`${__dirname}/Link.css`);

  render() {
    const className = `Link Link--${this.size} Link--${this.color}${!this.isUnderline && ' Link--noUnderline'}`;

    return `
      <a
        ${this.htmlAttributes({
          class: className,
          href: this.getAttribute('href'),
          rel: this.getAttribute('rel'),
          name: this.getAttribute('name'),
          style: 'link',
          'data-msys-linkname': this.getAttribute('data-msys-linkname'),
        })}
      >
        <span class="${className}">
          ${this.getContent()}
        </span>
      </a>
    `;
  }
}
