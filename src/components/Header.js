import "./header.css";

const Header = (props) => {
  return (
    <div className="header-container">
      <h1>NASA'DAN FOTOĞRAF</h1>
      <button onClick={props.getir}>Getir</button>
    </div>
  );
};
export default Header;
