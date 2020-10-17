import { shallow, mount } from 'enzyme';
import React from 'react';
import CardForm from './index';

describe('<CardForm /> component existence cehck', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<CardForm />);
  });

  it('should render the <CardForm /> Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  // render the <CardForm /> componnet without crashing
  it('should render the <CardForm /> componnet without crashing', ()=>{
    shallow(<wrapper />);
  });
});

describe('passing props on <CardForm /> component', ()=>{
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const handleImage = jest.fn();
  const wrapper = mount(<CardForm handleChange = { handleChange} handleSubmit = { handleSubmit } handleImage = { handleImage } />);
  it('accept the <CardForm /> props', ()=>{
    expect(wrapper.props().handleChange).toEqual(handleChange);
    expect(wrapper.props().handleSubmit).toEqual(handleSubmit);
    expect(wrapper.props().handleImage).toEqual(handleImage);
  })
});
