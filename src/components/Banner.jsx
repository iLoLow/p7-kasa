import "../Styles/Banner.css";

function Banner({background, children}) {
/* Returning the banner section with the background image and the children. */
  return (
    <section className="banner">
      <img src={background} alt="Illustration de montagnes" />
      {children}
    </section>
  );
}

export default Banner;
