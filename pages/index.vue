<template>
  <div>
    <v-app>
      <v-app-bar app color="primary" dark>
        <v-toolbar-title class="mr-6">
          Financial Advisory Firm
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="secondary" dark>Get Started</v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item v-for="item in menuItems" :key="item.title" @click="navigateTo(item.route)">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <!-- Fund Information -->
          <section>
            <h2>Funds</h2>
            <v-row>
              <v-col v-for="fund in funds" :key="fund.id" cols="12" md="6" lg="4">
                <v-card>
                  <v-img :src="fund.image" height="200px"></v-img>
                  <v-card-title>{{ fund.title }}</v-card-title>
                  <v-card-text>{{ fund.description }}</v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" text>Learn More</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </section>

          <!-- YouTube Video Embed -->
          <section>
            <h2>Watch our Video</h2>
            <v-responsive>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </v-responsive>
          </section>

          <!-- Carousel -->
          <section>
            <h2>Testimonials</h2>
            <v-carousel>
              <v-carousel-item v-for="item in carouselItems" :key="item.id">
                <v-img :src="item.image" alt="Carousel Image"></v-img>
              </v-carousel-item>
            </v-carousel>
          </section>

          <!-- Interactive Graph using Plotly.js -->
          <section>
            <h2>Performance</h2>
            <div id="graph"></div>
          </section>

          <!-- FAQs within Expansion Panels -->
          <section>
            <h2>Frequently Asked Questions</h2>
            <v-expansion-panels>
              <v-expansion-panel v-for="faq in faqs" :key="faq.id">
                <v-expansion-panel-header>{{ faq.question }}</v-expansion-panel-header>
                <v-expansion-panel-content>{{ faq.answer }}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </section>

        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        { title: 'Home', icon: 'mdi-home', route: '/' },
        { title: 'About Us', icon: 'mdi-information', route: '/about' },
        { title: 'Services', icon: 'mdi-briefcase', route: '/services' },
        { title: 'Contact', icon: 'mdi-phone', route: '/contact' }
      ],
      funds: [
        {
          id: 1,
          title: 'Fund 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: 'https://via.placeholder.com/300'
        },
        {
          id: 2,
          title: 'Fund 2',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://via.placeholder.com/300'
        },
        {
          id: 3,
          title: 'Fund 3',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: 'https://via.placeholder.com/300'
        }
      ],
      carouselItems: [
        { id: 1, image: 'https://via.placeholder.com/800x300' },
        { id: 2, image: 'https://via.placeholder.com/800x300' },
        { id: 3, image: 'https://via.placeholder.com/800x300' }
      ],
      faqs: [
        {
          id: 1,
          question: 'Question 1',
          answer: 'Answer 1'
        },
        {
          id: 2,
          question: 'Question 2',
          answer: 'Answer 2'
        },
        {
          id: 3,
          question: 'Question 3',
          answer: 'Answer 3'
        }
      ]
    };
  },
  mounted() {
    // Interactive Graph using Plotly.js
    const data = [{ x: [1, 2, 3, 4, 5], y: [1, 3, 2, 4, 3], type: 'scatter' }];
    Plotly.newPlot('graph', data);
  },
  methods: {
    navigateTo(route) {
      // Implement your navigation logic here
    }
  }
}
</script>

