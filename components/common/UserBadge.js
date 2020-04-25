const roleColorMap = {
	MEDIATOR: 'green',
	PLAINTIFF: 'yellow',
	DEFENDANT: 'orange',
};

const UserBadge = ({ role = '', className = '' }) => {
	const ROLE = role.toUpperCase();
	const color = roleColorMap[ROLE];
	return (
		<div className={`font-bold text-${color}-700 bg-${color}-300 text-xs leading-snug text-center p-0 m-0 ${className}`}>
			{role}
		</div>
	);
};

export default UserBadge;
