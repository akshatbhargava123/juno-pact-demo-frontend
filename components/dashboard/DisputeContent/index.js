import { useState } from 'react';
import { Mails } from './Mails';
import { DisputeTabs, DisputeTabsOptions } from './DisputeTabs';

const DisputeContent = () => {
	const [selectedTab, setSelectedTab] = useState(DisputeTabsOptions.MY_MAILS);
	return (
		<div>
			<DisputeTabs
				selectedTab={selectedTab}
				onTabChange={setSelectedTab}
			/>
			<div className="my-4">
				{selectedTab === DisputeTabsOptions.MY_MAILS && (
					<Mails />
				)}
			</div>
		</div>
	);
};

export default DisputeContent;