import { Edit3, Circle, ChevronDown } from 'react-feather';

const SideMenu = () => {
	return (
		<div className="h-full bg-blue-800">
			<div className="hover:bg-blue-900 cursor-pointer border-b border-white">
				<div className="flex justify-between items-center py-2 mx-3">
					<div className="flex-col">
						<h1 className="text-sm font-black text-white flex items-center">
							<p>Juno Pact</p>
							<ChevronDown color="white" size="1rem" className="pl-1" />
						</h1>
						<p className="text-xs flex items-center">
							<Circle color="limegreen" size="10px" fill="limegreen" className="mr-2" />
							Akshat Bhargava
						</p>
					</div>
					<div>
						<Edit3 className="text-lg h-8 w-8 p-2 text-gray-700 bg-white rounded-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
