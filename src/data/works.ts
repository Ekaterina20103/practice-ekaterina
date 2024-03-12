import dixie1 from '@/data/projectPhotos/dixie-palms-photos/dixie1.png';
import mock1 from '@/data/projectPhotos/easy-mock-data-photos/mock1.png';
import type { IProject } from '@/shared/types';

export const works: IProject[] = [
	{
		id: 0,
		title: 'Катерок',
		subtitle:
			'Магазин выпечки предлагает широкий ассортимент свежих и вкусных хлебобулочных изделий. Здесь можно найти такие популярные хлебобулочные изделия, как хлеб, багеты, булки, пирожные, печенье и многое другое.',
		description: '',
		photos: [dixie1.src],
		repo: 'https://ekaterina20103.github.io/katerok/',
	},
	{
		id: 1,
		title: 'Фермерское хозяйство',
		subtitle:
			'Фермерское хозяйство является одним из важных секторов сельского хозяйства. Оно охватывает широкий спектр деятельности, включающий возделывание земли, выращивание растений и животных, производство и переработку сельскохозяйственной продукции',
		description: '',
		photos: [mock1.src],
		repo: 'https://ekaterina20103.github.io/selhoz/',
	},
];
