import style from "./main.module.css";
import image from "../images/Screenshot 2025-02-08 at 10.33.46.png";
import PropTypes from "prop-types";
import styles from "../Utils/utils.module.css";

function Main(props) {
  const { buttons } = props;
  const firstBtn = buttons[0];
  return (
    <main className={style.main}>
      <div className={style.left}>
        <h6 className={style.head_text}>Web və Mobil Programçı</h6>
        <h1 className={style.title}>Salam Əjdahalar! İşi peşəkarından öyrən</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero
          delectus, modi optio ipsam non corporis repellat debitis nihil velit,
          ullam veniam, adipisci repellendus nemo.
        </p>
        <div className={style.btn_part}>
        <a href={firstBtn.link} className={styles[firstBtn.className]} > {firstBtn.text} </a>
          <div className={style.play_btn}>
            <button className={style.btn2}>▶</button>
            <span>İzlə</span>
          </div>
        </div>
      </div>
      <div>
        <img src={image} alt="sarkhanTeacherImg" />
      </div>
    </main>
  );
}

Main.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,

  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Main;
