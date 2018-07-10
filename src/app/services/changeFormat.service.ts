import {Injectable} from '@angular/core';
import {SharedServices} from './shared.services';


@Injectable()
export class ChangeFormatServices {

  constructor(private sharedServices: SharedServices) {

  }
  
  updateFormat(data: any) {
    data._id = this.sharedServices.getFormId();
    data.creationDate = this.sharedServices.getFormDate();
    data.formName = prompt('Please Enter form name')
    return data;
  }

}
