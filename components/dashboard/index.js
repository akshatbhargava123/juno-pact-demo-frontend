import Header from "@components/common/header";
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
				<div className="w-3/5">
					<h1>Person related dispute menu here</h1>
				</div>
				<div className="w-1/5 dispute-menu-container">
					<DisputeDetailMenu />
				</div>
			</div>
			<style jsx>{`
				.page-content {
					height: calc(100vh - 4rem);	
				}
				.explore-disputes-sidebar-container {
					min-width: 26rem;
					height: calc(100vh - 4rem);
					left: -25rem;
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
