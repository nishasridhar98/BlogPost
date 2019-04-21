<template>
    <div>
        <h3>BlogPost</h3>
        <div class="posts">
            <div v-for="post in allposts" :key=post.id
             class="post">
            {{post.title}}
            <br>
            {{post.body}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
//maps getters from vuex to component
export default {
    name: "Post",
    computed: mapGetters(['allposts']),
}
</script>

<style>

</style>
