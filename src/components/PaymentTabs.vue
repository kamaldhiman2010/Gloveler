<template>
<section class="payment-tabs-wrapper">
    <div class="container-fluid plr-80">
        <b-tabs content-class="mt-3" align="center">
            <b-tab active> 
                <template #title>
                    <h4 class="tab-h4 w-100">Step Name</h4>
                    <p class="tab-p w-100">Short step description</p>
                </template>
                <p>I'm the first tab</p>
            </b-tab>
            <b-tab >
                 <template #title>
                    <h4 class="tab-h4 w-100">Step Name</h4>
                    <p class="tab-p w-100">Short step description</p>
                </template>
                <p>I'm the second tab</p>
            </b-tab>
            <b-tab >
                 <template #title>
                    <h4 class="tab-h4 w-100">Step Name</h4>
                    <p class="tab-p w-100">Short step description</p>
                </template>
                <p>I'm the third tab</p>
            </b-tab>
            <b-tab >
                 <template #title>
                    <h4 class="tab-h4 w-100">Step Name</h4>
                    <p class="tab-p w-100">Short step description</p>
                </template>
                <p>I'm the fourth tab</p>
            </b-tab>
        </b-tabs>
    </div>
</section>
</template>

<script>
export default {
    name: "PaymentTabs"
}
</script>

<style>

</style>
