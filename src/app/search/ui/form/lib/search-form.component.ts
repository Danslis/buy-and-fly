import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { initialSearchForm } from '@baf/search/common';
import { SearchService } from '@baf/search/services';
import { ButtonComponent } from '@baf/ui/buttons';

import { SearchDateComponent } from '../../fields/lib/search-date/search-date.component';
import { SearchDestinationComponent } from '../../fields/lib/search-destination/search-destination.component';
import { SearchGroupComponent } from '../../fields/lib/search-group/search-group.component';
import { SearchPassengersComponent } from '../../fields/lib/search-passengers/search-passengers.component';
import { SearchReverseComponent } from '../../fields/lib/search-reverse/search-reverse.component';


@Component({
  selector: 'baf-search-form',
  standalone: true,
  imports: [
    SearchGroupComponent,
    SearchDestinationComponent,
    SearchReverseComponent,
    SearchDateComponent,
    SearchPassengersComponent,
    ButtonComponent
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchService],
})

export class SearchFormComponent {
  private readonly searchService = inject(SearchService);

  readonly form = initialSearchForm;

  onSubmit(): void { }
}
