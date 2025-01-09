import { ThunkAction } from 'redux-thunk';
import { RootState } from '../app/store';
import { DisponibilidadeData, FinancialData, PerfilData, ProfessionalData } from "../components/Types/types";
import {
  DisponibilidadeActionTypes,
  LeadsActionTypes, UpdateFinancialDataActionTypes, UpdatePersonalDataActionTypes, UpdateProfessionalDataActionTypes, UserDataActionTypes, fetchEspecialistaDisponibilidadeFailure, fetchEspecialistaDisponibilidadeRequest,
  fetchEspecialistaDisponibilidadeSuccess, fetchUserDataFail,
  fetchUserDataStart,
  fetchUserDataSuccess, leadsFail, leadsStart,
  leadsSuccess,
  updateFinancialDataFail,
  updateFinancialDataStart,
  updateFinancialDataSuccess, updatePersonalDataFail, updatePersonalDataStart,
  updatePersonalDataSuccess, updateProfessionalDataFail, updateProfessionalDataStart, updateProfessionalDataSuccess
} from './actions';
const serverAddress = "https://3.135.206.215"
const port = "8080"

export const sendLead = (leadData: any): ThunkAction<void, RootState, unknown, LeadsActionTypes> => async (dispatch) => {
  try {
    dispatch(leadsStart());
    const response = await fetch(serverAddress + ':' + port + '/api/leads', {
      method: 'POST',
      referrerPolicy: "unsafe-url",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    const data = await response.json();
    console.log(data);

    dispatch(leadsSuccess(data));
  } catch (error: any) {
    dispatch(leadsFail(error.message));
  }
};

export const EspecialistaOpenSchedule = (especialistaId: number): ThunkAction<Promise<DisponibilidadeData[]>, RootState, unknown, DisponibilidadeActionTypes> => async (dispatch) => {
  return new Promise<DisponibilidadeData[]>(async (resolve, reject) => {
    try {
      dispatch(fetchEspecialistaDisponibilidadeRequest());

      const response = await fetch('http://localhost:8080/api/especialistas/disponibilidades-livres/' + especialistaId, {
        method: 'GET'
      });

      const data = await response.json();
      console.log('Dados de disponibilidade recebidos:', data);
      const disponibilidades = data.map((item: any) => {
        const { dataInicio, dataFim, disponibilidades } = item;
        const startDate = new Date(dataInicio[0], dataInicio[1] - 1, dataInicio[2]); 
        const endDate = new Date(dataFim[0], dataFim[1] - 1, dataFim[2]);
        console.log("Start date:", startDate)        
        console.log("End date:", endDate)
        
        const disponibilidadesFormatadas = disponibilidades.map((disponibilidade: any) => {
            const { data, horarios } = disponibilidade;
            const dateString = `${data[0]}-${data[1]}-${data[2]}`;             
            const date = new Date(dateString);
            const horariosFormatados = horarios.map((hora: number[]) => {
                const [hour, minute] = hora;
                return `${hour}:${minute}`;
            });
            return { data: dateString, horarios: horariosFormatados };
        });

        return { especialistaId, dataInicio: startDate.toISOString(), dataFim: endDate.toISOString(), disponibilidades: disponibilidadesFormatadas };
      });
      dispatch(fetchEspecialistaDisponibilidadeSuccess(disponibilidades));
      resolve(disponibilidades);
    } catch (error: any) {
      console.log('An Error occurred: ' + error);
      dispatch(fetchEspecialistaDisponibilidadeFailure(error.message));
      reject(error); 
    };
  });
};

export const updatePersonalData = (
  perfilData: PerfilData,
  especialistaId: number
): ThunkAction<void, RootState, unknown, UpdatePersonalDataActionTypes> => async (dispatch) => {
  try {
      dispatch(updatePersonalDataStart());
      const response = await fetch(`http://localhost:8080/api/perfil/${especialistaId}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(perfilData),
      });
      const data = await response.json();
      dispatch(updatePersonalDataSuccess(data));
  } catch (error: any) {
      dispatch(updatePersonalDataFail(error.message));
  }
};


export const updateProfessionalData = (professionalData: ProfessionalData, especialistaId: number): ThunkAction<void, RootState, unknown, UpdateProfessionalDataActionTypes> => async (dispatch) => {
  try {
    dispatch(updateProfessionalDataStart());

    const response = await fetch(`http://localhost:8080/api/perfil/${especialistaId}/dados-profissionais`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(professionalData),
    });

    if (!response.ok) {
      throw new Error('Failed to update professional data');
    }
    const data = await response.json();
    dispatch(updateProfessionalDataSuccess(data));
  } catch (error: any) {
    dispatch(updateProfessionalDataFail(error.message));
  }
};

export const updateFinancialData = (financialData: FinancialData, especialistaId: number): ThunkAction<void, RootState, unknown, UpdateFinancialDataActionTypes> => async (dispatch) => {
  try {
    dispatch(updateFinancialDataStart());

    const response = await fetch(`http://localhost:8080/api/perfil/${especialistaId}/dados-financeiros`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(financialData),
    });

    if (!response.ok) {
      throw new Error('Failed to update financial data');
    }
    const data = await response.json();
    dispatch(updateFinancialDataSuccess(data));
  } catch (error: any) {
    dispatch(updateFinancialDataFail(error.message));  }
};

export const fetchUserData = (especialistaId: number): ThunkAction<void, RootState, unknown, UserDataActionTypes> => async (dispatch) => {
  try {
    dispatch(fetchUserDataStart());

    const response = await fetch(`http://localhost:8080/api/especialistas/${especialistaId}`);
    const data = await response.json();

    dispatch(fetchUserDataSuccess(data));
    console.log(data)
  } catch (error: any) {
    dispatch(fetchUserDataFail(error.message));
  }
};

