import { writable } from "svelte/store";
export const store = writable({
  user: { email: "", name: "" },
  course: {
    finalPrice: 29,
    discountedPrice: 29,
    basePrice: 149,
    title: "In Depth Laravel Course",
    id: 68,
    duration: 117728,
    items_count: 288,
    chapters_count: 28,
  },
  coupon: null,
  isPayModalOpen: false,
  processing: false,
});
