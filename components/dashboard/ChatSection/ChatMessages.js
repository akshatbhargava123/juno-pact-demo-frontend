import { ChatsMockData } from "./ChatMockData";
import { useState, useEffect } from "react";
import { differenceInMilliseconds } from "date-fns";
import { Avatar } from "@chakra-ui/core";
import { get } from "lodash";

const shouldShowAvatar = (m1 = {}, m2 = {}) => {
	if (get(m1, 'user.name') !== (m2, 'user.name')) return true;
	t1 = Number(m1.timestamp);
	t2 = Number(m2.timestamp);
	if (isNaN(t1)) return true;
	return differenceInMilliseconds(t2, t1) > 6600;
};

const ChatMessage = ({ prevMessage, message }) => {
	const showAvatar = shouldShowAvatar(prevMessage, message);
	return (
		<div>
			{showAvatar && <Avatar src={message.user.avatar}></Avatar>}
			<div dangerouslySetInnerHTML={{ __html: message.text }} />
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
