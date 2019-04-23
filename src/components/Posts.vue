<template>
    <div>
        <h2>Posts</h2>
        <div class="posts">
            <div v-for="post in allposts" :key=post.id
             class="post">
            <h4>{{post.title}}</h4>

            <p>{{post.body}}</p>

            <i @click="deletePost(post.id)" class="fas fa-trash"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
//maps getters & actions from vuex to component
export default {
    name: "Post",
    methods:{
    ...mapActions(['fetchPosts','deletePost'])
    },
    computed:{
    ...mapGetters(['allposts']),
    // body(){
        
    // }
    },
    created(){
        this.fetchPosts();//call the action
    },
    
  }

</script>

<style scoped>
h2{
    margin: 10px;
}
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 10px;
}
.post {
    
  border: #020708 1px solid;
  background:  #89d7eb;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 20px;
  /* color: #fff; */
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
