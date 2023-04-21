import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-column': ['mjc-button'],
  'mjc-content': ['mjc-button'],
  'mjc-button': [],
});

export default class Button extends BodyComponent {
  private readonly color: string;

  constructor(initialData = {}) {
    super(initialData);

    this.color = this.getAttribute('color');
  }

  static componentName = 'mjc-button';
  static endingTag = true;
  static dependencies = {
    'mj-column': ['mjc-button'],
    'mjc-button': [],
  };

  static allowedAttributes = {
    align: 'enum(left,center,right)',
    color: 'enum(primary,secondary)',
    href: 'string',
    'padding-bottom': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
    rel: 'string',
    'vertical-align': 'enum(top,bottom,middle)',
  };

  static defaultAttributes = {
    align: 'left',
    color: 'primary',
    'padding-bottom': '32px',
    'padding-left': '0',
    'padding-right': '0',
    'padding-top': '32px',
    'vertical-align': 'middle',
  };

  headStyle = () => loadComponentStyles(`${__dirname}/Button.css`);

  render() {
    const className = `Button__link Button--${this.color}`;
    const classNameTd = `Button__cell Button--${this.color}`;

    return `
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        class="Button"
      >
        <tbody>
          <tr>
            <td
              role="presentation"
              ${this.htmlAttributes({
                align: this.getAttribute('align'),
                valign: this.getAttribute('vertical-align'),
                class: classNameTd,
              })}
            >
              <a
                ${this.htmlAttributes({
                  class: className,
                  href: this.getAttribute('href'),
                  rel: this.getAttribute('rel'),
                  name: this.getAttribute('name'),
                  'data-msys-linkname': this.getAttribute('data-msys-linkname'),
                })}
              >
                <span class="Button--${this.color}">
                  ${this.getContent()}
                </span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
