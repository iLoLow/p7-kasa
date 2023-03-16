import Banner from "../components/Banner";
import bannerImg from "../assets/banner-home.png";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Card from "../components/Card";
import "../Styles/Home.css"


function Home() {
  document.title = "Kasa - Accueil";

  
  /* Creating a state for the data that will be fetched from the json file. */
  const [AllHousings, setAllHousings] = useState([]);
  /* A hook that allows to navigate to a specific page. */
  const navigation = useNavigate();

  /* Fetching the data from the json file and setting it to the state. */
  useEffect(() => {
		fetch("/logements.json")
			.then((response) => response.json())
			.then((datahousings) => setAllHousings(datahousings))
			.catch(() =>	navigation("/error"));
      
	}, [navigation]);
  console.log(AllHousings);

  return (
    <>
    <div className="home">
      <Banner background={bannerImg}>
        <h1 className="title-home">
          <span>Chez vous,&nbsp;</span><span>partout et ailleurs</span>
        </h1>
      </Banner>
      </div>
      <section className="cards">
				{AllHousings.length > 0 && AllHousings.map((item) => <Card data={item} key={item.id}/>)}
			</section> 
    </>
  )
}
export default Home;
