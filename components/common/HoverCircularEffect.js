const HoverCircularEffect = ({ onParentClick, children, hoverBgColor = 'gray', hoverTextColor = 'gray' }) => {
	return (
		<div
			tabIndex={0}
			className={`
				p-4 flex-center rounded transition-duration-200 cursor-pointer rounded-full outline-none
				hover:bg-${hoverBgColor}-300 hover:text-red-500
				focus:bg-${hoverBgColor}-300
				active:bg-${hoverBgColor}-400
			`}
			onClick={(e) => {
				if (onParentClick) onParentClick();
				e.preventDefault();
			}}
		>
			{children}
		</div>
	);
};

export default HoverCircularEffect;
