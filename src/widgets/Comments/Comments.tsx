import { IPost } from '@/shared/types';
import { BlueButton, Title } from '@/shared/ui';
import Image from 'next/image';
import styles from './Comments.module.scss';

interface IComments {
	post: IPost;
}

export const Comments = ({ post }: IComments) => {
	return (
		<div className={styles.commentsWidget}>
			<Title text={'Комментарии'} className={styles.title} />
			<div className={styles.comments}>
				{post.comments &&
					post.comments.map((comment, index) => (
						<div className={styles.comment} key={index}>
							<div className={styles.photo}>
								{comment.photo && (
									<Image
										src={comment.photo}
										alt='Фото'
										className={styles.img}
									/>
								)}
							</div>
							<div className={styles.user}>
								<div className={styles.name}>
									{comment.userFirstName && <p>{comment.userFirstName}</p>}
									{comment.userLastName && <p>{comment.userLastName}</p>}
								</div>
								<p className={styles.text}>{comment.text}</p>
								<time dateTime={comment.createdTime} className={styles.date}>
									{comment.createdTime}
								</time>
							</div>
						</div>
					))}
				<div className={styles.button}>
					<BlueButton text='Добавить комментарий' link='#' />
				</div>
			</div>
		</div>
	);
};

export default Comments;
