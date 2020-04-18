import { ExploreDisputeTabs } from './ExploreDisputeTabs';
import { DisputeSearch } from './DisputeSearch';
import { DisputeCard } from './DisputeCard';

const ProfileMenu = () => {
	return (
		<div className="relative flex flex-col items-center h-full w-full bg-white shadow">
			<div className="w-full my-2 px-3">
				<DisputeSearch />
			</div>
			<div className="w-full px-3">
				<DisputeCard
					plaintiff={{ name: 'Shubham' }}
					defendant={{ name: 'Yes Bank' }}
					category="Child Custody"
					lastUpdate="Next Hearing on 14th April, 2020"
				/>
				<DisputeCard
					plaintiff={{ name: 'Akshat' }}
					defendant={{ name: 'Shubham' }}
					category="Child Custody"
					lastUpdate="Next Hearing on 14th April, 2020"
				/>
				<DisputeCard
					plaintiff={{ name: 'Shubham' }}
					defendant={{ name: 'Yes Bank' }}
					category="Child Custody"
					lastUpdate="Next Hearing on 14th April, 2020"
				/>
				<DisputeCard
					plaintiff={{ name: 'Shubham' }}
					defendant={{ name: 'Yes Bank' }}
					category="Child Custody"
					lastUpdate="Next Hearing on 14th April, 2020"
				/>
			</div>
			<ExploreDisputeTabs />
		</div>
	);
};

export default ProfileMenu;
