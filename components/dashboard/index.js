import Header from "@components/common/header";
import ProfileMenu from "@components/common/ProfileMenu";
import DisputeDetailMenu from "@components/common/DisputeDetailMenu";

const Dashboard = () => {
	return (
		<div>
			<Header />
			<div className="flex justify-between page-content">
				<div className="absolute left-0 profile-menu-container">
					<ProfileMenu />
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
				.profile-menu-container {
					min-width: 26rem;
					height: calc(100vh - 4rem);
				}
				.dispute-menu-container {
					min-width: 20rem;
				}
			`}</style>
		</div>
	);
};

export default Dashboard;
