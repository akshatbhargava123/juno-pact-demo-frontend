import { Button } from "@chakra-ui/core"
import SearchInput from "@components/common/SearchInput";

const Notes = () => {
	return (
		<div className="w-full">
			<div className="flex justify-between">
				<SearchInput
					className="w-2/3"
					placeholder="Search your Notes by title, description..."
				/>
				<Button onClick={() => console.log('hello')}>New Note</Button>
			</div>
		</div>
	);
};

export { Notes };
