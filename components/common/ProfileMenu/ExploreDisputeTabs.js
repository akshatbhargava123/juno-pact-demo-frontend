const ExploreDisputeTabOptions = {
	ONGOING: 'Ongoing',
	PENDING: 'Pending',
	SETTLED: 'Settled',
};

const ExploreDisputeTabs = () => {
	const Tab = ({ children }) => <div className="w-1/3 hover:bg-gray-200 h-full capitalise cursor-pointer border-r flex-center">{children}</div>;
	const options = ExploreDisputeTabOptions;
	return (
		<div className="absolute w-full bottom-0 h-12 flex-center border-t">
			{Object.keys(options).map(tabKey => <Tab key={tabKey}>{options[tabKey]}</Tab>)}
		</div>
	);
};

export { ExploreDisputeTabs, ExploreDisputeTabOptions };
