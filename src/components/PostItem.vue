<template>
    <div class="post">
        <div>
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div>
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
</style>