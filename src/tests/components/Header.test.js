import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';

let startLogout;
beforeEach(() => {
  
  startLogout = jest.fn();
  
})
test('should render Header correctly', () => {  
  const wrapper = shallow(<Header startLogOut ={()=>{}} />);
  expect(wrapper).toMatchSnapshot();
})

test("should call startLogout on button Click", () => {
  const wrapper = shallow(<Header startLogOut ={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled()
})



