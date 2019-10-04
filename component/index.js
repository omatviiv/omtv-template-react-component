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
export const theme = {
  Main: styled.div`
    padding: 10px;
    border: 1px solid green;
  `,
  Strong: styled.strong``,
};
const Component = ({
  value,
  thm = theme,
}/*: Props*/) => (
  <thm.Main>
    Component with value '{ value }' and
    <thm.Strong> subwrapper</thm.Strong>
  </thm.Main>
);

export default Component;
