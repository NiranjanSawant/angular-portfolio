import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitle'
})
export class MyTitlePipe implements PipeTransform {

  transform(FirstName: string, Gender: string): string {

    if(Gender.toLowerCase()=='female')
    {
      return 'Miss.'+FirstName
    }
     if(Gender.toLowerCase()=='male')
    {
      return 'Mr.'+FirstName
    }
    else
    {
      return ''
    }
  }

}
