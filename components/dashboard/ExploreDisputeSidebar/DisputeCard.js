const DisputeCard = ({ plaintiff, defendant, category, lastUpdate }) => {
	return (
		<div className="rounded border-b border-gray-300 my-4 cursor-pointer hover:shadow-lg transition-duration-200">
			<div className="px-6 py-3">
				<p className="font-semibold">{`${plaintiff.name} VS ${defendant.name}`}</p>
				<div className="font-light flex justify-between">
					<p>{category}</p>
					<p><span className="text-green-700 font-bold">5</span> / 24 days</p>
				</div>
				<div className="flex text-sm mt-1">
					<p className="font-semibold mr-2">Last Update: </p>
					<p>{lastUpdate}</p>
				</div>
			</div>
		</div>
	);
};

export { DisputeCard };
