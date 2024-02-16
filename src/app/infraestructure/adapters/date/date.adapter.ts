import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { DateGateway } from "src/app/domain/models/date/date.gateway";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { DateModel } from "src/app/domain/models/date/date.model";
import { enviroment } from "src/enviroments/enviroment";

@Injectable({ providedIn: 'root' })

export class DateAdapter extends DateGateway {

    apiUrlDate = enviroment.apiUrl.date;
    apiUrlGame = enviroment.apiUrl.game;

    constructor(private http: HttpClient) {
        super()
    }

    getDate(): Observable<DateModel> {
        return this.http.get<DateModel>(this.apiUrlDate)
    }

    getGame(): Observable<DateModel> {
        return this.http.get<DateModel>(this.apiUrlGame)
    }

    errorHandler(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError(() => new Error(error.message));
    }

}