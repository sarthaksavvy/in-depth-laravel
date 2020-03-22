<script>
  import Subscription from "./Subscription.svelte";
</script>

<section
class="text-white px-8 py-24 flex flex-wrap w-full bg-repeat bg-black bg-fixed bg-opacity-25"
style="background-image: url('static/hero/i-like-food.svg')">
<div class="lg:w-1/2 lg:py-8 lg:pl-10 text-center">
  <h2 class="text-4xl">We share everything with our Mailing List</h2>
  <p class="text-xl py-2">
      From daily update on course progress, to new feature, to help building
      community and making your life easier with this course
  </p>
</div>
<div class="w-full lg:w-1/2 flex justify-center">
  <div class="lg:w-1/2 lg:py-8">
    <p class="text-lg py-3">Get course preview video, Join us now!</p>
    <Subscription />
  </div>
</div>
</section>
