# Use template
To create component form this template run clone.sh script
```
/path/to/omtv-template-react-component/clone.sh /path/to/your/new/component
```

if `/path/to/your/new/component` path doesn't exist it will be created if
corresponding permissions granted.

# Component theming approach
Implemented with [styled-components](https://www.styled-components.com/).
A component accepts a `theme` prop which is a collection of styled components:
```
// @flow
import React from 'react';
import styled from 'styled-components';

/*::
import type { Node } from 'react';

type Props = {|
  value: string,
  theme?: {|
    Main: * => Node,
    Strong: * => Node,
  |},
|}
*/
const Component = ({
  value,
  theme = {
    Main: styled.div`
      padding: 10px;
      border: 1px solid green;
    `,
    Strong: styled.strong``,
  },
}/*: Props*/) => (
  <theme.Main>
    Component with value '{ value }' and
    <theme.Strong> subwrapper</theme.Strong>
  </theme.Main>
);

export default Component;
```
This example uses flow [Comment Types](https://flow.org/en/docs/types/comments/)
so that it could be simply ignored.

The `theme` prop has a default value so component can be use with default theme.

# Improve template
- `npm i` - install packages
- `npm run demo` - run demo react app for the Component
- `npm run jest` (optional) - run jest in watch mode
- improve template
