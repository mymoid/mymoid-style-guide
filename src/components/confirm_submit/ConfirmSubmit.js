import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './StyledInput';

const ConfirmSubmitContext = React.createContext();

const ConfirmSubmitConsumer = props => (
  <ConfirmSubmitContext.Consumer {...props}>
    {context => {
      if (!context) {
        throw new Error(
          'ConfirmSubmit compound components cannot be renderer outside the ConfirmSubmit component'
        );
      }

      return props.children(context); // eslint-disable-line
    }}
  </ConfirmSubmitContext.Consumer>
);

class ConfirmSubmit extends React.Component {
  static Description = ({ children }) => (
    <ConfirmSubmitContext.Consumer>{children}</ConfirmSubmitContext.Consumer>
  );
  static ConfirmPhrase = ({ children }) => (
    <ConfirmSubmitContext.Consumer>{children}</ConfirmSubmitContext.Consumer>
  );
  static Input = props => (
    <ConfirmSubmitConsumer>
      {({ submit }) => <StyledInput onChange={submit} {...props} />}
    </ConfirmSubmitConsumer>
  );

  static defaultProps = { confirmPhrase: 'CONFIRM' };

  state = { confirm: false, submit: this.submit };

  submit = () =>
    this.setState(
      ({ confirm }) => ({ confirm: confirm === this.props.confirmPhrase }),
      () => this.props.onSubmit(this.state.confirm) // eslint-disable-line
    );

  render() {
    return (
      <ConfirmSubmitContext.Provider value={this.state}>
        {this.props.children}
      </ConfirmSubmitContext.Provider>
    );
  }
}

ConfirmSubmit.propTypes = {
  children: PropTypes.node,
  confirmPhrase: PropTypes.string
};

export default ConfirmSubmit;
