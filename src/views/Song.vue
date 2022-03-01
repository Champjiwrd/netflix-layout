<template>
  <v-container>
    <div class="d-flex">
      <div>เพลง วาฬเกยตื้น</div>
      <v-spacer></v-spacer>
      <v-container>
        <v-btn x-large class="primary white--text" icon @click="openFullscreen()">
          <v-icon v-if="!isFullscreen">mdi-fullscreen</v-icon>
          <v-icon v-else>mdi-fullscreen-exit</v-icon>
        </v-btn>
      </v-container>
    </div>

    <div
      class="mt-4"
      style="
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -o-user-select: none;
      "
      unselectable="on"
      onselectstart="return false;"
      onmousedown="return false;"
    >
      <div v-html="lyrics"></div>
    </div>
    <!-- <div v-for="(line, index) in lyrics.lines" :key="index">
      {{ line.items }}
      <br />
    </div> -->
  </v-container>
</template>

<script>
import ChordSheetJS from "chordsheetjs";
export default {
  name: "Song",
  data: () => ({
    lyrics: null,
    isFullscreen: false,
  }),
  mounted() {
    this.setChords();
  },
  methods: {
    setChords() {
      const chordSheet = `
{Chorus}
[Fmaj7]มีวาฬตัวนึงลอย[Em7]ว่ายน้ำมา
ดูเจ็บ[Dm7]ช้ำทรวงอุรากว่าที่[Cmaj7]เคย
[Fmaj7]มันพยายามตาม[Em7]รักทรามเชย
แต่สุด[Dm7]ท้ายดันมาเกยตื้น[Cmaj7]น้ำตาย`;

      const parser = new ChordSheetJS.ChordProParser();

      const song = parser.parse(chordSheet);
      // transposeUp

      const formatter = new ChordSheetJS.HtmlTableFormatter();
      const disp = formatter.format(song);
      this.lyrics = disp;
      console.log(this.lyrics);
    },

    openFullscreen() {
      var elem = document.documentElement;
      this.isFullscreen = !this.isFullscreen;

      if (elem.requestFullscreen && this.isFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }

      // exit fullscreen
      if (document.exitFullscreen && !this.isFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    },
  },
};
</script>

<style lang="scss">
.chord {
  color: #fbbc04;
}
</style>
