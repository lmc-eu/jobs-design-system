import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';

export default class ResultCard extends BodyComponent {
  private readonly badge: string;
  private readonly employer: string;
  private readonly hasBottomSeparator: boolean;
  private readonly link: string;
  private readonly location: string;
  private readonly salary: string;
  private readonly subtitle: string;
  private readonly title: string;

  constructor(initialData = {}) {
    super(initialData);
    this.badge = this.getAttribute('badge');
    this.hasBottomSeparator = this.getAttribute('bottomSeparator') === true;
    this.employer = this.getAttribute('employer');
    this.link = this.getAttribute('link');
    this.location = this.getAttribute('location');
    this.salary = this.getAttribute('salary');
    this.subtitle = this.getAttribute('subtitle');
    this.title = this.getAttribute('title');
  }

  static componentName = 'mjc-result-card';

  static dependencies = {
    'mj-column': ['mjc-result-card'],
    'mjc-result-card': ['mjc-text', 'mjc-tag', 'mjc-link', 'mj-divider'],
  };

  static allowedAttributes = {
    badge: 'string',
    bottomSeparator: 'enum(true,false)',
    employer: 'string',
    link: 'string',
    location: 'string',
    salary: 'string',
    subtitle: 'string',
    title: 'string',
  };

  static defaultAttributes = {
    bottomSeparator: 'false',
  };

  headStyle = () => loadComponentStyles(`${__dirname}/ResultCard.css`);

  render() {
    return `
      <div>
        <table
          cellspacing="0"
          border="0"
          cellpadding="0"
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                ${this.renderMJML(`
                    <mj-divider border-width="1px" border-style="solid" border-color="#E2E8ED" />
                    <mj-spacer height="24px" />
                    ${
                      this.subtitle
                        ? `
                        <mjc-text size="small" color="secondary">${this.subtitle}</mjc-text>
                        <mjc-spacer size="small" />
                        `
                        : ''
                    }
                    <mjc-link underline="none" href="${this.link}" size="large">${this.title}</mjc-link>
                    <mjc-spacer size="small" />
                    <mjc-row>
                        ${this.salary ? `<mjc-tag color="success" text="${this.salary}" />` : ''}
                        ${this.badge ? `<mjc-tag text="${this.badge}" />` : ''} 
                    </mjc-row>
                    <mj-spacer height="4px" />
                    <mjc-text size="small" color="secondary">
                        ${this.employer}
                        ${
                          this.location
                            ? `<span class="ResultCard__separator">•</span><br class="ResultCard__badgeNewLine" /><span class="ResultCard__secondBadge">${this.location}</span>`
                            : ''
                        }
                    </mjc-text>
                    <mj-spacer height="24px" />
                    ${
                      this.hasBottomSeparator
                        ? '<mj-divider border-width="1px" border-style="solid" border-color="#E2E8ED" />'
                        : ''
                    }
                `)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}
