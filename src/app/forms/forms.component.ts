import {Component, OnInit} from '@angular/core';
import {FormRoutes} from './';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() {
  }

  public forms: any[] = FormRoutes[0].children.filter((item: any) => {
    return !!item.path;
  });

  ngOnInit() {
  }

}
