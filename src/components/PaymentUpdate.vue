<template>
    <div class="container-fluid plr-80">
     <div class="row">
    <div class="col-md-5">
      
        <h2 class="heading-32">Your trip</h2>

          <div class="Usertrip-information ">
               <b-card no-body class="overflow-hidden border-bottom booking-card">
                  <b-row no-gutters>
                    <div class="col-3">
                      <figure>
                        <b-card-img
                          src="https://picsum.photos/400/400/?image=20"
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </figure>
                    </div>
                    <div class="col-9">
                      <b-card-body>
                        <b-badge class="on-request">On request</b-badge>
                        <h4 class="heading">
                          <span>Hotel booking</span>Hotel Berlin
                        </h4>
                        <p>2.6 km from centre Metro access</p>
                        <div class="link d-flex">
                          <a href="#">Mitte, Berlin</a> <a href="#">Show o map</a>
                        </div>
                      </b-card-body>
                    </div>
                  </b-row>
              </b-card>
            <div class="userbooking-infor mt-32">
              <h4 class="heading">Booking information</h4>
              <ul class="informationListing border-bottom">
                <li><p>Dates</p><p>02 October - 09 October</p></li>
                <li><p>Guests</p><p>1 guest</p></li>
                <li><p>Work trip</p><p>Yes</p></li>
              </ul>
            </div>
             <div class="userbooking-infor mt-32 ">
              <h4 class="heading">Price details</h4>
              <ul class="informationListing border-bottom">
                <li><p>€ 33.00 X 7 nights</p><p>€237.93</p></li>
                <li><p>VAT</p><p>€10.93</p></li>
                <li ><p class="bold">Total(Euro)</p><p class="bold">€248.93</p></li>
                <li class="flex-column mt-32">
                  <label for="" class="w-100">Payment type:</label>
                    <b-form-select v-model="selected" class="payment-select mt-0">
                      <b-form-select-option :value="1"
                        >Please select an option</b-form-select-option
                      >
                      <b-form-select-option value="a">Option A</b-form-select-option>
                      <b-form-select-option value="b" disabled
                        >Option B (disabled)</b-form-select-option
                      >
                    </b-form-select>
                </li>
              </ul>
            </div>
             <div class="userbooking-infor mt-32">
              <h4 class="heading">Personal information</h4>
              <ul class="informationListing">
                <li><p>First name:</p><p>John</p></li>
                <li><p>Last name:</p><p>Doe</p></li>
                <li><p>Cell phone:</p><p>+3453254245245</p></li>
                 <li><p>E-mail:</p><p>johndoe@gmail.com</p></li>
                <li><p>Country:</p><p>Germany</p></li>
              </ul>
            </div>
        </div>
        <a href="#" class="book mt-32">Update</a>
        <router-link to="/prop_list" class="border-button mt-16">Cancel</router-link>
        <!-- <a href="#" class="border-button mt-16">
          Cancel
        </a> -->
    </div>
    </div>
    </div>
</template>
<script>


export default {
  name:"PaymentUpdate"
}
</script>
