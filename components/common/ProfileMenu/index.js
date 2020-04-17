import { Avatar } from '@chakra-ui/core';

const ProfileMenu = () => {
	return (
		<div className="flex flex-col items-center h-full w-full">
			<div className="w-full h-2/5 bg-black text-white h-48 px-8 py-4 flex flex-col justify-around items-top">
				<div className="flex items-center">
					<Avatar
						src="https://pbs.twimg.com/profile_images/1036111437423239169/W5MhlmYJ_400x400.jpg"
						name="Kabir Yadav"
						size="lg"
					/>
					<span className="text-white text-2xl ml-4 font-semibold">Kabir Yadav</span>
				</div>
				<div className="self-end font-semibold cursor-pointer bg-gold-400 hover:bg-gold-200 p-1 px-2 rounded transition duration-200">
					Logout
				</div>
			</div>
			<div>
			</div>
		</div>
	);
};

export default ProfileMenu;
