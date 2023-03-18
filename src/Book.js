const Book = (props) => {
	const { index, img, title, author } = props;

	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
			<span className="shape"></span>
			<span className="number">#{index + 1}</span>
		</article>
	);
};

export default Book;
