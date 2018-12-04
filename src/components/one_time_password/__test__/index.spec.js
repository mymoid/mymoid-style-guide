import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Code } from '../Code';
import theme from '../theme.css';

Enzyme.configure({ adapter: new Adapter() });

const numbers = '123456';

describe('Otp', () => {
  describe('#render', () => {
    it(`renders without error`, () => {
      const wrapper = shallow(<Code className={'code-class'} theme={theme} />);
      expect(wrapper).toMatchSnapshot();
    });

    it(`renders field without any values`, () => {
      const wrapper = shallow(<Code theme={theme} />);
      expect(wrapper.find('input').length).toEqual(4);
      expect(wrapper.state().fields).toEqual(4);
      expect(wrapper.state().value).toEqual('');
      expect(wrapper.state().type).toEqual('text');
      expect(wrapper.type()).toEqual('div');
    });

    it(`renders component with value: ${numbers}`, () => {
      const wrapper = render(
          <Code theme={theme} value={numbers} fields={6} type="number" />
        ),
        val = [];
      for (let i = 0; i < numbers.length; i += 1) {
        val.push(wrapper.find('input')[i].attribs.value);
      }
      expect(val.join('')).toEqual(numbers);
      expect(Number(val.join(''))).toBe(123456);
    });

    it(`mount component with props: "fields={6}"`, () => {
      const wrapper = shallow(<Code theme={theme} fields={6} />);
      expect(wrapper.find('input').length).toEqual(6);
    });

    it(`should have 4 input felds`, () => {
      const wrapper = shallow(<Code theme={theme} />);
      expect(wrapper.find('input').length).toEqual(4);
    });
  });
});
