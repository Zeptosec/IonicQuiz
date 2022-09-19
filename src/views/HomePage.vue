<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Quizz</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" ref="content">
      <div class="center-page">
        <div class="container">
          <ion-button @click="() => router.push('/quiz')">Practice</ion-button>
          <ion-button @click="() => router.push('/test')">Test</ion-button>
          <ion-button @click="() => router.push('/leaderboard')">Leaderboard</ion-button>
        </div>
      </div>
      <!-- <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>   -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { add, heart } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { IonContent, IonHeader, IonGrid, IonRow, IonCol, IonCheckbox, IonItem, IonPage, IonTitle, IonFab, IonFabButton, IonList, IonToolbar, IonButton, IonIcon } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
  setup() {
    return {
      add, heart,
      router: useRouter(),
    }
  }
});
</script>

<style scoped>
.center-page {
  display: grid;
  margin: auto;
  width: 200px;
  height: 100%;
  align-items: center;
}

.container {
  display: grid;
  gap: 10px;
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
