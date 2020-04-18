import { Progress } from '@chakra-ui/core';
import { Edit, BookOpen, Archive, Database, Briefcase, Loader, Clock, Key, Folder, Info, Zap, Circle, Calendar } from 'react-feather';

const MenuItem = ({ label, Icon }) => (
	<div className="flex items-center p-2 cursor-pointer hover:bg-gray-300">
		<Icon className="mr-4" />
		<p>{label}</p>
	</div>
);

const StatusListItem = ({ children }) => (
	<li className="px-3 py-2 flex">
		<Circle color="limegreen" size="10px" fill="limegreen" className="inline mr-3 mt-2" />
		{children}
	</li>
);

const DisputeDetailMenu = () => {
	return (
		<div className="h-full shadow-lg">
			<div className="h-12 flex-center border-b">
				<Info className="mr-2" />
				<h1 className="text-gray-800 font-bold">Dispute Details</h1>
			</div>
			<div className="m-2 p-2">
				<p className="text-lg"><b>19 / 25</b> days left for final verdict.</p>
				<Progress defaultValue={45} />
			</div>
			<div className="px-4 border-b">
				<MenuItem label="Case History" Icon={Edit} />
				<MenuItem label="Pleadings" Icon={Archive} />
				<MenuItem label="Evidence" Icon={Database} />
				<MenuItem label="Documents" Icon={BookOpen} />
				<MenuItem label="E-filings" Icon={Briefcase} />
				<MenuItem label="Orders" Icon={Loader} />
				<MenuItem label="Timeline" Icon={Clock} />
				<MenuItem label="Instructions" Icon={Key} />
				<MenuItem label="Resolution Calendar" Icon={Calendar} />
				<MenuItem label="Final Orders/Awards" Icon={BookOpen} />
				<MenuItem label="Recorded Meetings" Icon={Folder} />
			</div>
			<div className="h-12 flex-center border-b">
				<Zap className="mr-2" />
				<h1 className="text-gray-800 font-bold">Updates</h1>
			</div>
			<div>
				<ul className="">
					<StatusListItem>
						<div>
							<span>Next hearing tomorrow at 12:00 PM.</span><br />
							<a className="text-blue-700" href="google.com" target="_blank">Add to calendar.</a>
						</div>
					</StatusListItem>
					<StatusListItem>
						<div>
							<span>Three days left to submit pleadings</span><br />
							<a className="text-blue-700" href="google.com" target="_blank">Submit now</a>
						</div>
					</StatusListItem>
				</ul>
			</div>
		</div>
	);
};

export default DisputeDetailMenu;
