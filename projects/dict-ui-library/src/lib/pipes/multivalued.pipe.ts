import { Pipe, PipeTransform } from '@angular/core';
import { MultipleValues } from '../interfaces/registry-form.interface';

@Pipe({
  name: 'multivalued',
  standalone: true
})
export class MultivaluedPipe implements PipeTransform {
  transform(value: string | number | Date | MultipleValues): { index: string; value: any }[] {
    if (Array.isArray(value)) {
      return value.length
        ? value.map((val, index: number) => ({ index: `${index + 1}. `, value: val as unknown }))
        : [{ index: '', value: null }];
    }
    return [{ index: '', value }];
  }
}
