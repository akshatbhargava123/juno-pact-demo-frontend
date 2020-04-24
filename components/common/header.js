import { Avatar, Popover, PopoverTrigger, PopoverContent, PopoverHeader } from "@chakra-ui/core";
import { Box, ChevronDown, User, Plus, LogOut, Anchor, Info, Command } from "react-feather";

const HeaderMenuItem = ({ text, Icon }) => (
	<li tabIndex={0} className="cursor-pointer flex items-center text-sm my-1 p-2 mx-3 hover:text-blue-700">
		<Icon size="20px" className="mr-2" />
		<span>{text}</span>
	</li>
);

const Header = () => {
	return (
		<div className="h-12 bg-gray-800 flex justify-between items-center px-10">
			<img src="images/logo.svg" alt="logo" width="160px" />
			<Popover trigger="hover">
				<PopoverTrigger>
					<div className="flex items-center cursor-pointer rounded p-1 px-2 hover:bg-gray-700">
						<Avatar
							src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
							name="Elon Musk"
							size="sm"
						/>
						<span className="text-white text ml-4 font-thin">Elon Musk</span>
						<ChevronDown color="white" className="pt-px ml-1" />
					</div>
				</PopoverTrigger>
				<PopoverContent zIndex={50} width="16rem">
					<PopoverHeader>
						<p>Elon Musk</p>
						<span className="text-gray-600 text-sm">elon@gmail.com</span>
					</PopoverHeader>
					<ul>
						<HeaderMenuItem
							text="Create New Dispute"
							Icon={Plus}
						/>
						<HeaderMenuItem
							text="My Profile"
							Icon={User}
						/>
						<HeaderMenuItem
							text="Help"
							Icon={Info}
						/>
						<HeaderMenuItem
							text="Support"
							Icon={Box}
						/>
						<HeaderMenuItem
							text="Keyboard Shortcuts"
							Icon={Command}
						/>
						<HeaderMenuItem
							text="Tour Juno Pact"
							Icon={Anchor}
						/>
						<HeaderMenuItem
							text="Logout"
							Icon={LogOut}
						/>
					</ul>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default Header;
