import "../Styles/Banner.css";



function Banner({background, children}) {
  return (
    <section className="banner">
      <img src={background} alt="Illustration de montagnes" />
      {children}
    </section>
  );
}

export default Banner;
