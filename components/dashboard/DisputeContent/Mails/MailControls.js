import { useRef } from "react";
import { ChevronDown, RefreshCw, Trash, Eye, EyeOff, Star, Edit3 } from "react-feather"
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/core";
import Checkbox from "@components/common/Checkbox"
import HoverCircularEffect from "@components/common/HoverCircularEffect";

const MailControls = ({ selectedMails }) => {
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
						width="8rem"
						placement="bottom"
					>
						<div ref={containerRef} className="outline-none border-none flex flex-col">
							<button className="py-1 px-2 hover:bg-gray-200 cursor-pointer">All</button>
							<button className="py-1 px-2 hover:bg-gray-200 cursor-pointer">None</button>
							<button className="py-1 px-2 hover:bg-gray-200 cursor-pointer">Read</button>
							<button className="py-1 px-2 hover:bg-gray-200 cursor-pointer">Unread</button>
						</div>
					</PopoverContent>
				</Popover>
			</div>
			<div className="mx-2 flex">
				<div className="mr-3">
					<HoverCircularEffect onParentClick={console.log}>
						<RefreshCw className="text-gray-500" size="20px" />
					</HoverCircularEffect>
				</div>
				{true && (
					<>
						<div className="mr-3">
							<HoverCircularEffect onParentClick={console.log}>
								<Eye className="text-gray-500" size="20px" />
							</HoverCircularEffect>
						</div>
						<div className="mr-3">
							<HoverCircularEffect onParentClick={console.log}>
								<EyeOff className="text-gray-500" size="20px" />
							</HoverCircularEffect>
						</div>
						<div className="mr-3">
							<HoverCircularEffect onParentClick={console.log}>
								<Trash className="text-gray-500" size="20px" />
							</HoverCircularEffect>
						</div>
						<div className="mr-3">
							<HoverCircularEffect onParentClick={console.log}>
								<Star className="text-gray-500" size="20px" />
							</HoverCircularEffect>
						</div>
						<div className="mr-3">
							<HoverCircularEffect onParentClick={console.log}>
								<Edit3 className="text-gray-500" size="20px" />
							</HoverCircularEffect>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export { MailControls };
