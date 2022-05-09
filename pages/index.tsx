import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Block, Button, Container } from 'contactless'
import styles from '../styles/Home.module.css'

const wellsWCH: {
	wellName: string
	status: 'Matched' | 'Action required' | 'No test'
	lastTested: string
}[] = [
	{
		wellName: 'Well n1',
		status: 'Matched',
		lastTested: '05/05/2022',
	},
	{
		wellName: 'Well n2',
		status: 'No test',
		lastTested: '',
	},
	{
		wellName: 'Well n3',
		status: 'Action required',
		lastTested: '05/05/2022',
	},
]

const wellsCA: { wellName: string; status: string; lastTested: string }[] = [
	{
		wellName: 'Well n4',
		status: 'Matched',
		lastTested: '05/05/2022',
	},
	{
		wellName: 'Well n5',
		status: 'Action required',
		lastTested: '05/05/2022',
	},
	{
		wellName: 'Well n6',
		status: 'No test',
		lastTested: '',
	},
]

const wellTable: {
	well: string
	platform: string
	type: string
	latestTestDate: string
	testResults: string
	mQuality: string
	status: string
}[] = [
	{
		well: 'A01',
		platform: 'WCH',
		type: 'Producer',
		latestTestDate: '04/05/2022',
		testResults: 'BHP/WHP/QOIL/GOR/WCT/GL',
		mQuality: 'PE2 / P1&P2',
		status: 'Matched',
	},
	{
		well: 'A01',
		platform: 'WCH',
		type: 'Producer',
		latestTestDate: '04/05/2022',
		testResults: 'BHP/WHP/QOIL/GOR/WCT/GL',
		mQuality: 'PE2 / P1&P2',
		status: 'Matched',
	},
	{
		well: 'A01',
		platform: 'WCH',
		type: 'Producer',
		latestTestDate: '04/05/2022',
		testResults: 'BHP/WHP/QOIL/GOR/WCT/GL',
		mQuality: 'PE2 / P1&P2',
		status: 'Matched',
	},
	{
		well: 'A01',
		platform: 'WCH',
		type: 'Producer',
		latestTestDate: '04/05/2022',
		testResults: 'BHP/WHP/QOIL/GOR/WCT/GL',
		mQuality: 'PE2 / P1&P2',
		status: 'Matched',
	},
	{
		well: 'A01',
		platform: 'WCH',
		type: 'Producer',
		latestTestDate: '04/05/2022',
		testResults: 'BHP/WHP/QOIL/GOR/WCT/GL',
		mQuality: 'PE2 / P1&P2',
		status: 'Matched',
	},
	{
		well: 'A01',
		platform: 'WCH',
		type: 'Producer',
		latestTestDate: '04/05/2022',
		testResults: 'BHP/WHP/QOIL/GOR/WCT/GL',
		mQuality: 'PE2 / P1&P2',
		status: 'Matched',
	},
]

const Home: NextPage = () => {
	return (
		<>
			<Container
				style={{
					display: 'flex',
					background: '#ccc',
					paddingTop: 100,
				}}
			>
				<Block size={6}>
					<h1 style={{ padding: 5, fontSize: '1.17em' }}>
						Platform: WCH
					</h1>
					<Container
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							padding: '0px!important',
						}}
					>
						{wellsWCH.map((i, index) => (
							<Block key={index} className={styles.well} size={6}>
								<div
									style={{
										background:
											i.status === 'Matched'
												? 'green'
												: i.status === 'Action required'
												? 'orange'
												: 'red',
									}}
								>
									<p>{i.wellName}</p>
									<p>Status: {i.status}</p>
									<p>Last tested: {i.lastTested}</p>
								</div>
							</Block>
						))}
					</Container>
				</Block>
				<Block size={6}>
					<h1 style={{ padding: 5 }}>Platform: CA</h1>
					<Container
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							padding: '0px!important',
						}}
					>
						{wellsCA.map((i, index) => (
							<Block key={index} className={styles.well} size={6}>
								<div
									style={{
										background:
											i.status === 'Matched'
												? 'green'
												: i.status === 'Action required'
												? 'orange'
												: 'red',
									}}
								>
									<p>{i.wellName}</p>
									<p>Status: {i.status}</p>
									<p>Last tested: {i.lastTested}</p>
								</div>
							</Block>
						))}
					</Container>
				</Block>
			</Container>
			<Container style={{ paddingTop: 50 }}>
				<h1
					style={{
						width: '100%',
						textAlign: 'center',
						fontSize: '2em',
					}}
				>
					Action required
				</h1>
				<Container>
					<Container className={styles.wellHead}>
						<div style={{ display: 'flex' }}>
							<Block size={1}>Well</Block>
							<Block size={1}>Platform</Block>
							<Block size={1}>Type</Block>
							<Block size={2}>Latest Test Date</Block>
							<Block size={2}>Test Results</Block>
							<Block size={3}>Correlation/Match Quality</Block>
							<Block size={2}>Status</Block>
						</div>
					</Container>
					{wellTable.map((i, index) => (
						<Container key={index} className={styles.wellLine}>
							<div style={{ display: 'flex' }}>
								<Block size={1}>{i.well}</Block>
								<Block size={1}>{i.platform}</Block>
								<Block size={1}>{i.type}</Block>
								<Block size={2}>{i.latestTestDate}</Block>
								<Block size={2}><p>{i.testResults}</p></Block>
								<Block size={3}><p>{i.mQuality}</p></Block>
								<Block size={2}>{i.status}</Block>
							</div>
						</Container>
					))}
				</Container>
			</Container>
		</>
	)
}

export default Home
