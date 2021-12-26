import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireBaseService } from 'src/app/service/fire-base.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  form!: FormGroup;
  id!: any;
  infor: any | undefined;
  mess: string = '';
  checkedGender!: string;
  constructor(
    private fb: FormBuilder,
    private fireBaseService: FireBaseService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
    });

    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10),
        ],
      ],

      gender: ['', [Validators.required]],

      year: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],

      cmnd: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],

      address: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
          Validators.pattern(/^0+[0-9]*$/),
        ],
      ],

      declaration: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  get name() {
    return this.form.get('name') as FormControl;
  }

  get gender() {
    return this.form.get('gender') as FormControl;
  }

  get year() {
    return this.form.get('year') as FormControl;
  }

  get cmnd() {
    return this.form.get('cmnd') as FormControl;
  }

  get address() {
    return this.form.get('address') as FormControl;
  }

  get phone() {
    return this.form.get('phone') as FormControl;
  }

  get declaration() {
    return this.form.get('declaration') as FormControl;
  }
  ngOnInit(): void {
    this.infor = this.fireBaseService.infor.infor;
    this.checkedGender = 'm';
    if (this.infor) {
      this.name.setValue(this.infor.name);
      this.gender.setValue(this.infor.gender);
      if (this.infor.gender == 'Female') {
        this.checkedGender = 'f';
      }

      this.year.setValue(this.infor.year);
      this.cmnd.setValue(this.infor.cmnd);
      this.address.setValue(this.infor.address);
      this.phone.setValue(this.fireBaseService.phone);
      this.declaration.setValue(this.infor.declaration);
    }
    this.fireBaseService.infor = '';
  }

  handleSubmitForm() {
    console.log(this.form);
    if (this.infor) {
      this.fireBaseService.updateEmployee(this.id, this.form.value).then();
      this.mess = 'Update succesfuly';
    } else {
      this.fireBaseService.addEmployee(this.form.value).then();
      this.mess = 'Declaration succesfuly';
    }
  }
}
