import { Avatar } from '@chakra-ui/core';
import { Trash, Star } from 'react-feather';

const Mail = ({ read }) => {
	return (
		<div className={`
			relative w-full h-16 rounded shadow px-10 flex items-center cursor-pointer
			${read ? 'bg-gray-200' : 'border'}
		`}>
			<Avatar src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />
			<div className="flex flex-col ml-4">
				<p className="text-lg">Rahul Sharma</p>
				<span className="text-gray-600">Mediator</span>
			</div>
			<div className="ml-10 w-3/5">
				<p>Hey, Elon, I've been writing to you since last 10 months...</p>
				<span className="text-gray-600">02:00 PM, 12th Dec, 2020</span>
			</div>
			<div className="absolute right-0 mr-10 flex">
				<div className="p-2 rounded transition-duration-200 cursor-pointer hover:bg-gray-300 hover:text-yellow-700 rounded-full">
					<Star strokeWidth="1px" />
				</div>
				<div className="p-2 rounded transition-duration-200 cursor-pointer hover:bg-gray-300 hover:text-red-500">
					<Trash strokeWidth="1px" />
				</div>
			</div>
		</div>
	);
};

const Mails = () => {
	return (
		<div>
			<Mail />
			<Mail />
			<Mail read />
			<Mail read />
			<Mail read />
		</div>
	);
};

export { Mails };