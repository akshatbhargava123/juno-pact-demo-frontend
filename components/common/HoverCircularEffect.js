import useHover from "@components/common/hooks/useHover";

const HoverCircularEffect = ({
	onParentClick,
	children,
	hoverBgColor = 'gray',
	className = 'p-2'
}) => {
	const [hoverRef, isHovered] = useHover();
	return (
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
	);
};

export default HoverCircularEffect;
