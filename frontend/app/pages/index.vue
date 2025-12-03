<template>
  <v-sheet class="bg-transparent">
    <v-container>
      <p class="text-h5 font-weight-bold mb-4">Ranking</p>
      <v-row>
        <v-col cols="4" v-for="(item, i) in gamesData" :key="i">
          <v-card class="pa-4" outlined>
            <v-card-title class="text-h6 text-center text-capitalize">
              <v-icon class="mr-2">{{ item.icon }}</v-icon>
              {{ item.game }}
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text>
              <v-list dense>
                <v-list-item
                  v-for="(detail, index) in item.details.slice(0, 3)"
                  :key="index"
                >
                  <v-list-item-content>
                    <p v-if="index == 0" class="text-h5 font-weight-black">{{ index + 1 }}º {{ detail.name }} <v-chip>{{ detail.score }}</v-chip></p>
                    <v-list-item-title v-else>
                      {{ index + 1 }}º {{ detail.name }} <v-chip>{{ detail.score }}</v-chip>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  const player = localStorage.getItem("playerName");
  if (!player) {
    router.push("/player"); 
  }
});

const gamesData = ref([
  {
    game: "dino",
    icon: "mdi-google-downasaur",
    details: [
      {
        name: "Alice",
        score: 1005,
      },
      {
        name: "David",
        score: 550,
      },
      {
        name: "jhon",
        score: 550,
      },
    ],
  },
  {
    game: "snake",
    icon: "mdi-snake",
    details: [
      {
        name: "Alice",
        score: 95,
      },
      {
        name: "David",
        score: 121,
      },
      {
        name: "jhon",
        score: 88,
      },
    ],
  },
  {
    game: "pong",
    icon: "mdi-table-tennis",
    details: [
      {
        name: "Alice",
        score: 121,
      },
      {
        name: "David",
        score: 88,
      },
      {
        name: "jhon",
        score: 95,
      },
    ],
  },
  {
    game: "memory",
    icon: "mdi-memory",
    details: [
      {
        name: "Alice",
        score: 10,
      },
      {
        name: "David",
        score: 20,
      },
      {
        name: "jhon",
        score: 30,
      },
    ],
  },
  {
    game: "tetris",
    icon: "mdi-arrange-send-to-back",
    details: [
      {
        name: "Alice",
        score: 30,
      },
      {
        name: "David",
        score: 20,
      },
      {
        name: "jhon",
        score: 10,
      },
    ],
  },
  {
    game: "bird",
    icon: "mdi-bird",
    details: [
      {
        name: "Alice",
        score: 95,
      },
      {
        name: "David",
        score: 121,
      },
      {
        name: "jhon",
        score: 88,
      },
    ],
  },
]);

gamesData.value = gamesData.value.map(game => ({
  ...game,
  details: game.details.sort((a, b) => b.score - a.score) // maior → menor
}))
</script>

<style lang="scss" scoped></style>
