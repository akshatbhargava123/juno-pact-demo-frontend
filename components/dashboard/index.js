import Header from "@components/common/header";
import DisputeContent from "@components/dashboard/DisputeContent";
import DisputeDetailMenu from "@components/dashboard/DisputeDetailMenu";
import ExploreDisputeSidebar from "@components/dashboard/ExploreDisputeSidebar";

const Dashboard = () => {
	return (
		<div>
			<Header />
			<div className="flex justify-between page-content">
				<div className="absolute left-0 explore-disputes-sidebar-container">
					<ExploreDisputeSidebar />
				</div>
				<div className="w-full mx-10 my-5">
					<DisputeContent />
				</div>
				<div className="dispute-menu-container">
					<DisputeDetailMenu />
				</div>
			</div>
			<style jsx>{`
				.page-content {
					height: calc(100vh - 4rem);	
				}
				.explore-disputes-sidebar-container {
					min-width: 48rem;
					height: calc(100vh - 4rem);
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

export default Dashboard;
