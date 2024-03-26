import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DictUiLibraryComponent } from 'dict-ui-library';
import { DICT, LOADED_DATA, TABLE_DATA } from './mock.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DictUiLibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  height = 1080;
  loader = false;
  totalPages = 2;
  loadedData = LOADED_DATA;
  dict = DICT;
  dictId = 'ac27b94f03e74ef9b87c233973c2b722';
  tableData = TABLE_DATA;
  columns: Map<string, object> = new Map<string, object>([
    [
      'afc86ec812cb4ac5b780c4b0dbbc8b8d',
      {
        checked: true,
        dictId: null,
        name: '22.12',
        order: 0,
        sortField: 'afc86ec812cb4ac5b780c4b0dbbc8b8d',
        type: 'DECIMAL'
      }
    ],
    [
      'userId',
      {
        checked: true,
        dictId: 'users',
        name: 'Пользователь - источник данных',
        order: 1,
        sortField: 'userId',
        type: 'STRING'
      }
    ],
    [
      'organizationId',
      {
        checked: true,
        dictId: 'organizations',
        name: 'Организация - источник данных',
        order: 2,
        sortField: 'organizationId',
        type: 'STRING'
      }
    ],
    [
      'updated',
      {
        name: 'Дата последних изменений',
        sortField: 'updated',
        checked: true,
        type: 'updated'
      }
    ]
  ]);
  onSort(value: any): void {}
  onLoadRegistries(value: any): void {}
  loadFile(value: any): void {}
  editDictValue(value: any): void {}

  private _decodeString(key: string): string {
    return key.replaceAll('\\u002e', '.').replaceAll('\\u0024', '$').replaceAll('\\\\', '\\');
  }
}
