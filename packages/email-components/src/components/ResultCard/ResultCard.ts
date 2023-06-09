import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';
import { sparkpostCondition, sparkpostVariableExist } from '../../helpers/sparkpostCondition';

export default class ResultCard extends BodyComponent {
  private readonly badge: string;
  private readonly employer: string;
  private readonly hasBottomDivider: boolean;
  private readonly link: string;
  private readonly location: string;
  private readonly salary: string;
  private readonly subtitle: string;
  private readonly title: string;

  constructor(initialData = {}) {
    super(initialData);
    this.badge = this.getAttribute('badge');
    this.hasBottomDivider = this.getAttribute('bottomDivider');
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
    bottomDivider: 'boolean',
    employer: 'string',
    link: 'string',
    location: 'string',
    salary: 'string',
    sparkpostBadgeCondition: 'string',
    sparkpostBottomDividerCondition: 'string',
    sparkpostSubtitleCondition: 'string',
    subtitle: 'string',
    title: 'string',
  };

  headStyle = () => loadComponentStyles(`${__dirname}/ResultCard.css`);

  generateBadge() {
    if (this.badge)
      return sparkpostCondition(`<mjc-tag text="${this.badge}" />`, this.getAttribute('sparkpostBadgeCondition'));

    return '';
  }

  generateBottomDivider() {
    const bottomDividerCondition = this.getAttribute('sparkpostBottomDividerCondition');
    if (this.hasBottomDivider || bottomDividerCondition)
      return sparkpostCondition(
        '<mj-divider border-width="1px" border-style="solid" border-color="#E2E8ED" />',
        bottomDividerCondition,
      );

    return '';
  }

  generateLocation() {
    if (this.location)
      return sparkpostVariableExist(
        `<span class="ResultCard__separator">•</span><br class="ResultCard__badgeNewLine" /><span class="ResultCard__secondBadge">${this.location}</span>`,
        this.location,
      );

    return '';
  }

  generateSalary() {
    if (this.salary) return sparkpostVariableExist(`<mjc-tag color="success" text="${this.salary}" />`, this.salary);

    return '';
  }

  generateSubtitle() {
    if (this.subtitle)
      return sparkpostCondition(
        `
          <mjc-text size="small" color="secondary">${this.subtitle}</mjc-text>
          <mjc-spacer size="small" />
        `,
        this.getAttribute('sparkpostSubtitleCondition'),
      );

    return null;
  }

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
                    <mjc-spacer />
                    ${this.generateSubtitle()}
                    <mjc-link underline="none" href="${this.link}" size="large">${this.title}</mjc-link>
                    <mjc-spacer size="small" />
                    <mjc-row>
                        ${this.generateSalary()}
                        ${this.generateBadge()} 
                    </mjc-row>
                    <mj-spacer height="4px" />
                    <mjc-text size="small" color="secondary">
                        ${this.employer}
                        ${this.generateLocation()}
                    </mjc-text>
                    <mjc-spacer />
                    ${this.generateBottomDivider()}
                `)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}
