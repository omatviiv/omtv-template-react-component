// @flow
import React from 'react';
import styled from 'styled-components';

export const Div = styled.div`
  padding: 10px;
  border: 1px solid green;
`;
/*::
type Props = {|
  value: string,
|}
*/
const Component = (p/*: Props*/) => (
  <Div>this is the Component with this value:{ p.value }</Div>
);

export default Component;
