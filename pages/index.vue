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
    <C2a2 />
    <Graph />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "NuxtJs UI kit | Free UI kit built with Vuetify",
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