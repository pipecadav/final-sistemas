<template>
  <div class="details">
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
      >
        <v-card
          class="project"
          flat
        >
          <v-container class="project-container">
            <v-layout row wrap>
              <v-flex d-flex xs12 sm4 md2>

                <v-img
                  class="card-background-image"
                  :src="`/cfimages/${allProjects[selectedCard].image}`"
                  height="150px"
                > 
                  <div
                    :style="`background-color: ${allProjects[selectedCard].statusStyle}`" 
                    class="status-container"
                  >
                    <h2>{{ allProjects[selectedCard].status }}</h2>
                  </div>
                </v-img>
              </v-flex>
              <v-flex d-flex xs12 sm8 md10>
                <v-layout column class="card-description">
                  <h3>{{ allProjects[selectedCard].name }}</h3>

                  <div class="stats">
                    <v-icon color="blue darken-2">money</v-icon>
                    {{ allProjects[selectedCard].budget }}                    
                  </div>  
                  <div class="stats">
                    <v-icon color="blue darken-2">flag</v-icon>
                    {{ allProjects[selectedCard].completed }}
                  </div>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-hover>

      <v-card class="new-task" @click="openModal">
        <div class="task-content">
          <h1>AÑADA UNA TAREA NUEVA AQUÍ</h1>
        </div>
      </v-card>
      <v-card class="existing-task">
        <v-container class="project-container">
          <v-layout row wrap>
            <v-flex d-flex xs12 sm8 md8>
              <v-layout column class="card-description">
                <h3> 130 - Trabajo de Campo</h3>

                <div class="stats">
                  <p>Visitar a las familias seleccionadas para conocer su situación</p>
                </div>
              </v-layout>
            </v-flex>
            <v-flex d-flex xs12 sm4 md4>
              <v-layout column class="card-description">
                <div :style="`background-color: #43A047`">
                  <h2>Completado</h2>
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card class="existing-task">
        <v-container class="project-container">
          <v-layout row wrap>
            <v-flex d-flex xs12 sm8 md8>
              <v-layout column class="card-description">
                <h3> 131 - Validación de la Antitesis</h3>

                <div class="stats">
                  <p>Leer toda la documentación recogida inicialmente</p>
                </div>
              </v-layout>
            </v-flex>
            <v-flex d-flex xs12 sm4 md4>
              <v-layout column class="card-description">
                <div :style="`background-color: #fcba03`">
                  <h2>En Progreso</h2>
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-dialog v-model="modal" max-width="800px">
        <v-card>
          <v-card-title>Añadir Tarea Nueva</v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field label="Titulo*" required />
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <textarea
                      class="comments-area"
                      name="requestBody"
                      cols="10"
                      rows="7"
                      placeholder="Write any additional questions or comments here..."
                    />
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Presupuesto*" required />
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Asignado A" required />
                  </v-col>
                </v-row>
              </v-container>
              <small>* Campos Mandatorios</small>
            </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn large icon @click="modal=false">
              <v-icon color="blue darken-2">save</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Details',
  props: {
    id: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      loading: true,
      modal: false,
      selectedCard: 1,
    }
  },
  computed: 
    mapGetters(['allProjects']),
  mounted() {
    this.loadProjects(),
    this.selectproject()
  },
  methods: {
    loadProjects() {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    openModal(){
      this.modal = true
    },
    selectproject(){
      this.selectedCard = this.id
    }
  },
}
</script>


<style scoped lang="scss">

  .existing-task{
    cursor: pointer;
    margin-bottom: 10px;
  }
  .task-content{
    contain: content;
  }

  h1 {
    text-align: center;
    color: #2746f5;
  }

  h3 {
    text-decoration: underline;
  }

  p {
    color: gray;
  }

  .spinning-circle {
    margin: 0 auto;
  }

  .new-task {
    border: 3px dashed #2746f5;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 15px;
  }

  .project {
    border: 1px solid #e3e9f2;
    border-radius: 4px;
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

  .comments-area {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #e3e9f2;
      padding: 10px;
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
