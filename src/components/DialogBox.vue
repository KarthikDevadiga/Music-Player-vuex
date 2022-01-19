<template>
  <div class="dialog" :class="{ red: dialogData.red }">
    <slot :dialogData="data"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogData: {
        dialog_msg: 'working Good',
        red: true,
      },
    };
  },
};
</script>

<style scoped>
.dialog {
  display: flex;
  align-items: center;
  justify-content: center;
}
.red {
  background-color: red;
  color: aliceblue;
}
</style>
