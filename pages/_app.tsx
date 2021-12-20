import '../styles/globals.css'
import type { AppProps } from 'next/app'
import IconImage from '../public/emoji_nature_white_24dp.svg';
import PersonImage from '../public/person_white_24dp.svg';
import SettingsImage from '../public/settings_white_24dp.svg';
import LogOutImage from '../public/logout_white_24dp.svg';
import Image from 'next/image';
import { MoralisProvider, useMoralis } from 'react-moralis';
import Navbar from '../components/Navbar';
import SearchAndFollowSection from '../components/SearchAndFollowSection';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<MoralisProvider serverUrl={process.env.NEXT_PUBLIC_URL!} appId={process.env.NEXT_PUBLIC_ID!}>
			<div className='flex w-screen justify-between bg-black'>
				<Navbar />
				<div className='w-6/12 border-r text-white'>
					<Component {...pageProps} />
				</div>
				<SearchAndFollowSection />
			</div>
		</MoralisProvider>
	)
}

export default MyApp
