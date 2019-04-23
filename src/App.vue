<template>
  <div id="app">
    <div class="header">
      <h1>Blog Post</h1>
    </div>
    <AddPost />
    <FilterPosts />
    <Post />
    <!-- <Comments /> -->
  </div>
</template>

<script>
import Post from './components/Posts.vue'
import AddPost from './components/AddPost.vue'
import FilterPosts from './components/FilterPosts.vue'
import Comments from './components/Comments.vue'

export default {
  name: 'app',
  components: {
    Post,
    AddPost,
    FilterPosts,
    Comments,
  }
}
</script>

<style>
body{
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  margin:0;
  padding:0;
  
}
    .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1px;
  }

</style>
