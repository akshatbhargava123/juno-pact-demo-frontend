
import { useDisclosure } from '@chakra-ui/core';
import { ChevronRight, ChevronDown } from 'react-feather';

const DisputeCard = ({ title, disputes, selectedDispute, defaultContentIsOpen = true }) => {
	const { isOpen, onToggle } = useDisclosure(defaultContentIsOpen);
	// FIXME: fix the height issue, overflow-scroll needs a fixed height
	return (
		<div>
			<div>
				<h3
					onClick={onToggle}
					className="cursor-pointer capitalize px-6 py-3 font-bold bg-white text-gray-700 text-lg flex items-center justify-between"
				>
					{title}
					<div>
						{isOpen ? <ChevronDown /> : <ChevronRight />}
					</div>
				</h3>
				<div
					className={`transition-duration-200 overflow-y-scroll`}
					style={{ height: isOpen ? '9rem' : 0 }}
				>
					{disputes.map(dispute => (
						<p
							key={dispute.name}
							className={`
								px-6 py-3 transition-duration-200 cursor-pointer font-semibold rounded-l
								${selectedDispute.name === dispute.name ? 'text-gold-400 bg-white font-bold italic' : 'text-gray-200'}
								${selectedDispute.name !== dispute.name && 'bg-gray-600 hover:bg-white hover:text-gray-700 hover:opacity-75'}
							`}
						>
							{dispute.name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export { DisputeCard };
