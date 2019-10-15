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
    <div v-if="!loading" class="projects">
      <v-hover
        v-for="project in allProjects"
        :key="project.id"
      >
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 2 : 0}`"
          class="project"
          flat
        >
          <v-container class="project-container">
            <v-row no-gutters>
              <v-col class="image-container" cols="auto">
                <v-img
                  :src="`/cfimages/${project.image}`"
                  height="150"
                  width="150"
                ></v-img>
              </v-col>
      
              <v-col
              >
                <v-row
                  class="flex-column ma-0 fill-height"
                >
                  <v-col >
                    {{ project.name }}
                  </v-col>
      
                  <v-col>
                    <v-icon color="blue darken-2">money</v-icon>
                    {{ project.budget }}
                  </v-col>
      
                  <v-col>
                    <v-icon color="blue darken-2">flag</v-icon>
                    {{ project.completed }}
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
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

<style scoped>
  .spinning-circle {
    margin-top: 105px;
    margin-bottom: 105px;
  }
  .projects {
    justify-content: center;
    padding-bottom: 80px;
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(900px, max-content)); */
    grid-column-gap: 1.2rem;
    grid-row-gap: 1.2rem;
  }

  .project {
    border: 1px solid #e3e9f2;
    border-radius: 4px;
    cursor: pointer;
  }

  .project-container {
    padding-top: 0%;
    padding-bottom: 0%;
    padding-left: 0%;
  }

</style>