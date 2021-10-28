<template>
    <div>
    <Header></Header>
     <router-view />
     <Footer ref="footerRef"></Footer>
    </div>
  
 
</template>

<script>
// import innerHeader from './components/innerHeader'
// //import PaymentPage from './components/PaymentPage'
// import PaymentTabs from './components/PaymentTabs'
// import Property from './components/Property'
import Header from './components/Header.vue'
// //import propertyListing from './components/propertyListing'
// //import HeroSection from './components/HeroSection'
// //import mainSec from './components/mainSec'
import Footer from './components/footer.vue'

export default {
    name: 'App',
    components: {
    //     // innerHeader,
    //     // //PaymentPage,
    //     // PaymentTabs,
    //     // //propertyListing,
    //     // Property,
        Header,
    //     // // HeroSection, 
    //     // // mainSec,
        Footer
    }
    
}

</script>

<style>

@import url(assets/css/style.css);
@import url(assets/css/media.css);
@import url(assets/fonts/stylesheet.css);

.hero-image{
    height: 100vh;
    position: relative;
    background-image: url(./assets/images/banner-img.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
  .hero-image:before {
    background-color: rgba(255,118,43,0.8);
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>
