<template>
  <div :key="link.id">
    <h3>{{ link.title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: ["link"]
};
</script>
