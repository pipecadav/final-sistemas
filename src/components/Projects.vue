<template>
  <div>
    <v-progress-circular
      v-if="loading"
      class="spinning-circle"
      :color="$vuetify.theme.primary"
      size="30"
      width="3"
      indeterminate
    />
    <div v-if="!loading">
      <v-hover
        v-for="(project, index) in allProjects"
        :key="project.id"
      >
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 2 : 0}`"
          class="project"
          flat
          :to="{ name:'details', params: {id: index} }"
        >
          <v-container class="project-container">
            <v-layout row wrap>
              <v-flex d-flex xs12 sm4 md2>

                <v-img
                  class="card-background-image"
                  :src="`/cfimages/${project.image}`"
                  height="150px"
                > 
                  <div
                    :style="`background-color: ${project.statusStyle}`" 
                    class="status-container"
                  >
                    <h2>{{ project.status }}</h2>
                  </div>
                </v-img>
              </v-flex>
              <v-flex d-flex xs12 sm8 md10>
                <v-layout column class="card-description">
                  <h3>{{ project.name }}</h3>

                  <div class="stats">
                    <v-icon color="blue darken-2">money</v-icon>
                    {{ project.budget }}                    
                  </div>  
                  <div class="stats">
                    <v-icon color="blue darken-2">flag</v-icon>
                    {{ project.completed }}
                  </div>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Projects',
  data() {
    return {
      loading: true,
    }
  },
  computed: mapGetters(['allProjects']),
  mounted() {
    this.loadProjects()
  },
  methods: {
    loadProjects() {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
  },
}
</script>

<style scoped lang="scss">

  h3 {
    text-decoration: underline;
  }

  .spinning-circle {
    margin: 0 auto;
  }

  .project {
    border: 1px solid #e3e9f2;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px; 
  }

  .project-container {
    padding-top: 0%;
    padding-bottom: 0%;
  }

  .card-description{
    padding-top: 10px;
    padding-left: 20px;
  }

  .stats {
    margin-top: 10px;
    margin-bottom: 10px;

  }

  h2 {
    text-align: center;
    color: white;
  }

  .card-background-image {
    display: cover;
    position: relative;
  }

  .status-container {
    contain: content;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }  
</style>