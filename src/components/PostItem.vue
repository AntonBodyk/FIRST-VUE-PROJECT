<template>
    <div class="post">
        <div>
            <div>ID поста: {{ post.id }}</div>
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post-btns">
            <my-buttons @click="$router.push(`/posts/${post.id}`)" style="margin-top: 5px">Открыть</my-buttons>
            <my-buttons @click="$emit('remove', post)" style="margin-top: 5px">Удалить</my-buttons>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .post {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        margin-top: 15px;
        border: 2px solid teal;
    }
    .post-btns {
        display: flex;
    }
</style>