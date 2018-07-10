import {Component} from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';
import {SharedServices} from '../../services/shared.services';


@Component({
  templateUrl: './custom.html',
  styleUrls: ['./custom.scss']
})
export class CustomFormComponent {

  submission: any;
  formData: any;
  formView: any;
  nameOfForm : string;

  constructor(private storageService: StorageService, private sharedServices: SharedServices, private router: Router) {
    this.formData = this.storageService.getFormData();
  }

  setFormView(form) {
    this.formView = form;
    this.nameOfForm = form.formName;
  }

  showFirstForm(): void{
    if(this.formData){
      this.formView = this.formData[0];
      this.nameOfForm = this.formData[0].formName;      
    }
  }

  getFormValue(form, i) {
    this.sharedServices.insertData(form, i);
    this.sharedServices.updateIndex = i;
    this.router.navigate(['/forms/builder']);
  }

  onRender() {
    console.log('onRender');
  }

  onSubmit(value: any) {
    console.log('onSubmit');
    console.log(value);
  }

  onChange(value: any) {
    console.log('onChange');
    console.log(value);
  }

  ngOnInit(){
    this.showFirstForm()
  }
}
