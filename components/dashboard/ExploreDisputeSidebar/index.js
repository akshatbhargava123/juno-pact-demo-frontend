import { get } from 'lodash';
import { useState } from 'react';
import { ExploreDisputeTabs, ExploreDisputeTabOptions } from './ExploreDisputeTabs';
import { DisputeSearch } from './DisputeSearch';
import { DisputeCard } from './DisputeCard';

const DisputeMapMockData = {
	[ExploreDisputeTabOptions.ONGOING]: [
		{
			id: 1,
			plaintiff: { name: 'Rahul' },
			defendant: { name: 'Yes Bank' },
			category: 'Insurance Claim',
			lastUpdate: 'Next Hearing on 14th April, 2020',
		},
		{
			id: 2,
			plaintiff: { name: 'Rahul' },
			defendant: { name: 'Priya' },
			category: 'Child Custody',
			lastUpdate: 'Next Hearing on 12th April, 2020',
		},
		{
			id: 3,
			plaintiff: { name: 'Rahul' },
			defendant: { name: 'Pubjab National Bank' },
			category: 'Extra Charges Lay Off',
			lastUpdate: 'Next Hearing on 14th April, 2020',
		}
	],
}

const ExploreDisputeSidebar = () => {
	const [selectedTab, setSelectedTab] = useState(ExploreDisputeTabOptions.ONGOING);
	const [disputeMap, setDisputeMap] = useState(DisputeMapMockData);
	return (
		<div className="relative flex flex-col items-center h-full w-full bg-white shadow">
			<div className="w-full my-2 px-3">
				<DisputeSearch />
			</div>
			<div className="w-full px-3 overflow-y-scroll mb-12">
				{get(disputeMap, selectedTab, []).map(dispute => (
					<DisputeCard
						key={dispute.id}
						plaintiff={dispute.plaintiff}
						defendant={dispute.defendant}
						category={dispute.category}
						lastUpdate={dispute.lastUpdate}
					/>
				))}
				{!disputeMap[selectedTab] && (
					<h1>No data</h1>
				)}
			</div>
			<ExploreDisputeTabs
				selectedTab={selectedTab}
				onTabChange={setSelectedTab}
			/>
		</div>
	);
};

export default ExploreDisputeSidebar;
