import styles from './Input.module.scss';

interface IInput {
	type: string;
	label: string;
	placeholder: string;
	props?: any;
}

export const Input = ({ type, label, placeholder, ...props }: IInput) => {
	return (
		<div className={styles.inputWrapper}>
			<label htmlFor={type} className={styles.label}>
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				className={styles.input}
				id={type}
				{...props}
			/>
		</div>
	);
};
