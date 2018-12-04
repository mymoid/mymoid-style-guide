import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { mountToJson } from 'enzyme-to-json';
import ClickOutside from '../index';

Enzyme.configure({ adapter: new Adapter() });

const onClickOut = jest.fn();
function Fixture() {
  return (
    <div className="root">
      <ClickOutside onClickOut={onClickOut}>
        <span>Pepe</span>
      </ClickOutside>
    </div>
  );
}

describe('<ClickOutside />', () => {
  it('Should render a ClickOutside', () => {
    const renderer = ReactTestRenderer.create(
      <ClickOutside>
        <span>Pepe</span>
      </ClickOutside>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });
  describe('Click event', () => {
    it('should call cb when click outside', () => {
      const map = {};
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
      const onClickOutMock = jest.fn();
      const wrapper = mount(
        <ClickOutside onClickOut={onClickOutMock}>
          <span>Pepe</span>
        </ClickOutside>
      );
      expect(wrapper).toMatchSnapshot();
      map.mousedown({
        target: ReactDOM.findDOMNode(wrapper.instance())
      });
      expect(onClickOutMock).toHaveBeenCalled();
      wrapper.update();
      expect(wrapper.instance().state).toEqual({ isOpen: false });
    });
    it('should capture click when click outside', () => {
      const wrapper = mount(<Fixture />);
      expect(wrapper).toMatchSnapshot();
      wrapper.find('.root').simulate('mousedown');
      expect(wrapper.find(ClickOutside).instance().state).toEqual({
        isOpen: false
      });
    });
    it('should not capture click when click inside', () => {
      const wrapper = mount(
        <ClickOutside>
          <div className="inside" />
        </ClickOutside>
      );
      wrapper.find('.inside').simulate('mousedown');
      wrapper.update();
      expect(wrapper.state()).toEqual({ isOpen: true });
    });
  });
});
