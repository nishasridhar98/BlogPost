<template>
    <div class="filter">
        <h2>Filter Posts:</h2>
         <select @change='filterPosts($event)'>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'FilterPosts',
    methods: mapActions(['filterPosts'])

}
</script>

<style>
.filter{
    display: flex;
}
h2{
    margin-top: 20px;
}
select {
  margin-top: 20px;
  margin-left: 10px;
  padding: 6px;
  size: 20px;
   border: #020708 1px solid;
  background:  #89d7eb;
}
</style>
