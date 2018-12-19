<template>
    <div class="input-div">
        <input class="input" type="text" placeholder="Enter your coupon code " @blur="onCouponApplied">
    </div>
</template>
<script>
    export default {
        methods: {
            onCouponApplied() {
                Event.$emit('applied');
            }
        },
    }
</script>

<style>
    .input-div {
        padding-top: 40px;
    }
</style>