import { Avatar } from "@chakra-ui/core"
import { Circle } from "react-feather";
import UserBadge from "@components/common/UserBadge";

const PersonalChannelSection = () => (
	<div>
		<div className="flex items-center">
			<Avatar src="http://goog;e.csd" className="mr-5" />
			<h4 className="flex flex-col font-bold text-sm">
				<div className="flex items-center">
					<p>Shubham Kapaley</p>
					<Circle color="limegreen" size="10px" fill="limegreen" className="ml-2 mt-px" />
				</div>
				<UserBadge role="mediator" className="mr-4 mt-1" />
			</h4>
		</div>
		<p className="mt-4 text-black">
			You can discuss about anything with Shubham Kapaley here in personal.
		</p>
	</div>
);

const ChannelStartSection = ({ isGroupChannel = false }) => {
	return (
		<div className="absolute bottom-0 px-6 mb-2">
			{isGroupChannel ? <DisputeChannelSection /> : <PersonalChannelSection />}
		</div>
	);
};

export default ChannelStartSection;
