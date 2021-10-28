<template>
    <propertyListing v-bind:selected_adults="selected_adults"></propertyListing>
</template>
<script>

import propertyListing from '../components/propertyListing.vue'
export default {
    name:"hotel_listing",
    components:{
        propertyListing
    },
    data(){
        return{
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
        
        
        }]
        }
        
    },
 
    }

    


</script>
