<template>
  <v-app>
    <Toolbar />
    <v-toolbar height="50px" flat>
        <v-toolbar-items>
          <v-btn text>Proyectos</v-btn>
          <v-btn text>Dashboard</v-btn>
          <v-btn text>Administración</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <TransitionComponent>
      <router-view />
    </TransitionComponent>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import TransitionComponent from './components/transitions/TransitionComponent'


export default {
  name: 'App',
  components: {
    Toolbar,
    TransitionComponent,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.v-app {
  background-color: #f5f9ff !important;
}

.overview {
  max-width: 960px;
  width: 100%;
  padding-top: 40px;
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
