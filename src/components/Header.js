import { styled } from "styled-components";
import "./header.css";

const Header = (props) => {
  const { changeHandler, getir } = props;
  const Button = styled.button`
    color: white;
    font-size: 1em;
    padding: 0.25em 3em;
    background-color: #39342e;
  `;
  const H = styled.h1``;
  const Input = styled.input`
    padding: 0.25rem;
    margin-right: 1rem;
  `;

  return (
    <div className="p-5 bg-light">
      <H>NASA'DAN FOTOĞRAF</H>
      <Input type="date" value="2018-07-22" onChange={changeHandler}></Input>
      <Button onClick={getir}>Getir</Button>
    </div>
  );
};
export default Header;
