<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Поиск..."/>
        <div class="app-buttons">
            <my-buttons @click="showDialog">Создать пост</my-buttons>
            <my-select v-model="selectedSort" :options="sortOptions"/>
        </div>
        <my-dialog v-model:show="dialogVisible"> 
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list v-bind:posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading"/>
        <div v-else>Идет загрузка...</div>
        <div class="page-wrapper">
            <div 
                v-for="pageNumber in totalPages" 
                :key="pageNumber"
                :class="{
                    'current-page': page === pageNumber
                }" 
                class="page"
                @click="changePage(pageNumber)">
                {{ pageNumber }}</div>
        </div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
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
                    searchQuery: '',
                    page: 1,
                    limit: 10,
                    totalPages: 0,
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
                changePage(pageNumber) {
                    this.page = pageNumber;
                    this.fetchPosts();
                },
                async fetchPosts() {
                    try {
                        this.isPostsLoading = true;
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                            params: {
                                _page: this.page,
                                _limit: this.limit
                            }
                        });
                        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit); //-------Округляет число в большую сторону
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
            },
            computed: {
                // selectedSort(newValue) {
                //     this.posts.sort((post1, post2) => {
                //         return post1[newValue]?.localeCompare(post2[newValue]);
                //     })
                // }
                sortedPosts() {
                    return [...this.posts].sort((post1, post2) => {
                        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
                    })
                },
                sortedAndSearchedPosts() {
                    return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
                }
            }
        }
</script>

<style>
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
    .page-wrapper {
        display: flex;
        margin-top: 15px;
    }
    .page {
        border: 1px solid black;
        padding: 10px;
    }
    .current-page {
        border: 2px solid teal;
    }
</style>
