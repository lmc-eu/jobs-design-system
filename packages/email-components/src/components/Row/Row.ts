import { BodyComponent } from 'mjml-core';

export default class MjcRow extends BodyComponent {
  static componentName = 'mjc-row';
  static endingRow = false;
  static dependencies = {
    'mj-column': ['mjc-row'],
    'mjc-row': ['mjc-button', 'mjc-link', 'mjc-tag'],
  };

  render() {
    return `
      <!--[if mso | IE]><table role="presentation" border="0" cellpading="0" cellspacing="0"><tr><td><![endif]-->
        <div>
          ${this.renderChildren(this.props.children, { rawXML: false })}
        </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->
    `;
  }
}
