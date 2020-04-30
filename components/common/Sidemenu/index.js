import { Collapse, useDisclosure } from '@chakra-ui/core';
import HoverEffect from '@components/common/HoverEffect';
import { Bookmark, Users, Circle, Database, ChevronRight, Plus, MoreVertical, ChevronDown } from 'react-feather';
import { SideMenuUserControls } from './SideMenuUserControls';
import { SideMenuItemContainer } from './SideMenuItemContainer';

const SideMenu = () => {
	const { isOpen: disputesOpen, onToggle: onDisputesToggle } = useDisclosure(true);
	const { isOpen: personalOpen, onToggle: onPersonalToggle } = useDisclosure(true);
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
				<SideMenuItemContainer onClick={onDisputesToggle} hoverEffect={false}>
					{({ isHovered }) => (
						<div className="w-full flex items-center justify-between">
							<div className="flex items-center">
								{!disputesOpen && <ChevronRight size="1rem" className="mr-2 mt-1" />}
								{disputesOpen && <ChevronDown size="1rem" className="mr-2 mt-1" />}
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
				<Collapse isOpen={disputesOpen}>
					<SideMenuItemContainer><p className="ml-2">#&nbsp; Rahul VS Suneha</p></SideMenuItemContainer>
					<SideMenuItemContainer><p className="ml-2">#&nbsp; Yes Bank VS Sahil</p></SideMenuItemContainer>
					<SideMenuItemContainer><p className="ml-2">#&nbsp; Akshat VS Sahil</p></SideMenuItemContainer>
					<SideMenuItemContainer><p className="ml-2">#&nbsp; Preeti VS Preetam</p></SideMenuItemContainer>
				</Collapse>
			</div>
			<div className="py-3 border-b border-gray-600">
				<SideMenuItemContainer onClick={onPersonalToggle} hoverEffect={false}>
					{({ isHovered }) => (
						<div className="w-full flex items-center justify-between">
							<div className="flex items-center">
								{!personalOpen && <ChevronRight size="1rem" className="mr-2 mt-1" />}
								{personalOpen && <ChevronDown size="1rem" className="mr-2 mt-1" />}
								<p>Personal</p>
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
				<Collapse isOpen={personalOpen}>
					<SideMenuItemContainer>
							<p className="ml-2 flex items-center">
								<Circle color="limegreen" size="10px" fill="limegreen" className="mr-2" />
								Suneha
							</p>
					</SideMenuItemContainer>
					<SideMenuItemContainer>
							<p className="ml-2 flex items-center">
								<Circle color="limegreen" size="10px" fill="limegreen" className="mr-2" />
								Sahil
							</p>
					</SideMenuItemContainer>
					<SideMenuItemContainer>
							<p className="ml-2 flex items-center">
								<Circle color="limegreen" size="10px" fill="limegreen" className="mr-2" />
								Shubham
							</p>
					</SideMenuItemContainer>
					<SideMenuItemContainer>
							<p className="ml-2 flex items-center">
								<Circle color="limegreen" size="10px" fill="limegreen" className="mr-2" />
								Preeti
							</p>
					</SideMenuItemContainer>
				</Collapse>
			</div>
		</div>
	);
};

export default SideMenu;
