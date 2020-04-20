const NoteCard = ({ title, description }) => {
	return (
		<div
			className="overflow-hidden w-48 border p-3 m-1 shadow-sm hover:shadow-md transition-duration-200 cursor-pointer"
			style={{ maxHeight: '18.5rem', height: '14.5rem' }}
		>
			<h1 className="font-semibold">{title}</h1>
			<p className="text-sm">{description}</p>
		</div>
	);
};

export { NoteCard };
