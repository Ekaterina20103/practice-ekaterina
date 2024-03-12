import { AboutMe, HelloScreen, MyWorks } from '@/widgets';

export default function Home() {
	return (
		<main>
			<HelloScreen
				title={
					<>
						Привет, я <span>Екатерина</span>
					</>
				}
				description={'Я студентка 4 курса, Веб-разработчик'}
			/>
			<AboutMe />
			<MyWorks />
		</main>
	);
}
