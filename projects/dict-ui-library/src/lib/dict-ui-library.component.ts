import { CommonModule, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {
  Column,
  DictData,
  DictNote,
  LoadedData,
  TypeOfLoadedData,
  UnionField
} from './interfaces/registry-form.interface';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MultivaluedPipe } from './pipes/multivalued.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ScrollEndDirective } from './directives/scroll-end.directive';

enum PaginationType {
  PAGINATION = 'PAGINATION',
  SCROLL = 'SCROLL'
}
@Component({
  selector: 'dict-ui-library',
  standalone: true,
  imports: [CommonModule, NgScrollbarModule, MultivaluedPipe, NgStyle, PaginatorComponent, ScrollEndDirective],
  templateUrl: './dict-ui-library.component.html',
  styleUrl: './dict-ui-library.component.scss'
})
export class DictUiLibraryComponent implements OnInit {
  @Input() loader: boolean = true;
  @Input() pagination: PaginationType = PaginationType.SCROLL;
  @Input() totalPages: number = 0;
  @Input() height?: number = 0;
  @Input() dict!: DictData;
  @Input() loadedData!: LoadedData;
  @Input() tableData!: DictNote[];
  @Input() columns!: Map<string, Column>;
  @Output() onEdit = new EventEmitter();
  @Output() onLoadFile = new EventEmitter<string>();
  @Output() onSort = new EventEmitter<{ page: number; sortDirection: string; sortField: string }>();

  readonly paginationTypes = PaginationType;
  page = 0;
  sortDirection: string = '';
  sortField = '';
  sortedFields = ['updated', 'userId', 'organizationId'];

  filteredFields?: UnionField[];

  originalOrder = (): number => 0;

  get filteredColumns(): Map<string, Column> {
    const fields = this.columns;
    const filteredColumns: Map<string, Column> = new Map<string, Column>();

    for (const [key, val] of fields.entries()) {
      if (val.checked) {
        filteredColumns.set(key, val);
      }
    }
    return filteredColumns;
  }

  ngOnInit(): void {}

  public getLoadedData(typeData: keyof LoadedData, fieldId: string): TypeOfLoadedData {
    if (this.loadedData && typeData && this.loadedData.hasOwnProperty(typeData)) {
      const data = this.loadedData[typeData];
      if (fieldId && data && data.hasOwnProperty(fieldId)) {
        return data[fieldId];
      }
    }
    return null;
  }

  public sortBy(sortField: string): void {
    if (this.sortField !== sortField) {
      this.sortField = sortField;
      this.sortDirection = 'asc';
    } else {
      switch (this.sortDirection) {
        case 'asc':
          this.sortDirection = 'desc';
          break;
        case 'desc':
          this.sortDirection = '';
          break;
        default:
          this.sortDirection = 'asc';
          break;
      }
    }

    this._getTableData(true);
  }
  public onScroll(): void {
    console.log('onScroll');
    if (this.page + 1 < this.totalPages && !this.loader) {
      ++this.page;
      this._getTableData();
    }
  }
  public loadFile(event: MouseEvent, id: string): void {
    event.stopPropagation();
    this.onLoadFile.emit(id);
  }
  public goToPage(page: number): void {
    this.page = page - 1;
    this._getTableData();
  }
  public editData(value: DictNote): void {
    this.onEdit.emit(value);
  }
  private _getTableData(resetPage: boolean = false) {
    if (resetPage) {
      this.page = 0;
    }
    this.onSort.emit({ page: this.page, sortDirection: this.sortDirection, sortField: this.sortField });
  }
}
