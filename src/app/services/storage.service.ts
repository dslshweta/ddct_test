import {Injectable} from '@angular/core';
import {SharedServices} from './shared.services';

@Injectable()
export class StorageService {

  constructor(private sharedServices: SharedServices) {

  }

  setFormData(data: any): void {
    const initialData = this.getFormData();
    const formset = initialData ? initialData : [];

    if (this.sharedServices.updateIndex !== null) {
      formset[this.sharedServices.updateIndex] = data;
    } else {
      formset.push(data);
    }


    localStorage.setItem('formData', JSON.stringify(formset));
  }

  getFormData() {
    return JSON.parse(localStorage.getItem('formData'));
  }

  removeFormData() {
    localStorage.removeItem('formData');

  }
}
