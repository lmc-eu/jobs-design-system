import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';

export default class MjcTag extends BodyComponent {
  private readonly color: 'neutral' | 'success' | 'informative';
  private readonly text: string;

  constructor(initialData = {}) {
    super(initialData);

    this.color = this.getAttribute('color');
    this.text = this.getAttribute('text');
  }
  static componentName = 'mjc-tag';
  static endingTag = true;
  static dependencies = {
    'mj-column': ['mjc-tag'],
    'mjc-tag': [],
  };

  static allowedAttributes = {
    color: 'enum(neutral,success,informative)',
    text: 'string',
  };

  static defaultAttributes = {
    color: 'neutral',
  };

  headStyle = () => loadComponentStyles(`${__dirname}/Tag.css`);

  render() {
    const className = `Tag Tag--${this.color}`;

    return `
      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="${className}" ><![endif]-->
        <span
          ${this.htmlAttributes({
            class: className,
            style: 'tag',
          })}
        >
          ${this.text}
        </span>
      <!--[if mso | IE]></td></tr></table><![endif]-->
    `;
  }
}
