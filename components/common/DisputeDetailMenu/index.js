import { Progress, CircularProgress, CircularProgressLabel } from '@chakra-ui/core';

const DisputeDetailMenu = () => {
	return (
		<div className="h-full shadow-lg">
			<div className="h-12 flex-center border-b">
				<h1 className="text-gray-800">Dispute Detail</h1>
			</div>
			<div className="m-2 p-2">
				<p className="text-lg"><b>19 / 25</b> days left for final verdict.</p>
				<Progress defaultValue={45} />
			</div>
			<div></div>
		</div>
	);
};

export default DisputeDetailMenu;
