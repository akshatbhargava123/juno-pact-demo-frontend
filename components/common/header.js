const Header = () => {
	return (
		<div className="h-16 bg-gray-800 flex justify-between items-center px-10">
			<img src="images/logo.svg" alt="logo" width="160px" />
			<div className="font-semibold cursor-pointer bg-gold-400 hover:bg-gold-200 p-1 px-2 rounded transition duration-200">
				Sign out
			</div>
		</div>
	);
};

export default Header;
