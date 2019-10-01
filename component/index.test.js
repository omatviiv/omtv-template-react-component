import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Component, { Div } from 'componnt';

describe('Component', () => {
  it('renders with value', () => {
    const wrapper = shallow(<Component value='test' />);
    expect(wrapper).toMatchSnapshot();
  });
  it('styled Div', () => {
    const wrapper = renderer.create(<Div />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
