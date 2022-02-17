<template>
  <v-hover v-slot="{ hover }">
    <v-card :class="{ 'on-hover': hover }" class="d-flex">
      <v-img :height="imageSize" :width="imageSize" :src="music.image"></v-img>
      <v-card-text>
        <div class="white--text">{{ music.name }}</div>
        <div>{{ music.artist }}</div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    music: Object,
  },
  data: () => ({
    imageSize: 60,
  }),
};
</script>

<style lang="scss" scoped>
.v-card.on-hover {
  cursor: pointer;
}
</style>
