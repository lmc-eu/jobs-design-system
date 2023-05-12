import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-column': ['mjc-heading'],
  'mjc-content': ['mjc-heading'],
  'mjc-heading': [],
});

export default class Heading extends BodyComponent {
  private readonly align: string;
  private readonly elementType: string;
  private readonly size: string;
  private readonly title: string;

  constructor(initialData = {}) {
    super(initialData);

    this.align = this.getAttribute('align');
    this.elementType = this.getAttribute('elementType');
    this.size = this.getAttribute('size');
    this.title = this.getAttribute('title');
  }
  static componentName = 'mjc-heading';
  static endingTag = true;
  static dependencies = {
    'mj-column': ['mjc-heading'],
    'mjc-heading': [],
  };

  static allowedAttributes = {
    align: 'enum(left,right,center)',
    elementType: 'enum(div,h1,h2,h3,h4,p,span)',
    'font-family': 'string',
    'font-size': 'unit(px)',
    'line-height': 'unit(px,%,)',
    size: 'enum(medium,large)',
    title: 'string',
  };

  static defaultAttributes = {
    align: 'left',
    elementType: 'div',
    'font-family': 'Arial, -apple-system, sans-serif',
    'font-size': '16px',
    'line-height': '1.5',
    size: 'medium',
  };

  getStyles() {
    return {
      heading: {
        'font-family': this.getAttribute('font-family'),
        'font-size': this.getAttribute('font-size'),
        'line-height': this.getAttribute('line-height'),
      },
    };
  }

  headStyle = () => loadComponentStyles(`${__dirname}/Heading.css`);

  render() {
    const className = `Heading__text Heading__text--${this.size}`;

    return `
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
      >
        <tbody>
          <tr>
            <td role="presentation" class="Heading">
              <${this.elementType}
                ${this.htmlAttributes({
                  class: className,
                  style: 'heading',
                })}
              >
                ${this.title}
              </${this.elementType}>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
