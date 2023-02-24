<template>
    <div class="navbar">
        <div @click="$router.push('/')">Vue 3 project</div>
        <div class="navbar-btns">
            <my-buttons @click="$router.push('/posts')">Посты</my-buttons>
            <my-buttons @click="$router.push('/about')" style="margin-left: 20px;">О приложении</my-buttons>
            <my-buttons @click="$router.push('/store')">Store</my-buttons>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return{}
        }
    }
</script>
 
<style scoped>
    .navbar {
        height: 50px;
        background: lightgray;
        box-shadow: 2px 2px 4px grey;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
    .navbar-btns {
        margin-left: auto;
        padding-bottom: 10px;
    }
</style>