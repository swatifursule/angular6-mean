import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UnitService } from '../../unit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;
  constructor(private unitSvc: UnitService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required],
      unit_price: ['', Validators.required]
    });
  }
  addUnit(unit_name, unit_price){
    this.unitSvc.addUnit(unit_name, unit_price);
  }

  ngOnInit() {
  }

}
