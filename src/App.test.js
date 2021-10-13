import { render, screen } from '@testing-library/react';
import React from 'react'; 
import App from './App';
import ReactDOM from 'react-dom';
import { createElement } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Login from '../src/Pages/Login';
import Logo from './EzeeCanteenLogo.jpeg';
import Signup from '../src/Pages/Signup';
Enzyme.configure({ adapter: new Adapter() })


describe("<Login />", () => {
  it("renders an image", () => {
    const logo = shallow(<Login />);
    expect(logo.find("img").prop("src")).toEqual(Logo);
  });
});

describe("<Signup />", () => {
  it("renders an signup image", () => {
    const logo = shallow(<Signup />);
    expect(logo.find("img").prop("src")).toEqual(Logo);

  });
});

describe('Test case for testing login', () => {
  let wrapper;
  test('username check', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'revathyanu02@gmail.com' } });
    expect(wrapper.state('email')).toEqual('revathyanu02@gmail.com');
  })
  it('password check', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'Revathy@123' } });
    expect(wrapper.state('password')).toEqual('revathy');
  })
  it('login check with right data', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'revathyanu02@gmail.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'Revathy@123' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).not.toBe(true);
  })
  it('login check with wrong data', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'revathyanu02@gmail.c' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: '' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLogined')).toEqual(false);
  })
})
