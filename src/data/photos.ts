import { IProject } from '@/shared/types';
import photo1 from './images/my-photos/photo1.jpeg';
import photo2 from './images/my-photos/photo2.jpeg';
import photo3 from './images/my-photos/photo3.jpeg';
import photo4 from './images/my-photos/photo4.jpeg';

export const photos: IProject[] = [
	{
		id: 1,
		photos: [photo3.src],
		noLink: true,
	},
	{
		id: 2,
		photos: [photo2.src],
		noLink: true,
	},
	{
		id: 3,
		photos: [photo1.src],
		noLink: true,
	},
	{
		id: 4,
		photos: [photo4.src],
		noLink: true,
	},
];
