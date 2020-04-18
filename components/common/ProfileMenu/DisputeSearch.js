import { Search } from "react-feather";

const DisputeSearch = () => {
	return (
		<div className="flex items-center border-b-2 border-blue-500">
			<Search className="ml-2 m-0 text-gray-600" />
			<input
				placeholder="Search by Plaintiff / Defendant"
				className="w-full outline-none h-10 px-3 py-2 text-lg"
			/>
		</div>
	);
};

export { DisputeSearch };
