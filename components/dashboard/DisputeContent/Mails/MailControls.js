import { useRef } from "react";
import { ChevronDown } from "react-feather"
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/core";
import Checkbox from "@components/common/Checkbox"

const MailControls = () => {
	const containerRef = useRef();
	return (
		<div className="bg-gray-200 flex items-center px-5">
			<div className="flex items-center">
				<Checkbox />
				<Popover trigger="click" initialFocusRef={containerRef}>
					<PopoverTrigger>
						<div>
							<ChevronDown className="text-gray-500 cursor-pointer" />
						</div>
					</PopoverTrigger>
					<PopoverContent
						zIndex={50}
						width="14rem"
						placement="bottom-start"
					>
						<div ref={containerRef} className="outline-none border-none flex flex-col items-start justify-col">
							<button className="w-full py-1 px-2 hover:bg-gray-200 cursor-pointer">All</button>
							<button className="w-full py-1 px-2 hover:bg-gray-200 cursor-pointer">None</button>
							<button className="w-full py-1 px-2 hover:bg-gray-200 cursor-pointer">Read</button>
							<button className="w-full py-1 px-2 hover:bg-gray-200 cursor-pointer">Unread</button>
						</div>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	);
};

export { MailControls };
