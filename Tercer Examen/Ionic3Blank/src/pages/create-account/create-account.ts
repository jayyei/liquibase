import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { StudentsProvider } from '../../providers/students/students';
import {  NewUser } from '../../model/students-models';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  createAcountForm: FormGroup;
  succes: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private student_provider: StudentsProvider, private loading: LoadingController) {
    this.createAcountForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['']
  });

  // let a = () => {
  //   this.navCtrl.push(HomePage);
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CreateAccountPage');
  // }

}
usuarioNuevo(){
  let presentLoading = this.loading.create({
    content: 'Espere por favor'
  });
  presentLoading.present();
  let accountInfo : NewUser = this.createAcountForm.getRawValue();
  this.student_provider.createAccountStudent(accountInfo)
  .subscribe(() => {
    console.log('Data');
  }, error => {
    presentLoading.dismiss()
    console.log('Error', error);
  },() =>{
    console.log('Succes');
    presentLoading.dismiss();
    this.succes = "Exito al ingresar los datos";
  })
}}