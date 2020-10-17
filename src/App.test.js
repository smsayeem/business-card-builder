import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import logoImage from './components/assets/sample_fallback.png';


const userData={
  user:{
    givenname: 'sam', surname: 'sadot', email: 'sam@sam.com', phone:'0433530825', houseno:'1a', street:'King street', suburb: 'Sydney', state: 'NSW', postcode:'2000', country: 'Australia'
  },
  avatar:{
    preview_imgUrl: logoImage
  }
}
describe('App and other components existence check', () => {
  let wrapper;
    beforeEach(()=>{
      wrapper = mount(<App />);
  });

  // snapshot test
  it('should render the <App /> Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  // render the App componnet without crashing
  it('should render the App componnet without crashing', ()=>{
    shallow(<App />);
  });
  // render the CardForm componnet without crashing
  it('should render the CardForm componnet without crashing', ()=>{
    shallow(<CardForm />);
  });
      // render the CardPreview componnet without crashing
  it('should render the CardPreview componnet without crashing', ()=>{
    shallow(<CardPreview user={userData.user} avatar={userData.avatar} />);
  });

  it('should render the CardForm and CardPreview components', ()=>{
    const cardForm = wrapper.find(CardForm)
    const cardPreview = wrapper.find(CardPreview)

    expect(cardForm.exists()).toBe(true);
    expect(cardPreview.exists()).toBe(true);
  })
});
describe('passing props', ()=>{
  const cardWrapper = mount(<CardPreview user={userData.user} avatar={userData.avatar} />);
  it('accept the CardPreview props', ()=>{
    expect(cardWrapper.props().user).toEqual(userData.user);
    expect(cardWrapper.props().avatar).toEqual(userData.avatar);
  })
})
describe('test component logic', ()=>{
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const handleImage = jest.fn();

  const cardWrapper = mount(<CardPreview user={userData.user} avatar={userData.avatar} />);
  const formWrapper = mount(<CardForm handleChange = { handleChange} handleSubmit = { handleSubmit } handleImage = { handleImage } />);
  const img_upload = formWrapper.find('#upload-button');

  it('button click - upload image', ()=>{
    img_upload.simulate('click');
    img_upload.simulate('change');
    const img_url = cardWrapper.find('img').prop("src");
    expect(img_url).toEqual(logoImage);
  })
})