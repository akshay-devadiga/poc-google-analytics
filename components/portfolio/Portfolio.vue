<template>
  <div>
    <div class="portfolio-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Portfolio Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Our products line up
              </h2>
              <p>
              Our funds are managed by experienced professionals who employ thorough research and analysis to make informed investment decision
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Portfolio
        ----------------------------------------------- -->
        <v-row class="mt-13">
          <v-col cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden" rounded>
              <div class="portfolio-img">
                <img
                  src="@/assets/images/portfolio/img1.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-card-text>
                <h5 class="font-weight-medium font-18">
                  Stellar Growth Fund
                </h5>
                <p class="font-14 mb-0 mt-3">The Stellar Growth Fund is designed for investors seeking long-term capital appreciation by investing in high-growth companies across various sectors. This fund aims to identify companies with strong growth potential, innovative products, and robust financial performance. With a diversified portfolio and experienced fund managers, the Stellar Growth Fund offers investors the opportunity to participate in the growth potential of dynamic companies in both domestic and international markets.</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden" rounded>
              <div class="portfolio-img">
                <img
                  src="@/assets/images/portfolio/img2.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-card-text>
                <h5 class="font-weight-medium font-18">Global Technology Fund</h5>
                <p class="font-14 mb-0 mt-3">The Global Technology Fund is designed for investors seeking exposure to the rapidly evolving and dynamic technology sector. This fund focuses on investing in innovative companies involved in areas such as software, hardware, e-commerce, artificial intelligence, and cloud computing. With a global perspective and an emphasis on companies with a competitive advantage and strong growth prospects, the Global Technology Fund provides investors with the potential to benefit from the ongoing digital transformation across industries.</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card class="portfolio-card overflow-hidden" rounded>
              <div class="portfolio-img">
                <img
                  src="@/assets/images/portfolio/img3.jpg"
                  class="img-fluid"
                  alt="portfolio"
                />
              </div>
              <v-card-text>
                <h5 class="font-weight-medium font-18">Sustainable Impact Fund</h5>
                <p class="font-14 mb-0 mt-3">The Sustainable Impact Fund aims to make a positive environmental and social impact while generating long-term returns for investors. This fund invests in companies that exhibit sustainable business practices, social responsibility, and innovative solutions to global challenges. By integrating environmental, social, and governance (ESG) factors into the investment process, the Sustainable Impact Fund offers investors the opportunity to align their financial goals with their values.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Portfolio",
  data() {
    return {};
  },
  methods: {},
};
</script>
