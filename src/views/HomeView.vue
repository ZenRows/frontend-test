<template>
  <div class="home">
    <HelloWorld msg="The content goes here" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();

    const origins = computed(function () {
      return store.state.origins;
    });

    const destinations = computed(function () {
      return store.state.destinations;
    });

    return {
      origins,
      destinations,
    };
  },
};
</script>
