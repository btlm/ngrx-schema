import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as from<%=classify(name)%> from '../reducers/';
import {Store} from '@ngrx/store';
import {<%=classify(name)%>Service} from '../services';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { <%=classify(name)%>PageActions, <%=classify(name)%>ApiActions } from '../actions';
import { <%=classify(name)%> } from '../models/<%=dasherize(name)%>.model';

@Injectable()
export class <%=classify(name)%>Effects {
    
    get<%=classify(name)%>$ = createEffect(() =>
        this.actions$.pipe(
            ofType(<%=classify(name)%>PageActions.get<%=classify(name)%>),
            switchMap(() =>
                this.<%=camelize(name)%>Service.get<%=classify(name)%>().pipe(
                    map((<%=camelize(name)%>: <%=classify(name)%>) =>
                        <%=classify(name)%>ApiActions.get<%=classify(name)%>Success({<%=camelize(name)%>}),
                    ),
                    catchError((error: string) =>
                        of(<%=classify(name)%>ApiActions.get<%=classify(name)%>Failure({error})),
                    )
                )
            )
        )
    );

    constructor(
        private store: Store<from<%=classify(name)%>.State>,
        private actions$: Actions,
        private <%=camelize(name)%>Service: <%=classify(name)%>Service,
        private router: Router
    ) {}
}
