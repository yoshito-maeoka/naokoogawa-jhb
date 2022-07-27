<template>
  <div class="burger-menu">
    <button @click="toggleMenu" :class="{ 'opened': visible }">
      <span class="sr-only">toggle menu</span>
    </button>
    <nav class="navigation" :class="{ visible }">
      <ul>
        <li><a href="#the-book">the book</a></li>
        <li><a href="#the-exhibition">the exhibition</a></li>
        <li><a href="#shop-coming">shop coming soon</a></li>
      </ul>
    </nav>
  </div>
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
  position: relative;
  padding: 20px;

  button {
    position: fixed;
    cursor: pointer;
    display: block;
    width: 41px;
    height: 27px;
    border-top: 3px solid #efefef;
    border-bottom: 3px solid #efefef;
    transition: all 0.5s;

    &:before {
      display: block;
      content: '';
      width: 54.88%;
      height: 3px;
      background-color: #efefef;
      position: absolute;
      left: 0;
      top: 9px;
      transition: all 0.5s;
    }

    &.opened {
      transform: rotate(-45deg);
      border-top: 0px;
      transition: all 0.5s;
      &:before {
        transform: rotate(90deg);
        top: 23px;
        width: 41px;
        transition: all 0.5s;
      }
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      left: -10000px;
      overflow: hidden;
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
  position: absolute;
  top: -100px;
  width: 100%;
  overflow: hidden;
    transition: all 0.5s;

  &.visible {
    top: 0;
    transition: all 0.5s;
  }

  margin: var(--gap) 0;
  a {
    margin: 0 var(--space);
  }
  .toggleTheme {
    text-decoration: none;
  }
}
</style>
