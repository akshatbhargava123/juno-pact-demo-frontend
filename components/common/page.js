import Head from 'next/head';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

const Page = ({ title, children, layoutProvider }) => {
	if (layoutProvider) children = layoutProvider(children);
	return (
		<ThemeProvider>
			<CSSReset />
			<Head>
				<title>{title} - JunoPact</title>
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
				<meta charSet="utf-8" />
			</Head>
			<div>
				{children()}
			</div>
		</ThemeProvider>
	);
};

export default Page;
