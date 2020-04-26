import Link from 'next/link'
import { useState } from 'react';
import { Mails } from './Mails';
import { Notes } from './Notes';
import { DisputeTabs, DisputeTabsOptions } from './DisputeTabs';
import { Mail, Edit3, ChevronRight } from 'react-feather';
import { BreadcrumbItem, Breadcrumb, BreadcrumbLink } from '@chakra-ui/core';
import UserBadge from '@components/common/UserBadge';

const DisputeContent = () => {
	const [selectedTab, setSelectedTab] = useState(DisputeTabsOptions.MY_MAILS);
	return (
		<div>
			{false && <DisputeTabs
				selectedTab={selectedTab}
				onTabChange={setSelectedTab}
			/>}
			<div className="w-full flex items-center">
				<Breadcrumb
					fontWeight="medium" fontSize="sm"
					spacing="8px"
					separator={<ChevronRight strokeWidth="1px" size="20px" />}
				>
					<BreadcrumbItem>
						<BreadcrumbLink href="/about">
							<div className="flex-center">
								<p className="mr-2">Rahul VS Yes Bank</p>
								<UserBadge role="mediator" className="px-2 py-px no-underline" />
							</div>
						</BreadcrumbLink>
					</BreadcrumbItem>
				
					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href="/about">Mails</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<div className="ml-auto my-5 flex">
					<Link href="#">
						<a className="w-24 text-center flex-center hover:text-blue-500" onClick={() => setSelectedTab(DisputeTabsOptions.MY_MAILS)}>
							<Mail strokeWidth="1px" size="20px" />
							<span className="ml-2 font-thin">Mails</span>
						</a>
					</Link>
					<Link href="#">
						<a className="w-24 text-center flex-center hover:text-blue-500" onClick={() => setSelectedTab(DisputeTabsOptions.NOTES)}>
							<Edit3 strokeWidth="1px" size="20px" />
							<span className="ml-2 font-thin">Notes</span>
						</a>
					</Link>
				</div>
			</div>
			<div className="my-4">
				{selectedTab === DisputeTabsOptions.MY_MAILS && <Mails />}
				{selectedTab === DisputeTabsOptions.NOTES && <Notes />}
			</div>
		</div>
	);
};

export default DisputeContent;