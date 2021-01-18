import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DOTEnv from 'dotenv';

Enzyme.configure({
  adapter: new Adapter()
})
DOTEnv.config({path:'.env.test'});