import { Avatar } from "@chakra-ui/core";
import { ChevronDown } from "react-feather";

const Header = () => {
	return (
		<div className="h-16 bg-gray-800 flex justify-between items-center px-10">
			<img src="images/logo.svg" alt="logo" width="160px" />
			<div className="flex items-center cursor-pointer rounded p-1 px-2 hover:bg-gray-700">
				<Avatar
					src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
					name="Elon Musk"
					size="sm"
				/>
				<span className="text-white text-xl ml-4 font-thin">Elon Musk</span>
				<ChevronDown color="white" className="pt-px ml-1" />
			</div>
			<div className="font-semibold cursor-pointer bg-gold-400 hover:bg-gold-200 p-1 px-2 rounded transition duration-200">
				Sign out
			</div>
		</div>
	);
};

export default Header;
