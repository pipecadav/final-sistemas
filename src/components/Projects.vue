<template>
  <div>
    <div class="integrations">
      <v-hover
        v-for="integration in integrations"
        :key="integration.id"
      >
        <v-card
          :id="`card-${integration.internalName}`"
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 4 : 0}`"
          class="integration"
          :to="{ name: 'integrations-details', params: {id: integration.id} }"
          max-width="220"
          height="285px"
          flat
        >
          <v-img
            class="card-background-image"
            :src="`${publicPath}/cfimages/backgroundImages/` + integration.logoBackground"
          >
            <div class="background-overlay">
              <img class="image-center" :src="`${publicPath}/cfimages/logo_small/` + integration.logoSmall" :alt="integration.name">
            </div>
          </v-img>
          <div class="card-content">
            <h3> {{ integration.name }} </h3>
            <p> {{ integration.description }}</p>
          </div>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { appConfig } from '../config'
import { findData } from '../data'

const { STATIC_PATH } = appConfig
const CLUB_ID = findData('club.meta.id')
const LANG = findData('user.language')
const CLUB_COUNTRY = findData('club.meta.country')

export default {
  name: 'Integrations',
  data() {
    return {
      publicPath: STATIC_PATH,
      loading: true,
    }
  },
  computed: {
    ...mapState('integrations', [
      'integrations',
    ]),
  },
  mounted() {
    this.loadIntegrations()
  },
  methods: {
    ...mapActions('integrations', [
      'fetchIntegrationsByLanguage',
    ]),
    loadIntegrations() {
      this.fetchIntegrationsByLanguage({
        clubId: CLUB_ID,
        sort: 'rank',
        order: 'asc',
        page: 1,
        lang: LANG,
        country: CLUB_COUNTRY,
      })
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    /**
     * @TODO pagination is missing, it's important to have it to prevent future scale issues
     */
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