import type { PipeTransform } from '@angular/core';
import { inject, Pipe } from '@angular/core';
import type { Observable } from 'rxjs';
import { map, of, switchMap } from 'rxjs';
import { SearchService } from 'src/app/search/services/lib/search.service';

@Pipe({
  name: 'searchAviaDestinationName',
  standalone: true,
})
export class SearchAviaDestinationNamePipe implements PipeTransform {
  private readonly searchService = inject(SearchService);

  transform(code: string): Observable<string> {
    return of(code).pipe(
      switchMap(() =>
        this.searchService.findDestination(code, ['airport']).pipe(
          map(([first]) => {
            if (!first) {
              return '';
            }

            return first.name;
          }),
        ),
      ),
    );
  }
}
