import { Injectable } from '@angular/core';
import { FormModel } from '../models/formdata.model'

@Injectable()
export class SharedServices {
  isRender = false;
  updateIndex: number = null;
  dataArray: FormModel;


  getFormId = function () {
    return (Math.random() + '').substring(2, 10)
      + (Math.random() + '').substring(2, 10);
  };

  getFormDate = function () {
    return Date();
  };

  insertData(data: any, i: number) {
    this.isRender = true;
    this.updateIndex = i;
    this.dataArray = data;
  }

}
