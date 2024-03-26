import { AfterViewInit, Directive, EventEmitter, Input, Output } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';

@Directive({ selector: 'ng-scrollbar[reachedScrollEnd]', standalone: true })
export class ScrollEndDirective implements AfterViewInit {
  constructor(private scrollRef: NgScrollbar) {}

  @Output() reachedScrollEnd = new EventEmitter<void>();

  @Input() buffer = 200;

  ngAfterViewInit(): void {
    this.scrollRef.verticalScrolled.pipe().subscribe((event: Event) => {
      const target = event.target as HTMLElement;
      const tableViewHeight = target.offsetHeight;
      const tableScrollHeight = target.scrollHeight;
      const scrollLocation = target.scrollTop;
      const limit = tableScrollHeight - tableViewHeight - this.buffer;

      if (scrollLocation > limit) {
        this.reachedScrollEnd.emit();
      }
    });
  }
}
