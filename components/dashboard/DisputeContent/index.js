import { useState } from 'react';
import { DisputeTabs, DisputeTabsOptions } from './DisputeTabs';

const DisputeContent = () => {
	const [selectedTab, setSelectedTab] = useState(DisputeTabsOptions.MY_MAILS);
	return (
		<div>
			<DisputeTabs
				selectedTab={selectedTab}
				onTabChange={setSelectedTab}
			/>
		</div>
	);
};

export default DisputeContent;