import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import {shallow} from 'enzyme';

let wrapper;

test("Should render loading page correctly ", () => {
  wrapper = shallow(<LoadingPage/>);
  expect(wrapper).toMatchSnapshot();
})