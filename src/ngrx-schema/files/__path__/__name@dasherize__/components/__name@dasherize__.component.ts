import { Component, Input, SimpleChanges, OnChanges, OnDestroy, EventEmitter, Output, OnInit } from '@angular/core';
import { <%=classify(name)%> } from '../models/<%=dasherize(name)%>.model';


@Component({
    selector: 'app-<%=dasherize(name)%>',
    templateUrl: './<%=dasherize(name)%>.component.html',
    styleUrls: ['./<%=dasherize(name)%>.component.scss']
})
export class <%=classify(name)%>Component implements OnInit, OnChanges, OnDestroy {
    @Input() <%=camelize(name)%>: <%=classify(name)%>;

    @Output() submit = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }
    ngOnChanges(changes: SimpleChanges): void {
        let simpleChange = changes['<%=camelize(name)%>'];

        if (simpleChange && !simpleChange.firstChange && this.<%=camelize(name)%>) {
            console.log(this.<%=camelize(name)%>);
        }
    }
    ngOnDestroy() {
  
    }
}
