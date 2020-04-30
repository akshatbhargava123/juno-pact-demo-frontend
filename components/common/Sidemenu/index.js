import { Bookmark, Users, Database, ChevronRight, Plus, MoreVertical } from 'react-feather';
import { SideMenuUserControls } from './SideMenuUserControls';
import { SideMenuItemContainer } from './SideMenuItemContainer';
import { Collapse } from '@chakra-ui/core';
import HoverCircularEffect from '../HoverCircularEffect';

const SideMenu = () => {
	return (
		<div className="h-full bg-blue-800">
			<SideMenuUserControls />
			<div className="py-3 border-b border-gray-600">
				<SideMenuItemContainer>
					<Bookmark size="16px" className="mr-2" />
					<p>Saved Items</p>
				</SideMenuItemContainer>
				<SideMenuItemContainer selected>
					<Users size="16px" className="mr-2" />
					<p>People</p>
				</SideMenuItemContainer>
				<SideMenuItemContainer>
					<Database size="16px" className="mr-2" />
					<p>Files</p>
				</SideMenuItemContainer>
			</div>
			<div>
				<SideMenuItemContainer hoverEffect={false}>
					{({ isHovered}) => (
						<div className="w-full flex items-center justify-between py-3">
							<div className="flex items-center">
								<ChevronRight size="1rem" className="mr-2 mt-1" />
								<p>Channels</p>
							</div>
							<div className="flex items-center">
								<HoverCircularEffect>
									<MoreVertical size="20px" hidden={!isHovered} />
								</HoverCircularEffect>
								<Plus size="20px" className="ml-3" />
							</div>
						</div>
					)}
				</SideMenuItemContainer>
			</div>
		</div>
	);
};

export default SideMenu;
