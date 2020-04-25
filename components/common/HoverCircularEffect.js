import { Tooltip } from "@chakra-ui/core";
import useHover from "@components/common/hooks/useHover";

const HoverCircularEffect = ({
	onParentClick,
	children,
	tooltipOptions,
	hoverBgColor = 'gray',
	className = 'p-2'
}) => {
	const [hoverRef, isHovered] = useHover();
	tooltipOptions = tooltipOptions || {};
	if (!tooltipOptions.label) {
		tooltipOptions.isOpen = false;
	}
	return (
		<Tooltip placement="top" hasArrow {...tooltipOptions}>
			<div className="rounded-full">
				<div
					tabIndex={0}
					ref={hoverRef}
					className={`
						flex-center rounded transition-duration-200 cursor-pointer rounded-full outline-none
						hover:bg-${hoverBgColor}-300 hover:text-red-500
						focus:bg-${hoverBgColor}-300
						active:bg-${hoverBgColor}-400
						${className}
					`}
					onClick={(e) => {
						if (onParentClick) onParentClick();
						e.preventDefault();
					}}
				>
					{typeof children === 'object' ? children : children({ isHovered })}
				</div>
			</div>
		</Tooltip>
	);
};

export default HoverCircularEffect;
