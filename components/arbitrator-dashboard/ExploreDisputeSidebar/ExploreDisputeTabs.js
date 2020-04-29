const ExploreDisputeTabOptions = {
	ALL: 'All',
	ONGOING: 'Ongoing',
	WITHDRAWN: 'Withdrawn',
	REJECTED: 'Rejected',
	SETTLED: 'Settled',
	STARRED: 'Starred',
};

const Tab = ({ option, selected, onTabClick }) => (
	<div
		className={`
			w-32 hover:bg-gray-200 h-full capitalise cursor-pointer border-r flex-center
			${selected && 'bg-gray-200'}
		`}
		onClick={onTabClick}
	>
		{ExploreDisputeTabOptions[option]}
	</div>
);

const ExploreDisputeTabs = ({ selectedTab, onTabChange }) => {
	const options = ExploreDisputeTabOptions;
	return (
		<div className="absolute bottom-0 h-12 flex-center border-t">
			{Object.keys(options).map(tabKey => (
					<Tab
						key={tabKey}
						option={tabKey}
						selected={options[tabKey] === selectedTab}
						onTabClick={() => onTabChange(options[tabKey])}
					/>
				)
			)}
		</div>
	);
};

export { ExploreDisputeTabs, ExploreDisputeTabOptions };
