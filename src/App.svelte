<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Footer from "./Components/Footer.svelte";
  import EmailButton from "./Components/EmailButton.svelte";
  import Faq from "./Components/Faq.svelte";
  import Banner from "./Components/Banner.svelte";
  import Instructor from "./Components/Instructor.svelte";
  import Testimonial from "./Components/Testimonial.svelte";
  import WhatYouWillLearn from "./Components/WhatYouWillLearn.svelte";
  import WhyLaravel from "./Components/WhyLaravel.svelte";
  import TeamPackage from "./Components/TeamPackage.svelte";
  import Notify from "./Notify/NotifyComponent.svelte";
</script>

<style>

</style>

<main>
  <Notify />
  <Banner />
  <!-- <TeamPackage /> -->
  <WhatYouWillLearn />
  <Testimonial />
  <WhyLaravel />
  <Instructor />
  <Faq />
  <EmailButton />
  <Footer />
</main>
