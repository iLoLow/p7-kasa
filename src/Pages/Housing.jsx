import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Profil from "../components/Profil";
import Stars from "../components/Stars";
import Gallery from "../components/Gallery";
import Tags from "../components/Tags";
import Dropdown from "../components/Dropdown";
import "../Styles/Housing.css"


function Housing() {
	const {id} = useParams();
	const [housing, setHousing] = useState({});
	const navigation = useNavigate();

	useEffect(() => {
		fetch('../logements.json')
			.then((response) => response.json())
			.then((datas) => {
				const data = datas.find(datahousing => datahousing.id === id);
				setHousing(data);
				if (data === undefined) navigation('/error');
			}).catch(() => navigation("/error"));
	},[id, navigation]);

	const {title, location, pictures, rating, host, tags, description, equipments} = housing;

	document.title = `Kasa - ${title}`;

	return (
			<>
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
