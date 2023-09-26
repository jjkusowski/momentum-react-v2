import React from 'react';
import { MultiTemplate, Template } from '../../storybook/helper.stories.templates';
import { DocumentationPage } from '../../storybook/helper.stories.docs';
import StyleDocs from '../../storybook/docs.stories.style.mdx';

import SelectSearch, { SelectSearchProps } from './';
import argTypes from './SelectSearch.stories.args';
import Documentation from './SelectSearch.stories.docs.mdx';
import ListItemBase from '../ListItemBase';
import { ListItem } from 'src/legacy';

export default {
  title: 'Momentum UI/SelectSearch',
  component: SelectSearch,
  parameters: {
    expanded: true,
    docs: {
      page: DocumentationPage(Documentation, StyleDocs),
    },
  },
};

// NOTE: Primary story. This renders a single component with all external props.
const Example = Template<SelectSearchProps>(SelectSearch).bind({});

Example.argTypes = { ...argTypes };

// TODO: Provide default arguments for this story here. These populate into the argument table for this component.
Example.args = {
  children: 'Example',
  items: ['item1', 'item2'],
  listComponent: ListItemBase,
};

// TODO: Inject additional stories here.

// NOTE: Common variants story. This renders multiple variants of a single component.
const Common = MultiTemplate<SelectSearchProps>(SelectSearch).bind({});

Common.argTypes = { ...argTypes };
delete Common.argTypes.children;

// TODO: Provide default arguments for this story here. These populate into the argument table for this component for all variants.
Common.args = {
  children: 'Example',
};

Common.parameters = {
  variants: [{ children: 'Example A' }, { children: 'Example B' }, { children: 'Example C' }],
};

// NOTE: Export stories here. The first export should be `Example`, and the last export should be `Common`.
export { Example, Common };
