"use server";

import ActivitySection from './ActivitySection';
import { redirect } from 'next/navigation';

export default async function Page() {
	return (
		<>
			<section className="pt-[70px]">
				<ActivitySection />
			</section>
		</>
	);
}