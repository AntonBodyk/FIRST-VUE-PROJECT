<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <div class="app-buttons">
            <my-buttons @click="showDialog">Создать пост</my-buttons>
            <my-select v-model="selectedSort" :options="sortOptions"/>
        </div>
        <my-dialog v-model:show="dialogVisible"> 
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list v-bind:posts="posts" @remove="removePost" v-if="!isPostsLoading"/>
        <div v-else>Идет загрузка...</div>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import axios from 'axios';
    export default {
        components: {
            PostForm, PostList
        },
            data() {
                return {
                    posts: [],
                    dialogVisible: false,
                    isPostsLoading: false,
                    selectedSort: '',
                    sortOptions: [
                        {value: 'title', name: 'По  названию'},
                        {value: 'body', name: 'По  описанию'}
                    ]
                }
            },
            methods: {
                createPost(post) {
                    this.posts.push(post);
                    this.dialogVisible = false;
                },
                removePost(post) {
                    this.posts = this.posts.filter(posts => posts.id !== post.id)
                },
                showDialog() {
                    this.dialogVisible = true;
                },
                async fetchPosts() {
                    try {
                        this.isPostsLoading = true;
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                        this.posts = response.data;
                    }catch(e) {
                        alert('Ошибка');
                    }finally{
                        this.isPostsLoading = false;
                    }
                }
            },
            mounted() {
                this.fetchPosts(); //----------Хук жизненного цикла, в нем делаем запрос на сервер!
            }
        }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app {
        padding: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    .input {
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
        margin-top: 15px;
    }
    .btn {
        align-self: flex-end;
        margin-top: 15px;
        padding: 10px 15px;
        background: none;
        border: 1px solid teal;
        color: teal;
    }
    .app-buttons {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }
</style>

