import React from 'react';
import {LoginPage} from '../../components/LoginPage';
import {shallow} from 'enzyme';

let wrapper;

test("Should render login page correctly ", () => {
  wrapper = shallow(<LoginPage/>);
  expect(wrapper).toMatchSnapshot();
})
test('should call startlogin on button click', () => {
  const startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin = {startLogin}/>);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
})