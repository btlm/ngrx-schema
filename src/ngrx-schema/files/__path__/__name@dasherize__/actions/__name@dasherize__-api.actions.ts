import {createAction, props} from '@ngrx/store';
import { <%=classify(name)%> } from '../models';

export const get<%=classify(name)%>Success = createAction(
    '[<%=classify(name)%> API] Get <%=classify(name)%> Success',
    props<{<%=camelize(name)%>: <%=classify(name)%>}>()
);
export const get<%=classify(name)%>Failure = createAction(
    '[<%=classify(name)%> API] Get <%=classify(name)%> Failure',
    props<{error: string}>()
);