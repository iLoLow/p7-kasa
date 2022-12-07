import {useNavigate} from "react-router-dom";

function Card({data}) {

	const {id, title, cover} = data;
	const navigation = useNavigate();

	const handleNavigation = () => {
		navigation(`/housing/${id}`);
	}

	return (
		<article onClick={handleNavigation} className="card">
			<h2 className="title-card">{title}</h2>
			<img src={cover} alt={title}/>
		</article>
	);
}

export default Card;
