import { Circle, Star } from "react-feather"
import HoverEffect from "@components/common/HoverEffect";

const ChannelHeader = () => {
	return (
		<div className="h-16 bg-gray-200 text-gray-700 flex items-center justify-between px-5">
			<div className="flex items-center">
				<Circle color="limegreen" size="10px" fill="limegreen" className="mr-2 mt-1" />
				<h4 className="text-sm font-bold">Shubham Kapaley</h4>
				<HoverEffect tooltipOptions={{ label: 'Star conversation', placement: 'bottom' }}>
					<Star size="0.75rem" className="cursor-pointer ml-2 mt-1" />
				</HoverEffect>
			</div>
		</div>
	);
};

export default ChannelHeader;
