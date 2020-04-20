import { useState } from 'react';
import FlipMove from 'react-flip-move';
import { Button } from '@chakra-ui/core';
import SearchInput from '@components/common/SearchInput';
import { NoteCard } from "./NoteCard";

const NotesMockData = [
	{
		title: 'My first Note',
		description: `This is the description of the first note`,
	},
	{
		title: 'My second Note',
		description: `This is the description of the first note`,
	},
	{
		title: 'My third Note',
		description: `This is the description of the first note`,
	},
	{
		title: 'My fourth Note',
		description: `This is the description of the first note`,
	},
	{
		title: 'My fifth Note',
		description: `This is the description of the first note`,
	},
	{
		title: 'My first Note',
		description: `This is the description of the first note`,
	},
];

const Notes = () => {
	const [notes, setNotes] = useState(NotesMockData);
	const [filteredNotes, setFilteredNotes] = useState(NotesMockData);

	const onSearch = searchText => {
		if (!searchText) return setFilteredNotes(notes);
		const filtered = notes.filter(note => note.title.toLowerCase().indexOf(searchText) !== -1);
		setFilteredNotes(filtered);
	};

	return (
		<div className="w-full">
			<div className="flex justify-between">
				<SearchInput
					className="w-2/3 ml-6"
					onChange={onSearch}
					placeholder="Search your Notes by title, description..."
				/>
				<Button onClick={() => console.log('hello')}>New Note</Button>
			</div>
			{!!filteredNotes.length && (
				<div className="flex justify-start flex-wrap m-5">
					<FlipMove
						typeName="ul"
						className="flex flex-wrap"
						staggerDurationBy="30"
						duration={300}
						enterAnimation="elevator"
						leaveAnimation="elevator"
					>
						{filteredNotes.map((note, i) => (
							<div key={i}>
								<NoteCard
									title={note.title}
									description={note.description}
								/>
							</div>
						))}
					</FlipMove>
				</div>
			)}
			{!filteredNotes.length && !!notes.length && (
				<div className="flex flex-col items-center">
					<img className="w-2/5 mt-10" src="/images/no-data-2.svg" alt="no-results" />
					<span className="text-lg mt-5">No Results for your search</span>
				</div>
			)}
			{!notes.length && (
				<div className="flex flex-col items-center">
					<img className="w-2/5 mt-10" src="/images/no-data-2.svg" alt="add notes image" />
					<span className="text-lg mt-5">Add your personal Notes here</span>
					<p className="text-sm text-gray-600">All emails that you star will also appear here as a note.</p>
				</div>
			)}
		</div>
	);
};

export { Notes };
