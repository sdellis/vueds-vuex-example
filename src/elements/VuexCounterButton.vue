<template>
<div class="VuexCounterButton">
	<button class="button"
		@click.prevent="increment">
		{{count}}
	</button>
</div>
</template>

<script>
/**
 * Button that counts how many times it was pressed. State management is handled
 * by Vuex, so the corresponding Vuex module (_counterModule_) must be loaded
 * into the application store.
 */

// Loading the store allows access via `store.getters.count`
//import store from '../store'

// But store is not getting injected ala this.$store so mapState is also not working
import { mapState, mapGetters } from "vuex"

export default {
  name: "VuexCounterButton",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  computed: {
    count() {
      return this.$store.getters.count
    },
  },
  methods: {
    /**
     * Increments the counter. This method is not marked @public and is not visible in the styleguide.
     */
    increment() {
      this.$store.commit("increment")
      /**
       * After increment event
       * @event after
       * @type {number}
       */
      this.$emit("after", this.value)
    },
  },
  created() {
    // the logged component instance should have a $store property, which it does not
    console.log(this)
  },
}
</script>
<docs>
<br/>
Don't forget that you can debug it with [vue-devtools](https://github.com/vuejs/vue-devtools)

```js
    <vuex-counter-button></vuex-counter-button>
```
</docs>
