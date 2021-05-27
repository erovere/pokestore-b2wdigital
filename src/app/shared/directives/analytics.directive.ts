import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { AnalyticsService, AnalyticsActionEvent } from '@app/core/services';


@Directive({
  selector: '[gaEvent]',
  host: { class: 'ga-event' },
})
export class AnalyticsDirective {
  @Input() gaAction: string;
  @Input() gaCategory: string;
  @Input() gaLabel: string;

  private defaults: AnalyticsActionEvent = {
    event: 'datalayereventos'
  };

  /**
   * Use element attributes title or alt as fallback label property
   */
  get label(): string {
    const { nativeElement: el } = this.el;
    const titleAttr = el.getAttribute('title');
    const altAttr = el.getAttribute('alt');
    return titleAttr || altAttr;
  }

  get props(): AnalyticsActionEvent {
    return {
      ...this.defaults,
      gacategoria: this.gaCategory,
      gaacao: this.gaAction || 'Click',
      garotulo: this.gaLabel || this.label
    };
  }

  constructor(private el: ElementRef, private analytics: AnalyticsService) {}

  @HostListener('click')
  handleClick(): void {
    this.analytics.pushAction(this.props);
  }
}
