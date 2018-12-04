import React, { Component } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import { Tabs } from '../Tabs';
import { Tab } from '../Tab';
import { TabContent } from '../TabContent';
import theme from '../theme.css';

Enzyme.configure({ adapter: new Adapter() });

describe('Tabs', () => {
  class Composition extends Component {
    constructor() {
      super();
      this.state = { index: 0 };
    }

    render() {
      return (
        <Tabs
          theme={{ pointer: 'pointer-class' }}
          index={this.state.index}
          {...this.props}
        >
          <Tab label="tab1">tab1</Tab>
          <Tab label="tab2">tab2</Tab>
        </Tabs>
      );
    }
  }

  it('defaults to only rendering the current tab', () => {
    const wrapper = mount(<Composition />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
    // expect(wrapper.find(TabContent).length).toEqual(1);
    // expect(
    //   wrapper
    //     .find(TabContent)
    //     .first()
    //     .prop('tabIndex')
    // ).toEqual(0);
    //
    // wrapper.instance().setState({ index: 1 });
    // expect(wrapper.find(TabContent).length).toEqual(1);
    // expect(
    //   wrapper
    //     .find(TabContent)
    //     .first()
    //     .prop('tabIndex')
    // ).toEqual(1);
    // expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('renders inactive tabs when hideMode is set to display', () => {
    const wrapper = mount(<Composition hideMode="display" />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
    // expect(wrapper.find(TabContent).length).toEqual(2);
    // expect(
    //   wrapper
    //     .find(TabContent)
    //     .at(0)
    //     .prop('hidden')
    // ).toEqual(false);
    // expect(
    //   wrapper
    //     .find(TabContent)
    //     .at(1)
    //     .prop('hidden')
    // ).toEqual(true);
    //
    // wrapper.instance().setState({ index: 1 });
    // expect(wrapper.find(TabContent).length).toEqual(2);
    // expect(
    //   wrapper
    //     .find(TabContent)
    //     .at(0)
    //     .prop('hidden')
    // ).toEqual(true);
    // expect(
    //   wrapper
    //     .find(TabContent)
    //     .at(1)
    //     .prop('hidden')
    // ).toEqual(false);
  });

  describe('#render', () => {
    it('does not use fixed by default', () => {
      const wrapper = shallow(<Tabs theme={theme} />);
      expect(
        wrapper
          .find('div')
          .first()
          .prop('className')
      ).not.toContain(theme.fixed);
    });

    it('uses fixed when set', () => {
      const wrapper = mount(<Tabs fixed theme={theme} />);
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });

    it('does not use inverse by default', () => {
      const wrapper = mount(<Tabs theme={theme} />);
      expect(
        wrapper
          .find('div')
          .first()
          .prop('className')
      ).not.toContain(theme.inverse);
    });

    it('uses inverse when set', () => {
      const wrapper = mount(<Tabs inverse theme={theme} />);
      expect(
        wrapper
          .find('div')
          .first()
          .prop('className')
      ).toContain(theme.inverse);
    });
  });
});
