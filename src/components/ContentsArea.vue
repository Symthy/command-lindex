<template>
  <div class="bg-gray-400 w-4/5">
    <p>test</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { CommandInfo } from '@/apps/model/CommandInfo';

@Options({
  /* eslint-disable */
  props: {
    msg: String,
  },
})
export default class IndexList extends Vue {
  indexes!: Array<CommandInfo>;
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
