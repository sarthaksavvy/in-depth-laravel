<div
class="py-10 text-center h-full bg-fixed"
style="background-image:url('static/hero/Scattered-Forcefields.svg')">

<h1 class="text-5xl pt-10 lg:text-6xl">In Depth Laravel 🎉</h1>
<p class="text-gray-600 bg-white tracking-wide lg:text-sm lg:py-0">
  Passionately designed course for laravel artisans from beginning to
  advanced.
</p>

<div class="flex flex-wrap justify-center md:justify-around md:py-10">
  <div class="">
    <div class="pt-10">
      <h2 class="text-3xl tracking-wide text-center">We are Launching <strong>Soon!</strong></h2>
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
        Laravel + (Livewire, Vuejs & Reactjs)
      </li>
      <li class="py-1 text-left typewriter">
        <i class="fas fa-check-circle text-green-700 px-1 py-2" />
        Lifetime Updates, every laravel release
      </li>
    </ul>
  </div>
</div>
<div class="bottom-0 z-20 inset-x-0 mb-3 text-white cursor-pointer fixed opacity-25" id="pop">
  <div class="inline-block align-middle border-2 border-white rounded-full bg-gray-800 w-8 h-8">
    <span class="fas fa-angle-down text-2xl pt-1" />
  </div>
</div>
</div>

<script>
  import Subscription from "./Subscription.svelte"
</script>

<style>
  #pop{
    animation: pop 1s linear 1;
    animation-iteration-count: 10000;
    animation-play-state: running;
  }

  .typewriter {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 5px auto;
    animation: 
    typing 2.5s steps(40, end),
    blink-caret .75s step-end infinite;
  }

  @keyframes pop{
    50%  {transform: scale(1.5);}
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
  }
</style>