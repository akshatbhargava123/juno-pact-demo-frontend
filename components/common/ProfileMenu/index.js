import { Avatar, useDisclosure } from '@chakra-ui/core';
import { Plus, ChevronRight, ChevronDown } from 'react-feather';

const DisputeSection = ({ title, disputes, selectedDispute }) => {
	const { isOpen, onToggle } = useDisclosure(true);
	// FIXME: fix the height issue, overflow-scroll needs a fixed height
	return (
		<div>
			<div>
				<h3
					onClick={onToggle}
					className="cursor-pointer capitalize px-6 py-3 font-bold bg-gray-800 text-white text-lg flex items-center justify-between"
				>
					{title}
					<div>
						{isOpen ? <ChevronDown /> : <ChevronRight />}
					</div>
				</h3>
				<div
					className={`transition-duration-200 overflow-y-scroll`}
					style={{ height: isOpen ? '9rem' : 0 }}
				>
					{disputes.map(dispute => (
						<p
							key={dispute.name}
							className={`
								px-6 py-3 transition-duration-200 cursor-pointer font-semibold rounded-l
								${selectedDispute.name === dispute.name ? 'text-gold-400 bg-white font-bold italic' : 'text-gray-200'}
								${selectedDispute.name !== dispute.name && 'bg-gray-600 hover:bg-white hover:text-gray-700 hover:opacity-75'}
							`}
						>
							{dispute.name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

const ProfileMenu = () => {
	return (
		<div className="flex flex-col items-center h-full w-full">
			<div className="w-full bg-black text-white px-8 py-4 flex flex-col justify-around items-top">
				<div className="flex items-center">
					<Avatar
						src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
						name="Elon Musk"
						size="lg"
					/>
					<span className="text-white text-2xl ml-4 font-semibold">Elon Musk</span>
				</div>
				<div className="self-end font-semibold cursor-pointer bg-gold-400 hover:bg-gold-200 p-1 px-2 rounded transition duration-200">
					Logout
				</div>
			</div>
			<div className="bg-gray-500 h-full w-full">
				<DisputeSection
					title="outgoing disputes"
					disputes={[
						{ name: 'Shubham VS Yes Bank' },
						{ name: 'Shubham VS Zoom' },
						{ name: 'Shubham VS Akshat' },
					]}
					selectedDispute={{ name: 'Shubham VS Zoom' }}
				/>
				<DisputeSection
					title="pending disputes"
					disputes={[
						{ name: 'Shubham VS Yes Bank' },
						{ name: 'Shubham VS Zoom' },
						{ name: 'Shubham VS Akshat' },
						{ name: 'Shubham VS Zoom' },
						{ name: 'Shubham VS Akshat2' },
					]}
					selectedDispute={{ name: 'Shubham VS Zoom2' }}
				/>
				<DisputeSection
					title="settled disputes"
					disputes={[
						{ name: 'Shubham VS Yes Bank' },
						{ name: 'Shubham VS Zoom' },
						{ name: 'Shubham VS Akshat' },
					]}
					selectedDispute={{ name: 'Shubham VS Zoom2' }}
				/>
			</div>
		</div>
	);
};

export default ProfileMenu;