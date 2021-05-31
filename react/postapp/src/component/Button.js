import styled from "@emotion/styled";

const StyledButton = styled.button`
  border-radius: 5px;
  border: 2px solid grey;
  background-color: khaki;
  height: 40px;
  width: 100px;
  color: ${(props) => (props.primary ? "black" : "cornflowerblue")};
  margin: 10px;
  cursor: pointer;
`;

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
