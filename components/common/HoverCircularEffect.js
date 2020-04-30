import { Tooltip } from "@chakra-ui/core";
import useHover from "@components/common/hooks/useHover";

// TODO: remove this and use the generic version everywhere
const HoverCircularEffect = ({
	children,
	tooltipOptions,
	hoverBgColor = 'gray',
	className = 'p-2',
	onParentClick = () => {},
}) => {
	const [hoverRef, isHovered] = useHover();
	tooltipOptions = tooltipOptions || {};
	if (!tooltipOptions.label) {
		tooltipOptions.isOpen = false;
	}
	return (
		<Tooltip placement="top" hasArrow {...tooltipOptions}>
			<div className="rounded-full" onKeyPress={e => e.which === 13 && onParentClick()}>
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

export default HoverCircularEffect;
