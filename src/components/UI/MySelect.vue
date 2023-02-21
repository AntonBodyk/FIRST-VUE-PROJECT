<template>
    <select v-bind="modelValue" @change="changeOptions">
        <option disabled value="">Выбирите из списка</option>
        <option v-for="option in options" :key="option.value" value="" :option="option.value">
            {{ option.name }}
        </option>
    </select>
</template>
 
<script>
    export default {
        name: 'my-select',
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOptions(event) {
                this.$emit('update:modalValue', event.target.value);
            }
        }
    }
</script>
 
<style scoped>
 
</style>