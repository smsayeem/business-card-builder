import { shallow } from 'enzyme';
import React from 'react';
import CardForm from './index';

describe('Login Component', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<CardForm />);
  });

  it('should render the <CardForm /> Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an email input tag', () => {
    expect(wrapper.find('input[name="givenname"]').exists()).toBe(true);
  });

  it('should render an email input tag', () => {
    expect(wrapper.find('input[name="surname"]').exists()).toBe(true);
  });

  it('should render an email input tag', () => {
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
  });

  it('should render an email input tag', () => {
    expect(wrapper.find('input[name="phone"]').exists()).toBe(true);
  });

  it('should render an email input tag', () => {
    expect(wrapper.find('input[name="houseno"]').exists()).toBe(true);
  });

  it('should render an email input tag', () => {
    expect(wrapper.find('input[name="street"]').exists()).toBe(true);
  });

  it('should render an email input tag', () => {
    expect(wrapper.find('input[name="suburb"]').exists()).toBe(true);
  });

  it('should render an email input tag', () => {
    expect(wrapper.find('input[name="state"]').exists()).toBe(true);
  });

  it('should render an email input tag', () => {
    expect(wrapper.find('input[name="postcode"]').exists()).toBe(true);
  });

  it('should render an email input tag', () => {
    expect(wrapper.find('input[name="country"]').exists()).toBe(true);
  });


  it('should render a upload button', () => {
    expect(wrapper.find('button[name="upload"]').exists()).toBe(true);
  });

  it('should render a submit button', () => {
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('on submitting, a submit handler function should be triggered on click event', () => {
    const fn = jest.fn();
    const wrapper = shallow(<CardForm onSubmit={fn} />);
    wrapper.find('form').simulate('submit');
    wrapper.find('button[name="submit"]').simulate('submit');
  });
});
