import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';

export default class Spacer extends BodyComponent {
  private readonly size: 'xsmall' | 'small' | 'medium' | 'large';
  private readonly isResponsive: boolean;

  constructor(initialData = {}) {
    super(initialData);

    this.isResponsive = this.getAttribute('isResponsive');
    this.size = this.getAttribute('size');
  }

  static componentName = 'mjc-spacer';

  static allowedAttributes = {
    isResponsive: 'boolean',
    size: 'enum(xsmall,small,medium,large)',
  };

  static dependencies = {
    'mj-column': ['mjc-spacer'],
    'mjc-spacer': [],
  };

  static defaultAttributes = {
    size: 'medium',
  };

  headStyle = () => loadComponentStyles(`${__dirname}/Spacer.css`);

  render() {
    const className = `Spacer--${this.size}${this.isResponsive ? '-responsive' : ''}`;

    return `
      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="${className}" ><![endif]-->
        <div class="${className}"></div>
      <!--[if mso | IE]></td></tr></table><![endif]-->
    `;
  }
}
