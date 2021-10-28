<template>
<div>
    <PaymentTabs></PaymentTabs>
    <PaymentUpdate></PaymentUpdate>
</div>
</template>
<script>
import PaymentTabs from '../components/PaymentTabs.vue'
import PaymentUpdate from '../components/PaymentUpdate.vue'
export default {
    name:"update_payment",
    components:{
        PaymentUpdate,
        PaymentTabs
    }
    
}
</script>
