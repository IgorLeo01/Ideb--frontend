import { UserDataEspecialista, EspecialistaDTO, DisponibilidadeData, } from "../components/Types/types";


export const LEADS_START = 'LEADS_START';
export const LEADS_SUCCESS = 'LEADS_SUCCESS';
export const LEADS_FAIL = 'LEADS_FAIL';

export const FETCH_ESPECIALISTA_DISPONIBILIDADE_REQUEST = 'FETCH_ESPECIALISTA_DISPONIBILIDADE_REQUEST';
export const FETCH_ESPECIALISTA_DISPONIBILIDADE_FAILURE = 'FETCH_ESPECIALISTA_DISPONIBILIDADE_FAILURE';
export const FETCH_ESPECIALISTA_DISPONIBILIDADE_SUCCESS = 'FETCH_ESPECIALISTA_DISPONIBILIDADE_SUCCESS';
export const UPDATE_PERSONAL_DATA_START = 'UPDATE_PERSONAL_DATA_START';
export const UPDATE_PERSONAL_DATA_SUCCESS = 'UPDATE_PERSONAL_DATA_SUCCESS';
export const UPDATE_PERSONAL_DATA_FAIL = 'UPDATE_PERSONAL_DATA_FAIL';
export const UPDATE_PROFESSIONAL_DATA_START = 'UPDATE_PROFESSIONAL_DATA_START';
export const UPDATE_PROFESSIONAL_DATA_SUCCESS = 'UPDATE_PROFESSIONAL_DATA_SUCCESS';
export const UPDATE_PROFESSIONAL_DATA_FAIL = 'UPDATE_PROFESSIONAL_DATA_FAIL';
export const UPDATE_FINANCIAL_DATA_START = 'UPDATE_FINANCIAL_DATA_START';
export const UPDATE_FINANCIAL_DATA_SUCCESS = 'UPDATE_FINANCIAL_DATA_SUCCESS';
export const UPDATE_FINANCIAL_DATA_FAIL = 'UPDATE_FINANCIAL_DATA_FAIL';
export const FETCH_USER_DATA_START = 'FETCH_USER_DATA_START';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAIL = 'FETCH_USER_DATA_FAIL';

export interface LeadsStartAction {
  type: 'LEADS_START';
}

export interface LeadsSuccessAction {
  type: 'LEADS_SUCCESS';
  payload: string; 
}

export interface LeadsFailAction {
  type: 'LEADS_FAIL';
  payload: string;
}

export interface FetchUserDataStartAction {
  type: 'FETCH_USER_DATA_START';
}

export interface FetchUserDataSuccessAction {
  type: 'FETCH_USER_DATA_SUCCESS';
  payload: UserDataEspecialista;
}

export interface FetchUserDataFailAction {
  type: 'FETCH_USER_DATA_FAIL';
  payload: string;
}

export interface FetchEspecialistaDisponibilidadeRequestAction {
  type: 'FETCH_ESPECIALISTA_DISPONIBILIDADE_REQUEST';
}

export interface FetchEspecialistaDisponibilidadeSuccessAction {
  type: 'FETCH_ESPECIALISTA_DISPONIBILIDADE_SUCCESS';
  payload: DisponibilidadeData[];
}

export interface FetchEspecialistaDisponibilidadeFailureAction {
  type: 'FETCH_ESPECIALISTA_DISPONIBILIDADE_FAILURE';
  payload: string;
}

export interface UpdatePersonalDataStartAction {
  type: 'UPDATE_PERSONAL_DATA_START';
}

export interface UpdatePersonalDataSuccessAction {
  type: 'UPDATE_PERSONAL_DATA_SUCCESS';
  payload: UserDataEspecialista;
}

export interface UpdatePersonalDataFailAction {
  type: 'UPDATE_PERSONAL_DATA_FAIL';
  payload: string;
}

export interface UpdateProfessionalDataStartAction {
  type: 'UPDATE_PROFESSIONAL_DATA_START';
}

export interface UpdateProfessionalDataSuccessAction {
  type: 'UPDATE_PROFESSIONAL_DATA_SUCCESS';
  payload: UserDataEspecialista;
}

export interface UpdateProfessionalDataFailAction {
  type: 'UPDATE_PROFESSIONAL_DATA_FAIL';
  payload: string; 
}

export interface UpdateFinancialDataStartAction {
  type: 'UPDATE_FINANCIAL_DATA_START';
}

export interface UpdateFinancialDataSuccessAction {
  type: 'UPDATE_FINANCIAL_DATA_SUCCESS';
  payload: UserDataEspecialista; 
}

export interface UpdateFinancialDataFailAction {
  type: 'UPDATE_FINANCIAL_DATA_FAIL';
  payload: string;
}

export type LeadsActionTypes = LeadsStartAction | LeadsSuccessAction | LeadsFailAction;
export type DisponibilidadeActionTypes = FetchEspecialistaDisponibilidadeRequestAction| FetchEspecialistaDisponibilidadeSuccessAction| FetchEspecialistaDisponibilidadeFailureAction;
export type UpdatePersonalDataActionTypes = UpdatePersonalDataStartAction | UpdatePersonalDataSuccessAction | UpdatePersonalDataFailAction
export type UpdateProfessionalDataActionTypes = UpdateProfessionalDataStartAction | UpdateProfessionalDataSuccessAction | UpdateProfessionalDataFailAction;
export type UpdateFinancialDataActionTypes = UpdateFinancialDataStartAction | UpdateFinancialDataSuccessAction | UpdateFinancialDataFailAction;
export type UserDataActionTypes = FetchUserDataStartAction | FetchUserDataSuccessAction | FetchUserDataFailAction;

export const leadsStart = (): LeadsStartAction => ({
  type: LEADS_START,
});

export const leadsSuccess = (data: any): LeadsSuccessAction => ({
  type: LEADS_SUCCESS,
  payload: data,
});

export const leadsFail = (error: string): LeadsFailAction => ({
  type: LEADS_FAIL,
  payload: error,
});

export const fetchUserDataStart = (): FetchUserDataStartAction => ({
  type: FETCH_USER_DATA_START,
});

export const fetchUserDataSuccess = (userData: UserDataEspecialista): FetchUserDataSuccessAction => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: userData,
});

export const fetchUserDataFail = (error: string): FetchUserDataFailAction => ({
  type: FETCH_USER_DATA_FAIL,
  payload: error,
});

export const fetchEspecialistaDisponibilidadeRequest = (): FetchEspecialistaDisponibilidadeRequestAction => ({
  type: FETCH_ESPECIALISTA_DISPONIBILIDADE_REQUEST,
});

export const fetchEspecialistaDisponibilidadeSuccess = (disponibilidades: DisponibilidadeData[]): FetchEspecialistaDisponibilidadeSuccessAction => ({
  type: FETCH_ESPECIALISTA_DISPONIBILIDADE_SUCCESS,
  payload: disponibilidades,
});

export const fetchEspecialistaDisponibilidadeFailure = (error: string): FetchEspecialistaDisponibilidadeFailureAction => ({
  type: FETCH_ESPECIALISTA_DISPONIBILIDADE_FAILURE,
  payload: error,
});

export const updatePersonalDataStart = (): UpdatePersonalDataStartAction => ({
  type: UPDATE_PERSONAL_DATA_START,
});

export const updatePersonalDataSuccess = (userData: UserDataEspecialista): UpdatePersonalDataSuccessAction => ({
  type: UPDATE_PERSONAL_DATA_SUCCESS,
  payload: userData,
});

export const updatePersonalDataFail = (error: string): UpdatePersonalDataFailAction => ({
  type: UPDATE_PERSONAL_DATA_FAIL,
  payload: error,
});

export const updateProfessionalDataStart = (): UpdateProfessionalDataStartAction => ({
  type: UPDATE_PROFESSIONAL_DATA_START,
});

export const updateProfessionalDataSuccess = (userData: UserDataEspecialista): UpdateProfessionalDataSuccessAction => ({
  type: UPDATE_PROFESSIONAL_DATA_SUCCESS,
  payload: userData,
});

export const updateProfessionalDataFail = (error: string): UpdateProfessionalDataFailAction => ({
  type: UPDATE_PROFESSIONAL_DATA_FAIL,
  payload: error,
});

export const updateFinancialDataStart = (): UpdateFinancialDataStartAction => ({
  type: UPDATE_FINANCIAL_DATA_START,
});

export const updateFinancialDataSuccess = (userData: UserDataEspecialista): UpdateFinancialDataSuccessAction => ({
  type: UPDATE_FINANCIAL_DATA_SUCCESS,
  payload: userData,
});

export const updateFinancialDataFail = (error: string): UpdateFinancialDataFailAction => ({
  type: UPDATE_FINANCIAL_DATA_FAIL,
  payload: error,
});