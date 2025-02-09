import Nav from "../Navbar";
import style from "./header.module.css";
import PropTypes from "prop-types";


function Header(props) {
 const {links, buttons} = props
  return (
    <header className={style.header}>
      <h1>sarkhanrahimlidev</h1>
      <Nav buttons={buttons} links={links} />
    </header>
  );
}


Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,

  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default Header;
