import { Contacts, HelloScreen } from '@/widgets';

export default function ContactsPage() {
	return (
		<main>
			<HelloScreen
				title={
					<>
						Полезные <span>ссылки</span>
					</>
				}
				description={'Для связи со мной'}
			/>
			<Contacts />
		</main>
	);
}
