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
	console.log(notes);
	return (
		<div className="w-full">
			<div className="flex justify-between">
				<SearchInput
					onChange={searchText => {
						if (!searchText) return setNotes(NotesMockData);
						setNotes(notes.filter(note => note.title.toLowerCase().indexOf(searchText) !== -1))
					}}
					className="w-2/3"
					placeholder="Search your Notes by title, description..."
				/>
				<Button onClick={() => console.log('hello')}>New Note</Button>
			</div>
			<div className="flex justify-start flex-wrap m-5">
				<FlipMove
					typeName="ul"
					className="flex flex-wrap"
					staggerDurationBy="30"
					duration={300}
					enterAnimation="elevator"
					leaveAnimation="elevator"
				>
					{notes.map((note, i) => (
						<div key={i}>
							<NoteCard
								title={note.title}
								description={note.description}
							/>
						</div>
					))}
				</FlipMove>
			</div>
		</div>
	);
};

export { Notes };
