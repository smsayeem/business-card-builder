import { shallow } from 'enzyme';
import React from 'react';
import CardPreview from './index';

describe('Login Component', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<CardPreview />);
  });

  it('should render the <CardPreview /> Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});