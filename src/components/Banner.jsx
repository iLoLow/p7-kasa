import "../Styles/Banner.css";
import banner_home from "../assets/banner-home.png";


function Banner(props) {
  return (
    <section className="banner">
      <img src={banner_home} alt="Illustration de montagnes" />
      {props.children}
    </section>
  );
}

export default Banner;
