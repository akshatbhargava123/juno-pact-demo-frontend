import ChatInput from "./ChatInput";
import ChannelHeader from "./ChannelHeader";
import ChannelStartSection from "./ChannelStartSection";

const ChatSection = () => {
	return (
		<div className="relative bg-white h-full">
			<ChannelHeader />
			<div className="overflow-y-scroll">
				<ChannelStartSection />
			</div>
			<div className="h-24 absolute bottom-0 pb-5 border border-gray-800 px-5 w-full">
				<ChatInput />
			</div>
		</div>
	);
};

export { ChatSection };
