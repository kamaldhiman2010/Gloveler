<template>
<div>
   
   <HeroSection></HeroSection>
    <mainSec></mainSec>
    
</div>  
</template>
<script>


import HeroSection from '../components/HeroSection.vue'
import mainSec from '../components/mainSec.vue'

export default {
    name:'hotel',
    components:{
       
        mainSec,
        HeroSection
    }
}
</script>
