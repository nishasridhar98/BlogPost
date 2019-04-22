<template>
  <div id="app">
    <div class="header">
      <h1>Blog Post</h1>
    </div>
    <AddPost />
    <FilterPosts />
    <Post />
  </div>
</template>

<script>
import Post from './components/Posts.vue'
import AddPost from './components/AddPost.vue'
import FilterPosts from './components/FilterPosts.vue'

export default {
  name: 'app',
  components: {
    Post,
    AddPost,
    FilterPosts
  }
}
</script>

<style>
    .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 2px;
  }

</style>
