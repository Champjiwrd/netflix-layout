<template>
  <v-hover v-slot="{ hover }">
    <v-card
      max-height="100"
      :class="{ 'on-hover': hover }"
      class="d-flex secondary"
    >
      <div class="d-flex align-center pa-2 rounded-0 primary white--text">
        {{ chart }}
      </div>
      <v-img
        :height="'100'"
        max-height="100"
        max-width="100"
        :width="'100'"
        :src="music.image"
      ></v-img>
      <v-list three-line class="transparent">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="text-wrap title-song"
              tag="p"
              v-text="music.name"
            ></v-list-item-title>
            <v-list-item-subtitle v-text="music.artist"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-card-text>
        <div class="white--text text-truncate" style="max-width: 150px">
          {{ music.name }}
        </div>
      </v-card-text> -->
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    music: Object,
    chart: Number,
  },
};
</script>

<style>
p.title-song {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
