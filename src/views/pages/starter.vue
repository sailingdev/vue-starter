<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <ul>
      <li v-for="student in students" v-bind:key="student.id" class="red" @click="clickedItem(student.name)">
        {{student.name}}
      </li>
    </ul>
  </Layout>
</template>


<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
  page: {
    title: "Starter",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Starter",
      items: [
        {
          text: "Pages",
          href: "/",
        },
        {
          text: "Starter",
          active: true,
        },
      ],
      students:[
        {
          id: 0,
          name: 'jangchungil',
          sex: "male"
        },
        {
          id: 1,
          name: "kimgwanghyok",
          sex: 'male'
        },
        {
          id: 2,
          name: "wonju",
          sex: 'female'
        }
      ]
    };
  },
  methods:{
    clickedItem(name){
      alert(name);
    }
  },
  components: {
    Layout,
    PageHeader,
  },
};
</script>


<style>
.red{
  color: red;
}
</style>

