<template>
  <div class="burger-menu">
    <buttton @click="toggleMenu"></buttton>
  </div>
  <nav class="navigation" :class="visible">
    <router-link :to="{ name: 'Home' }" title="Home">Home</router-link>
    <router-link :to="{ name: 'Axios' }" title="Axios">Axios</router-link>
    <router-link :to="{ name: 'About' }" title="About">About</router-link>
  </nav>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref } from "vue";
/* Data */
const userTheme = ref("light-theme");

/* Methods */
function toggleTheme() {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
}

function setTheme(theme: string) {
  localStorage.setItem("user-theme", theme);
  userTheme.value = theme;
  document.body.className = theme;
}

// Check windows user theme navigator
function getMediaPreference(): string {
  const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
}

/* Mounted, Watcher ...*/
onMounted(() => {
  // Check local theme + windows user theme navigator and set theme
  const windowsUserTheme = getMediaPreference();
  const localStorageTheme = localStorage.getItem("user-theme");
  if (localStorageTheme) {
    setTheme(localStorageTheme);
  } else if (windowsUserTheme) {
    setTheme(windowsUserTheme);
  } else {
    setTheme(userTheme.value);
  }
});

const visible = ref(false);
const toggleMenu = () => {
  visible.value = !visible.value;
}
</script>

<style scoped lang="scss">
.burger-menu {

  button {
    position: relative;
    cursor: pointer;
    display: block;
    width: 41px;
    height: 27px;
    border-top: 3px solid #efefef;
    border-bottom: 3px solid #efefef;

    &:before {
      display: block;
      content: '';
      width: 54.88%;
      height: 3px;
      background-color: #efefef;
      position: absolute;
      left: 0;
      top: 9px;
    }
  }

  @include bp-max-medium() {
    .button {
      width: 26px;
      height: 17px;

      &:before {
        top: 4px;
      }
    }
  }
}

.navigation {
  margin: var(--gap) 0;
  a {
    margin: 0 var(--space);
  }
  .toggleTheme {
    text-decoration: none;
  }
}
</style>
