import { useState } from 'react';
import { Mails } from './Mails';
import { Notes } from './Notes';

const DisputeContent = () => {
	// const [selectedTab, setSelectedTab] = useState(DisputeTabsOptions.MY_MAILS);
	return (
		<div>
			<div className="my-4">
				{false && selectedTab === DisputeTabsOptions.MY_MAILS && <Mails />}
				{false && selectedTab === DisputeTabsOptions.NOTES && <Notes />}
			</div>
		</div>
	);
};

export default DisputeContent;
