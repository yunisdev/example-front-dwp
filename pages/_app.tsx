import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
	ContactlessProvider,
	Container,
	createTheme,
	Navbar,
	NavLink,
	Button,
} from 'contactless';

function MyApp({ Component, pageProps }: AppProps) {
	const theme = createTheme({ colors: {} });
	return (
		<ContactlessProvider theme={theme}>
			<>
				<Navbar
					brand={<b>Digital PE</b>}
					style={{ background: 'white' }}
				>
					<Button style={{marginLeft:8}} color="purple">Platform ▼</Button>
					<Button style={{marginLeft:8}} color="purple">Status ▼</Button>
					<Button style={{marginLeft:8}} color="purple">Well Name ▼</Button>
					<Button style={{marginLeft:8}} color="purple">Well Type ▼</Button>
				</Navbar>
				<Container style={{ padding: 0 }}>
					<Component {...pageProps} />
				</Container>
			</>
		</ContactlessProvider>
	);
}

export default MyApp;
