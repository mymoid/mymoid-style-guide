import styled from 'styled-components';

const StyledInput = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 2px;
  background-color: #ffffff;
  border: solid 1px #e6ecee;
  font-family: Lato;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #354a5f;
  padding: 0 15px;

  &::placeholder {
    font-family: Lato;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #98a4aa;
  }
`;

export default StyledInput;
