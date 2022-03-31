import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword.page';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { OtpPage } from '../otp/otp.page';



@Component({
  selector: 'app-username-login',
  templateUrl: './username-login.page.html',
  styleUrls: ['./username-login.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 },))
      ])
    ]),
    trigger('slideup', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 },))
      ])
    ])
  ]
})
export class UsernameLoginPage implements OnInit {

  userInfo = null;
  password: any;

  constructor(public modalCtrl: ModalController, private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute, public platform: Platform) {


  }

  ngOnInit() {

  }

  mailidCheckFalse() {
    this.isNotEmailAlert = false;
  }

  mailid: any;
  isNotEmailAlert: any;
  EmailCheck() {
    console.log(this.mailid);
    var expression = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var regex = new RegExp(expression);
    if (regex.test(this.mailid) == true) {
      this.isNotEmailAlert = false;
    } else {
      this.isNotEmailAlert = true;
    }
  }
  signIn() {
    this.EmailCheck();
    if (this.isNotEmailAlert == false) {
      var Data = {
        email_id: this.mailid,
        password: this.password
      }
      this.http.post('/user_google_signin', Data).subscribe((response: any) => {
        console.log(response);
        if (response.success == "true") {
          this.dismiss()
          this.mailid = null
          this.password = null
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
  
          Toast.fire({
            icon: 'success',
            title: 'Login successfully'
          })
          
        }
        if (response.message = "Your Account Deactivated.") {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: 'You have to verify your account'
          })

          this.VerifyAccount = true;

        }
      
      }, (error: any) => {
        console.log(error);
        console.log(error.error.message);

      });
    }
  }


  VerifyAccount: any = false;
  async dismiss() {
    await this.modalCtrl.dismiss();
  }


  async forgotpassword() {
    const modal = await this.modalCtrl.create({
      component: ForgotpasswordPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'register-modal',
    })

    return await modal.present();
  }

  mobilenumber: any;
  async verifyAccount() {
    localStorage.setItem("24hrs-user-mobile-number-otp-verification", this.mobilenumber);
    const modal = await this.modalCtrl.create({
      component: OtpPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }



  signup() {
    this.dismiss();
    this.router.navigate(['/register'])
  }
}
