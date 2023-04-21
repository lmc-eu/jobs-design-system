import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-column': ['mjc-text'],
  'mjc-content': ['mjc-text'],
  'mjc-text': [],
});

export default class MjcText extends BodyComponent {
  private readonly color: string;
  private readonly size: string;

  constructor(initialData = {}) {
    super(initialData);

    this.color = this.getAttribute('color');
    this.size = this.getAttribute('size');
  }
  static componentName = 'mjc-text';
  static endingTag = true;
  static dependencies = {
    'mj-column': ['mjc-text'],
    'mjc-text': [],
  };

  static allowedAttributes = {
    align: 'enum(left,right,center)',
    color: 'enum(primary,secondary,inverted)',
    'padding-bottom': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
    padding: 'unit(px,%){1,4}',
    size: 'enum(small,medium)',
  };

  static defaultAttributes = {
    align: 'left',
    color: 'primary',
    size: 'medium',
  };

  headStyle = () => loadComponentStyles(`${__dirname}/Text.css`);

  render() {
    const className = `Text Text--${this.size} Text--${this.color}`;

    return `
      <div class="${className}">
        ${this.getContent()}
      </div>
    `;
  }
}
