<template>
  <div class="details">
    <v-container>
      <v-layout row>
        <v-flex d-flex xs12 sm6 md6>
          <v-card class="ma-6" flat>
            <v-img
              src="/cfimages/completed.png"
            />
          </v-card>

        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
          <v-card class="ma-6" flat>
            <v-img
              src="/cfimages/executed.png"
            />
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
          <v-card class="ma-6" flat>
            <v-img
              src="/cfimages/reach.png"
            />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
name: 'Dashboard',  

}
</script>
<style lang="scss">

</style>