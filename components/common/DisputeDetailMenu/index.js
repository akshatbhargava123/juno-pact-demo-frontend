import { Progress } from '@chakra-ui/core';
import { Edit, BookOpen, Archive, Database, Briefcase, Loader, Clock, Key, Folder } from 'react-feather';

const MenuItem = ({ label, Icon }) => (
	<div className="flex items-center p-2 cursor-pointer hover:bg-gray-300">
		<Icon className="mr-4" />
		<p>{label}</p>
	</div>
);

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
			<div className="px-4">
				<MenuItem label="Case History" Icon={Edit} />
				<MenuItem label="Pleadings" Icon={Archive} />
				<MenuItem label="Evidence" Icon={Database} />
				<MenuItem label="Documents" Icon={BookOpen} />
				<MenuItem label="E-filings" Icon={Briefcase} />
				<MenuItem label="Orders" Icon={Loader} />
				<MenuItem label="Timeline" Icon={Clock} />
				<MenuItem label="Instructions" Icon={Key} />
				<MenuItem label="Final Orders/Awards" Icon={BookOpen} />
				<MenuItem label="Recorded Meetings" Icon={Folder} />
			</div>
		</div>
	);
};

export default DisputeDetailMenu;
