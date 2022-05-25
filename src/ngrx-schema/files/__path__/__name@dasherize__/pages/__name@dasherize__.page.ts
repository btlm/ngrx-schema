import {Component} from '@angular/core';
import {Store, select} from '@ngrx/store';
import * as from<%=classify(name)%> from '../reducers';
import { <%=classify(name)%>PageActions } from '../actions';

@Component({
    template: `
      <app-<%=dasherize(name)%>
      [<%=camelize(name)%>]="<%=camelize(name)%>$ | async"
      (submit)="onSubmit($event)">
      </app-<%=dasherize(name)%>>`
})
export class <%=classify(name)%>PageComponent{
    <%=camelize(name)%>$ = this.store.pipe(select(from<%=classify(name)%>.select<%=classify(name)%>));
    
    constructor(private store: Store<from<%=classify(name)%>.State>) {
        this.store.dispatch(<%=classify(name)%>PageActions.get<%=classify(name)%>());
    }
    onSubmit(e:any){
        console.log(e);
    }
}