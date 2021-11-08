<template>
  <div class="mb-4" :key="link.id">
    <a 
      :href="'https://' + link.url"
      target="_blank"
    >
      {{link.title}}
    </a>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: ["link"]
};
</script>

<a href="https://www.facebook.com">Facebook</a>
<a href="localhost8080/www.facebook.com">Facebook</a>