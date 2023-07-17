<template>
  <div>
    <div class="pricing-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Pricing Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Financial Insights Hub: Empowering Your Financial Future
              </h2>
              <p>We offer 100% satisafaction and Money back Guarantee</p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Pricing Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Pricing
        ----------------------------------------------- -->
        <v-row class="mt-13" justify="center">
          <v-col cols="12" md="6" lg="4">
            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <WistiaVideoPlayer videoId="u5m22gkemm" />
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <WistiaVideoPlayer videoId="2uzyojv1fg" />
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card
              flat
              elevation="0"
              class="pricing-card overflow-hidden mb-15"
            >
              <iframe
                width="356"
                height="200"
                src="https://www.youtube.com/embed/JEVirFX6goE"
                title="What is Finance: Learn Finance"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Pricing
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pricing",
  data() {
    return {};
  },
  methods: {},
};
</script>
