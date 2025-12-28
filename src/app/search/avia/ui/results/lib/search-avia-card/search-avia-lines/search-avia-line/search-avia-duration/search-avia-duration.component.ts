import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SearchAviaLine } from '@baf/search/avia/common';

import { SearchAviaDurationPipe } from './search-avia-duration.pipe';

@Component({
  selector: 'baf-search-avia-duration',
  standalone: true,
  imports: [SearchAviaDurationPipe, DecimalPipe],
  templateUrl: './search-avia-duration.component.html',
  styleUrl: './search-avia-duration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaDurationComponent {
  readonly searchLine = input.required<SearchAviaLine>();
}
