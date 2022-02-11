<template>
  <v-app>
    <v-app-bar app color="transparent" absolute dense class="elevation-0">
      <v-app-bar-title class="text-uppercase" style="color: #e50815">
        Champignon
      </v-app-bar-title>
      <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex">
        <div
          v-for="(menu, index) in menuBar"
          class="ml-2"
          style="font-size: 14px"
          :key="index"
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
      <v-icon class="mr-4" small @click="doSearch()">mdi-magnify</v-icon>
      <v-icon class="mr-4" small @click="doSearch()">mdi-bell</v-icon>
      <v-avatar class="rounded" tile color="yellow" size="35">
        <v-icon color="black"> mdi-account </v-icon>
      </v-avatar>
    </v-app-bar>

    <v-main> </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    menuBar: [
      { title: "Home" },
      { title: "TV Shows" },
      { title: "Movies" },
      { title: "New & Popular" },
      { title: "My List" },
    ],
  }),
  methods: {
    doSearch() {
      console.log("search");
    },
  },
};
</script>
