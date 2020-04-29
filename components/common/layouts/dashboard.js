import Header from "@components/common/header";
import Breadcrumb from "@components/common/breadcrumb";
import DisputeDetailMenu from "@components/arbitrator-dashboard/DisputeDetailMenu";
import ExploreDisputeSidebar from "@components/arbitrator-dashboard/ExploreDisputeSidebar";

const withDashboardLayout = (children) => {
	return () => (
		<div>
			<Header />
			<div className="flex justify-between page-content">
				<div className="absolute left-0 explore-disputes-sidebar-container">
					<ExploreDisputeSidebar />
				</div>
				<div className="w-full mx-10">
					<div className="w-full mx-5 my-5">
						<Breadcrumb />
						<div className="dashboard-content">
							{children()}
						</div>
					</div>
				</div>
				<div className="dispute-menu-container">
					<DisputeDetailMenu />
				</div>
			</div>
			<style jsx>{`
				.page-content {
					height: calc(100vh - 3rem);	
				}
				.dashboard-content {
					animation: fadein 500ms;
				}
				@keyframes fadein {
					from { opacity: 0; transform: scale(0.7); }
					to   { opacity: 1; transform: scale(1); }
				}
				.explore-disputes-sidebar-container {
					min-width: 48rem;
					height: calc(100vh - 3rem);
					left: -48rem;
					transition: .5s all;
				}
				.explore-disputes-sidebar-container:hover {
					left: 0;
				}
				.dispute-menu-container {
					min-width: 20rem;
				}
			`}</style>
		</div>
	);
};

export default withDashboardLayout;
