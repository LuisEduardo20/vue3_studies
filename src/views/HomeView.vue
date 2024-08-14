<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserCardStore } from '../stores/user_card';
import type { IGetUserData } from '@/types/api';

export interface FormData {
  name: string;
}

const { getUserData, fetchUserDataFromApi } = useUserCardStore();

const user2 = ref<IGetUserData>();

const formData = ref<FormData>({
  name: ''
});

async function handleSubmit() {
  const { name } = formData.value;
  await fetchUserDataFromApi(name);
  user2.value = getUserData();
}

onMounted(() => {
  user2.value = getUserData();
});
</script>

<template>
  <main class="container">
    <section class="lateral-view">
      <h2>Visualidados recentemente</h2>
    </section>

    <section class="main-content">
      <h1>GitHub Searcher</h1>

      <form @submit.prevent="handleSubmit">
        <input v-model="formData.name" placeholder="Digite o nome" />
        <button type="submit">Pesquisar</button>
      </form>

      <div class="user-card">
        <img src="" alt="Searched User Picture" />

        <div>
          <div>
            <h2>Nome 2:</h2>
            <p>{{ user2?.name }}</p>
          </div>

          <div>
            <h2>Nickname:</h2>
            <p>{{ user2?.login }}</p>
          </div>

          <div>
            <h2>Localidade:</h2>
            <p>{{ user2?.location }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 25% 1fr;
}

.lateral-view {
  background-color: green;
}

.main-content {
  background-color: blue;
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;

  gap: 4rem;
}

.user-card {
  width: 50%;
  background-color: red;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 0;
}
</style>
