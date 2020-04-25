import { useState } from 'react';
import { Avatar } from '@chakra-ui/core';
import { Trash, Star, Eye } from 'react-feather';
import Checkbox from '@components/common/Checkbox';
import HoverCircularEffect from '@components/common/HoverCircularEffect';

const MailCard = ({ read }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			className={`
				relative w-full h-16 rounded shadow px-10 pl-5 flex items-center cursor-pointer
				${read ? 'bg-gray-200' : 'border'}
			`}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<Checkbox />
			<HoverCircularEffect className="p-2 mr-4" tooltipOptions={{ label: 'Star' }}>
				<Star strokeWidth="0px" fill="#F4B500" />
			</HoverCircularEffect>
			<Avatar src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />
			<div className="flex flex-col ml-4">
				<p className="text-lg">Rahul Sharma</p>
				<span className="text-gray-600">Mediator</span>
			</div>
			<div className="ml-10 w-3/6">
				<p>Hey, Elon, I've been writing to you since last 10 months...</p>
				<span className="text-gray-600">02:00 PM, 12th Dec, 2020</span>
			</div>
			<div className="w-32">
				<span className="text-gray-600 text-sm">2 attachments</span>
			</div>
			<div className="absolute right-0 flex mr-5" hidden={!isHovered}>
				<HoverCircularEffect className="p-2" tooltipOptions={{ label: 'Mark read' }}>
					{({ isHovered }) => <Eye strokeWidth="1px" className={`text-${isHovered ? 'yellow' : 'gray'}-700`} />}
				</HoverCircularEffect>
				<HoverCircularEffect className="p-2" tooltipOptions={{ label: 'Delete' }}>
					{({ isHovered }) => <Trash strokeWidth="1px" className={`text-${isHovered ? 'red' : 'gray'}-700`} />}
				</HoverCircularEffect>
			</div>
		</div>
	);
};

export { MailCard };
