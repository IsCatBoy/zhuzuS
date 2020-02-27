<template>
  <div>
    <van-cell-group>
      <van-switch-cell v-model="items.checked" :title="items.titles" />
    </van-cell-group>
  
  </div>
</template>
<script>
export default {
  name: "VSwitch",
  data() {
    return {
      checked: true
    };
  },
  props: {
    items: Object
  },
};
</script>