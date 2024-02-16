import { Observable } from "rxjs";
import { DateModel } from "./date.model";

export abstract class DateGateway {
    abstract getDate(): Observable<DateModel>;
}