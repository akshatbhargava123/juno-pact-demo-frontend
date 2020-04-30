import { Circle, Star, Info } from "react-feather"
import HoverEffect from "@components/common/HoverEffect";

const ChannelHeader = () => {
	return (
		<div className="h-16 bg-white border-b text-gray-700 flex items-center justify-between px-5">
			<div className="flex items-center">
				<Circle color="limegreen" size="10px" fill="limegreen" className="mr-2 mt-1" />
				<h4 className="text-sm font-bold">Shubham Kapaley</h4>
				<HoverEffect tooltipOptions={{ label: 'Star conversation', placement: 'bottom' }} className="ml-2 p-1">
					<Star size="0.75rem" className="cursor-pointer mt-1" />
				</HoverEffect>
			</div>
			<div className="flex-center">
				<HoverEffect className="p-2">
					{({ isHovered }) => (
						<div className={`flex items-center ${isHovered ? 'text-black' : 'text-gray-600'}`}>
							<Info size="1rem" className="mt-px mr-2" />
							<span className="text-sm">Details</span>
						</div>
					)}
				</HoverEffect>
			</div>
		</div>
	);
};

export default ChannelHeader;
