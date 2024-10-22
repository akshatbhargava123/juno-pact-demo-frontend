import Link from 'next/link';
import { Mail, Edit3, ChevronRight } from 'react-feather';
import { BreadcrumbItem, Breadcrumb as ChakraBreadcrumb, BreadcrumbLink } from '@chakra-ui/core';
import UserBadge from '@components/common/UserBadge';

const Breadcrumb = () => {
	return (
		<div className="w-full flex items-center">
			<ChakraBreadcrumb
				fontWeight="medium" fontSize="sm"
				spacing="8px"
				separator={<ChevronRight strokeWidth="1px" size="20px" />}
			>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">
						<div className="flex-center">
							<p className="mr-2">Rahul VS Yes Bank</p>
							<UserBadge role="mediator" className="px-2 py-px no-underline" />
						</div>
					</BreadcrumbLink>
				</BreadcrumbItem>
			
				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href="/mails">Mails</BreadcrumbLink>
				</BreadcrumbItem>
			</ChakraBreadcrumb>
			<div className="ml-auto my-5 flex">
				<Link href="mails">
					<a className="w-24 text-center flex-center hover:text-blue-500">
						<Mail strokeWidth="1px" size="20px" />
						<span className="ml-2 font-thin">Mails</span>
					</a>
				</Link>
				<Link href="notes">
					<a className="w-24 text-center flex-center hover:text-blue-500">
						<Edit3 strokeWidth="1px" size="20px" />
						<span className="ml-2 font-thin">Notes</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Breadcrumb;
