import { IPost } from '@/shared/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Post.module.scss';

interface IPostProps {
	post: IPost;
}

export const Post = ({ post }: IPostProps) => {
	return (
		<Link href={`/blog/${post.id}`} className={styles.post}>
			<Image src={post.photos[0]} alt='Заставка' className={styles.img} />
			<div className={styles.content}>
				<h3 className={styles.postTitle}>{post.title}</h3>
				<p className={styles.postDescription}>{post.description}</p>
				{/* TODO: Поменять на <date> */}
				<p className={styles.postDate}>{post.createdTime}</p>
			</div>
		</Link>
	);
};
