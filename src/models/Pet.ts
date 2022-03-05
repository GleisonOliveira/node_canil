import { IImage } from '../interfaces/IImage';

type PetType = 'dog' | 'cat' | 'fish';
type PetSex = 'M' | 'F';
type PetSexName = 'Masculino' | 'Feminino';

export type Pet = {
	name: string;
	type: PetType;
	image: IImage;
	color: string;
	sex: {
		type: PetSex;
		name: PetSexName;
	};
};

const data: Pet[] = [
	{
		name: 'BullDog',
		color: 'Preto',
		sex: {
			type: 'M',
			name: 'Masculino',
		},
		type: 'dog',
		image: { title: 'BullDog', src: 'images/bulldog.jpg' },
	},
	{
		name: 'Golder',
		color: 'Preto',
		sex: {
			type: 'M',
			name: 'Masculino',
		},
		type: 'dog',
		image: { title: 'Golder', src: 'images/golden.jpg' },
	},
];

const getAll = (): Pet[] => {
	return data;
};

const getByType = (type: PetType): Pet[] => {
	return data.filter(pet => pet.type === type);
};

const getByName = (name: string): Pet[] => {
	return data.filter(
		pet => pet.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
	);
};

const getBySex = (sex: PetSex): Pet[] => {
	return data.filter(pet => pet.sex.type === sex);
};

const find = (term: string): Pet[] => {
	return data.filter(
		pet =>
			pet.sex.name.toLowerCase().indexOf(term.toLowerCase()) !== -1 ||
			pet.name.toLowerCase().indexOf(term.toLowerCase()) !== -1 ||
			pet.color.toLowerCase().indexOf(term.toLowerCase()) !== -1
	);
};

export const Pet = {
	getAll,
	getByType,
	getByName,
	getBySex,
	find,
};
