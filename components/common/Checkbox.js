import { useState } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/core';
import HoverCircularEffect from '@components/common/HoverCircularEffect';

const Checkbox = ({ defaultChecked = false }) => {
	const [checked, setChecked] = useState(defaultChecked);
	return (
		<HoverCircularEffect onParentClick={() => setChecked(!checked)}>
			<ChakraCheckbox
				size="md"
				color="gray.900"
				borderColor="gray.400"
				isChecked={checked}
				onChange={setChecked}
			/>
		</HoverCircularEffect>
	);
};

export default Checkbox;
