import { Bookmark, Users } from 'react-feather';
import { SideMenuUserControls } from './SideMenuUserControls';

const SideMenu = () => {
	return (
		<div className="h-full bg-blue-800">
			<SideMenuUserControls />
			<div>
				<div className="flex items-center text-sm hover:bg-blue-900 py-2 px-4 cursor-pointer">
					<Bookmark size="16px" className="mr-2" />
					<p>Saved Items</p>
				</div>
				<div className="flex items-center text-sm hover:bg-blue-900 py-2 px-4 cursor-pointer">
					<Users size="16px" className="mr-2" />
					<p>People</p>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
