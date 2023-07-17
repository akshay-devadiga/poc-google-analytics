<template>
  <div>
    <Banner />
    <TestimonialText />
    <Testimonial />
    <PortfolioText />
    <Portfolio id="products" />
    <C2a1 />
    <PricingText />
    <Pricing id="pricing" />
    <Blog id="blogs" />
    <UiTable />
    <ContactText />
    <Contact id="contact" />
    <Tabs />
    <C2a2 />
    <Graph />
    <div class="ga-trackable-menu">
      This website emulates below user interactions which can be tracked using GA 4 dashboard <br/><br/>
            1) Navigation bar clicks /  Sub navigation bar clicks <br/>
            2) Wistia video interactions<br/>
            3) Button clicks within the description<br/>
            4) Link button clicks within the description<br/>
            5) Tool usage tracking<br/>
            6) Multiple video views<br/>
            7) Educational papers/PDF downloads<br/>
            8) Blog post clicks<br/>
            9) Footer link clicks<br/>
            10) Tab switches.<br/>
     </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Dummy Advisors",
      meta: [
        {
          hid: "description",
          name: "Next Ui Kit",
          content: "Next Ui Kit is the best way",
        },
      ],
    };
  },

  data() {
    return {};
  },
  components: {
    Banner: () => import("@/components/Banner"),
    Graph: () => import("@/components/Graph"),
    TestimonialText: () =>
      import("@/components/testimonial/TestimonialText"),
    Testimonial: () => import("@/components/testimonial/Testimonial"),
    PortfolioText: () => import("@/components/portfolio/PortfolioText"),
    Portfolio: () => import("@/components/portfolio/Portfolio"),
    UiTable: () => import("@/components/UiTable"),
    C2a1: () => import("@/components/c2a/C2a1"),
    Pricing: () => import("@/components/pricing/Pricing"),
    Blog: () => import("@/components/blogs/Blog"),
    C2a2: () => import("@/components/c2a/C2a2"),
    Contact: () => import("@/components/contact/Contact"),
    PricingText: () => import("@/components/pricing/PricingText"),
    ContactText: () => import("@/components/contact/ContactText")
  },
};
</script>
<style scoped>
 .ga-trackable-menu{
  position: absolute;
  opacity: 0.9;
  background: #ff4d7e;
  top:10rem;
  right: 10rem;
  max-width: 30rem;
  color:white;
  padding: 2rem;
  z-index: 1;
 }
</style>