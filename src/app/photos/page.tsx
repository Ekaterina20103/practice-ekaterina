import { photos } from '@/data/photos';
import { HelloScreen, MyWorks } from '@/widgets';

export default function PhotosPage() {
	return (
		<main>
			<HelloScreen
				title={
					<>
						Фото<span>галерея</span>
					</>
				}
				description={'Здесь собраны мои фотографии за 19 лет жизни'}
			/>
			<MyWorks title='Фотогалерея' array={photos} />
		</main>
	);
}
