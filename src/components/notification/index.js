import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// eslint-disable-next-line
const Notification = ({ msg, ...rest }) => (
  <NotificationContainer {...rest}>
    {msg}
  </NotificationContainer>
);

Notification.propTypes = {
  msg: PropTypes.string,
  visible: PropTypes.bool,
  width: PropTypes.number,
  error: PropTypes.bool
};

export default Notification;

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 0;
  ${props =>
    props.width ? `left: calc(50% - ${props.width / 2}px);` : 'left: 50%'};
  ${props =>
    props.error ? `background: rgba(222, 50, 38, 100);`: `background: rgba(51, 180, 7, 100);`};
  right: 50%;
  min-width: 200px;
  height: 50px;
  font-family: Lato;
  font-weight: 300;
  font-size: 16px;
  color: #fff;
  border-radius: 3px;
  text-align: center;
  transform: translateY(100%);
  opacity: 0;
  transition: all ease-in-out 0.3s;
  padding: 0 10px;
  ${props =>
    props.visible ? 'transform: translateY(-80%); opacity: 1;' : null};
  ${props => (props.width ? `width: ${props.width}px;` : null)};
`;
