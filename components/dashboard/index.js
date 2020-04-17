import Header from "@components/common/header";
import ProfileMenu from "@components/common/ProfileMenu";

const Dashboard = () => {
	return (
		<div>
			<Header />
			<div className="flex justify-between page-content">
				<div className="w-1/5 profile-menu-container">
					<ProfileMenu />
				</div>
				<div className="w-3/5">
					<h1>Person related dispute menu here</h1>
				</div>
				<div className="w-1/5 dispute-menu-container">
					<h1>Project related menu will come here</h1>
				</div>
			</div>
			<style jsx>{`
				.page-content {
					height: calc(100vh - 4rem);	
				}
				.profile-menu-container {
					min-width: 18rem;
				}
				.dispute-menu-container {
					min-width: 18rem;
				}
			`}</style>
		</div>
	);
};

export default Dashboard;
