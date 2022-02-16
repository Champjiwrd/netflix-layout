<template>
  <div>
    คอร์ดเพลงยอดนิยม
    <div class="mt-2">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          class=""
          v-for="(music, index) in musicList"
          :key="index"
        >
          <TopChartItem :music="music" :chart="index + 1" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import TopChartItem from "../components/TopChartItem.vue";
export default {
  components: {
    TopChartItem,
  },
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
};
</script>

<style lang="scss" scoped>
.v-card.on-hover {
  box-shadow: inset 0px 0px 0px 2px white;
  cursor: pointer;
}
</style>
