import { environment } from "./../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

/* 
  EUR is the only currency available that can be used for conversion with a free account of the API
*/
export class CurrencyService {
  constructor(private httpClient: HttpClient) {}

  // function to return latest currency rates
  getCurrencyList(): Observable<any> {
    return this.httpClient.get(environment.API_URL);
  }

  // function to return exchange rate of a base currency to specific currency
  getSpecificExchangeRate(from: string, to: string): Observable<any> {
    // http://api.exchangeratesapi.io/latest?access_key=3fb9aaf97754b1dd99289bc13d2ba3e1&base=EUR&symbols=INR
    return this.httpClient.get(
      environment.API_URL + "&base=" + from + "&symbols=" + to
    );
  }

  // function to return all exchange rates for a specific base currency
  getAllExchangeRate(from: string): Observable<any> {
    return this.httpClient.get(environment.API_URL + "&base=" + from);
  }
}
