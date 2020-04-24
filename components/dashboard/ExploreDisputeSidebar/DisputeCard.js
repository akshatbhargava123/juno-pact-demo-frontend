import useHover from "@components/common/hooks/useHover";
import { Delete, Slash, Archive } from "react-feather";

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
				<div className="w-56 flex flex-col items-end">
					<p className="mr-5 py-1">
						<span className="text-green-700 font-bold">5</span> / 24 days
					</p>
					<div className="flex items-center" hidden={!isHovered}>
						<ActionButton text="Withdraw" color="red" Icon={Archive} />
					</div>
				</div>
			</div>
		</div>
	);
};

export { DisputeCard };
