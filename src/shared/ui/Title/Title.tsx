import { ITitle } from '@/shared/types';
import styles from './Title.module.scss';

export const Title = ({ text, className }: ITitle) => {
	return <h2 className={`${styles.title} ${className}`}>{text}</h2>;
};
