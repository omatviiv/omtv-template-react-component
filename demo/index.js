// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import Component from '../component';

const App = () => (
  <div>
    demo <Component />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
