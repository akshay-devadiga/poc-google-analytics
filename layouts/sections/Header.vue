<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar app absolute class="app-header" flat elevate-on-scroll>
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <Logo />

        <v-spacer></v-spacer>
        <v-btn class="d-block d-md-none" text @click="toggleClass()">
          <v-app-bar-nav-icon class="white--text" />
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/"> Home</n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/about-us">
                About us
              </n-link>
            </li>
  <li class="nav-item" text>
<v-menu open-on-hover offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="white"
                  text
                  v-bind="attrs"
                  v-on="on"
                >
                  Products
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title @click="goToSection(title)">{{ item.title }}</v-list-item-title>
                </v-list-item> 
              </v-list>
            </v-menu>
            </li>
             
            <li class="nav-item">
              <!-- login-regiter -->
              <v-btn
                color="white"
                nuxt
                href="#contact"
                elevation="0"
              >
                Contact Us
              </v-btn>
            </li>
          </ul>
          
        </div>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "Header",

  components: {
    Logo: () => import("@/layouts/sections/Logo")
  },
  data() {
    return {
      isActive: false,
        items: [
        { title: "Sustainable Future Fund" },
        { title: "Stellar Growth Fund" },
        { title: "Global Technology Fund" }
      ],
    };
  },
  methods: {
    toggleClass: function(event) {
      this.isActive = !this.isActive;
    },
    goToSection(el){
      document.getElementById('products').scrollIntoView();
    }
  }
};
</script>
