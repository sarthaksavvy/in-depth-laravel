<script>
  import ChoosePayment from "./ChoosePayment.svelte";
  import Coupon from "./Coupon.svelte";
  import { store } from "../../store.js";

  function close() {
    store.update(n => {
      return { ...n, isPayModalOpen: false };
    });
  }
</script>

<div class="relative z-40">
  <div class="container">
    <div
      class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div
        class="absolute w-full h-full bg-gray-900 opacity-50 top-0 left-0
        cursor-pointer" />
      <div
        class="z-50 bg-white md:w-2/5 sm:w-full xs:w-1 shadow-2xl mx-2 md:mx-0
        max-h-screen overflow-y-scroll focus:outline-none focus:shadow-outline
        rounded-lg">
        <div class="w-full h-full relative">
          <span
            class="fas fa-times-circle absolute right-0 m-1 text-gray-200
            shadow-xl cursor-pointer"
            on:click={close} />
          <section
            class="p-4 min-h-64 w-full text-white rounded-lg flex flex-wrap
            justify-center lg:h-full"
            style="background-image: radial-gradient( circle 1048.2px at -9.8%
            4.7%, #159957 8.5%, #155799 72.9% )">
            <h2
              class="border-b-2 border-white text-2xl font-light tracking-widest">
              In Depth Laravel
            </h2>
            <div class="font-bold w-full flex justify-center">
              <p class="py-6">$</p>
              <p class="text-6xl font-light transition-all duration-500">
                {$store.course.finalPrice}
              </p>
            </div>
          </section>
          <div class="p-4">
            <div class="border rounded-lg flex p-2">
              <i class="fas fa-user text-blue-700 px-2 w-10 py-3" />
              <input
                type="text"
                bind:value={$store.user.name}
                name="name"
                placeholder="Your Greatest Name"
                class="p-2 border-none bg-white focus:outline-none w-full" />
            </div>
            <div class="border rounded-lg flex p-2 my-4">
              <i class="fas fa-envelope text-blue-700 px-2 w-10 py-3" />
              <input
                type="email"
                bind:value={$store.user.email}
                name="email"
                placeholder="Your Awesome Email"
                class="p-2 border-none bg-white focus:outline-none w-full" />
            </div>
            <ChoosePayment />
          </div>

          <div class="flex justify-center">
            <div class="w-10/12 md:w-6/12 text-center">
              <Coupon />
            </div>
          </div>

          <section class="p-4 flex flex-wrap">
            <div class="text-xs pt-1 font-light w-full text-center">
              <span class="fas fa-life-ring text-xs px-1" />
              Having trouble ?
              <a
                class="px-1 text-red-600 cursor-pointer"
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=Hey @sarthaksavvy, I am facing issue while checkout for In Depth Laravel Course`}>
                Tweet Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>
