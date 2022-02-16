<template>
  <v-hover v-slot="{ hover }">
    <v-card :class="{ 'on-hover': hover }" class="d-flex">
      <div class="d-flex align-center pa-1 green black--text">
        {{ chart }}
      </div>
      <v-img
        :height="$vuetify.breakpoint.smAndUp ? '100' : '100'"
        :width="$vuetify.breakpoint.smAndUp ? '100' : '100'"
        :src="music.image"
      ></v-img>
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
    chart: Number,
  },
};
</script>

<style></style>
