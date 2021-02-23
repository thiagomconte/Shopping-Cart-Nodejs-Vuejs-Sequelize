<template>
    <div class="comment-page mb-4">
        <h2>Comentários:</h2>
        <br>
        <div v-for="comment in comments" :key="comment.id" class="comment-section mt-3">
            <i class="far fa-user"></i>
            <div class="comment-data ml-2">
                <h4>{{comment.User.name}}</h4>
                <span>{{comment.content}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['comments'],
};
</script>

<style>
.comment-section {
    display: flex;
}

.comment-section i {
    font-size: 4rem;
    background: #f0ad4e;
    border-radius: 3rem;
    padding: 1rem;
}
</style>