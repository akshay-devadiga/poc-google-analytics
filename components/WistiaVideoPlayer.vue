<template>
  <ClientOnly>
    <iframe
      :src="`https://fast.wistia.net/embed/iframe/${videoId}?seo=true&videoFoam=false`"
      allow="autoplay; fullscreen"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      class="wistia_embed"
      name="wistia_embed"
      msallowfullscreen
      width="356"
      height="200"
    ></iframe>
  </ClientOnly>
</template>
<script>
export default {
  props: {
    videoId: {
      type: String,
      default: "",
    },
  },
};
</script>