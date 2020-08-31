import {<%=classify(name)%>ApiActions, <%=classify(name)%>PageActions} from '../actions';
import {createReducer, on} from '@ngrx/store';
import { <%=classify(name)%> } from '../models/<%=dasherize(name)%>.model';

export const <%=camelize(name)%>PageFeatureKey = '<%=camelize(name)%>Page';

export interface State {
    <%=camelize(name)%>: <%=classify(name)%> | null,
    error: string | null;
    loading: boolean;
}

export const initialState: State = {
    <%=camelize(name)%>:null,
    error: null,
    loading:true
};

export const reducer = createReducer(
    initialState,
    on(<%=classify(name)%>PageActions.get<%=classify(name)%>,
        (state)=>({...state, loading:true})),
    on(<%=classify(name)%>ApiActions.get<%=classify(name)%>Success,
        (state, action) => ({ ...state, <%=camelize(name)%>: action.<%=camelize(name)%>, loading:false })),
    on(
        <%=classify(name)%>ApiActions.get<%=classify(name)%>Failure,
        (state, err) => ({ ...state, error: err.error, loading:false })),
);

export const selectError = (state: State) => state.error;
export const selectLoading = (state: State) => state.loading;
export const select<%=classify(name)%> = (state: State) => state.<%=camelize(name)%>;
