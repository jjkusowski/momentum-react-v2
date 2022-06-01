import { MultiTemplate, Template } from '../../storybook/helper.stories.templates';
import { DocumentationPage } from '../../storybook/helper.stories.docs';
import StyleDocs from '../../storybook/docs.stories.style.mdx';

import TextToast, { TextToastProps } from './';
import argTypes from './TextToast.stories.args';
import Documentation from './TextToast.stories.docs.mdx';

export default {
  title: 'Momentum UI/TextToast',
  component: TextToast,
  parameters: {
    expanded: true,
    docs: {
      page: DocumentationPage(Documentation, StyleDocs),
    },
  },
};

const Example = Template<TextToastProps>(TextToast).bind({});

Example.argTypes = { ...argTypes };

Example.args = {
  text: 'Lorem ipsum dolor site aw aetns ctetuer adipiscing elit nullam amarte adipiscing elit nullam amarte.',
  textAlignment: 'center',
};

const Common = MultiTemplate<TextToastProps>(TextToast).bind({});

Common.argTypes = { ...argTypes };
delete Common.argTypes.children;

Common.args = {
  text: 'Lorem ipsum dolor site aw aetns ctetuer adipiscing elit nullam amarte adipiscing elit nullam amarte.',
  textAlignment: 'center',
};

Common.parameters = {
  variants: [{ textAlignment: 'left' }, { textAlignment: 'center' }],
};

export { Example, Common };