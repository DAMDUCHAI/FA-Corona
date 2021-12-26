import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
infor!:any;
phone!:any;
  constructor(private firestore: AngularFirestore) { }
  getEmployees() {
    return this.firestore.collection('information').snapshotChanges();
  }

  addEmployee(infor: infor) {
    return this.firestore.collection('information').add(infor);
  }

  updateEmployee(inforId: string, infor: infor) {
    return this.firestore.doc('information/' + inforId).update(infor);
  }

 
}
