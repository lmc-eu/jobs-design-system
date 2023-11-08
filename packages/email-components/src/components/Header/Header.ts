import { BodyComponent } from 'mjml-core';
import { loadComponentStyles } from '../../scssLoaders/loadComponentStyles';
const { registerDependencies } = require('mjml-validator');

registerDependencies({
  'mj-body': ['mjc-header'],
  'mj-wraper': ['mjc-header'],
  'mj-section': ['mjc-header'],
  'mj-column': ['mjc-header'],
  'mjc-header': [''],
});

export default class Header extends BodyComponent {
  private readonly align: string;
  private readonly externalLink: string;
  private readonly height: string;
  private readonly imageAlt: string;
  private readonly imageUrl: string;
  private readonly width: string;

  constructor(initialData = {}) {
    super(initialData);

    this.align = this.getAttribute('align');
    this.externalLink = this.getAttribute('externalLink');
    this.height = this.getAttribute('height');
    this.imageAlt = this.getAttribute('imageAlt');
    this.imageUrl = this.getAttribute('imageUrl');
    this.width = this.getAttribute('width');
  }

  static componentName = 'mjc-header';

  static dependencies = {
    'mj-body': ['mjc-header'],
    'mj-column': ['mjc-header'],
    'mj-section': ['mjc-header'],
    'mj-wraper': ['mjc-header'],
    'mjc-header': [],
  };

  static allowedAttributes = {
    alight: 'enum(left,right,center)',
    'data-msys-linkname': 'string',
    externalLink: 'string',
    height: 'unit(px,%)',
    imageAlt: 'string',
    imageUrl: 'string',
    width: 'unit(px,%)',
  };

  static defaultAttributes = {
    align: 'center',
    height: '24px',
    externalLink: '',
    imageAlt: '',
    imageUrl: '',
    width: '60px',
  };

  headStyle = () => loadComponentStyles(`${__dirname}/Header.css`);

  render() {
    return this.renderMJML(`
      <mj-section padding="0">
        <mj-column css-class="Header" padding="22px">
          <mjc-image-link
            ${this.htmlAttributes({
              align: this.align,
              alt: this.imageAlt,
              'data-msys-linkname': this.getAttribute('data-msys-linkname'),
              height: this.height,
              href: this.externalLink,
              padding: 0,
              src: this.imageUrl,
              width: this.width,
            })}
          />
        </mj-column>
      </mj-section>
    `);
  }
}
