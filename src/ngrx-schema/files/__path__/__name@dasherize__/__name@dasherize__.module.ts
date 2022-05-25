import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as from<%=classify(name)%> from './reducers';
import { <%=classify(name)%>Effects } from './effects';
import { <%=classify(name)%>RoutingModule } from './<%=dasherize(name)%>-routing.module';
import { <%=classify(name)%>Component } from './components';
import { <%=classify(name)%>PageComponent } from './PAGES';


export const COMPONENTS = [
    <%=classify(name)%>Component,
];

export const PAGES = [
  <%=classify(name)%>PageComponent
]

@NgModule ({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    <%=classify(name)%>RoutingModule,
    StoreModule.forFeature(from<%=classify(name)%>.<%=camelize(name)%>FeatureKey, from<%=classify(name)%>.reducers),
    EffectsModule.forFeature([<%=classify(name)%>Effects]),
  ],
  declarations: [...COMPONENTS, ...PAGES],
  providers: []
})
export class <%=classify(name)%>Module {}