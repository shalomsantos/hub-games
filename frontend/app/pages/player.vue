<template>
  <v-row class="center" justify="center">
    <v-col cols="4">
      <p class="text-h4 mb-4">Quem vai jogar??</p>
  
      <v-text-field 
        label="Escreva seu nome" 
        type="text"
        v-model="name"
        variant="outlined"
        @keyup.enter="savePlayer"
      ></v-text-field>
  
      <v-btn @click="savePlayer" size="x-large" class="w-100 text-none bg-green">Jogar</v-btn>
    </v-col>
  </v-row>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const router = useRouter();

function savePlayer() {
  if (!name.value.trim()) return;

  localStorage.setItem("playerName", name.value.trim());

  router.push("/dino-runner-like");
}
</script>

<style scoped>
.center {
  text-align: center;
  margin-top: 140px;
  font-family: sans-serif;
}
.input {
  padding: 10px;
  width: 250px;
  font-size: 18px;
}
.btn {
  margin-top: 12px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
</style>
