import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { trigger, style, state, animate, transition } from '@angular/animations';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute, public popoverController: PopoverController) {
    route.params.subscribe(val => {
      this.getSelectCategory()
      this.locationList()
      this.expiryOfferList()
      this.UserDetails()

    });
  }

  ngOnInit() {
    this.GetOtherofferList();
    this.offerList()
    this.start()
    console.log(this.userdetails);
    console.log(this.whatsapp_href);

  }
  ngOnDestroy() { this.clearTimer(); }

  intervalId = 0;
  Counter = '';
  seconds = 11;
  hour = 1;

  city: any;

  clearTimer() { clearInterval(this.intervalId); }
  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.Counter = `$ ${this.hour} {this.seconds} `;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.Counter = 'Offers Ends..!';
      } else {
        if (this.seconds < 0) { this.seconds = 60; } // reset
        this.Counter = `${this.hour}. ${this.seconds} Hrs`;
      }
    }, 1000);
  }


  username: any = (localStorage.getItem("userName"));
  userdetails: any = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
  slideName: any = 'Home';
  isvisible: any = false;
  IfOfferPresent: any;
  deliveryAvilability: any;
  popUpisvisible: any = false;
  productDetails: any = true;
  IfOtherOfferPresent: any;
  storedetailsVisible: any = false;
  noDataFound: any = false;
  ExpirynoDataFound: any = true;
  offerListVisible: any = true;
  getCategoryList: any = [];
  other_offer: any;
  offerlist: any = [];
  offerView: any = []
  storedetails: any = []
  storeTbid: any;
  storeLogo: any;
  storeName: any;
  productName: any;
  productImage: any;
  description: any;
  offer: any;
  totalPrice: any;
  offerPrice: any;
  offerTime: any;
  storeAddress: any;
  websiteLink: any;
  whatsApp: any;
  contact: any;
  instagram: any;
  others: any;
  storeID: any;
  spamMsg: any;
  storeNa: any;
  offerDenaid: any;
  spam_msg: any;
  store: any;
  offer_denied: any;
  locationChangeVisible: any = false;
  unit: any;
  otherofferlist: any = [];
  loginUserTbid: any;
  loginUserName: any;
  loginUserNumber: any;
  loginUserLocation: any;
  loginUserToken: any;

  UserDetails() {

    this.http.get('/user_details',).subscribe((response: any) => {
      console.log(response);
      this.loginUserTbid = response.records.user_name;
      if (response.records.user_name == null) {
        this.loginUserName = "User";
      } else {
        this.loginUserName = response.records.user_name;
      }
      this.loginUserNumber = response.records.user_name;
      this.loginUserLocation = response.records.user_name;
      this.loginUserToken = response.records.user_name;

    }, (error: any) => {
      console.log(error);
    });

  }


  hidepopup() {
    this.popUpisvisible = false;
  }
  showPopup() {
    this.popUpisvisible = true;

  }
  //--------------- Ion slide option ----------//
  slideOpts = {
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  }

  // ----------- spam report -----------//
  spam(val) {
    console.log(this.spamMsg);
    if (this.spamMsg == true) {
      this.spam_msg = "spam Msg"
    } else {
      this.spam_msg = ""
    }

  }

  // ----------- storeNA report -----------//
  storeNA(val) {
    if (this.store == true) {
      this.store = "store NA"
    } else {
      this.store = ""
    }
  }

  // ----------- OfferDenaid report -----------//
  OfferDenaid(val) {
    if (this.store == true) {
      this.offer_denied = "offer Denaid"
    } else {
      this.offer_denied = ""
    }
  }


  // ----------- Seller report Api call -----------//
  reportSeller() {
    const obj = {
      store_name: this.storeID,
      spam_msg: this.spam_msg,
      store: this.store,
      offer_denied: this.offer_denied,
      others: this.others
    }

    this.http.post('/seller_report', obj).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.others = ''
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
          title: 'Report Successfully'
        })
        this.popUpisvisible = false
      }

    }, (error: any) => {
      console.log(error);
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
        title: 'Something Went Wrong'
      })
    });
  }


  //------------- Read one Offer(card) Api call ------------//
  singleCard(product) {
    this.deliveryAvilability = ''
    const o = product
    this.isvisible = true;
    this.storedetailsVisible = false
    this.productDetails = true
    this.http.get('/readone_offer_user?o=' + o).subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
        this.storeTbid = response.records.tbid
        this.storeLogo = response.records.store_logo
        this.storeName = response.records.store_name
        this.productName = response.records.product
        this.productImage = response.records.product_image
        this.description = response.records.description
        this.offer = response.records.product_weight
        this.totalPrice = response.records.total_cost
        this.offerPrice = response.records.offer_price
        this.other_offer = response.records.other_offer
        this.offerTime = response.records.offer_time,
          this.whatsapp_status = response.records.seller_toggle.whatsapp;
        this.instagram_status = response.records.seller_toggle.instagram;
        this.website_status = response.records.seller_toggle.website;
        this.facebook_status = response.records.seller_toggle.facebook;
        this.youtube_status = response.records.seller_toggle.youtube;
        this.contact_status = response.records.seller_toggle.contact_number;

        this.unit = response.records.product_unit
        if (this.other_offer == "") {
          this.IfOfferPresent = true;
          this.IfOtherOfferPresent = false;
        } else {
          this.IfOfferPresent = false;
          this.IfOtherOfferPresent = true;
        }
      }

    }, (error: any) => {
      console.log(error);
    });
  }

  whatsapp_status: any = true;
  instagram_status: any = true;
  website_status: any = true;
  facebook_status: any = true;
  youtube_status: any = true;
  contact_status: any = true;
  youtube: any;
  facebook: any;
  //---------------Get Store Details  Api call -------------//
  storeDetails(storename) {
    this.storedetailsVisible = true;
    this.productDetails = false;
    const obj = {
      store_name: storename
    }
    this.http.post('/store_details_user', obj).subscribe((response: any) => {
      this.storedetails = response.records;
      console.log(this.storedetails);
      this.storeAddress = response.records.address_line_1 + " " + response.records.address_line_2 + " " + response.records.city + " : " + response.records.pincode + " " + response.records.state;
      this.websiteLink = response.records.website
      this.whatsApp = response.records.whatsapp
      this.contact = response.records.contact_number
      this.instagram = response.records.instagram
      this.youtube = response.records.youtube
      this.facebook = response.records.facebook
      this.storeID = response.records.tbid
      this.storeLogo = response.records.store_logo
      this.deliveryAvilability = response.records.delivery_availability

      this.whatsapp_href = "whatsapp://send?text=HelloWorld";
      console.log(this.whatsapp_href);

      this.instagram_href = "instagram://user?username=" + response.records.instagram;
      this.youtube_href = response.records.youtube;
      this.facebook_href = "https://www.facebook.com/" + response.records.facebook + "/"


      if (this.deliveryAvilability == 1 && this.deliveryAvilability == false && this.deliveryAvilability == "Available") {
        this.deliveryAvilability = false
      } else {
        this.deliveryAvilability = true
      }
    }
      , (error: any) => {
        console.log(error);
      }
    );
  }
  youtube_href: any;
  whatsapp_href: any = "https://api.whatsapp.com/send?phone=7598297335";
  instagram_href: any;
  facebook_href: any;
  //-------------- Navigate to dashboard ----------//
  navigateHome() {
    this.storedetailsVisible = false;
    this.isvisible = false;
    this.productDetails = true;

  }



  //-------------- Navigate to searchPage ----------//
  searchPage() {
    this.router.navigate(['/searchpage'])
  }

  //-------------- Navigate to setalarmPage ----------//
  setalarm() {
    this.router.navigate(['/setalarm'])
  }

  //-------------- Navigate to notificationPage ----------//
  notification() {
    this.router.navigate(['/notification'])
  }

  //--------- Get User Selected store Category's------------//
  getSelectCategory() {
    this.http.get('/store_category_user').subscribe((response: any) => {
      this.getCategoryList = response.records
      console.log(response);

    }, (error: any) => {
      console.log(error);
    });
  }

  //------------- get offer list -----------//
  GetOtherofferList() {
    this.otherofferlist = [];
    const data = {
      city: this.city
    }
    this.http.post('/list_all_offer', data).subscribe((response: any) => {
      console.log(response.records);
      for (var i = 0; i < response.records.length; i++) {
        if (response.records[i].other_offer != "") {
          const data = {
            product_image: response.records[i].product_image,
            store_name: response.records[i].store_name,
            offer_time: response.records[i].offer_time,
            total_cost: response.records[i].total_cost,
            product: response.records[i].product,
            product_unit: response.records[i].product_unit,
            other_offer: response.records[i].other_offer,
            product_weight: response.records[i].product_weight,
            tbid: response.records[i].tbid
          }
          console.log(this.otherofferlist);
          this.otherofferlist.push(data);
        }
      }
      console.log(this.offerlist);
      if (response.message == "No offers found.") {
        this.noDataFound = true;
      } else {
        this.noDataFound = false;
      }

    }, (error: any) => {
      console.log(error);
      this.noDataFound = true;
    }
    );
  }



  offerList() {
    this.offerlist = [];
    const data = {
      city: this.city
    }
    this.http.post('/list_all_offer', data).subscribe((response: any) => {
      console.log(response.records);
      for (var i = 0; i < response.records.length; i++) {
        if (response.records[i].offer != "") {
          const data = {
            store_name: response.records[i].store_name,
            product_image: response.records[i].product_image,
            offer_time: response.records[i].offer_time,
            total_cost: response.records[i].total_cost,
            product: response.records[i].product,
            product_unit: response.records[i].product_unit,
            offer: response.records[i].offer,
            offer_price: response.records[i].offer_price,
            tbid: response.records[i].tbid,
            product_weight: response.records[i].product_weight
          }
          console.log(this.offerlist);
          this.offerlist.push(data);
        }
      }
      console.log(this.offerlist);
      if (response.message == "No offers found.") {
        this.noDataFound = true;
      } else {
        this.noDataFound = false;
      }

    }, (error: any) => {
      console.log(error);
      this.noDataFound = true;
    }
    );
  }




  expiryofferlist: any = []
  //------------- get offer list -----------//
  expiryOfferList() {


    this.http.get('/list_offer_expiry',).subscribe((response: any) => {
      this.ExpirynoDataFound = false;
      this.expiryofferlist = response.records;
      console.log(this.expiryofferlist);
      // if(response.message == "No offers found."){
      //   this.noDataFound = true;
      // }else{
      //   this.noDataFound = false;
      // }

    }, (error: any) => {
      console.log(error);
      this.ExpirynoDataFound = false;
    }
    );
  }

  //------------- click home slider ----------//
  clickSlideHome() {
    this.offerlist = []
    this.slideName = "Home";
    this.offerListVisible = true;
    this.noDataFound = false;
    this.isvisible = false
    this.offerList();
    this.GetOtherofferList();
  }


  //------------- click  slider to fetch data based on category ----------//
  clickSlide(item) {
    console.log(item);
    this.isvisible = false
    this.slideName = item;
    if (this.slideName == "Home") {
      this.offerListVisible = true;
      this.noDataFound = false;
      this.offerList()
      this.GetOtherofferList();
    }

    const obj = {
      store_category_id: item,
      city: this.city

    }
    this.http.post('/list_offer_category', obj).subscribe((response: any) => {
      if (response.success == "true") {
        this.offerlist = response.records;
        console.log(response);
        this.offerListVisible = true;
        this.noDataFound = false;
      } else {

      }
    }, (error: any) => {
      console.log(error);
      this.offerListVisible = false;
      this.noDataFound = true;

    }
    );
  }

  locationsList: any = []
  locationList() {
    this.locationsList = [];
    this.http.get('/list_location',).subscribe((response: any) => {
      console.log(response);
      for (var i = 0; i <= response.records.length; i++) {
        if (response.records[i].city != null) {
          this.locationsList.push(response.records[i])
        }
      }

      console.log(response.records.city);

    }, (error: any) => {
      console.log(error);
    });

  }

  changeLocation() {
    console.log(this.city);

    if (this.city == "All") {
      this.http.get('/list_all_offer',).subscribe((response: any) => {
        this.offerlist = response.records;
        console.log(this.offerlist);
        if (response.message == "No offers found.") {
          this.noDataFound = true;
        } else {
          this.noDataFound = false;
        }

      }, (error: any) => {
        console.log(error);
        this.noDataFound = true;
      }
      );
    }
  }

  locationChange() {
    this.locationChangeVisible = !this.locationChangeVisible;
  }

  testSlide() {
    this.router.navigate(['/slide-test'])
  }

}
