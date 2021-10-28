<template>

<div class="content">
   
    <section class="listing-property">
          <div class="mobile-search">
             <div class="container-fluid plr-80"> 
                         <b-form-input v-model="search" placeholder="Berlin" class="search-icon"></b-form-input>
                          </div>
                            <div class="container-fluid plr-80">
                         <div class="cal-outer"><p><img src="../assets/images/calendar-new.png"> <span>1 Oct - 5 Oct 2021</span></p>
                         <p><img src="../assets/images/users.png"><span>2 Adults</span></p></div>
                            </div>
                         <div class="mobfilter-wrapper">
                             <div class="container-fluid plr-80">
                             <b-row>
                                 <b-col > <b-form-select v-model="selected" :options="options"></b-form-select></b-col>
                                   <b-col > <b-form-select v-model="selected" :options="options"></b-form-select></b-col>
                                     <b-col > <b-form-select v-model="selected" :options="options"></b-form-select></b-col>
                                
                             </b-row>
                             </div>
                         </div>
                         
           </div>


        <div class="container-fluid plr-80">
            <div class="row">
                <div class="col-md-4 col-lg-3 listing-left-sec">
                    <div class="search-wrapper custom-calender">
                        <h2>Search</h2>
                        <div class="form-outer">
                       <b-row class="mb-20">
                            <b-col md="12">
                            <label for="input-small">Destination/property name</label>
                            </b-col>
                            <b-col md="12">
                            <b-form-input id="input-small"  placeholder="Berlin" class="input"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="mb-20">
                            <!-- <b-col md="12">
                            <label for="input-small">Check-in datee</label> -->
                            <b-col md="12"> <label for="input-small">Check-in date</label><HotelDatePicker format="ddd DD MMMM YYYY" ref="datepicker">
                            </HotelDatePicker></b-col>
                            <!-- </b-col>
                            <b-col md="12">
                             <b-form-datepicker v-model="value" :min="min" :max="max" locale="en" class="input"></b-form-datepicker>
                            </b-col>
                        </b-row>
                        <b-row class="mb-20">
                            <b-col md="12">
                            <label for="input-small">Check-out datee</label>
                            </b-col>
                            <b-col md="12">
                             <b-form-datepicker v-model="value" :min="min" :max="max" locale="en" class="input"></b-form-datepicker>
                            </b-col> -->
                        </b-row>
                        <b-row class="mb-20">
                            <b-col md="12">
                             <b-form-select  v-model="selected_adults"  :options="adult_options"  class="input">
                                <!-- <b-form-select-option :value="null">Please select an option</b-form-select-option>
                                <b-form-select-option value="a">Option A</b-form-select-option>
                                <b-form-select-option value="b" disabled>Option B (disabled)</b-form-select-option>
                                <b-form-select-option-group label="Grouped options">
                                    <b-form-select-option :value="{ C: '3PO' }">Option with object value</b-form-select-option>
                                    <b-form-select-option :value="{ R: '2D2' }">Another option with object value</b-form-select-option>
                                </b-form-select-option-group> -->
                                </b-form-select>
                            </b-col>
                            
                        </b-row>

                        <b-row class="mb-20">
                            <b-col md="6">
                             <b-form-select v-model="selected_childrens" :options="children_options" class="input">
                                <!-- <b-form-select-option :value="null">Please select an option</b-form-select-option>
                                <b-form-select-option value="a">Option A</b-form-select-option>
                                <b-form-select-option value="b" disabled>Option B (disabled)</b-form-select-option>
                                <b-form-select-option-group label="Grouped options">
                                    <b-form-select-option :value="{ C: '3PO' }">Option with object value</b-form-select-option>
                                    <b-form-select-option :value="{ R: '2D2' }">Another option with object value</b-form-select-option>
                                </b-form-select-option-group> -->
                                </b-form-select>
                            </b-col>

                             <b-col md="6">
                             <b-form-select v-model="selected_rooms" :options="rooms_options" class="input">
                                <!-- <b-form-select-option :value="null">Please select an option</b-form-select-option>
                                <b-form-select-option value="a">Option A</b-form-select-option>
                                <b-form-select-option value="b" disabled>Option B (disabled)</b-form-select-option>
                                <b-form-select-option-group label="Grouped options">
                                    <b-form-select-option :value="{ C: '3PO' }">Option with object value</b-form-select-option>
                                    <b-form-select-option :value="{ R: '2D2' }">Another option with object value</b-form-select-option>
                                </b-form-select-option-group> -->
                                </b-form-select>
                            </b-col>
                            
                        </b-row>
                         <b-row class="mb-20 submit-wrapper">   <b-col md="12"><b-button class="">Search</b-button></b-col> </b-row>
                    </div>
                    
                    </div>

                    <div class="filter-wrapper">
                        <div class="budget col-12">
                            <h4>Your budget (per night)</h4>
                              <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox ">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                        </div>
                         <div class="budget col-12">
                            <h4>Type of place</h4>
                              <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">Entire place</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">Hotel</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">Hostel</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox ">
                                     <b-form-checkbox size="lg">Private room</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                           
                        </div>
                         <div class="budget col-12">
                            <h4>Popular filter</h4>
                              <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">Breakfast included</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">Hotels</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">Very good: 8+</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox ">
                                     <b-form-checkbox size="lg">Less that 3 km</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">Double bed</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                        </div>
                         <div class="budget col-12">
                            <h4>Your budget (per night)</h4>
                              <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox ">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                        </div>
                         <div class="budget col-12">
                            <h4>Your budget (per night)</h4>
                              <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox ">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                            <b-row class="">
                                <b-col md="6" class="checkbox">
                                     <b-form-checkbox size="lg">€ 0 - € 50</b-form-checkbox>
                                </b-col>
                                <b-col md="6" class="text-right checktext">
                                    31
                                </b-col>
                            </b-row>
                        </div>
                        
                        
                    </div>

                   

                </div>
                <div class="col-md-8 col-lg-9 listing-right-sec">
                    <div class="row align-items-center top-bar">
                        <div class="col-6 ">
                            <h2>Berlin: 116 accommodations found</h2>
                        </div>
                        <div class="col-6 text-right ">
                            <p class="position-relative float-right"><img src="../assets/images/map.png" alt="">
                                <a href="#" class="show-on-map">Show on map</a>
                            </p>
                        </div>

                        <div class="col-12">
                            <!-- <div class="tab-sorting ">
                                <div class="row">
                                    <div class="col-md-3"> <a href="#" class="active">Our recomendations</a></div>
                                    <div class="col"><a href="#">Hotels </a></div>
                                    <div class="col-md-3"><a href="#">Entire homes & apartments</a></div>
                                    <div class="col"><a href="#">Price<i class="fa fa-caret-down" aria-hidden="true"></i></a></div>
                                    <div class="col"><a href="#" class="border-none">Reviews<i class="fa fa-caret-down" aria-hidden="true"></i></a></div>
                                </div>
                            </div> -->
                            <div class="tab-sorting ">
                               
                                   <a href="#" class="active">Our recomendations</a>
                                   <a href="#">Hotels </a>
                                   <a href="#">Entire homes & apartments</a>
                                   <a href="#">Price<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                   <a href="#" class="border-none">Reviews<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                
                            </div>

                        </div>
                    </div>

                    <div class="row hotel-block">
                        <div class="col-md-4 col-lg-5 col-6 ">
                            <div class="hotel-slider">
                                <b-carousel id="carousel-fade" :interval="3000" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
                                    <b-carousel-slide img-src="../assets/images/Frame 60.png"></b-carousel-slide>
                                    <b-carousel-slide img-src="../assets/images/Frame 27.png"></b-carousel-slide>
                                </b-carousel>
                            </div>
                        </div>
                        <div class="col-md-8 col-lg-7 col-6">
                            <div class="hotel-txt">
                                <div class="hotel-rating row">
                                    <div class="col-md-8">
                                        <p>Hotel booking</p>
                                        <h4 class="d-flex align-items-center">
                                            <span> Hotel Berlin</span><span><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
                                        </h4>
                                        <div class="access d-flex">
                                            <li><a href="#">Mitte, Berlin</a></li>
                                            <li><a href="#">Show on map</a></li>
                                            <li>2.6 km from centre</li>
                                            <li>Metro access</li>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex review ">
                                        <h5 class="text-center">Very good <span class="d-block text-center">2,176 reviews</span></h5>
                                        <span class="rating ">8.6</span>
                                    </div>

                                </div>

                                <div class="hotel-room row">
                                    <div class="col-md-8">
                                        <h6>
                                            Deluxe King room
                                            <span>1 extra-large double bed</span>
                                        </h6>
                                    </div>
                                    <div class="col-md-4 justify-content-end">
                                        <p>29 nights, 2 adults</p>
                                        <h4>€ 1,000</h4>
                                    </div>
                                </div>

                                <div class="hotel-request d-flex">
                                    <a href="#">Free cancellation</a>
                                    <a href="#">Need request</a>
                                </div>

                                <div class="availability justify-content-between d-flex align-items-center">
                                    <a href="#">Only 5 rooms left at this hotel on our site</a>
                                    <b-button v-on:click="redirect()">See availability</b-button>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="row hotel-block no-availability">
                        <div class="col-md-4 col-lg-5 col-6">
                            <div class="hotel-slider">
                                <b-carousel id="carousel-fade" :interval="3000" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
                                    <b-carousel-slide img-src="../assets/images/Frame 60.png"></b-carousel-slide>
                                    <b-carousel-slide img-src="../assets/images/Frame 27.png"></b-carousel-slide>
                                </b-carousel>
                            </div>
                        </div>
                        <div class="col-md-8 col-lg-7 col-6">
                            <div class="hotel-txt">
                                <div class="hotel-rating row">
                                    <div class="col-md-8">
                                        <p>Hotel booking</p>
                                        <h4 class="d-flex align-items-center">
                                            <span> Hotel Berlin</span><span><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
                                        </h4>
                                        <div class="access d-flex">
                                            <li><a href="#">Mitte, Berlin</a></li>
                                            <li><a href="#">Show on map</a></li>
                                            <li>2.6 km from centre</li>
                                            <li>Metro access</li>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-flex align-items-center justify-content-end review">
                                        <h5 class="text-center">Very good <span class="d-block text-center">2,176 reviews</span></h5>
                                        <span class="rating ">8.6</span>
                                    </div>

                                </div>

                                <a href="#" class="no-avail">This poperty has no availability on our site from</a>
                                <div class="row ">
                                    <div class="col-md-6 col-lg-3">
                                        <div class="dates">
                                            <h6>1 Nov - 30 Nov</h6>
                                            <span>29 nights</span>
                                            <p class="price">From € 2,500</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3">
                                        <div class="dates">
                                            <h6>1 Nov - 30 Nov</h6>
                                            <span>29 nights</span>
                                            <p class="price">From € 2,500</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3">
                                        <div class="dates">
                                            <h6>1 Nov - 30 Nov</h6>
                                            <span>29 nights</span>
                                            <p class="price">From € 2,500</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3">
                                        <div class="dates">
                                            <h6>1 Nov - 30 Nov</h6>
                                            <span>29 nights</span>
                                            <p class="price">From € 2,500</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="row pagination-outer align-items-center">
                        <div class="col-6 pagi-nation">
                            <b-pagination-nav number-of-pages="10" base-url="#"></b-pagination-nav>
                        </div>
                        <div class="col-6 text-right sort">
                            Showing 1 - 25
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
    <Footer></Footer>
</div>
</template>

<script>
import HotelDatePicker from "vue-hotel-datepicker";
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
export default {
    name: "propertyListing",
     components: {
    HotelDatePicker,
  },
    //  props:{
    //     selected_adults:,
    //     adult_options:[]
    // },

   data(){
        return {
    selected_adults: 'null',
    adult_options: [
    {
      text: '1 Adult',
      value: null
    },
    {
      text: '2 Adults',
      value: 2
    }, {
      text: '3 Adults',
      value: 3
    }, {
      text: '4 Adults',
      value: 4
    
     
    }],
    selected_childrens:'null',
    children_options: [
    {
      text: 'No Children',
      value: null
    },
    {
      text: '1 Child',
      value: 1
    }, {
      text: '2 Children',
      value: 2
    }, {
      text: '3 Children',
      value: 3
    }],
     selected_rooms:'null',
    rooms_options: [
    {
      text: '1 Room',
      value: null
    },
    {
      text: '2 Rooms',
      value: 2
    }, {
      text: '3 Rooms',
      value: 3
    }, {
      text: '4 Rooms',
      value: 4
    }],
    selected:'',
    options:[],
    search:'',

  }
    },
 
   
    methods:{
        redirect(){
            this.$router.push("/hotel_booking")
        }
    },
   
  
}
</script>
