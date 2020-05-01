import { get } from "lodash";
import { Avatar } from "@chakra-ui/core";
import { useState, useEffect } from "react";
import { differenceInMilliseconds } from "date-fns";
import { Bookmark, Share, Copy, MoreVertical } from "react-feather";
import { ChatsMockData } from "./ChatMockData";
import ChannelStartSection from "./ChannelStartSection";
import HoverEffect from "@components/common/HoverEffect";
import useHover from "@components/common/hooks/useHover";

const shouldShowAvatar = (m1 = {}, m2 = {}) => {
	if (get(m1, 'user.name') !== get(m2, 'user.name')) return true;
	const t1 = Number(m1.timestamp);
	const t2 = Number(m2.timestamp);
	if (!t1 || isNaN(t1)) return true;
	return differenceInMilliseconds(t2, t1) > 6600;
};

const ChatMessage = ({ prevMessage, message }) => {
	const [hoverRef, isHovered] = useHover();
	const showAvatar = shouldShowAvatar(prevMessage, message);
	return (
		<div className="relative px-5 py-1 hover:bg-gray-200 break-all" ref={hoverRef}>
			{showAvatar && (
				<div className="flex items-start mt-2">
					<Avatar width="2.5rem" height="2.5rem" src={message.user.avatar}></Avatar>
					<div className="flex flex-col ml-3">
						<div className="font-bold text-sm">
							{message.user.name}
							<span className="text-xs text-gray-600 ml-1 font-thin">11:00 PM</span>
						</div>
						<div className="text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: message.text }} />
					</div>
				</div>
			)}
			{!showAvatar && (
				<div className="flex">
					<p className="flex w-12 flex-shrink-0 text-right justify-center mt-1 text-xs">
						<span className={`${isHovered ? 'text-black' : 'text-white'}`}>11:00</span>
					</p>
					<div
						className="text-sm ml-1"
						dangerouslySetInnerHTML={{ __html: message.text }}
					/>
				</div>
			)}
			<div hidden={!isHovered} className="absolute right-0 mr-4 shadow" style={{ top: -20 }}>
				<div className="flex justify-around bg-white rounded-lg p-1">
					<HoverEffect tooltipOptions={{ label: 'Save Message', showDelay: 0 }}>
						{({ isHovered }) => <Bookmark size="1.25rem" strokeWidth="1px" className={`text-gray-${isHovered ? 800 : 600}`} />}
					</HoverEffect>
					<HoverEffect tooltipOptions={{ label: 'Share', showDelay: 0 }}>
						{({ isHovered }) => <Share size="1.25rem" strokeWidth="1px" className={`text-gray-${isHovered ? 800 : 600}`} />}
					</HoverEffect>
					<HoverEffect tooltipOptions={{ label: 'Copy', showDelay: 0 }}>
						{({ isHovered }) => <Copy size="1.25rem" strokeWidth="1px" className={`text-gray-${isHovered ? 800 : 600}`} />}
					</HoverEffect>
					<HoverEffect tooltipOptions={{ label: 'More Options', showDelay: 0 }}>
						{({ isHovered }) => <MoreVertical size="1.25rem" strokeWidth="1px" className={`text-gray-${isHovered ? 800 : 600}`} />}
					</HoverEffect>
				</div>
			</div>
		</div>
	);
};

const ChatMessages = () => {
	const [messages, setMessages] = useState();

	useEffect(() => {
		const sortedByTimestamp = ChatsMockData.sort((m1, m2) => {
			return m1.timestamp < m2.timestamp ? -1 : 1;
		})
		setMessages(sortedByTimestamp);
	}, []);

	return (
		<>
			<ChannelStartSection channelType="dispute" />
			{messages && messages.map((message, i) => (
				<ChatMessage
					key={i}
					message={message}
					prevMessage={messages[i-1]}
				/>
			))}
		</>
	);
};

export default ChatMessages;
