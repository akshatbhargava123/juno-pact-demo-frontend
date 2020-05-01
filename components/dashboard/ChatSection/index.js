import ChatInput from "./ChatInput";
import ChannelHeader from "./ChannelHeader";
import ChannelStartSection from "./ChannelStartSection";
import useResizeObserver from "use-resize-observer";
import { useState } from "react";

const ChatSection = () => {
	const { ref, height = 90 } = useResizeObserver();
	const [channelType] = useState('personal'); // 'dispute' / 'personal'
	return (
		<div className="relative bg-white h-full">
			<ChannelHeader channelType={channelType} />
			<div>
				<div
					className="relative overflow-y-scroll"
					style={{ height: `calc(100vh - 8rem - ${height}px)` }}
				>
					<ChannelStartSection channelType={channelType} />
				</div>
				<footer className="absolute bottom-0 chat-input-container pb-5 px-5 w-full" ref={ref}>
					<ChatInput />
				</footer>
			</div>
			<style jsx>{`
				.chat-input-container {
					max-height: 14rem;
				}
			`}</style>
		</div>
	);
};

export { ChatSection };
