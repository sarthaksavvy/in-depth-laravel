<script>
  import Subscription from "./Subscription.svelte";
</script>

<section
  class="text-white py-24 flex flex-wrap w-full bg-repeat bg-black bg-fixed
  w-10/12"
  style="background-image: url('static/hero/i-like-food.svg')">
  <div class="lg:w-1/2 lg:py-8 lg:pl-10 text-center px-2">
    <h2 class="text-4xl">We share everything with our Mailing List</h2>
    <p class="text-xl pt-5">
      From daily update on course progress, to new feature, to help building
      community and making your life easier with this course
    </p>
  </div>
  <div class="w-full lg:w-1/2 flex justify-center">
    <div class="lg:w-1/2 lg:py-8">
      <p class="text-lg py-3">Get course preview video, Join us now!</p>
      <Subscription />
      <div class="py-4">
        <h3 class="text-xl py-3">Spread the word</h3>
        <div class="flex">
          <p class="mr-2">➡</p>
          <p>Help others to find this course</p>
          <div class="px-4">
            <a
              class="twitter-share-button"
              href="https://twitter.com/intent/tweet?text=Hey, I just subscribed
              for 'In Depth Laravel' course from @bitfumes. You will learn from
              basics to TDD, @vuejs to @LaravelLivewire all in one. I recommend
              to have it now. #laravel #php #developer #javascript #vuejs
              #100daysofcode"
              data-size="large">
              Tweet
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
