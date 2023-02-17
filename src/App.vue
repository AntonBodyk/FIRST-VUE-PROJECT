<template>
    <div class="app">
        <post-form @create="createPost"/>
        <post-list v-bind:posts="posts" @remove="removePost"/>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

    export default {
        components: {
            PostForm, PostList
        },
            data() {
                return {
                    posts: [
                        {id: '1', title: 'Java script', body: 'Описание поста'},
                        {id: '2', title: 'Java script 2', body: 'Описание поста 2'},
                        {id: '3', title: 'Java script 3', body: 'Описание поста 3'}
                    ],
                }
            },
            methods: {
                createPost(post) {
                    this.posts.push(post);
                },
                removePost(post) {
                    this.posts = this.posts.filter(posts => posts.id !== post.id)
                }
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
</style>

