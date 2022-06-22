<template>
  <div class="authenticating">
    Authenticating...
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Callback",
  methods: mapActions(["handleAuthentication"]),
  async mounted() {
    await this.handleAuthentication();
    this.$router.push({ name: "home" });
  }
};
</script>