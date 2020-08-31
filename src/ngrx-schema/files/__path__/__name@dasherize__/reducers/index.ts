import {createSelector, createFeatureSelector, combineReducers, Action} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as from<%=classify(name)%>Page from './<%=dasherize(name)%>-page.reducer';

export const <%=camelize(name)%>FeatureKey = '<%=camelize(name)%>';

export interface <%=classify(name)%>State {
    [from<%=classify(name)%>Page.<%=camelize(name)%>PageFeatureKey]: from<%=classify(name)%>Page.State;
}

export interface State extends fromRoot.State {
    [<%=camelize(name)%>FeatureKey]: <%=classify(name)%>State;
}

export function reducers(state: <%=classify(name)%>State | undefined, action: Action) {
    return combineReducers({
        [from<%=classify(name)%>Page.<%=camelize(name)%>PageFeatureKey]: from<%=classify(name)%>Page.reducer,
    })(state, action);
}

export const select<%=classify(name)%>State = createFeatureSelector<State, <%=classify(name)%>State>(<%=camelize(name)%>FeatureKey);

export const select<%=classify(name)%>PageState = createSelector(
    select<%=classify(name)%>State,
    (state: <%=classify(name)%>State) => state.<%=camelize(name)%>Page
);
export const select<%=classify(name)%>PageError = createSelector(
    select<%=classify(name)%>PageState,
    from<%=classify(name)%>Page.selectError
);
export const select<%=classify(name)%> = createSelector(
    select<%=classify(name)%>PageState,
    from<%=classify(name)%>Page.select<%=classify(name)%>
);
export const selectLoading = createSelector(
    select<%=classify(name)%>PageState,
    from<%=classify(name)%>Page.selectLoading
);
