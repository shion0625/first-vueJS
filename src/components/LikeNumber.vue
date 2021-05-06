<template>
<div>
  <p>いいね（{{ totalNum }}）</p>
  <button @click="increment">+1</button>
</div>
</template>

<script>
export default {
  props:["totalNum"],
  methods: {
    increment() {
      this.$emit('my-click', this.totalNum + 1);
    }
  }
};
</script>
