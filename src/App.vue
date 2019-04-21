<template>
  <div id="app">
    <AddPost />
    <Post />
  </div>
</template>

<script>
import Post from './components/Posts.vue'
import AddPost from './components/AddPost.vue'
export default {
  name: 'app',
  components: {
    Post,
    AddPost
  }
}
</script>

<style>

</style>
