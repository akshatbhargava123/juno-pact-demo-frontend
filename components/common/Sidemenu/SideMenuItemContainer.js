import useHover from "@components/common/hooks/useHover";

const SideMenuItemContainer = ({ children }) => {
	const [hoverRef, isHovered] = useHover();
	return (
		<div
			ref={hoverRef}
			className="flex items-center hover:bg-blue-900 text-sm py-2 px-4 cursor-pointer"
		>
			{typeof children === 'function' ? children({ isHovered }) : children}
		</div>
	);
};

export { SideMenuItemContainer };
