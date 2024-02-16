import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DateModel } from "../../models/date/date.model";
import { DateGateway } from '../../models/date/date.gateway';

@Injectable({providedIn:'any'})

export class DateUsecase {
    constructor(private dateGateway: DateGateway){}

    getDate(): Observable<DateModel> {
        return this.dateGateway.getDate();
    }
}