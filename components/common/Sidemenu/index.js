import { Collapse, useDisclosure } from '@chakra-ui/core';
import HoverEffect from '@components/common/HoverEffect';
import { Bookmark, Users, Database, ChevronRight, Plus, MoreVertical, ChevronDown } from 'react-feather';
import { SideMenuUserControls } from './SideMenuUserControls';
import { SideMenuItemContainer } from './SideMenuItemContainer';

const SideMenu = () => {
	const { isOpen, onToggle } = useDisclosure(true);
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
			<div className="py-3 border-b border-gray-600">
				<SideMenuItemContainer onClick={onToggle} hoverEffect={false}>
					{({ isHovered }) => (
						<div className="w-full flex items-center justify-between">
							<div className="flex items-center">
								{!isOpen && <ChevronRight size="1rem" className="mr-2 mt-1" />}
								{isOpen && <ChevronDown size="1rem" className="mr-2 mt-1" />}
								<p>Disputes</p>
							</div>
							<div className="flex items-center">
								<HoverEffect tooltipOptions={{ label: 'Section Options' }} hidden={!isHovered}>
									<MoreVertical size="1rem" />
								</HoverEffect>
								<HoverEffect tooltipOptions={{ label: 'Create New Dispute' }} hidden={!isHovered}>
									<Plus size="1rem" />
								</HoverEffect>
							</div>
						</div>
					)}
				</SideMenuItemContainer>
				<Collapse isOpen={isOpen}>
					<SideMenuItemContainer><p className="ml-2">#&nbsp; Rahul VS Suneha</p></SideMenuItemContainer>
					<SideMenuItemContainer><p className="ml-2">#&nbsp; Yes Bank VS Sahil</p></SideMenuItemContainer>
					<SideMenuItemContainer><p className="ml-2">#&nbsp; Akshat VS Sahil</p></SideMenuItemContainer>
					<SideMenuItemContainer><p className="ml-2">#&nbsp; Preeti VS Preetam</p></SideMenuItemContainer>
				</Collapse>
			</div>
		</div>
	);
};

export default SideMenu;
