import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {<%=classify(name)%>PageComponent} from './containers';
import {AuthGuard} from '../auth/services';

const routes: Routes = [{path: '<%=dasherize(name)%>', component: <%=classify(name)%>PageComponent, canActivate: [AuthGuard]}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class <%=classify(name)%>RoutingModule {}