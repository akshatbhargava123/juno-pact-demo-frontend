const DisputeTab = ({ label }) => (
	<div className="w-full py-3 cursor-pointer bg-gray-100 text-center hover:text-blue-700 hover:bg-blue-100 rounded-tl-lg">
		{label}
	</div>
);

const DisputeTabs = () => {
	return (
		<div className="flex justify-between">
			<DisputeTab label="My Mails" />
			<DisputeTab label="Filings" />
			<DisputeTab label="Correspondence"/>
			<DisputeTab label="Notes" />
		</div>
	);
};

export { DisputeTabs };
