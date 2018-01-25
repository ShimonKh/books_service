import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'titlePipe'
})
export class TitlePipePipe implements PipeTransform {

  upFirstLetter(str) {
    if (!str) return str;
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
  }

  transform(title) {
    let strArr = title.replace(/[^A-Za-z\s ]/g, '').split(" ");
    let newArr = [];
    for (let i = 0; i < strArr.length; i++) {
      newArr.push(this.upFirstLetter(strArr[i]))
    }
    return newArr.join(' ');
  }



}
