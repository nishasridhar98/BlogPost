<template>
    <div>
        <h2>Add Post</h2>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Enter the title">
               
                <input type="text" v-model="body" placeholder="Enter the content">
               
                <br>
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
            this.addPost({title:this.title,body:this.body});
            console.log(this.title,this.body);
            this.title='',//clearing the input field
            this.body=''
        }
    }
};

</script>

<style>
h2{
    margin: 10px;
}
.add {
  border-radius: 5px;
  margin: 10px;
  background-color: #89d7eb;
  padding: 20px;
  width: 50%;
  border: #020708 1px solid;
}
input[type="text"] {

  width: 75%;
  margin-top: 10px;
  border: 1px solid #40a6c5;
  outline: 0;
  padding: 12px 20px;
  margin: 8px 0;
}
input[type=text]:focus {
  border: 2px solid #555;
}

input[type="submit"] {
  
  background: #40a6c5;   
  color: #fff;
  margin-top: 10px;
  border: 1px  #40a6c5 solid;
  cursor: pointer;
  padding: 10px 10px;
}

input[type=submit]:hover {
background-color: #457ba0;
}
</style>
