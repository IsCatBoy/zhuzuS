<template>
  <div class="page Release">
    <h1>This is an Release page</h1>
    <button @click="goto">聊天去</button>
  </div>
</template>
<script>
export default {
  name: "Release",
  methods: {
    goto() {
      this.$router.push("/Chat");
    }
  }
};
</script>
<style lang="sess" scoped></style>
