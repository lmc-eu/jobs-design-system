import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mjc-content': ['mjc-alert'],
  'mj-column': ['mjc-alert'],
  'mjc-alert': [],
});

interface ColorType {
  color: 'success' | 'informative' | 'warning' | 'danger';
}

export default class Alert extends BodyComponent {
  private readonly align: 'left' | 'center' | 'right';
  private readonly color: 'success' | 'informative' | 'warning' | 'danger';
  private readonly elementType: string;

  constructor(initialData = {}) {
    super(initialData);

    this.align = this.getAttribute('align');
    this.color = this.getAttribute('color');
    this.elementType = this.getAttribute('elementType');
  }

  static componentName = 'mjc-alert';
  static endingTag = true;
  static dependencies = {
    'mjc-content': ['mjc-alert'],
    'mj-column': ['mjc-alert'],
    'mjc-alert': [],
  };

  static allowedAttributes = {
    align: 'enum(left,center,right)',
    color: 'enum(success,informative,warning,danger)',
    elementType: 'enum(div,a)',
    href: 'string',
  };

  static defaultAttributes = {
    align: 'left',
    color: 'success',
    elementType: 'div',
  };

  headStyle = () => loadComponentStyles(`${__dirname}/Alert.css`);

  render() {
    const className = `Alert__table Alert--${this.color}`;

    const AlertIcons = {
      success: '&#x2713;',
      informative: 'i',
      warning: '&#x21;',
      danger: '&#x21;',
    };

    const renderIcon = (color: 'success' | 'informative' | 'warning' | 'danger') => {
      if (color === 'success') {
        return AlertIcons['success'];
      }

      return `
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="font-size: 0;">
          <tr>
            <td class="Alert__iconWithBorder">${AlertIcons[color]}</td>
          </tr>
        </table>
      `;
    };

    const renderContentAlign = (align: 'left' | 'center' | 'right') => {
      if (align === 'left') {
        return `
          <td class="Alert__icon">${renderIcon(this.color)}</td>
          <td class="Alert__content">${this.getContent()}</td>
        `;
      }

      return `
        <td align="${align}">
          <table>
            <tr>
              <td class="Alert__icon">${renderIcon(this.color)}</td>
              <td class="Alert__content">${this.getContent()}</td>
            </tr>
          </table>
        </td>
      `;
    };

    return `
      <${this.elementType} 
        ${this.htmlAttributes({
          class: 'Alert',
          href: this.getAttribute('href'),
          'data-msys-linkname': this.getAttribute('data-msys-linkname'),
        })} 
        role="alert"
      >
        <table class="${className}">
          <tr>
            ${renderContentAlign(this.align)} 
          </tr>
        </table>
      </${this.elementType}>
      `;
  }
}
