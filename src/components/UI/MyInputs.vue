<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
    export default {
        name: 'my-input', //Название созданого мной компонента, должно всегда сост из 2х слов (правило Vue)
        props: {
            modelValue: [String, Number]    
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value) //EMIT события которое должно обновиться, второй параметр знач которое должно обновиться 
            }
        }
    }
</script>

<style scoped>
    .input {
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
        margin-top: 15px;
    }
</style>