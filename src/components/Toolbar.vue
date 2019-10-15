<template>
  <v-toolbar
    :style="style"
    dark
    max-height="70px"
    flat
  >
    <img src="/cfimages/Logo_Udea.png" alt="avatar" width="auto" height="50px" class="club-logo" @click="navigateToHome">
    <v-spacer />
    <div>

      <v-menu
        v-model="menu"
        :nudge-width="300"
        :position-x="1579"
        :position-y="65"
        transition="slide-y-transition"
        absolute
        offset-y
        light
      >
        <template v-slot:activator="{ on }">
          <v-btn
            slot="activator"
            class="pa-1"
            depressed
            text
          >
            <v-avatar size="36">
              <img src="/cfimages/Felipe.png" alt="avatar">
            </v-avatar>
            <ul v-if="$vuetify.breakpoint.smAndUp" class="user-info">
              <li class="user-name">
                {{ user }}
              </li>
              <li v-if="menuType" class="user-type">
                {{ menuType }}
              </li>
            </ul>
          </v-btn>
        </template>

        <v-card>
          <v-list class="nav-user">
            <v-list-tile avatar>
              <v-list-tile-avatar class="nav-user-avatar" size="64">
                <v-img src="/cfimages/Felipe.png" :alt="userName" />
              </v-list-tile-avatar>

              <v-list-tile-content class="nav-user-info">
                <v-list-tile-title class="menu-user-name">
                  {{ userName }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-divider />
          <v-list class="nav-menu">
            <v-list-tile @click="navigateLogout">
              <v-list-tile-title class="pl-4">
                Logout
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
    </div>
  </v-toolbar>
</template>

<script>

export default {
  name: 'Toolbar',
  props: {

  },
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    style() {
      return "z-index:8 ;background-color: #43A047;"
    },
    userName() {
      return "Andrés Higuita"
    },
    user() {
      return "Andrés"
    },
    menuType() {
      return "Estudiante"
    },
  },
  methods: {
    navigateToHome() {
      window.location.href = '/overview'
    },
    navigateLogout() {
      window.location.href = '/'
    },
  },
}
</script>
<style lang="scss">


.back-button-wrapper {
  width: 45px;
}

.club-logo {
  margin-left: 20px !important;
  cursor: pointer;
}

.toolbar__title {
  font-size: 18px;
  font-weight: 600;
  width: 300px;
}

.icons-divider {
  height: 40px;
  flex: none;
  width: 1px;
}

.icons-image img {
  border-radius: 15px;
}

.v-toolbar__extension {
  height: 40px !important;
  background: #FFFFFF;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.13) !important;
}

.subNav {
  width: 100%;
  height: 40px;

  .v-tabs, .v-tabs__bar, .v-tabs__wrapper, .v-tabs__container {
    height: 100%;
  }

  .v-tabs__div {
    height: 100%;
    font-size: 13px;
    font-family: 'Montserrat', sans-serif;
    text-transform: none;
    letter-spacing: -0.05px;
  }
}

.user-info {
  list-style-type: none;
  padding: 0 10px;

  .user-name {
    height: 20px;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
  }

  .user-type {
    font-size: 12px;
  }
}

.nav-user {
  padding: 20px 20px 5px !important;
  text-align: center;

  .v-btn {
    margin-top: 5px;
    height: 24px;
    width: 94px;
    font-weight: 600;
  }

}

.nav-user {
  .v-list__tile__title {
    font-size: 16px;
    display: inline-block;
    width: 100%;
    padding-right: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
    color: #000000;
  }

  .v-list__tile__sub-title {
    font-size: 12px;
  }

  .v-list__tile {
    border: 0 !important;
  }
}

.nav-menu {
  .font-weight-600 {
    font-weight: 600;
  }

  .v-list__tile {
    border: 0 !important;
    padding: 24px 0;
  }
}

.v-menu {
  .v-menu__activator--active .v-avatar:before {
    opacity: 1;
  }

  .v-avatar:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 100%);
    border-style: solid;
    border-width: 0 3px 6px 3px;
    border-color: transparent transparent #FFF transparent;
    transition: 0.2s;
    transition-timing-function: ease;
    opacity: 0;
  }
}

.v-menu__content {
    .card {
        .list {
            padding: 0!important;
        }
    }
}

/*VSelect general styling*/
.v-menu__content{
    .v-list{
        padding: 0;
    }
    .v-list__tile {
        font-family: Montserrat,sans-serif;
        font-size: 14px;
        height: 40px;
        border-top: 1px solid #f4f3f3;
        border-bottom: 1px solid #f4f3f3;
        &.v-list__tile--active {
            background-color: #f4f3f3;
            border: none;
        }
    }
    .v-list__tile__content { //From here everything can be done with injected class... Problem is all that is above this element
        justify-content: unset;
        padding-top: 10px;
        flex-direction: row;
        .svg-icon {
          margin: 0;
        }
        .menu-label {
          color: #656565;
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 0.05px;
          line-height: 17px;
          margin-top: 2px;
          margin-left: 10px;
        }
    }
}
/**
* Vuetify inputs
**/
.input-group--select {
    .input-group__input {
        padding-right: 0 !important;
        .input-group__append-icon {
            color: #c0c0c0 !important;
            font-size: 20px;
        }
    }
}

.nav-user-avatar {
  padding: 20px 20px 0 0;
}

.nav-user .v-list__tile--avatar {
  padding-left: 5px;
  padding-right: 5px;
}

.nav-user-info {
  text-align: left;
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center !important;
  flex-direction: column !important;
  padding-top: 0px !important;

  .menu-user-name {
    height: 20px;
    font-weight: 600;
  }
}

.blue-icon {
  .svg-icon path#gear,
  .svg-icon path#user {
    fill: #0080FF;
  }
}

.Toolbar {
  .v-menu.v-menu--inline,
  .v-menu__activator,
  .v-menu__activator .v-btn {
    height: 70px;
  }

  .v-menu__activator .v-btn:hover,
  .v-menu__activator .v-btn:focus {
    background: rgba(0, 0, 0, 0.2);
  }
}


</style>

