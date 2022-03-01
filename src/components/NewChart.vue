<template>
  <div>
    <b>คอร์ดเพลงใหม่</b>
    <div class="mt-2">
      <!-- <div v-if="!$vuetify.breakpoint.smAndUp" class="d-flex flex-wrap">
        <v-hover
          v-slot="{ hover }"
          v-for="(music, index) in musicList"
          :key="index"
        >
          <v-card
            :class="{
              'on-hover': hover,
              ' d-flex': !$vuetify.breakpoint.smAndUp,
            }"
            :width="'100%'"
            class="ma-2"
          >
            <v-img :height="'100'" :width="'100'" :src="music.image"></v-img>
            <v-card-text>
              <div class="white--text">{{ music.name }}</div>
              <div>{{ music.artist }}</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </div> -->
      <v-slide-group :show-arrows="$vuetify.breakpoint.smAndUp">
        <v-hover
          v-slot="{ hover }"
          v-for="(music, index) in musicList"
          :key="index"
        >
          <v-card
            :class="{
              'on-hover': hover,
            }"
            :width="$vuetify.breakpoint.smAndUp ? '150' : '150'"
            class="ma-2 secondary"
            @click="openSong()"
          >
            <v-img
              :height="$vuetify.breakpoint.smAndUp ? '150' : '150'"
              :width="$vuetify.breakpoint.smAndUp ? '150' : '150'"
              :src="music.image"
            ></v-img>
            <v-card-text :class="$vuetify.breakpoint.smAndUp ? '' : 'pa-0'">
              <b>{{ music.name }}</b>
              <div>{{ music.artist }}</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
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
        id: 3,
        name: "I just wanna pen fan you dai bor",
        image:
          "https://i.scdn.co/image/ab67616d0000b2736d963396796b2fd890e55cfc",
        artist: "สิงโต นำโชค",
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

<style lang="scss" scoped>
.v-card.on-hover {
  // box-shadow: inset 0px 0px 0px 2px white;
  cursor: pointer;
}
</style>
