import { Footer, Nav } from '@/widgets';
import type { Metadata } from 'next';
import './styles';

export const metadata: Metadata = {
	title: 'Belyaeva Ekaterina',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
