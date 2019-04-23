<template>
    <div>
        <h3>Comments</h3>
        <div class="comments">
            <div v-for="comment in allcomments" :key=comment.id
             class="comment">
            <h4>{{comment.name}}</h4>

            <p>{{comment.body}}</p>

            <!-- <i @click="deletePost(post.id)" class="fas fa-trash"></i> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    name:"Commments",
     methods:{
    ...mapActions(['fetchComments'])
    },
    computed:{
    ...mapGetters(['allcomments']),
    },
    created(){
        this.fetchComments();//call the action
    },
    
}
</script>

<style>

</style>
