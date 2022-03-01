<template>
  <v-container>
    <b>เพลงทั้งหมด</b>
    <div class="my-4 d-flex align-center">
      <v-text-field
        outlined
        clearable
        dense
        :color="'#FBBC04'"
        hide-details
      ></v-text-field>
      <v-btn class="ml-2" :color="'#FBBC04'">
        <v-icon> mdi-magnify </v-icon>
      </v-btn>
    </div>
    <div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(music, index) in musicList"
          :key="index"
          @click="openSong()"
        >
          <MusicItem class="" :music="music" />
        </v-col>
      </v-row>
    </div>
    <v-divider class="mt-4"></v-divider>
    <div class="text-center mt-6">
      <v-pagination v-model="page" :length="6" color="primary"></v-pagination>
    </div>
  </v-container>
</template>

<script>
import MusicItem from "../components/MusicItem.vue";
export default {
  components: {
    MusicItem,
  },
  data: () => ({
    page: 1,
    musicList: [
      {
        id: 0,
        name: "I just wanna pen fan you dai bor",
        image:
          "https://i.scdn.co/image/ab67616d0000b2736d963396796b2fd890e55cfc",
        artist: "สิงโต นำโชค",
      },
      {
        id: 1,
        name: "ต่อจากนี้เพลงรักทุกเพลงจะเป็นของเธอเท่านั้น",
        image: "https://img.atimeonline.com/ion/00/56/F5/22261.jpg",
        artist: "no one else",
      },
      {
        id: 2,
        name: "I just wanna pen fan you dai bor",
        image:
          "https://i.scdn.co/image/ab67616d0000b2736d963396796b2fd890e55cfc",
        artist: "สิงโต นำโชค",
      },
      {
        id: 3,
        name: "ต่อจากนี้เพลงรักทุกเพลงจะเป็นของเธอเท่านั้น",
        image: "https://img.atimeonline.com/ion/00/56/F5/22261.jpg",
        artist: "no one else",
      },
      {
        id: 4,
        name: "ต่อจากนี้เพลงรักทุกเพลงจะเป็นของเธอเท่านั้น",
        image: "https://img.atimeonline.com/ion/00/56/F5/22261.jpg",
        artist: "no one else",
      },
      {
        id: 5,
        name: "I just wanna pen fan you dai bor",
        image:
          "https://i.scdn.co/image/ab67616d0000b2736d963396796b2fd890e55cfc",
        artist: "สิงโต นำโชค",
      },
      {
        id: 6,
        name: "ต่อจากนี้เพลงรักทุกเพลงจะเป็นของเธอเท่านั้น",
        image: "https://img.atimeonline.com/ion/00/56/F5/22261.jpg",
        artist: "no one else",
      },
      {
        id: 7,
        name: "ต่อจากนี้เพลงรักทุกเพลงจะเป็นของเธอเท่านั้น",
        image: "https://img.atimeonline.com/ion/00/56/F5/22261.jpg",
        artist: "no one else",
      },
    ],
  }),
  methods: {
    openSong() {
      console.log("click");
      this.$router.push({
        path: "/song",
      });
    },
  },
};
</script>

<style></style>
