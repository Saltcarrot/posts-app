interface IGeo {
	lat: number
	lng: number
}

interface IAddress {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: IGeo
}

interface ICompany {
	name: string
	catchPhrase: string
	bs: string
}

export interface IUser {
	id: number
	name: string
	username: string
	email: string
	address: IAddress
	phone: string
	website: string
	company: ICompany
}

export interface IUserState {
	user: IUser | null
	loading: boolean
	error: string | null
}

export enum UserActionTypes {
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
	FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

interface IFetchUserAction {
	type: UserActionTypes.FETCH_USER
}

interface IFetchUserSuccessAction {
	type: UserActionTypes.FETCH_USER_SUCCESS
	payload: IUser | null
}

interface IFetchUserErrorAction {
	type: UserActionTypes.FETCH_USER_ERROR
	payload: string
}

export type TUseAction =
	| IFetchUserAction
	| IFetchUserSuccessAction
	| IFetchUserErrorAction
