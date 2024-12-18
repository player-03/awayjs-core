import { IAsset } from './IAsset';
import { IAbstraction } from './IAbstraction';

export interface IAbstractionPool
{
	readonly id: number;

	requestAbstraction(asset: IAsset): IAbstraction;

	storeAbstraction(abstraction: IAbstraction): void;
}
