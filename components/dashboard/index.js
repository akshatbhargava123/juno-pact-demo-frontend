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
				<div className="w-full mx-10 my-5">
					<div className="flex justify-between">
						<div className="w-full py-3 cursor-pointer bg-gray-100 rounded-t-lg text-center hover:bg-gray-300">
							My Mails
						</div>
						<div className="w-full py-3 cursor-pointer bg-gray-100 rounded-t-lg text-center hover:bg-gray-300">
							Filings
						</div>
						<div className="w-full py-3 cursor-pointer bg-gray-100 rounded-t-lg text-center hover:bg-gray-300">
							Correspondence
						</div>
						<div className="w-full py-3 cursor-pointer bg-gray-100 rounded-t-lg text-center hover:bg-gray-300">
							Notes
						</div>
					</div>
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
