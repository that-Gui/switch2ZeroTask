import Hero from '@/components/Hero';

import { UserProvider } from '../app/context/user';

import Summary from '@/components/Summary';
import DataSection from '@/components/DataSection';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center gap-24 p-24'>
			<Hero />
			<UserProvider>
				<Summary />
				<DataSection />
			</UserProvider>
		</main>
	);
}
