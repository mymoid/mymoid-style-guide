import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const theme = { menu: 'menuClass' };

describe('MenuItem', () => {
  describe('#onClick', () => {
    it('passes to listener the event', () => {
      const onClick = jest.fn();
      const wrapper = shallow(
        <Menu theme={theme}>
          <MenuItem key="1" onClick={onClick} />
        </Menu>
      );

      wrapper
        .find(MenuItem)
        .first()
        .simulate('click', { persist: () => {} });
      expect(onClick).toHaveBeenCalled();
    });
  });
});
