import Banner from "../components/Banner";


function Home() {
  document.title = "Kasa - Accueil";

  fetch("../datas/logements.json").then((response) => response.json());

  return (
    <>
      <Banner>
        <h1 className="title-home">
          <span>Chez vous,&nbsp;</span><span>partout et ailleurs</span>
        </h1>
        </Banner>
    </>
  )
}
export default Home;
