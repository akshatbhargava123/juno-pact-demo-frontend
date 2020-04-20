import { Search } from "react-feather";

const SearchInput = ({ placeholder, className = '' }) => {
	return (
		<div className={`shadow border flex items-center ${className}`}>
			<Search className="ml-2 m-0 text-gray-500" />
			<input
				autoFocus
				placeholder={placeholder}
				className="w-full outline-none h-10 px-3 py-2 text-lg"
			/>
		</div>
	);
};

export default SearchInput;
