import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Profil from "../components/Profil";
import Stars from "../components/Stars";
import Gallery from "../components/Gallery";
import Tags from "../components/Tags";
import Dropdown from "../components/Dropdown";
import "../Styles/Housing.css"


function Housing() {
	/* It's destructuring the id from the useParams hook. */
	const {id} = useParams();
	/* It's setting the state of the housing. */
	const [housing, setHousing] = useState({});
	/* It's setting the navigation variable to the useNavigate hook. */
	const navigation = useNavigate();

/* It's fetching the data from the json file and setting the state of the housing. */
	useEffect(() => {
		fetch('/logements.json')
			.then((response) => response.json())
			.then((datas) => {
				const data = datas.find(datahousing => datahousing.id === id);
				setHousing(data);
				if (data === undefined) navigation('/error');
			}).catch(() => navigation("/error"));
	},[id, navigation]);
	console.log(housing);

	/* It's destructuring the housing object. */
	const {title, location, pictures, rating, host, tags, description, equipments} = housing;

	document.title = `Kasa - ${title}`;

	return (
			<>
				{/* It's a ternary operator. It's checking if the pictures array is not empty. If it's not empty,
				it's displaying the Gallery component. */}
				{pictures &&
				<Gallery pictures={pictures}/>
				}
				<div className="housing-header">
					<div className="housing-title">
						<h2>{title}</h2>
						<p>{location}</p>
						{tags && < Tags tags={tags}/>}
					</div>
					<div className="housing-profil">
						<Profil host={host}/>
						<Stars rating={rating}/>
					</div>
				</div>
				<div className="housing-body">
					<Dropdown title="Description">
						<p>{description}</p>
					</Dropdown>
					<Dropdown title="Équipements">
						{equipments && equipments.map((text, index) => (
							<p key={index}> {text} </p>
						))}
					</Dropdown>
				</div>
			</>

	);
}

export default Housing;
