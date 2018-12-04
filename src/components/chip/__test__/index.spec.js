import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { themr } from 'react-css-themr';
import { CHIP } from '../../identifiers';
import { chipFactory } from '../Chip';
import Adapter from 'enzyme-adapter-react-16';
import { mountToJson } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

const Avatar = ({ title }) => <span>{title}</span>; // eslint-disable-line react/prop-types
const Chip = themr(CHIP)(chipFactory(Avatar));

describe('Chip', () => {
  describe('with avatar', () => {
    it('adds the avatar class to the element', () => {
      const wrapper = mount(
        <Chip theme={{ avatar: 'avatar-class' }}>
          <Avatar title="Test" />
          <span>Test</span>
        </Chip>
      );
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });

    describe('without avatar', () => {
      it('does not add avatar class to the element', () => {
        const wrapper = mount(
          <Chip theme={{ avatar: 'avatar-class' }}>
            <span>Test</span>
          </Chip>
        );
        expect(mountToJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
