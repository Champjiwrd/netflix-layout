<template>
  <v-app-bar
    app
    dense
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
  >
    <v-app-bar-title class="text-uppercase">
      <span class="third--text">Champignon</span>
    </v-app-bar-title>
    <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex">
      <div
        v-for="(menu, index) in menuBar"
        class="ml-2 menu-bar"
        style="font-size: 14px"
        :key="index"
        @click="gotopage(menu)"
      >
        {{ menu.title }}
      </div>
    </div>
    <div v-else>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="transparent"
            class="text-capitalize elevation-0"
            v-bind="attrs"
            v-on="on"
            style="font-size: 12px"
          >
            Browse
            <v-icon x-small>mdi-triangle mdi-rotate-180</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(menu, index) in menuBar" :key="index">
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-spacer></v-spacer>
    <v-text-field
      v-if="searchBox"
      color="yellow"
      outlined
      hide-details
      dense
      autofocus
      append-icon="mdi-magnify"
      @blur="hideSearchBox()"
    ></v-text-field>
    <v-icon v-if="!searchBox" class="mr-4" small @click="doSearch()">
      mdi-magnify
    </v-icon>
    <!-- <v-avatar class="rounded" tile color="yellow" size="35">
      <v-icon color="black"> mdi-account </v-icon>
    </v-avatar> -->
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    menuBar: [
      { title: "Home", path: "/" },
      { title: "เพลงทั้งหมด", path: "/allsongs" },
      { title: "ศิลปินทั้งหมด", path: "/allartists" },
      { title: "About us", path: "/aboutus" },
    ],
    searchBox: false,
  }),
  methods: {
    doSearch() {
      console.log("search", this.searchBox);
      if (!this.searchBox) {
        this.searchBox = true;
      }
    },
    hideSearchBox() {
      this.searchBox = false;
    },

    gotopage(menu) {
      console.log(menu);
      this.$router.push({
        path: menu.path,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-bar:hover {
  cursor: pointer;
}
</style>
