import style from "./nav.module.css";
import PropTypes from "prop-types";
import styles from "../Utils/utils.module.css"

export default function Nav(props) {
  console.log(props);
  
  const { links, buttons } = props;

  return (
    <div className={style.nav}>
      <nav className={style.navbar}>
        {links.map((el, index) => (
          <a href={el.link} key={index} className={styles.link}>
            {" "}
            {el.text}
          </a>
        ))}
      </nav>
      <div className={style.btn}>
        {buttons.map((el, index) => (
          <a key={index} className={styles[el.className]} href={el.href}>
            {el.text}
          </a>
        ))}
      </div>
    </div>
  );
}


Nav.propTypes = {
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