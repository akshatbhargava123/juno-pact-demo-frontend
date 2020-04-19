const ExploreDisputeTabOptions = {
	ONGOING: 'Ongoing',
	PENDING: 'Pending',
	SETTLED: 'Settled',
};

const Tab = ({ option, selected, onTabClick }) => (
	<div
		className={`
			w-1/3 hover:bg-gray-200 h-full capitalise cursor-pointer border-r flex-center
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
		<div className="absolute w-full bottom-0 h-12 flex-center border-t">
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
