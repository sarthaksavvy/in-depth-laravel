<script>
  import PayWithPaypal from "./Methods/PayWithPaypal.svelte";
  import PayWithRazorpay from "./Methods/PayWithRazorpay.svelte";
  import { store } from "../../store.js";
  import { notify } from "../../Notify/store.js";

  let selected = null;

  function selectIt(service) {
    if ($store.user.email == "" || $store.user.name == "") {
      notify({
        message: "Please fill name and email first",
        type: "warning",
        fly: {
          y: 100,
          duration: 1000
        }
      });
      return;
    }
    selected = service;
  }
</script>

<div class={`w-full`}>
  {#if selected === null}
    <p class="text-xl text-gray-700 font-light tracking-wider text-center">
      Choose Payment Method
    </p>
  {:else}
    <p class="text-2xl text-gray-700 font-light tracking-wider w-full">
      Now pay with {selected}
    </p>
  {/if}

  {#if selected === null}
    <div class="lg:w-full">
      <div
        class="p-4 my-2 w-full border border-gray-400 rounded-lg shadow
        hover:shadow-xl cursor-pointer"
        on:click={() => selectIt('paypal')}>
        <h4 class="text-xl text-left text-gray-700 font-medium">
          <span class="fab fa-paypal text-blue-700 px-2 w-10" />
          Pay with Paypal
        </h4>
      </div>
      <div
        class="p-4 my-2 w-full border border-gray-400 rounded-lg shadow
        hover:shadow-xl cursor-pointer"
        on:click={() => selectIt('razorpay')}>
        <h4 class="text-xl text-left text-gray-700 font-medium">
          <span class="fas fa-registered text-blue-700 px-2 w-10" />
          Pay with Card
        </h4>
      </div>
    </div>
  {:else}
    <div class="py-4 flex justify-center flex-wrap w-full">
      {#if selected === 'paypal'}
        <PayWithPaypal />
      {:else if selected === 'razorpay'}
        <PayWithRazorpay />
      {/if}
      <span
        class="py-2 cursor-pointer text-xs font-light text-center text-gray-700
        w-full"
        on:click={() => (selected = null)}>
        Change Payment Method
      </span>
    </div>
  {/if}
</div>
