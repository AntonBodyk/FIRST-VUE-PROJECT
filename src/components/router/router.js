import MainPage from '../pages/MainPage';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';
import PostsPageStore from '../pages/PostsPageStore';
import About from '../pages/About';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: MainPage 
    },
    {
        path: '/posts',
        component: PostsPage 
    },
    {
        path: '/about',
        component: About 
    },
    {
        path: '/posts/:id',
        component: PostPage
        
    },
    {
        path: '/store',
        component: PostsPageStore
    }

];

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
});

export default router;