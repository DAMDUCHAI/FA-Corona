import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { FireBaseService } from 'src/app/service/fire-base.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-check-phone',
  templateUrl: './check-phone.component.html',
  styleUrls: ['./check-phone.component.css'],
})
export class CheckPhoneComponent implements OnInit {
  form!: FormGroup;
  inforList!: any[];
  constructor(
    private fireBaseService: FireBaseService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
          Validators.pattern(/^0+[0-9]*$/),
        ],
      ],
    });
  }
  get phone() {
    return this.form.get('phone') as FormControl;
  }

  ngOnInit(): void {
    this.fireBaseService.getEmployees().subscribe((res) => {
      this.inforList = res.map((e) => {
        return {
          id: e.payload.doc.id,
          infor: e.payload.doc.data(),
        };
      });
    });
  }

  checkPhone(str: any) {
    console.log(this.inforList);

    let phoneList!: any[];
    phoneList = this.inforList.filter((phone) => phone.infor.phone === str);
    if (phoneList.length > 0) {
      this.router.navigate([phoneList[0].id, 'update']);
      this.fireBaseService.infor = phoneList[0];
      this.fireBaseService.phone = str;
    } else {
      this.router.navigate(['/add']);
      this.fireBaseService.phone = str;
    }
  }
}
