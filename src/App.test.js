import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = mount(<App />);
  });

  // snapshot test
  it('should render the <App /> Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

});