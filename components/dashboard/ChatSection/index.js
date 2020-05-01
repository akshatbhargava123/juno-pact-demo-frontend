import ChatInput from "./ChatInput";
import ChannelHeader from "./ChannelHeader";
import ChannelStartSection from "./ChannelStartSection";
import useResizeObserver from "use-resize-observer";

const ChatSection = () => {
	const { ref, height = 90 } = useResizeObserver();
	return (
		<div className="relative bg-white h-full">
			<ChannelHeader />
			<div>
				<div
					className="relative overflow-y-scroll"
					style={{ height: `calc(100vh - 8rem - ${height}px)` }}
				>
					<ChannelStartSection />
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
