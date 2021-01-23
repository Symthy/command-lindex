<template>
  <div class="max-w-screen-lg w-full bg-gray-200">
    <IndexList></IndexList>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IndexList from "@/components/IndexList.vue"; // @ is an alias to /src

@Options({
  /* eslint-disable */
  components: {
    IndexList
  },
})
export default class Home extends Vue {}
</script>
