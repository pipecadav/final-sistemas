<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>UNIVERSIDAD DE ANTIOQUIA</span>
        <span class="font-weight-light">SISGPRO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/pipecadav/final-sistemas"
        target="_blank"
      >
        <span class="mr-2">Repositorio</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.v-app {
  background-color: #f5f9ff !important;
}

.home {
  max-width: 960px;
  width: 100%;
  padding-top: 94px;
  margin: 0 auto;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 7rem;
}

.details {
  max-width: 960px;
  width: 100%;
  padding-top: 70px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
}

.hyperlink {
  color: #0080FF;
  text-decoration: none;
}

h2 {
  margin-top: 25px;
  font-weight: bold;
}

p {
  margin-top: 5px;
  text-overflow: ellipsis;
}

ul {
  padding-top: 5px;
  padding-bottom: 16px;
}

.v-chip {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 0px;
}

.v-btn {
    text-transform: none !important;
    .v-btn__content {
        padding: 0;
    }
}
</style>
