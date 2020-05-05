<script>
  import Subscription from "./Subscription.svelte";
  // import { onMount } from "svelte";

  let atTop = true;
  let titleSound;
  let playClass;
  let foldSound;

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

  <h1
    class="text-5xl pt-10 lg:text-6xl transform -skew-y-3 cursor-pointer title"
    on:mouseover={playSound(titleSound)}>
    In Depth Laravel
    <span class="transform skew-y-6">🎉</span>
  </h1>
  <p class="text-gray-600 bg-white tracking-wide lg:text-sm lg:py-0">
    Passionately designed video course for laravel artisans from beginning to
    advanced.
  </p>

  <div class="flex flex-wrap justify-center md:justify-around md:py-10">
    <div class="">
      <div class="pt-10">
        <h2 class="text-3xl tracking-wide text-center">
          We are Launching
          <strong>Soon!</strong>
        </h2>
        <p class="text-gray-600">Subscribe and get course preview video!</p>
        <div class="py-10">
          <Subscription />
        </div>
      </div>
    </div>

    <div class="">
      <h2 class="text-3xl">What you will get 😎</h2>
      <ul class="text-xl py-2">
        <li class="py-1 text-left typewriter">
          <i class="fas fa-check-circle text-green-700 px-1 py-2" />
          Source Code
        </li>
        <li class="py-1 text-left typewriter">
          <i class="fas fa-check-circle text-green-700 px-1 py-2" />
          4 awesome Projects
        </li>
        <li class="py-1 text-left typewriter">
          <i class="fas fa-check-circle text-green-700 px-1 py-2" />
          Students Only Slack
        </li>
        <li class="py-1 text-left typewriter">
          <i class="fas fa-check-circle text-green-700 px-1 py-2" />
          Laravel + (Livewire, Vuejs, Nuxtjs)
        </li>
        <li class="py-1 text-left typewriter">
          <i class="fas fa-check-circle text-green-700 px-1 py-2" />
          Lifetime Updates, every laravel release
        </li>
      </ul>
    </div>
  </div>
  {#if atTop}
    <div
      class="bottom-0 z-20 inset-x-0 mb-3 text-white cursor-pointer fixed "
      id="pop">
      <a
        href="#what-your-will-learn"
        on:click={playSound(foldSound)}
        class="inline-block align-middle rounded-full bg-teal-700 w-8 h-8">
        <span class="fas fa-angle-down text-2xl pt-1" />
      </a>
    </div>
  {/if}
</div>
