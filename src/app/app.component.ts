import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl('0650550318',[Validators.required])
    });
  }
}
