import {useNavigate} from "react-router-dom";
import "../Styles/Card.css"

function Card({data}) {

    const {id, title, cover} = data
 
	const navigation = useNavigate();

	const idHousing = () => {
		navigation(`/housing/${id}`);
	}

	return (
		/*create balise article with id housting  */
		<article onClick={idHousing} className="card">
			<h2 className="title">{title}</h2>
			<img src={cover} alt={title}/>
		</article>
	);
}

export default Card;
