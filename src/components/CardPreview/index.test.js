import { shallow } from 'enzyme';
import React from 'react';
import CardPreview from './index';
import logoImage from '../Assets/sample_fallback.png';

const userData={
  user:{
    givenname: 'sam', surname: 'sadot', email: 'sam@sam.com', phone:'0433530825', houseno:'1a', street:'King street', suburb: 'Sydney', state: 'NSW', postcode:'2000', country: 'Australia'
  },
  avatar:{
    preview_imgUrl: logoImage
  }
}

describe('<CardPreview /> Component', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<CardPreview user={userData.user} avatar={userData.avatar} />);
  });

  it('should render the <CardPreview /> Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});
