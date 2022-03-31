import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
})
export class SearchpagePage implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.getProductList()
    });
  }


  ngOnInit() {
  }

  cardVisible: any = false;
  isVisible: any = false;
  isShown: any = false;
  searchResultVisible: any = false
  searchProductName: any;
  searchResult: any = []
  searchProductList: any = []
  storeLogo: any;
  storeName: any;
  productName: any;
  productImage: any;
  description: any;
  weight: any;
  unit: any;
  totalCost: any;
  offerPrice: any;
  offerTime: any;


  //-------------- Navigate to notificationPage ----------//
  notification() {
    this.router.navigate(['/notification'])
  }


  searchProduct() {
    console.log(this.searchProductName);
    this.getProductList()
    this.isVisible = true;
    this.isShown = true;
    this.cardVisible = false;
    this.searchResultVisible = true;

    if (this.searchProductName == "") {
      this.isShown = false;
    }
    this.http.get('/product_search_user' + this.searchProductName).subscribe((response: any) => {
      if (response.success == "true") {
        this.searchProductList = response.records;
        console.log(response);

      }

    }, (error: any) => {
      console.log(error);
    });
  }

  clearData() {
    this.searchProductName = " ";

  }
  IfOfferPresent: any;
  IfOtherOfferPresent: any;
  other_offer: any;
  offer: any;
  totalPrice:any;
  searchRecord: any = []
  selectSearchProduct(name) {

    this.searchProductName = name;
    const s = name;
    console.log(s);
    this.searchResultVisible = false;
    this.cardVisible = true;
    this.http.get('/offer_search_user?s=' + s).subscribe((response: any) => {
      console.log(response);
      this.totalPrice = response.records[0].total_cost
      this.offerPrice = response.records[0].offer_price
      this.other_offer = response.records[0].other_offer
      this.offer = response.records[0].product_weight
      if (this.other_offer == "") {
        this.IfOfferPresent = true;
        this.IfOtherOfferPresent = false;
      } else {
        this.IfOfferPresent = false;
        this.IfOtherOfferPresent = true;
      }
      console.log(this.other_offer);
      
      this.searchRecord = response.records

    }, (error: any) => {
      console.log(error);
    });


  }


  getProductList() {
    this.http.get('/list_all_product_user').subscribe((response: any) => {
      this.searchProductList = response.records;
      console.log(response);

    }, (error: any) => {
      console.log(error);
    });
  }

  backToHome() {
    this.router.navigate(['/homepage'])
  }

}

