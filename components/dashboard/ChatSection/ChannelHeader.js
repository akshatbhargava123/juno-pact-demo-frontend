import { Circle, Star, Info, User } from "react-feather"
import HoverEffect from "@components/common/HoverEffect";

const ChannelHeader = ({ channelType }) => {
	const isDisputeChannel = channelType === 'dispute';
	return (
		<div className="h-16 bg-white border-b text-gray-700 flex items-center justify-between px-5">
			<div className="flex items-center">
				<div className="flex-col">
					<div className="flex items-center font-bold">
						{!isDisputeChannel && <Circle color="limegreen" size="10px" fill="limegreen" className="mr-2 mt-px" />}
						{isDisputeChannel && <span className="mr-2 select-none">#</span>}
						<h4 className={`text-sm font-bold ${isDisputeChannel && 'text-black'}`}>Shubham VS Rahul</h4>
						<HoverEffect tooltipOptions={{ label: 'Star conversation', placement: 'bottom' }} className="ml-2 p-1">
							<Star size="0.75rem" className="cursor-pointer mt-1" />
						</HoverEffect>
					</div>
					{isDisputeChannel && (
						<div className="flex items-center">
							<div className="flex items-center w-8 text-sm hover:text-blue-500 cursor-pointer">
								<User className="mr-px mt-px" size="0.9rem" />
								<span>5</span>
							</div>
							<span className="text-sm text-gray-600">Child Custody</span>
						</div>
					)}
				</div>
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
