import Header from "@components/common/header";
import DisputeDetailMenu from "@components/dashboard/DisputeDetailMenu";
import ExploreDisputeSidebar from "@components/dashboard/ExploreDisputeSidebar";

const withDashboardLayout = (children) => {
	return () => (
		<div>
			<Header />
			<div className="flex justify-between page-content">
				<div className="absolute left-0 explore-disputes-sidebar-container">
					<ExploreDisputeSidebar />
				</div>
				<div className="w-full mx-10 my-5">
					{children()}
				</div>
				<div className="dispute-menu-container">
					<DisputeDetailMenu />
				</div>
			</div>
			<style jsx>{`
				.page-content {
					height: calc(100vh - 3rem);	
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
