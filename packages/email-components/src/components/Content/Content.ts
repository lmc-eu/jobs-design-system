import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-body': ['mjc-content'],
  'mj-wrapper': ['mjc-content'],
  'mjc-content': ['mj-column', 'mj-text', 'mjc-heading', 'mjc-button'],
});

export default class Content extends BodyComponent {
  static componentName = 'mjc-content';
  static dependencies = {
    'mj-body': ['mjc-content'],
    'mj-wrapper': ['mjc-content'],
    'mjc-content': ['mj-column', 'mj-text', 'mjc-heading', 'mjc-button'],
  };
  headStyle = () => loadComponentStyles(`${__dirname}/Content.css`);

  render() {
    return `
      <div class="Content">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td class="Content__cell" style="direction:ltr;font-size:0px;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="text-align:center;vertical-align:top;width:680px;" ><![endif]-->
                ${this.renderChildren(this.props.children, { rawXML: false })}
              <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}
