import useHover from "@components/common/hooks/useHover";
import { Trash2, Copy, Mail } from "react-feather";
import HoverCircularEffect from "@components/common/HoverCircularEffect";

const NoteCard = ({ title, description }) => {
	const [hoverRef, isHovered] = useHover();
	return (
		<div
			ref={hoverRef}
			style={{ maxHeight: '18.5rem', height: '14.5rem' }}
			className="relative overflow-hidden w-48 border p-3 m-1 shadow-sm hover:shadow-md transition-duration-200 cursor-pointer"
		>
			<h1 className="font-semibold">{title}</h1>
			<p className="text-sm">{description}</p>
			<div className="absolute right-0 bottom-0 flex m-1" hidden={!isHovered}>
				<HoverCircularEffect tooltipOptions={{ label: 'Send as Email' }}>
					{({ isHovered }) => (
						<Mail size="20px" className={`text-${isHovered ? 'blue' : 'gray'}-500`} />
					)}
				</HoverCircularEffect>
				<HoverCircularEffect tooltipOptions={{ label: 'Clone Note' }}>
					{({ isHovered }) => (
						<Copy size="20px" className={`text-${isHovered ? 'blue' : 'gray'}-500`} />
					)}
				</HoverCircularEffect>
				<HoverCircularEffect tooltipOptions={{ label: 'Delete Note' }}>
					{({ isHovered }) => (
						<Trash2 size="20px" className={`text-${isHovered ? 'red	' : 'gray'}-500`} />
					)}
				</HoverCircularEffect>
			</div>
		</div>
	);
};

export { NoteCard };
