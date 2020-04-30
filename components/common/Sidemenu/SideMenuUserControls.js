import { ChevronDown, Circle, Edit3 } from "react-feather";

const SideMenuUserControls = () => {
	return (
		<div className="hover:bg-blue-900 cursor-pointer border-b border-t border-gray-600">
			<div className="flex justify-between items-center py-3 mx-4">
				<div className="flex-col">
					<h1 className="text-sm font-black text-white flex items-center mb-px">
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
	);
};

export { SideMenuUserControls };