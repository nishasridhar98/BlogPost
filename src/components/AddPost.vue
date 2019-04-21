<template>
    <div>
        <h3>Add Post</h3>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Enter the title">
                <input type="text" v-model="body" placeholder="Enter the content">
                <input type="submit" value="Submit ">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "AddPost",
    data(){
        return{
            title: '',//the entered title is stored here
            body: '' //the entered body is stored here
        }
    },
    methods: {
        ...mapActions(['addPost']),
        onSubmit(e){
            e.preventDefault();//prevent refreshing of page
            this.addPost(this.title,this.body);
            // console.log(this.title,this.body);
        }
    }
};

</script>

<style>
form {
  display: flex;
}
input[type="text"] {
  flex: 15;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
