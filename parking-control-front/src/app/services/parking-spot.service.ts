import { Injectable } from '@angular/core';
import { ParkingSpot } from '../models/parking-spot-model';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotService {

  private parkingSpotUrl: string = 'http://localhost:8080/api/parking-spot';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getParkingSpots(): Observable<ParkingSpot[]> {
    return this.http.get<ParkingSpot[]>(this.parkingSpotUrl);
  }

  createParkingSpot(parkingSpot: ParkingSpot): Observable<ParkingSpot> {
    return this.http.post<ParkingSpot>(this.parkingSpotUrl, parkingSpot, this.httpOptions);
  }

  deleteParkingSpot(parkingSpot: ParkingSpot): Observable<ParkingSpot> {
    return this.http.delete<ParkingSpot>(`${this.parkingSpotUrl}/${parkingSpot.licensePlateCar}`);
  }

  updateParkingSpot(parkingSpot: ParkingSpot): Observable<any> {
    return this.http.put(`${this.parkingSpotUrl}/${parkingSpot.licensePlateCar}`, parkingSpot, this.httpOptions);    
  }
}
