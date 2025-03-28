import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlDecode'
})
export class HtmlDecodePipe implements PipeTransform {

  transform(value: string): string {
    const element = document.createElement('div');
    if (value) {
      element.innerHTML = value;
      return element.textContent || element.innerText || '';
    }
    return value;
  }

}
