<template>
  <v-layout class="rounded rounded-md border">
    <v-navigation-drawer permanent color="brown-darken-1">
      <v-list nav>
        <NuxtLink class="text-decoration-none text-white" to="/">
          <v-list-item link title="Home" prepend-icon="mdi-home"/>
        </NuxtLink>
        <NuxtLink class="text-decoration-none text-white" to="/dino-runner-like">
          <v-list-item link title="Dino Runner-like" prepend-icon="mdi-google-downasaur"/>
        </NuxtLink>
        <NuxtLink class="text-decoration-none text-white" to="/snake">
          <v-list-item link title="Snake" prepend-icon="mdi-snake"/>
        </NuxtLink>
        <NuxtLink class="text-decoration-none text-white" to="/pong-cpu">
          <v-list-item link title="Pong vs CPU" prepend-icon="mdi-table-tennis"/>
        </NuxtLink>
        <NuxtLink class="text-decoration-none text-white" to="/memory-game">
          <v-list-item link title="Memory Game" prepend-icon="mdi-memory"/>
        </NuxtLink>
        <NuxtLink class="text-decoration-none text-white" to="/tetris">
          <v-list-item link title="Tetris" prepend-icon="mdi-arrange-send-to-back"/>
        </NuxtLink>
        <NuxtLink class="text-decoration-none text-white" to="/flappy-bird-clone">
          <v-list-item link title="Flappy Bird clone" prepend-icon="mdi-bird"/>
        </NuxtLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar title="Hub de games" color="brown-lighten-2">
      
    </v-app-bar>

    <v-main class="bg-brown-lighten-5" min-height="600">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue'; 

const drawer = ref(true);
</script>

<style lang="scss" scoped>
.router-link-active{
  background-color: red !important;
}
</style>