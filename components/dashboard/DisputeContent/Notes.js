import { useState } from 'react';
import { Button } from "@chakra-ui/core"
import SearchInput from "@components/common/SearchInput";
import { NoteCard } from "./NoteCard";

const NotesMockData = [
	{
		title: 'My first Note',
		description: `This is the description of the first note`,
	},
	{
		title: 'My first Note',
		description: `This is the description of the first note`,
	},
	{
		title: 'My first Note',
		description: `This is the description of the first note`,
	},
	{
		title: 'My first Note',
		description: `This is the description of the first note`,
	},
	{
		title: 'My first Note',
		description: `This is the description of the first note`,
	},
	{
		title: 'My first Note',
		description: `This is the description of the first note`,
	},
];

const Notes = () => {
	const [notes, setNotes] = useState(NotesMockData);
	return (
		<div className="w-full">
			<div className="flex justify-between">
				<SearchInput
					className="w-2/3"
					placeholder="Search your Notes by title, description..."
				/>
				<Button onClick={() => console.log('hello')}>New Note</Button>
			</div>
			<div className="flex justify-start flex-wrap m-5">
				{notes.map((note, i) => (
					<NoteCard
						key={i}
						title={note.title}
						description={note.description}
					/>
				))}
			</div>
		</div>
	);
};

export { Notes };
