import { shallow, mount } from 'enzyme';
import React from 'react';
import FormElement from './index';

describe('<FormElement />  Component existence check', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<FormElement />);
  });

  it('should render the <FormElement /> Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  // render the <FormElement /> componnet without crashing
  it('should render the <FormElement /> componnet without crashing', ()=>{
    shallow(<wrapper />);
  });

  it('should render lable, input and select tag in the the <FormElement /> Component', () => {
    const inputFormFieldWrapper = shallow(<FormElement formField="input" />)
    expect(inputFormFieldWrapper.find('.form-group').childAt(0).type()).toBe('label');
    expect(inputFormFieldWrapper.find('.form-group').childAt(1).type()).toBe('input');

    const selectFormFieldWrapper = shallow(<FormElement formField="select" />)
    expect(selectFormFieldWrapper.find('.form-group').childAt(0).type()).toBe('label');
    expect(selectFormFieldWrapper.find('.form-group').childAt(1).type()).toBe('select');
  });
});

describe('passing props on <FormElement />)', ()=>{
  const wrapper = mount(<FormElement formField="input" handleChange={()=>{}} name="country" title="country" type="text" />);
  it('accept the CardPreview props', ()=>{
    expect(wrapper.props().formField).toEqual("input");
    expect(wrapper.props().name).toBe('country');
    expect(wrapper.props().title).toEqual('country');
    expect(wrapper.props().type).toEqual('text');
  })
});