import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {apiUrl} from 'src/app/common/api-url';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIErrorResponse } from 'src/app/common/http';
import { <%=classify(name)%> } from '../models/<%=dasherize(name)%>.model';

@Injectable({
    providedIn: 'root'
})
export class <%=classify(name)%>Service {
    constructor(private http: HttpClient) {}
    
    public get<%=classify(name)%>(): Observable<<%=classify(name)%>> {
        const params = new HttpParams();
        return this.http.post<<%=classify(name)%>>(apiUrl + '<%=dasherize(name)%>/static', params)
        .pipe(
            map((res: <%=classify(name)%>) => {
                return res;
            }),
            catchError((error: APIErrorResponse) => {
                return throwError(error.error.type);
            })
        );
    }
}
