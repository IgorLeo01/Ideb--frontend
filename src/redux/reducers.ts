import {
  DisponibilidadeData,
  EspecialistaDTO,
  UserDataEspecialista,
} from "../components/Types/types";
import {
  DisponibilidadeActionTypes,
  FETCH_ESPECIALISTA_DISPONIBILIDADE_FAILURE,
  FETCH_ESPECIALISTA_DISPONIBILIDADE_REQUEST,
  FETCH_ESPECIALISTA_DISPONIBILIDADE_SUCCESS,
  FETCH_USER_DATA_FAIL,
  FETCH_USER_DATA_START,
  FETCH_USER_DATA_SUCCESS,
  LEADS_FAIL,
  LEADS_START,
  LEADS_SUCCESS,
  LeadsActionTypes,
  UPDATE_FINANCIAL_DATA_FAIL,
  UPDATE_FINANCIAL_DATA_START,
  UPDATE_FINANCIAL_DATA_SUCCESS,
  UPDATE_PERSONAL_DATA_FAIL,
  UPDATE_PERSONAL_DATA_START,
  UPDATE_PERSONAL_DATA_SUCCESS,
  UPDATE_PROFESSIONAL_DATA_FAIL,
  UPDATE_PROFESSIONAL_DATA_START,
  UPDATE_PROFESSIONAL_DATA_SUCCESS,
  UpdateFinancialDataActionTypes,
  UpdatePersonalDataActionTypes,
  UpdateProfessionalDataActionTypes,
  UserDataActionTypes,
} from "./actions";

interface State {
  loading: boolean;
  data: UserDataEspecialista | null;
  error: string | null;
}
interface AuthState {
  isAuthenticated: boolean;
  user: UserDataEspecialista | null;
  loading: boolean;
  error: string | null;
}
interface LeadsState {
  loading: boolean;
  data: any;
  error: string | null;
}

interface EspecialistasState {
  loading: boolean;
  data: EspecialistaDTO[] | null;
  error: string | null;
}

interface DisponibilidadesState {
  loading: boolean;
  data: DisponibilidadeData[] | null;
  error: string | null;
}

interface PersonalDataState {
  loading: boolean;
  data: UserDataEspecialista | null;
  error: string | null;
}

interface ProfessionalDataState {
  loading: boolean;
  data: UserDataEspecialista | null;
  error: string | null;
}

interface FinancialDataState {
  loading: boolean;
  data: UserDataEspecialista | null;
  error: string | null;
}

interface FetchDataUserState {
  loading: boolean;
  data: UserDataEspecialista | null;
  error: string | null;
}

const authInitialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const initialState: State = {
  loading: false,
  data: null,
  error: null,
};

const loginInitialState: State = {
  loading: false,
  data: null,
  error: null,
};

const leadsInitialState: LeadsState = {
  loading: false,
  data: null,
  error: null,
};

const ListinitialState: EspecialistasState = {
  loading: false,
  data: null,
  error: null,
};

const DisponibilidadeinitialState: DisponibilidadesState = {
  loading: false,
  data: null,
  error: null,
};

const personalDataInitialState: PersonalDataState = {
  loading: false,
  data: null,
  error: null,
};

const professionalDataInitialState: ProfessionalDataState = {
  loading: false,
  data: null,
  error: null,
};

const financialDataInitialState: FinancialDataState = {
  loading: false,
  error: null,
  data: null,
};

const FetchDataUserinitialState: State = {
  loading: false,
  data: null,
  error: null,
};

const leadsReducer = (
  state = leadsInitialState,
  action: LeadsActionTypes
): LeadsState => {
  switch (action.type) {
    case LEADS_START:
      return { ...state, loading: true, error: null };
    case LEADS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case LEADS_FAIL:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }

};

const disponibilidadesReducer = (
  state = DisponibilidadeinitialState,
  action: DisponibilidadeActionTypes
): DisponibilidadesState => {
  switch (action.type) {
    case FETCH_ESPECIALISTA_DISPONIBILIDADE_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ESPECIALISTA_DISPONIBILIDADE_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_ESPECIALISTA_DISPONIBILIDADE_FAILURE:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

const personalDataReducer = (
  state = personalDataInitialState,
  action: UpdatePersonalDataActionTypes
): PersonalDataState => {
  switch (action.type) {
    case UPDATE_PERSONAL_DATA_START:
      return { ...state, loading: true, error: null };
    case UPDATE_PERSONAL_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case UPDATE_PERSONAL_DATA_FAIL:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

const professionalDataReducer = (
  state = professionalDataInitialState,
  action: UpdateProfessionalDataActionTypes
): ProfessionalDataState => {
  switch (action.type) {
    case UPDATE_PROFESSIONAL_DATA_START:
      return { ...state, loading: true, error: null };
    case UPDATE_PROFESSIONAL_DATA_SUCCESS:
      return { ...state, loading: false, error: null };
    case UPDATE_PROFESSIONAL_DATA_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const financialDataReducer = (
  state = financialDataInitialState,
  action: UpdateFinancialDataActionTypes
): FinancialDataState => {
  switch (action.type) {
    case UPDATE_FINANCIAL_DATA_START:
      return { ...state, loading: true, error: null };
    case UPDATE_FINANCIAL_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case UPDATE_FINANCIAL_DATA_FAIL:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

const userDataReducer = (
  state = initialState,
  action: UserDataActionTypes
): State => {
  switch (action.type) {
    case FETCH_USER_DATA_START:
      return { ...state, loading: true, error: null };
    case FETCH_USER_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_USER_DATA_FAIL:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export {
  disponibilidadesReducer,
  financialDataReducer,
  leadsReducer,
  personalDataReducer,
  professionalDataReducer,
  userDataReducer,
};
