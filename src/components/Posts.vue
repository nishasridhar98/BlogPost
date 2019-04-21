<template>
    <div>
        <h3>BlogPost</h3>
        <div class="posts">
            <div v-for="post in allposts" :key=post.id
             class="post">
            <h4>{{post.title}}</h4>

            <p>{{post.body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
//maps getters & actions from vuex to component
export default {
    name: "Post",
    methods: mapActions(['fetchPosts']),
    computed: mapGetters(['allposts']),
    created(){
        this.fetchPosts();//call the action
    },
    
  }

</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
 
}
.post {
    
  border: 1px solid #ccc;
  background: #25CCF7;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

/* div.b {
  white-space: nowrap; 
  width: 100px; 
  overflow: hidden;
  text-overflow: ellipsis; 
  border: 1px solid #000000;
} */

</style>
