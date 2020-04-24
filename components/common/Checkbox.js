import { useState } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/core';

const Checkbox = ({ defaultChecked = false }) => {
	const [checked, setChecked] = useState(defaultChecked);
	return (
		<div
			className="p-4 flex-center rounded transition-duration-200 cursor-pointer hover:bg-gray-300 hover:text-yellow-700 rounded-full"
			onClick={() => setChecked(!checked)}
		>
			<ChakraCheckbox
				size="md"
				color="gray.900"
				borderColor="gray.400"
				isChecked={checked}
				onChange={setChecked}
			/>
		</div>
	);
};

export default Checkbox;
