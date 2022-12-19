import "../Styles/Tags.css";

function Tags({tags}) {
	return (
	/* A function that takes in a prop called tags and returns a div with a className of contener-tag.
    Inside the div, it maps through the tags prop and returns a span with a className of tag and a key
    of index. Inside the span, it returns the tag. */
    	<div className="contener-tag">
      {tags.map((tag, index) => (
          <span className="tag" key={index}>{tag}</span>
      ))
      }
		</div>
	);
}

export default Tags;