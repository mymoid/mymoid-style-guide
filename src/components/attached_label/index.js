import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AttachedLabel = ({ above, children }) => (
  <div>
    {above ? <AttachedLabelBorder /> : null}
    <AttachedLabelTextContainer>
      <Label above={above}>{children}</Label>
    </AttachedLabelTextContainer>
    {!above ? <AttachedLabelBorder /> : null}
  </div>
);

AttachedLabel.propTypes = {
  above: PropTypes.bool,
  children: PropTypes.node
};

export default AttachedLabel;

const AttachedLabelBorder = styled.div`
  width: 100%;
  background-color: #fa9d00;
  border-top: 2px solid #fa9d00;
`;

const AttachedLabelTextContainer = styled.div`
  text-align: center;
`;

const Label = styled.span`
  background-color: #fa9d00;
  font-family: Lato;
  font-size: 12px;
  line-height: 22px;
  font-weight: 300;
  padding: 3px 5px 5px 5px;
  ${props => (props.above ? 'border-bottom-left-radius: 3px;' : null)}
  ${props => (props.above ? 'border-bottom-right-radius: 3px;' : null)}
  ${props => (!props.above ? 'border-top-left-radius: 3px;' : null)}
  ${props => (!props.above ? 'border-top-right-radius: 3px;' : null)}
`;
