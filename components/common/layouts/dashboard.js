import Header from "@components/common/header";
import Breadcrumb from "@components/common/breadcrumb";

const withDashboardLayout = (children) => {
	return () => (
		<div>
			<Header />
			<div className="flex justify-between root-container">
				<div className="bg-gray-500 menu">
					<div>Left side menu here</div>
				</div>
				<div className="w-full mx-10">
					<div className="dashboard-content">
						{children()}
					</div>
				</div>
				<div className="bg-gray-700 additional-menu-space">
					<div>
						Right side details here
					</div>
				</div>
			</div>
			<style jsx>{`
				.root-container {
					height: calc(100vh - 2rem);	
				}
				.menu {
					min-width: 16rem;
					height: calc(100vh - 2rem);
					transition: .5s all;
				}
				.dashboard-content {
					animation: fadein 200ms;
				}
				.additional-menu-space {
					min-width: 24rem;
				}
				@keyframes fadein {
					from { opacity: 0; transform: scale(0.7); }
					to   { opacity: 1; transform: scale(1); }
				}
				.menu:hover {
					left: 0;
				}
			`}</style>
		</div>
	);
};

export default withDashboardLayout;
