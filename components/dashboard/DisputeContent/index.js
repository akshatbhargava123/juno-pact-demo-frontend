import { useState } from 'react';
import { Mails } from './Mails';
import { Notes } from './Notes';

const DisputeContent = () => {
	const [selectedTab, setSelectedTab] = useState(DisputeTabsOptions.MY_MAILS);
	return (
		<div>
			<div className="my-4">
				{selectedTab === DisputeTabsOptions.MY_MAILS && <Mails />}
				{selectedTab === DisputeTabsOptions.NOTES && <Notes />}
			</div>
		</div>
	);
};

export default DisputeContent;
