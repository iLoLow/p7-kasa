import Banner from "../components/Banner";
import Card from "../components/Card";
import "../Styles/Home.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Home() {
  document.title = "Kasa - Accueil";

  const [housings, setHousings] = useState([]);
	const navigation = useNavigate();

	useEffect(() => {
		fetch("../datas/logements.json")
			.then((response) => response.json())
			.then((data) => setHousings(data))
			.catch(() =>	navigation("/error"));
	}, [navigation]);

  return (
    <>
      <Banner>
        <h1 className= "title-home">
          <span>Chez vous,&nbsp;</span><span>partout et ailleurs</span>
        </h1>
      </Banner>
      <section className="cards">
				{ housings.length > 0 && housings.map((item) => <Card data={item} key={item.id}/>)}
			</section>
    </>
  )
}
export default Home;
