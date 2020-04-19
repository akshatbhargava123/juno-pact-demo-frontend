import { Circle, Mail, Briefcase, GitPullRequest, Edit3 } from "react-feather";

const DisputeTabsOptions = {
	MY_MAILS: 'My Mails',
	FILINGS: 'Filings',
	CORRESPONDENCE: 'Corresponsdence',
	NOTES: 'Notes',
};

const DisputeTabsIcons = {
	MY_MAILS: Mail,
	FILINGS: Briefcase,
	CORRESPONDENCE: GitPullRequest,
	NOTES: Edit3,
};

const DisputeTab = ({ label, selected, onTabClick, Icon }) => (
	<div
		className={`
			w-full py-3 px-5 cursor-pointer text-white hover:bg-gray-700 flex justify-between
			${selected ? 'bg-gray-700' : 'bg-gray-800 text-white'}
		`}
		onClick={onTabClick}
	>
		<p className="flex items-center">
			<Icon className="mr-2" strokeWidth={selected ? '2px' : '1px'} />
			{label}
		</p>
		<div className="flex items-center">
			<Circle color="limegreen" size="10px" fill="limegreen" className="inline mr-3" />
		</div>
	</div>
);

const DisputeTabs = ({ selectedTab, onTabChange }) => {
	const options = DisputeTabsOptions;
	const icons = DisputeTabsIcons;
	return (
		<div className="flex justify-between">
			{Object.keys(options).map(tabKey => (
				<DisputeTab
					key={tabKey}
					label={options[tabKey]}
					Icon={icons[tabKey]}
					selected={selectedTab === options[tabKey]}
					onTabClick={() => onTabChange(options[tabKey])}
				/>
			))}
		</div>
	);
};

export { DisputeTabs, DisputeTabsOptions };
