import { Tooltip } from "@chakra-ui/core";
import useHover from "@components/common/hooks/useHover";

const HoverEffect = ({
	children,
	tooltipOptions,
	hoverBgColor: hoverColor = 'gray',
	className = 'p-1',
	hidden = false,
	onParentClick = () => {},
}) => {
	const [hoverRef, isHovered] = useHover();
	tooltipOptions = tooltipOptions || {};
	if (!tooltipOptions.label) {
		tooltipOptions.isOpen = false;
	}

	return (
		<Tooltip
			showDelay={400}
			placement="top"
			color="white"
			backgroundColor="black"
			p="0.5rem"
			fontSize="0.75rem"
			rounded="0.25rem"
			hasArrow {...tooltipOptions}
		>
			<div hidden={hidden} className="rounded-md" onKeyPress={e => e.which === 13 && onParentClick()}>
				<div
					tabIndex={0}
					ref={hoverRef}
					className={`
						flex-center rounded-md transition-duration-200 cursor-pointer outline-none
						hover:bg-${hoverColor}-200 hover:text-${hoverColor}-600
						focus:bg-${hoverColor}-200 focus:text-${hoverColor}-600
						active:bg-${hoverColor}-200 active:text-${hoverColor}-600
						${className}
					`}
					onClick={(e) => {
						onParentClick();
						e.preventDefault();
					}}
				>
					{typeof children === 'object' ? children : children({ isHovered })}
				</div>
			</div>
		</Tooltip>
	);
};

export default HoverEffect;
