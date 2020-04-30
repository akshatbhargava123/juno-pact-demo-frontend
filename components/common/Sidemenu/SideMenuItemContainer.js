import useHover from "@components/common/hooks/useHover";

const SideMenuItemContainer = ({ children, selected }) => {
	const [hoverRef, isHovered] = useHover();
	return (
		<div
			ref={hoverRef}
			className={`
				flex items-center text-sm h-8 px-4 cursor-pointer
				${selected ? 'text-gray-800 text-xs bg-gray-100' : 'hover:bg-blue-900'}
			`}
		>
			{typeof children === 'function' ? children({ isHovered }) : children}
		</div>
	);
};

export { SideMenuItemContainer };
