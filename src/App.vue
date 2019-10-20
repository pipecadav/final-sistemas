<template>
  <v-app>
    <Toolbar />
    <v-toolbar max-height="70px" flat>
        <v-toolbar-items>
          <v-btn text :to="{ name:'overview' }" >Proyectos</v-btn>
          <v-btn text :to="{ name:'dashboard' }" >Dashboard</v-btn>
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
  padding-top: 30px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 7rem;
}

.details {
  max-width: 960px;
  width: 100%;
  padding-top: 30px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
}

.hyperlink {
  color: #0080FF;
  text-decoration: none;
}

h3 {
  margin-bottom: 5px;
  font-weight: bold;
}

p {
  margin-top: 5px;
  text-overflow: ellipsis;
}

.v-btn {
    text-transform: none !important;
    .v-btn__content {
        padding: 0;
    }
}

</style>
