import "../Styles/Profil.css";

function Profil({host}) {
	return (
		<>
			{host &&
				<div className="host">
					<p className="name">
						{host.name}
					</p>
					<div className="avatar">
						<img src={host.picture.toString()} alt=""/>
					</div>
				</div>
			}
		</>
	);
}

export default Profil;