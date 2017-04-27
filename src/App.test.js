import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var ReactTestUtils = require('react-dom/test-utils'); 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("renders an h1 tag of project title", function () {
  var component = ReactTestUtils.renderIntoDocument(<App />);
  var h1 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h1');
  expect(h1.textContent).toEqual(" Attending Physician Statement ");
});
