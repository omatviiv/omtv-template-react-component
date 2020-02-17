// @flow
import React from 'react';
import { A } from 'omtv-theme';
import {
  Article, Header, Comment, Component, Code,
} from 'omtv-theme/theme/demoArticle';

import MyComponent from 'componnt';

const Artcl = () => (
  <Article>
    <Component>
      <MyComponent value='test' />
    </Component>
    <Comment>
      Put here some comments about this my-component use case
    </Comment>
    <Code>{ `
import React from 'react';
import BareInput from 'omtv-react-input/component/bare';

const Component = () => (
  <MyComponent value='test' />
);
    ` }</Code>
  </Article>
);

export default Artcl;
