import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sample } from 'src/app/models/sample.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SamplesService {

  urlApi: string = environment.urlApi + "Sample"

  constructor(
    private _httpClient : HttpClient
  ) { }

  GetAllSamples() : Observable<Sample[]>{
    return this._httpClient.get<Sample[]>(this.urlApi)
  }

  deleteSample(Sampleid:number) : Observable<boolean>{
    return this._httpClient.delete<boolean>(this.urlApi +"/" + Sampleid)
  }
}
