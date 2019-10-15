<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                label="Usuario *" 
                :rules="valueRules"
                required 
                />
              </v-col>
              <v-col cols="12">
                <v-text-field 
                label="Clave *" 
                type="password" 
                :rules="valueRules"
                required
              />
              </v-col>
              <v-col cols="12">
                <v-btn large block dark color="green darken-1" @click="validate">INICIAR SESIÓN</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      validated: false,
      dialog: true,
      valueRules: [
        v => !!v || 'Required',
      ],
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.$router.push({ name: 'overview' })
      }
    },
  },
}
</script>

<style scoped>
  .spinning-circle {
    margin-top: 105px;
    margin-bottom: 105px;
  }
  .integrations {
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, max-content));
    grid-column-gap: 1.2rem;
    grid-row-gap: 1.2rem;
  }

  .integration {
    border: 1px solid #e3e9f2;
    border-radius: 4px;
    cursor: pointer;
    contain: content;
  }

  .card-background-image {
    display: cover;
    position: relative;
    height: 130px;
  }

  .background-overlay {
    contain: content;
    display: flex;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent -30%, black 100%);
  }

  .image-center {
    margin: auto;
    width: 50%;
    height: 50%;
  }

  .card-content {
    contain: content;
    padding-top: 20px;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 9.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>