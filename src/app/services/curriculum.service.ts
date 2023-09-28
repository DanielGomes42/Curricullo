import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface RandomUser {
    cell: string;
    email: string;
    gender: string;
    phone: string;
    picture: string;
    name: string;
}

@Injectable({
    providedIn: 'root',
})
export class CurriculumService {
    constructor(private http: HttpClient) {}

    getCurriculumData(): Observable<HttpResponse<any>> {
        return this.http.get('http://localhost:3000/payload', {
            observe: 'response',
            responseType: 'json',
        });
    }

    getRandomUser(): Observable<RandomUser[]> {
        return this.http
            .get('https://randomuser.me/api/', {
                observe: 'response',
                responseType: 'json',
            })
            .pipe(
                //agrupadador
                map((
                    response, //map do observable
                ) =>
                    (response.body as any).results.map(
                        (user: any): RandomUser => ({
                            cell: user.cell,
                            email: user.email,
                            gender: user.gender,
                            name: user.name.first,
                            phone: user.phone,
                            picture: user.picture.medium,
                        }),
                    ),
                ),
            );
    }
}
