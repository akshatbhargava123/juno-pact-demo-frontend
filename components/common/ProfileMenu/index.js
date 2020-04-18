import { ExploreDisputeTabs } from './ExploreDisputeTabs';
import { DisputeSearch } from './DisputeSearch';
import { DisputeCard } from './DisputeCard';

const ProfileMenu = () => {
	return (
		<div className="relative flex flex-col items-center h-full w-full bg-white shadow">
			<div className="w-full my-2 px-3">
				<DisputeSearch />
			</div>
			<div>
				<DisputeCard
					title="settled disputes"
					disputes={[
						{ name: 'Shubham VS Yes Bank' },
						{ name: 'Shubham VS Zoom' },
						{ name: 'Shubham VS Akshat' },
					]}
					selectedDispute={{ name: 'Shubham VS Zoom2' }}
					defaultContentIsOpen={false}
				/>
			</div>
			<ExploreDisputeTabs />
		</div>
	);
};

export default ProfileMenu;
