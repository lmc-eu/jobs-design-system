import { BodyComponent } from 'mjml-core';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-wraper': ['mjc-image-link'],
  'mj-section': ['mjc-image-link'],
  'mj-column': ['mjc-image-link'],
  'mjc-image-link': [''],
});

export default class ImageLink extends BodyComponent {
  constructor(initialData = {}) {
    super(initialData);
  }

  static componentName = 'mjc-image-link';
  static endingTag = true;
  static dependencies = {
    'mj-column': ['mjc-image-link'],
    'mj-section': ['mjc-image-link'],
    'mj-wraper': ['mjc-image-link'],
    'mjc-image-link': [],
  };

  static allowedAttributes = {
    alt: 'string',
    'data-msys-linkname': 'string',
    href: 'string',
    name: 'string',
    src: 'string',
    srcset: 'string',
    sizes: 'string',
    title: 'string',
    rel: 'string',
    align: 'enum(left,center,right)',
    border: 'string',
    'border-bottom': 'string',
    'border-left': 'string',
    'border-right': 'string',
    'border-top': 'string',
    'border-radius': 'unit(px,%){1,4}',
    'container-background-color': 'color',
    'fluid-on-mobile': 'boolean',
    padding: 'unit(px,%){1,4}',
    'padding-bottom': 'unit(px,%)',
    'padding-left': 'unit(px,%)',
    'padding-right': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
    target: 'string',
    width: 'unit(px)',
    height: 'unit(px,auto)',
    'max-height': 'unit(px,%)',
    'font-size': 'unit(px)',
    usemap: 'string',
  };

  render() {
    const { href, rel, target, name, ['data-msys-linkname']: dataMsysLinkname, ...restAttributes } = this.attributes;

    return `
      <a
        ${this.htmlAttributes({
          href,
          target,
          rel,
          name,
          'data-msys-linkname': dataMsysLinkname,
        })}
      >
        ${this.renderMJML(`
          <mj-image
            ${this.htmlAttributes(restAttributes)}
          />
        `)}
      </a>
    `;
  }
}
