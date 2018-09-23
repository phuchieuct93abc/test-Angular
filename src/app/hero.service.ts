import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { Observable, of, ObservableInput } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const herosUrl: string = "/api/heroes";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getHeros(): Observable<Hero[]> {
    this.messageService.add("Hero service: fetch heroes");
    return this.httpClient.get<Hero[]>(herosUrl).pipe(

      catchError(this.handleError('getHeroes', [{ id: 0, name: "Error" }]))
    )

  }
  getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${herosUrl}/${id}`).pipe(
      tap(hero => console.log(hero)),
      catchError(this.handleError("get hero by id", null))
    );
  }
  updateHero(hero:Hero):Observable<any>{
    return this.httpClient.put(herosUrl,hero).pipe(
      tap(_=>this.messageService.add(`Update hero ${hero.id}`)),
      
    );
  }
  addHero(hero:Hero):Observable<Hero>{
    return this.httpClient.post<Hero>(herosUrl,hero,httpOptions);
  }
  deleteHero(hero:Hero):Observable<Hero>{
    return this.httpClient.delete<Hero>(`${herosUrl}/${hero.id}`);
  }  
  searchHeroes(name:string):Observable<Hero[]>{
    console.log("saerch hero");
    return this.httpClient.get<Hero[]>(`${herosUrl}/?name=${name}`).pipe(
      tap(heroes=>this.messageService.add(`Search here ${heroes}`))
    );
  }
  handleError<T>(operation: string = "operation", value?: T) {
    return (error, observable: Observable<T>): ObservableInput<T> => {
      this.messageService.add(`Error with ${operation}: ${error}`)
      return of(value as T)
    }

  }
}
