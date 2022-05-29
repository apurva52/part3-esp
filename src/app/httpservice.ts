import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) { }

    getData() {
        const me = this;
        return me.http.get('https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json')
    }
}