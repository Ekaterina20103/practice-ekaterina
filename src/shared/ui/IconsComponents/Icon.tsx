import type { ReactNode } from 'react';

type TIcon = {
	icon: ReactNode;
};

export const Icon = ({ icon }: TIcon) => {
	return icon;
};
