import Head from 'next/head';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

const Page = ({ title, children }) => {
	return (
		<ThemeProvider>
			<CSSReset />
			<Head>
				<title>{title} - JunoPact</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/font-proxima-nova@1.0.1/style.css"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.rawgit.com/mfd/f3d96ec7f0e8f034cc22ea73b3797b59/raw/856f1dbb8d807aabceb80b6d4f94b464df461b3e/gotham.css"
				/>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
			</Head>
			<div>
				{children()}
			</div>
		</ThemeProvider>
	);
};

export default Page;
