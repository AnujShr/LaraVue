<template>
    <div>
        <input type="text" class="input" :value="value" @input="updateCode($event.target.value)" ref="input">
    </div>
</template>
<script>
    export default {
        props: ['value'],
        methods: {
            updateCode(code) {

                if (code == "OLD") {

                    alert('OLD CODE USED');

                    this.$refs.input.value = code = '';

                }

                this.$emit('input', code);

            }
        }
    }
</script>