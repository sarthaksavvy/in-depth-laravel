<script>
  import { store } from "../../store.js";
  import { notify } from "../../Notify/store.js";
  import axios from "axios";

  let entered = "";
  let coupon = null;
  function calculateFinalPrice(discount) {
    let result = $store.course.finalPrice * (1 - discount / 100);
    store.update(n => {
      return {
        ...n,
        course: { ...n.course, discountedPrice: Math.ceil(result) }
      };
    });
  }

  function verify(e) {
    e.preventDefault();
    if (entered === "") return;
    axios
      .post(`${process.env.API_URL}/payment/coupon/verify`, { coupon: entered })
      .then(res => {
        store.update(n => {
          return { ...n, coupon: entered };
        });
        coupon = res.data;
        calculateFinalPrice(res.data.discount);
        notify({
          message: "Yeahh, coupon is applied 🎉",
          type: "success"
        });
      })
      .catch(err => {
        store.update(n => {
          return { ...n, coupon: null };
        });
        coupon = null;
        entered = "";
        notify({
          message: "Invalid Coupon 😕",
          type: "error"
        });
      });
  }

  function handleInput(e) {
    entered = e.target.value.toUpperCase();
  }

  function removeCoupon() {
    entered = "";
    coupon = null;
    store.update(n => {
      return {
        ...n,
        coupon: null,
        course: { ...n.course, discountedPrice: n.course.finalPrice }
      };
    });
  }
</script>

<div class="p-0">
  {#if !$store.coupon}
    <label>
      <p class="text-gray-400 text-sm">Have Coupon ?</p>
      <form on:submit={verify}>
        <div
          class="border border-dashed border-gray-400 rounded flex
          justify-between">
          <span class="fas fa-cut text-gray-400 px-2 py-3" />
          <input
            name="coupon"
            class="p-2 outline-none"
            value={entered}
            on:change={handleInput} />
          <span
            class="fas fa-paper-plane text-gray-500 px-2 py-3 cursor-pointer"
            on:click={verify} />
        </div>
      </form>
    </label>
  {:else}
    <div class="flex flex-wrap text-sm font-light">
      <p class="w-full">
        Coupon
        <span class="px-2 text-green-800">{coupon.name}</span>
        is applied
        <i
          class="fas fa-times-circle text-red-300 mx-2 cursor-pointer"
          on:click={removeCoupon} />
      </p>
    </div>
  {/if}
</div>
