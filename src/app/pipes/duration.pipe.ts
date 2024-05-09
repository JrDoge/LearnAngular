import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(value: number) :string {
      const minutes: number = value % 60
      const hours: number = Math.floor(value/60)

      if(minutes === 0){
        return `${hours} h`
      }else if(hours === 0){
        return `${minutes.toString().padStart(2,'0')} m`
      }
    return `${hours} h ${minutes.toString().padStart(2,'0')} m`;
}}