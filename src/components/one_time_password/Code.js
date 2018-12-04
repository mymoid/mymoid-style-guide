import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Code extends Component {
  constructor(props) {
    super(props);

    const { value, fields, type, isValid, disabled } = props;

    this.state = {
      value,
      fields,
      type,
      input: [],
      isValid,
      disabled,
      defaultInputStyle: {
        fontFamily: 'Lato',
        fontWeight: '300',
        fontSize: '48px',
        border: 'none',
        width: '43px',
        height: '43px',
        boxSizing: 'border-box'
      }
    };
    for (let i = 0; i < Number(this.state.fields); i += 1) {
      if (i < 32) {
        const changeValue = [...this.state.value][i] || '';
        this.state.input.push(changeValue);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isValid: nextProps.isValid,
      value: nextProps.value,
      disabled: nextProps.disabled
    });
  }

  onKeyDown(e) {
    const target = Number(e.target.id);
    const prevTarget = this.refs[target - 1]; // eslint-disable-line react/no-string-refs
    let input;
    let value;

    switch (e.keyCode) {
      case 8:
        e.preventDefault();
        this.refs[target].value = ''; // eslint-disable-line react/no-string-refs
        input = this.state.input.slice();
        input[target] = '';
        value = input.join('');

        this.setState({ value, input });
        // eslint-disable-next-line react/no-string-refs
        if (this.refs[target].value === '') {
          if (prevTarget) {
            prevTarget.focus();
            prevTarget.select();
          }
        }
        break;
      default:
        break;
    }
    if ('onChange' in this.props) {
      if (value) {
        this.props.onChange(value);
      }
    }
    this.handleTouch(value);
  }

  handleBlur(e) {
    this.handleTouch(e.target.value);
  }

  handleChange(e) {
    const target = Number(e.target.id);
    let value = String(e.target.value);

    if (value !== '') {
      if (this.state.type === 'number' || this.state.type === 'text') {
        if (!value.match(/(\d)/g)) {
          this.refs[target].value = ''; // eslint-disable-line react/no-string-refs
          return;
        }
        if (value.length > 1) {
          this.refs[target].value = value.slice(-1); // eslint-disable-line react/no-string-refs
        }
      }

      const input = this.state.input.slice();
      input[target] = this.refs[target].value; // eslint-disable-line react/no-string-refs
      value = input.join('');

      this.setState({ value, input });

      const newTarget = this.refs[target + 1]; // eslint-disable-line react/no-string-refs
      if (newTarget) {
        newTarget.focus();
        newTarget.select();
      }
    }
    if ('onChange' in this.props) {
      if (value) {
        this.props.onChange(value);
      }
    }
    this.handleTouch(value);
  }

  handleTouch(value) {
    const { touch, untouch, name } = this.props;

    if (typeof touch === 'function' && typeof untouch === 'function') {
      if (value === '') {
        touch(name);
      } else {
        untouch(name);
      }
    }
  }

  render() {
    const {
      className,
      style = {},
      inputStyle = {},
      inputStyleInvalid = {},
      theme,
      type
    } = this.props;
    const { disabled, input, isValid, defaultInputStyle } = this.state;
    const styles = {
      container: style,
      input: isValid ? inputStyle : inputStyleInvalid
    };

    Object.assign({}, styles.container, {
      display: 'inline-block'
    });

    if (!className && Object.keys(inputStyle).length === 0) {
      Object.assign(inputStyle, {
        ...defaultInputStyle,
        fontFamily: 'Lato',
        fontWeight: '300',
        fontSize: '48px',
        color: '#000000',
        letterSpacing: '8px',
        backgroundColor: 'rgb(250, 250, 250)',
        borderColor: 'lightgrey'
      });
    }

    if (!className && Object.keys(inputStyleInvalid).length === 0) {
      Object.assign(inputStyleInvalid, {
        ...defaultInputStyle,
        color: 'rgba(255, 0, 0, 100)'
      });
    }

    if (disabled) {
      Object.assign(styles.input, {
        cursor: 'not-allowed',
        color: 'lightgrey',
        borderColor: 'lightgrey',
        backgroundColor: '#efeff1'
      });
    }

    const classNames = classnames(theme.codeInput, this.props.className);

    return (
      <div className={classNames} style={styles.container}>
        {input.map((value, i) => (
          <input
            ref={i}
            id={i}
            autoFocus={i === 0 ? 'autoFocus' : ''}
            defaultValue={value}
            key={`input_${i}`} // eslint-disable-line
            type={type}
            min={0}
            max={9}
            maxLength={1}
            style={styles.input}
            autoComplete="off"
            onFocus={e => e.target.select(e)}
            onBlur={e => this.handleBlur(e)}
            onChange={e => this.handleChange(e)}
            onKeyDown={e => this.onKeyDown(e)}
            disabled={disabled}
            data-valid={isValid}
            placeholder="•"
          />
        ))}
      </div>
    );
  }
}

Code.defaultProps = {
  isValid: true,
  disabled: false,
  fields: 4,
  value: '',
  type: 'text'
};

Code.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fields: PropTypes.number,
  inputStyle: PropTypes.object, // eslint-disable-line
  inputStyleInvalid: PropTypes.object, // eslint-disable-line
  isValid: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object, // eslint-disable-line
  style: PropTypes.object, // eslint-disable-line
  theme: PropTypes.shape({
    codeInput: PropTypes.string
  }),
  touch: PropTypes.func,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  untouch: PropTypes.func,
  value: PropTypes.string
};

export { Code };
