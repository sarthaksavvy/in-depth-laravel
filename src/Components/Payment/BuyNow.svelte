<script>
  import PayModal from "./PayModal.svelte";
  import { store } from "../../store.js";
  const benefits = [
    { name: "Slack Channel", icon: "fab fa-slack" },
    { name: "Unlimited Updates", icon: "fas fa-hourglass-end" },
    {
      name: "Moneyback Guarentee",
      icon: "fas fa-hand-holding-usd"
    },
    {
      name: "Unlimited Access for LIFETIME",
      icon: "fas fa-unlock-alt"
    }
  ];

  function open() {
    store.update(n => {
      return { ...n, isPayModalOpen: true };
    });
  }
</script>

<section id="buy-now" class="bg-gray-900">
  <div class="py-10 text-center flex justify-center align-middle">
    <section class="bg-white rounded-lg shadow-sm w-10/12 md:w-72">
      <h1
        class="font-semibold text-2xl text-purple-900 my-8 md:text-5xl"
        style="background-image: linear-gradient( 109.6deg, rgba(9,9,121,1)
        11.2%, rgba(144,6,161,1) 53.7%, rgba(0,212,255,1) 100.2% );
        color:transparent; -webkit-background-clip: text; background-clip:text">
        Get it now
      </h1>
      <section class="flex justify-center my-5">
        <article
          class="rounded-full border w-32 h-32 bg-white"
          style="box-shadow:0px 8px 20px 0.3px gray">
          <div class="py-5">
            <h2 class="text-5xl -mb-3 flex justify-center">
              <p class="font-mono text-gray-600 -mr-1 text-xl">$</p>
              <p class="mr-2">{$store.course.finalPrice}</p>
            </h2>
            <span
              class="line-through text-lg text-gray-600 flex justify-center">
              <p class="font-mono">$</p>
              <p style="padding-top:1.5px">{$store.course.basePrice}</p>
            </span>
          </div>
        </article>
      </section>
      <p class="text-xs text-gray-500">
        If you can't afford it, please shoot an email to me.
      </p>
      <ul class="p-5 text-lg">
        {#each benefits as benefit}
          <li class="flex border-gray-300 rounded-full border-b px-2">
            <span class={`text-indigo-800 w-8 p-2 ${benefit.icon}`} />
            <p class="p-2 text-sm text-gray-700 font-semibold">
              {benefit.name}
            </p>
          </li>
        {/each}
      </ul>
      <div class="text-center py-4">
        <button
          class="px-4 py-3 w-40 shadow-xl rounded-full border text-white
          hover:bg-gray-100 transition-all duration-500 transform
          hover:scale-105 focus:outline-none"
          style="background-image:linear-gradient( 138deg, rgba(32,201,255,1)
          36.7%, rgba(0,8,187,1) 84.4%, rgba(255,255,255,1) 119.7% )"
          on:click={open}>
          <p class="flex justify-center text-lg tracking-wide">
            <span class="px-1">Buy Now</span>
          </p>
        </button>
      </div>
    </section>

    {#if $store.isPayModalOpen}
      <PayModal />
    {/if}
  </div>
</section>
