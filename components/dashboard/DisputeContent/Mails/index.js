import { Mail as MailIcon } from 'react-feather';
import { Button } from '@chakra-ui/core';
import SearchInput from '@components/common/SearchInput';
import { MailControls } from './MailControls';
import { Mail } from './Mail';

const Mails = () => {
	return (
		<div className="w-full">
			<div className="flex justify-between">
				<SearchInput
					className="w-2/3 ml-6"
					onChange={() => {}}
					placeholder="Search mail"
				/>
				<Button
					className="bg-blue-600 hover:bg-blue-300"
					onClick={() => console.log('hello')}
				>
					<MailIcon size="20px" className="mr-2" />
					Compose
				</Button>
			</div>
			<div className="mt-10">
				<MailControls />
				<Mail />
				<Mail />
				<Mail read />
				<Mail read />
				<Mail read />
			</div>
		</div>
	);
};

export { Mails };
