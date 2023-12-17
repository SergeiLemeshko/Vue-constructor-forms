<template>
  <nav @click="hideNav" v-if="!isHideNav">
    <router-link to="/listforms">Forms view</router-link> |
    <router-link to="/authorization">Authorization view</router-link> |
    <router-link to="/create">Create form view</router-link>
  </nav>
  <router-view/>
</template>

<script setup>
    import { useAppStore } from '@/store/mainStore.js'
    import { storeToRefs } from 'pinia'

    const store = useAppStore()
    const { isHideNav } = storeToRefs(store)
    const { hideNav } = store
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #b1afaf;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
