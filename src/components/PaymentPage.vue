<template>
<div>
  
  <div class="container-fluid plr-80 payment-page">
    <div class="row">
      <div class="col-md-6 yourTrip">
        <h2 class="border-bottom">Your trip</h2>
        <div class="edit-dates d-flex">
          <h4 class="heading">Dates<span>Oct 2-9</span></h4>
          <a href="#" class="editDates">Edit dates</a>
        </div>
        <div class="edit-dates d-flex">
          <h4 class="heading">Guests<span>1 guest</span></h4>
          <a href="#" class="editDates">Edit dates</a>
        </div>
        <div class="edit-dates d-flex">
          <h4 class="heading"><span>Is it a work trip</span></h4>
          <toggle-button
            :value="true"
            color="#6b778c"
            width="40"
            height="20"
            :labels="{ checked: '', unchecked: 'X' }"
          />
        </div>

        <div class="pay border-bottom">
          <h4 class="heading">Pay with</h4>
          <b-form-select v-model="selected" class="payment-select">
            <b-form-select-option :value="1"
              >Please select an option</b-form-select-option
            >
            <b-form-select-option value="a">Option A</b-form-select-option>
            <b-form-select-option value="b" disabled
              >Option B (disabled)</b-form-select-option
            >
          </b-form-select>
          <a href="#" class="enter-coupon">Enter a coupon</a>
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-5 ">
        <h2 class="border-bottom desk-none">Your trip</h2>
        <div class="price-detail-wrapper">
          <b-card no-body class="overflow-hidden border-bottom booking-card">
            <b-row no-gutters>
              <div class="col-4 col-md-3 col-lg-3">
                <figure>
                  <b-card-img
                    src="https://picsum.photos/400/400/?image=20"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </figure>
              </div>
              <div class="col-8 col-md-9 col-lg-9">
                <b-card-body>
                  <b-badge class="bg-txt">Instant booking</b-badge>
                  <h4 class="heading">
                    <span>Hotel booking</span>Hotel Berlin
                  </h4>
                  <p class="km d-flex"><span>2.6 km from centre</span> <span>Metro access</span></p>
                  <div class="link d-flex">
                    <a href="#">Mitte, Berlin</a> <a href="#">Show on map</a>
                  </div>
                </b-card-body>
              </div>
            </b-row>
          </b-card>

          <div class="price-detail">
            <h4 class="heading">Price details</h4>
            <p class="d-flex">
              <span>€ 33.00 &nbsp; X &nbsp; 7 nights</span><span class="bold">€237.93</span>
            </p>
            <p class="d-flex">
              <span>VAT</span><span class="bold">€10.93</span>
            </p>
            <p class="d-flex bold">
              <span>Total(Euro)</span><span>€248.93</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="personal-infor">
          <h2 class="heading">Personal information</h2>
          <div class="row ">
            <div class="col-12">
              <div>
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-radio-group
                    id="radio-group-2"
                    class="radioGroup"
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="radio-sub-component"
                  >
                    <label>Gender</label>
                    <b-form-radio value="first">Male</b-form-radio>
                    <b-form-radio value="second">Female</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>
            </div>
            <div class="col-md-12 ">
              <div class="border1">
                <div class="half-width">
                  <div role="group">
                    <label for="input-live">First Name</label>
                    <b-form-input
                      id="input-live"
                      v-model="name"
                      :state="nameState"
                      aria-describedby="input-live-help input-live-feedback"
                      placeholder="Enter your name"
                      trim
                    ></b-form-input>

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <b-form-invalid-feedback id="input-live-feedback">
                      Enter at least 3 letters
                    </b-form-invalid-feedback>
                  </div>
                </div>
                <div class="half-width float-right">
                  <div role="group">
                    <label for="input-live">Last Name</label>
                    <b-form-input
                      id="input-live"
                      v-model="name"
                      :state="nameState"
                      aria-describedby="input-live-help input-live-feedback"
                      placeholder="Enter your last name"
                      trim
                    ></b-form-input>

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <b-form-invalid-feedback id="input-live-feedback">
                      Enter at least 3 letters
                    </b-form-invalid-feedback>
                  </div>
                </div>
                <div class="half-width">
                  <div role="group">
                    <label for="input-live">Cell phone</label>
                    <b-form-input
                      id="input-live"
                      v-model="name"
                      :state="nameState"
                      aria-describedby="input-live-help input-live-feedback"
                      placeholder="Enter your phone number"
                      trim
                    ></b-form-input>

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <b-form-invalid-feedback id="input-live-feedback">
                      Enter at least 3 letters
                    </b-form-invalid-feedback>
                  </div>
                </div>
                <div class="half-width float-right">
                  <div role="group">
                    <label for="input-live">E-mail</label>
                    <b-form-input
                      id="input-live"
                      v-model="name"
                      :state="nameState"
                      aria-describedby="input-live-help input-live-feedback"
                      placeholder="Enter your email"
                      trim
                    ></b-form-input>

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <b-form-invalid-feedback id="input-live-feedback">
                      Enter at least 3 letters
                    </b-form-invalid-feedback>
                  </div>
                </div>
              </div>

              <div class="border1">
                <div class="half-width">
                  <div role="group">
                    <label for="input-live">Country</label>
                    <b-form-input
                      id="input-live"
                      v-model="name"
                      :state="nameState"
                      aria-describedby="input-live-help input-live-feedback"
                      placeholder="Enter your country"
                      trim
                    ></b-form-input>

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <b-form-invalid-feedback id="input-live-feedback">
                      Enter at least 3 letters
                    </b-form-invalid-feedback>
                  </div>
                </div>
                <div class="half-width float-right">
                  <div role="group">
                    <label for="input-live">ZIP Code</label>
                    <b-form-input
                      id="input-live"
                      v-model="name"
                      :state="nameState"
                      aria-describedby="input-live-help input-live-feedback"
                      placeholder="Enter your ZIP"
                      trim
                    ></b-form-input>

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <b-form-invalid-feedback id="input-live-feedback">
                      Enter at least 3 letters
                    </b-form-invalid-feedback>
                  </div>
                </div>
                <div class="half-width">
                  <div role="group">
                    <label for="input-live">Number/street</label>
                    <b-form-input
                      id="input-live"
                      v-model="name"
                      :state="nameState"
                      aria-describedby="input-live-help input-live-feedback"
                      placeholder="Your address"
                      trim
                    ></b-form-input>

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <b-form-invalid-feedback id="input-live-feedback">
                      Enter at least 3 letters
                    </b-form-invalid-feedback>
                  </div>
                </div>
                <div class="half-width float-right">
                  <div role="group">
                    <label for="input-live">Apt. Nbr.</label>
                    <b-form-input
                      id="input-live"
                      v-model="name"
                      :state="nameState"
                      aria-describedby="input-live-help input-live-feedback"
                      placeholder="Your address"
                      trim
                    ></b-form-input>

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <b-form-invalid-feedback id="input-live-feedback">
                      Enter at least 3 letters
                    </b-form-invalid-feedback>
                  </div>
                </div>
              </div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      class="agree"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I have read and agree to the <a href="#"> Terms of use</a> and the <a href="#"> Privacy policy</a>
    </b-form-checkbox>
              <!-- <p class="agree">I have read and agree to the <a href="#"> Terms of use</a> and the <a href="#"> Privacy policy</a></p> -->
              <a href="" class="book">Book now</a>

            </div>

          </div>
        </div>
      </div>
    </div>

    
 
  </div>
  
    
 </div> 
</template>
<script>

export default {
  name: "PaymentPage",
  
};
</script>
