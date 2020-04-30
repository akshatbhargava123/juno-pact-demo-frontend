import useHover from "@components/common/hooks/useHover";

const SideMenuItemContainer = ({ children, selected, hoverEffect = true }) => {
	const [hoverRef, isHovered] = useHover();
	return (
		<div
			ref={hoverRef}
			className={`
				flex items-center text-sm h-8 px-4 cursor-pointer
				${selected ? 'text-white text-xs bg-blue-600' : hoverEffect && 'hover:bg-blue-900'}
			`}
		>
			{typeof children === 'function' ? children({ isHovered }) : children}
		</div>
	);
};

export { SideMenuItemContainer };
