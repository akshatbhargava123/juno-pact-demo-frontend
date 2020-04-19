const DisputeTabsOptions = {
	MY_MAILS: 'My Mails',
	FILINGS: 'Filings',
	CORRESPONDENCE: 'Corresponsdence',
	NOTES: 'Notes',
};

const DisputeTab = ({ label, selected, onTabClick }) => (
	<div
		className={`
			w-full py-3 cursor-pointer text-center hover:text-blue-700 hover:bg-blue-100 rounded-tl-lg
			${selected ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'}
		`}
		onClick={onTabClick}
	>
	{label}
	</div>
);

const DisputeTabs = ({ selectedTab, onTabChange }) => {
	const options = DisputeTabsOptions;
	return (
		<div className="flex justify-between">
			{Object.keys(options).map(tabKey => (
				<DisputeTab
					key={tabKey}
					label={options[tabKey]}
					selected={selectedTab === options[tabKey]}
					onTabClick={() => onTabChange(options[tabKey])}
				/>
			))}
		</div>
	);
};

export { DisputeTabs, DisputeTabsOptions };
