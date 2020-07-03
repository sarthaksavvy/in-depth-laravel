<script>
  import Subscription from "./Subscription.svelte";
  import TableOfContent from "./TableOfContent.svelte";
  // import { onMount } from "svelte";

  let atTop = true;
  let titleSound;
  let playClass;
  let foldSound;
  let tweetText = `https://twitter.com/intent/tweet?text=Hey, I just subscribed for 'In-Depth Laravel' course from @bitfumes. You will learn from basics to TDD, @vuejs to @LaravelLivewire all in one. I recommend to have it now. #laravel #php #developer #javascript #vuejs #100daysofcode`;

  // onMount(async () => {});
  window.addEventListener("scroll", () => {
    atTop = window.scrollY < 50;
  });

  const playSound = sound => {
    sound.volume = 0.2;
    sound.play();
  };
</script>

<style>
  #pop {
    animation: pop 1s linear 1;
    animation-iteration-count: 10000;
    animation-play-state: running;
  }

  .typewriter {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 5px auto;
    animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  .title:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.37, 0.39, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes pop {
    50% {
      transform: scale(1.5);
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>

<div
  class="py-10 text-center h-full bg-fixed bg-repeat"
  style="background-image:url('static/hero/Scattered-Forcefields.svg')">
  <audio bind:this={titleSound}>
    <source src="sounds/cartoon033.mp3" />
    Your browser isn't invited for super fun audio time.
  </audio>

  <audio bind:this={foldSound}>
    <source src="sounds/paperFold.mp3" />
    Your browser isn't invited for super fun audio time.
  </audio>

  <div
    class="flex justify-center w-full pt-10 transform -skew-y-3 cursor-pointer
    title">
    <div class="my-3 lg:my-6 mr-1 md:mx-2">
      <img
        src="/static/images/laravel-logo.png"
        class="w-10 h-10 lg:w-16 lg:h-16"
        alt="laravel logo" />
    </div>
    <h1
      class="text-4xl lg:text-6xl font-semibold"
      on:mouseover={playSound(titleSound)}>
      In Depth Laravel
      <span class="transform skew-y-6">🎉</span>
    </h1>
  </div>
  <p class="text-gray-600 bg-white tracking-wide lg:text-sm lg:py-0">
    Passionately designed video course for laravel artisans from beginning to
    advanced.
  </p>

  <div class="flex flex-wrap justify-center md:justify-around md:py-10">
    <div class="">
      <div class="pt-10">
        <h2 class="text-3xl tracking-wide text-center">
          <strong>Journey</strong>
          has now started
        </h2>
        <!-- <p class="text-gray-600">Subscribe and get course preview video !</p> -->
        <div class="py-10">
          <div class="flex justify-center">
            <a
              href="#buy-now"
              class="px-2 py-3 my-5 w-64 text-xl rounded-full text-white
              cursor-pointer"
              style="background-image: linear-gradient( 135.9deg,
              rgba(109,25,252,1) 16.4%, rgba(125,31,165,1) 56.1% )">
              Enroll to Course
            </a>
          </div>
          <!-- <Subscription /> -->
          <div class="flex my-3">
            <p class="mr-2">➡</p>
            <p>Help others to find this course</p>
            <div class="px-4">
              <a
                class="twitter-share-button"
                href={tweetText}
                data-size="large">
                Tweet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <TableOfContent />
      <!-- <h2 class="text-3xl">What you will get 😎</h2>
      <ul class="text-xl py-2">
        <li class="py-1 text-left typewriter">
          <i class="fas fa-check-circle text-purple-700 px-1 py-2" />
          Source Code
        </li>
        <li class="py-1 text-left typewriter">
          <i class="fas fa-check-circle text-purple-700 px-1 py-2" />
          4 awesome Projects
        </li>
        <li class="py-1 text-left typewriter">
          <i class="fas fa-check-circle text-purple-700 px-1 py-2" />
          Students Only Slack
        </li>
        <li class="py-1 text-left typewriter">
          <i class="fas fa-check-circle text-purple-700 px-1 py-2" />
          Laravel + (Livewire, Vuejs, Nuxtjs)
        </li>
        <li class="py-1 text-left typewriter">
          <i class="fas fa-check-circle text-purple-700 px-1 py-2" />
          Lifetime Updates, every laravel release
        </li>
      </ul> -->
    </div>
  </div>
  {#if atTop}
    <div
      class="bottom-0 z-20 inset-x-0 mb-3 text-white cursor-pointer fixed "
      id="pop">
      <a
        href="#course-preview"
        on:click={playSound(foldSound)}
        class="inline-block align-middle rounded-full bg-teal-700 w-8 h-8">
        <span class="fas fa-angle-down text-2xl pt-1" />
      </a>
    </div>
  {/if}
</div>
