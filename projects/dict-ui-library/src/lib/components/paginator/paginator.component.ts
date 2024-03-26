import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'dict-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnChanges, OnInit {
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 0;
  @Input() maxSize: number = 0;
  @Output() pageClick = new EventEmitter<number>();

  availablePageNumbers: number[] = [];
  slicedPageNumbers: number[] = [];
  halfMaxSize: number = 0;

  get isSlicedNumbersReachEnd(): boolean {
    return this.slicedPageNumbers[this.slicedPageNumbers.length - 1] === this.totalPages;
  }

  get isSlicedNumbersReachStart(): boolean {
    return this.slicedPageNumbers[0] === 1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maxSize']?.previousValue) {
      this.halfMaxSize = this.getHalfOfMaxSize();
    }
    if (changes['totalPages']?.previousValue) {
      this.setSlicedPageNumbers();
    }
    if (changes['currentPage'] && changes['currentPage'].currentValue) {
      this.currentPage = changes['currentPage'].currentValue;
      this.setSlicedPageNumbers();
    }
  }

  ngOnInit(): void {
    this.halfMaxSize = this.getHalfOfMaxSize();
    this.setSlicedPageNumbers();
  }

  onGoTo(page: number): void {
    if (page === this.currentPage) {
      return;
    }
    this.pageClick.emit(page);
  }
  getHalfOfMaxSize(): number {
    return Math.ceil(this.maxSize / 2);
  }

  private setSlicedPageNumbers(): void {
    this.availablePageNumbers = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.availablePageNumbers.push(i);
    }

    const leftPage = this.currentPage - (this.halfMaxSize + 1) <= 0 ? 0 : this.currentPage - this.halfMaxSize;
    const rightPage =
      this.currentPage + this.halfMaxSize >= this.totalPages
        ? this.totalPages
        : this.currentPage + (this.halfMaxSize - 1);
    this.slicedPageNumbers = this.availablePageNumbers.slice(leftPage, rightPage);
  }
}
