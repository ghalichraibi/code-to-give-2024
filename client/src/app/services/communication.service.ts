import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InterventionPlan} from '@common/interfaces/documents/intervention-plan.interface';

@Injectable({
    providedIn: 'root',
})
export class CommunicationService {
    private readonly baseUrl: string = environment.serverUrl;

    constructor(private readonly http: HttpClient) {}

    getPlans(): Observable<InterventionPlan[]> {
        return this.http.get<InterventionPlan[]>(`${this.baseUrl}/plans`, { observe: 'response', responseType: 'json' }).pipe(
            map((response: HttpResponse<InterventionPlan[]>) => {
                return response.body as InterventionPlan[];
            }),
        );
    }

    getPlan(id: string): Observable<InterventionPlan> {
        return this.http.get<InterventionPlan>(`${this.baseUrl}/plans/${id}`, { observe: 'response', responseType: 'json' }).pipe(
            map((response: HttpResponse<InterventionPlan>) => {
                return response.body as InterventionPlan;
            }),
        );
    }

    createPlan(plan: InterventionPlan): Observable<InterventionPlan> {
        return this.http.post<InterventionPlan>(`${this.baseUrl}/plans`, plan, { observe: 'response', responseType: 'json' }).pipe(
            map((response: HttpResponse<InterventionPlan>) => {
                return response.body as InterventionPlan;
            }),
        );
    }

    updatePlan(id: string, plan: InterventionPlan): Observable<InterventionPlan> {
        return this.http.patch<InterventionPlan>(`${this.baseUrl}/plans/${id}`, plan, { observe: 'response', responseType: 'json' }).pipe(
            map((response: HttpResponse<InterventionPlan>) => {
                return response.body as InterventionPlan;
            }),
        );
    }

    deleteAllPlans(): Observable<HttpResponse<string>> {
        return this.http.delete(`${this.baseUrl}/plans`, { observe: 'response', responseType: 'text' });
    }

    deletePlan(id: string): Observable<HttpResponse<string>> {
        return this.http.delete(`${this.baseUrl}/plans/${id}`, { observe: 'response', responseType: 'text' });
    }

     



}
