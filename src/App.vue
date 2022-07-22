<template>
  <nav class="p-8 shadow-lg">
    <router-link to="/">Home</router-link> |
    <router-link to="/origins">Origins</router-link> |
    <router-link to="/destinations">Destinations</router-link>
  </nav>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 flex-auto w-full">
    <router-view class="pt-32 pb-8 md:pt-40 md:pb-20" />
  </main>
  <ZRFooter />
</template>

<script>
// @ is an alias to /src
import ZRFooter from "@/components/ZRFooter.vue";

export default {
  name: "App",
  components: {
    ZRFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
