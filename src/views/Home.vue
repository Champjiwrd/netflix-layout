<template>
  <div>
    <div class="fill-height">
      <v-carousel
        v-model="imageGallery"
        cycle
        interval="3000"
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(color, i) in colors"
          :key="color"
          class="fill-height"
        >
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">MUSIC {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>

    <v-container>
      <TopChart />
      <v-divider class="mt-6"></v-divider>
      <NewChart class="mt-2" />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TopChart from "../components/TopChart.vue";
import NewChart from "../components/NewChart.vue";
export default {
  name: "Home",
  components: {
    TopChart,
    NewChart,
  },
  data: () => ({
    imageGallery: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>
