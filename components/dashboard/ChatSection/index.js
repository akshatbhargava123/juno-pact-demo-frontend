import ChatInput from "./ChatInput";
import ChannelHeader from "./ChannelHeader";
import ChannelStartSection from "./ChannelStartSection";

const ChatSection = () => {
	return (
		<div className="relative bg-white h-full">
			<ChannelHeader />
			<div className="flex flex-col">
				<div className="chat-section overflow-y-scroll flex-1">
					<ChannelStartSection />
				</div>
				<footer className="chat-input-container pb-5 px-5 w-full">
					<ChatInput />
				</footer>
			</div>
			<style jsx>{`
				.chat-section {
					height: calc(100vh - 6rem - 7rem);
				}
				.chat-input-container {
					max-height: 24rem;
				}
			`}</style>
		</div>
	);
};

export { ChatSection };
