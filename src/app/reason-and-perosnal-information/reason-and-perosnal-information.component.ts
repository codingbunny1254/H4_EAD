import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reason-and-perosnal-information',
  templateUrl: './reason-and-perosnal-information.component.html',
  styleUrls: ['./reason-and-perosnal-information.component.css']
})
export class ReasonAndPerosnalInformationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  

  onSubmit()
  {

  }

}
