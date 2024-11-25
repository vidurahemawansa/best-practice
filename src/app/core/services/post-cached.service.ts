import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs';
import { Post } from 'src/models/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostCachedService {
  private apiUrl = `${environment.apiBaseUrl}/posts`;
  private cachedData$: Observable<Post[]> | null = null;
  private expirationTime = 10 * 60 * 1000;
  private lastFetchTime = 0;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> | null {
    if (
      this.cachedData$ &&
      Date.now() - this.lastFetchTime < this.expirationTime
    ) {
      return this.cachedData$;
    }

    this.cachedData$ = this.http.get<Post[]>(this.apiUrl).pipe(
      tap(() => (this.lastFetchTime = Date.now())),
      shareReplay(1),
      catchError((error) => {
        console.error('error getting posts ', error);
        return throwError(() => error);
      })
    );
    return this.cachedData$;
  }
}
