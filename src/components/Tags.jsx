import "../Styles/Tags.css";

function Tags({tags}) {
	return (
		<div className="contener-tag">
      {tags.map((tag, index) => (
          <span className="tag" key={index}>{tag}</span>
      ))
      }
		</div>
	);
}

export default Tags;