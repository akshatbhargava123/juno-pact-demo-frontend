import useHover from "@components/common/hooks/useHover";
import { Mail, Sun } from "react-feather";

const ActionButton = ({ text, color, Icon }) => (
	<button className={`flex items-center mx-2 px-3 py-1 rounded bg-${color}-600 hover:bg-${color}-500 text-sm text-white font-semibold`}>
		<Icon size="15px" className="mr-2" />
		{text}
	</button>
);

const DisputeCard = ({ plaintiff, defendant, category, lastUpdate }) => {
	const [hoverRef, isHovered] = useHover();
	return (
		<div
			ref={hoverRef}
			className="flex rounded border-b border-gray-300 my-4 cursor-pointer hover:shadow-lg transition-duration-200"
		>
			<div className="px-6 py-3 w-full flex justify-between">
				<div>
					<p>{`${plaintiff.name} VS ${defendant.name}`}</p>
					<div className="font-light">
						<p className="text-gray-700 text-sm">{category}</p>
					</div>
					<div className="flex text-gray-500 text-sm mt-1">
						<p>{lastUpdate}</p>
					</div>
				</div>
				<div className="w-64 flex flex-col items-end justify-start">
					<div className="mr-5 py-1 align-top">
						<p className="bg-gray-300 text-sm text-gray-700 px-2 py-1 rounded">Ongoing</p>
					</div>
					<div className="mr-5 py-1 flex" hidden={!isHovered}>
						<p className="flex items-center bg-gray-600 text-sm text-white px-2 py-1 rounded mr-1">
							<Mail strokeWidth="2px" size="1rem" className="mr-1" />
							10
						</p>
						<p className="flex items-center bg-gray-600 text-sm text-white px-2 py-1 rounded">
							<Sun strokeWidth="2px" size="1rem" className="mr-1" />
							8
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export { DisputeCard };
