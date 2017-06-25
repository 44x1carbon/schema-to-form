<template>
    <textarea cols="30" rows="1" :value="value" @input="onInput($event.target.value)"></textarea>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        onInput(value) {
            this.$emit('input', value)
        }
    }
}
</script>