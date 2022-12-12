import "../Styles/Stars.css";

function Stars({rating}) {
	return (
			<div className="stars">
				{[...Array(5)].map((_, i) => {
					const index = ++i;
					return (
						<span key={i} className={index <= rating ? "starActive" : undefined}>&#9733;</span>
					);
				})}
			</div>
	);
}

export default Stars;