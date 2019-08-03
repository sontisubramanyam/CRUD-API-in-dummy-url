import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    posts: any[];
   
    constructor(private http: HttpClient) {
    }

    reSetComponent: EventEmitter<any> = new EventEmitter();
    refreshReportList: EventEmitter<any> = new EventEmitter();
    refreshQueriesList: EventEmitter<any> = new EventEmitter();

    getData() {
        return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    };
    saveData(detials) {
        return this.http.post('http://dummy.restapiexample.com/api/v1/create', detials)
    };
    delete(id) {
        return this.http.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
    };
    update(id,userlist) {
        return this.http.put(`http://dummy.restapiexample.com/api/v1/update/${id}`, userlist)
    };

}

