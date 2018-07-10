import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from '../../dist';
import { BuilderComponent } from './builder';
import { PDFFormComponent } from './pdf';
import { FormsComponent } from './forms.component';
import {StorageService} from '../services/storage.service';
import {CustomFormComponent} from './custom';
import {SharedServices} from '../services/shared.services';
import {ChangeFormatServices} from '../services/changeFormat.service';

export const FormRoutes: any = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: '',
        redirectTo: 'builder',
        pathMatch: 'full'
      },
      {
        path: 'builder',
        title: 'Form Builder',
        component: BuilderComponent
      },
      // {
      //   path: 'pdf',
      //   title: 'PDF Form',
      //   component: PDFFormComponent
      // },
      {
        path: 'custom', //This is custom component only name is "saved form"
        title : 'Saved Forms',
        component : CustomFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, FormioModule, RouterModule.forChild(FormRoutes)],
  declarations: [
    FormsComponent,
    BuilderComponent,
    PDFFormComponent,
    CustomFormComponent
  ],
  bootstrap: [FormsComponent],
  providers : [StorageService, SharedServices, ChangeFormatServices]
})
export class FormsModule {}
