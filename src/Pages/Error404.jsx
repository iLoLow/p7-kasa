import {Link} from "react-router-dom";

function Error404() {
		document.title = "Kasa - 404";
		return (
			<section className="Error">
				<span className="number">404</span>
				<h1 className="titleMessage"><span>Oups! La page que</span>&nbsp;<span>vous demandez n'existe pas.</span></h1>
				<Link className="ReturnToHome" to='/'>Retourner sur la page d’accueil</Link>
			</section>
		);
}

export default Error404;