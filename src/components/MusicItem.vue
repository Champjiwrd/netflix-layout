<template>
  <v-hover v-slot="{ hover }">
    <v-card :class="{ 'on-hover': hover }" class="d-flex secondary">
      <v-img
        :height="imageSize"
        :max-height="imageSize"
        :max-width="imageSize"
        :width="imageSize"
        :src="music.image"
      ></v-img>
      <v-list class="transparent">
        <v-list-item>
          <v-list-item-content class="ma-0 pa-0">
            <v-list-item-title
              class="text-wrap title-song"
              tag="p"
              v-text="music.name"
            ></v-list-item-title>
            <v-list-item-subtitle v-text="music.artist"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    music: Object,
  },
  data: () => ({
    imageSize: 80,
  }),
};
</script>

<style lang="scss" scoped>
.v-card.on-hover {
  cursor: pointer;
}
</style>
