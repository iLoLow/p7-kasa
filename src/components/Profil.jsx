import "../Styles/Profil.css";

function Profil({host}) {
	return (
		<>
			{/* It's a ternary operator. If host is true, it will return the div. If host is false, it will
			return nothing. */}
			{host &&
				<div className="host">
					<p className="name">
						{host.name}
					</p>
					<div className="avatar">
						<img src={host.picture.toString()} alt="illustration avatar"/>
					</div>
				</div>
			}
		</>
	);
}

export default Profil;