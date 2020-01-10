import { Pipe, PipeTransform } from '@angular/core';
import { APPCONFIG } from '../config/config';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform( img: string = 'default.jpg', type: string = 'users'): any {
  
    return `${ APPCONFIG.endpoints.url_services }/img/${ type }/${ img }`;
  
  }

}
