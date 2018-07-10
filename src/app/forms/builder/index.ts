import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {SharedServices} from '../../services/shared.services';
import {ChangeFormatServices} from '../../services/changeFormat.service';
import Prism from 'prismjs';

@Component({
  templateUrl: './builder.html',
  styleUrls: ['./builder.scss']
})
export class BuilderComponent implements AfterViewInit {
  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild('code') codeElement?: ElementRef;

  constructor(
    private storageService: StorageService,
    private sharedServices: SharedServices,
    private changeFormatServices: ChangeFormatServices
  ) {
  }

  public form: Object = {
    components: []
  };

  public formDefination: any;
  public creatFlag = true;
  public nameOfForm: string;

  ngOnInit(): void {
    if (this.sharedServices.isRender) {
      this.form = this.sharedServices.dataArray;
      this.formDefination = this.sharedServices.dataArray;
      this.creatFlag = false;
      this.nameOfForm = this.sharedServices.dataArray.formName;
    }
  }

  ngOnDestroy() {
    this.sharedServices.isRender = false;
    this.sharedServices.updateIndex = null;
  }


  onChange(event) {
    this.formDefination = event.form;
    /* BELLOW COMMENTED CODE WILL REQUIRED IF WE NEED TO PRINT FORM JSON ON PAGE*/
    /*this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));*/
  }

  createForm() {
    if (!this.formDefination) {
      alert('Please Select form defination');
      return;
    }
    const test = this.changeFormatServices.updateFormat(this.formDefination);
    this.storageService.setFormData(test);
    alert('Form successfully created');
  }

  updateForm() {
    this.storageService.setFormData(this.formDefination);
    alert('Form successfully updated');
  }

  changeFormName(){
    let name = prompt('Enter New Name');
    if(name){
      this.nameOfForm = name;
      this.formDefination.formName = this.nameOfForm;
    }
    
  }

  ngAfterViewInit() {
    /* BELLOW COMMENTED CODE WILL REQUIRED IF WE NEED TO PRINT FORM JSON ON PAGE*/
    /*    const formattedCode = Prism.highlight(`import { Component, ElementRef, ViewChild } from '@angular/core';
    @Component({
      templateUrl: './builder.html'
    })
    export class BuilderComponent {
      @ViewChild('json') jsonElement?: ElementRef;
      public form: Object = {components: []};
      onChange(event) {
        console.log(event.form);
      }
    }`, Prism.languages.javascript, 'javascript');
        this.codeElement.nativeElement.innerHTML = formattedCode;*/
  }

}
