<template>
    <form @submit.prevent> <!-- Отменяет стандартное поведение браузера  -->
            <h3>Название поста</h3>
            <my-input  v-model="post.title" type="text" placeholder="Название" />
            <my-input  v-model="post.body"  type="text" placeholder="Описание"/>
            <my-buttons @click="createPost">Создать</my-buttons>
        </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                    this.post.id = Date.now();
                    this.$emit('create', this.post);
                    this.post = {
                        title: '',            //Очитска инпутов
                        body: ''
                    }
                }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }
</style>