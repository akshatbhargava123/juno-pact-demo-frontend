import { ChatsMockData } from "./ChatMockData";
import { useState, useEffect } from "react";
import { differenceInMilliseconds } from "date-fns";
import { Avatar } from "@chakra-ui/core";
import { get } from "lodash";

const shouldShowAvatar = (m1 = {}, m2 = {}) => {
	if (get(m1, 'user.name') !== get(m2, 'user.name')) return true;
	t1 = Number(m1.timestamp);
	t2 = Number(m2.timestamp);
	if (isNaN(t1)) return true;
	return differenceInMilliseconds(t2, t1) > 6600;
};

const ChatMessage = ({ prevMessage, message }) => {
	const showAvatar = shouldShowAvatar(prevMessage, message);
	return (
		<div className="px-5 py-1 my-2 hover:bg-gray-200">
			{showAvatar && (
				<div className="flex items-center">
					<Avatar width="2.5rem" height="2.5rem" src={message.user.avatar}></Avatar>
					<div className="flex flex-col ml-3">
						<div className="font-bold text-sm">
							{message.user.name}
						</div>
						<div className="text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: message.text }} />
					</div>
				</div>
			)}
			{!showAvatar && (
				<div
					className="text-sm"
					dangerouslySetInnerHTML={{ __html: message.text }}
				/>
			)}
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
		<div>
			<div>
				{messages && messages.map((message, i) => (
					<ChatMessage
						key={i}
						message={message}
						prevMessage={messages[i-1]}
					/>
				))}
			</div>
		</div>
	);
};

export default ChatMessages;
