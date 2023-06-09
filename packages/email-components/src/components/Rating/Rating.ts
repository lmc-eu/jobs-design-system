import { BodyComponent } from 'mjml-core';

export default class Rating extends BodyComponent {
  static componentName = 'mjc-rating';

  static dependencies = {
    'mj-column': ['mjc-rating'],
    'mjc-rating': ['mjc-rating-item'],
  };

  static allowedAttributes = {
    align: 'enum(left,center,right)',
  };

  constructor(initialData = {}) {
    super(initialData);
  }

  generateItems() {
    return this.renderChildren(this.props.children, {
      attributes: {
        isTableCell: 'true',
      },
    });
  }

  generateRating() {
    return `
      <table
        ${this.htmlAttributes({
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          width: 'auto',
          role: 'presentation',
        })}
      >
        <tbody>
          <tr>
            ${this.generateItems()}
          </tr>
        </tbody>
      </table>
    `;
  }

  render() {
    return `
        <div>
          ${this.generateRating()}
        </div>
      `;
  }
}
