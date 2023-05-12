import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';

export default class Spacer extends BodyComponent {
  private readonly size: 'small' | 'medium' | 'large';

  constructor(initialData = {}) {
    super(initialData);

    this.size = this.getAttribute('size');
  }

  static componentName = 'mjc-spacer';

  static allowedAttributes = {
    size: 'enum(small,medium,large)',
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
    const className = `Spacer--${this.size}`;

    return `
      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="${className}" ><![endif]-->
        <div class="${className}" />
      <!--[if mso | IE]></td></tr></table><![endif]-->
    `;
  }
}
