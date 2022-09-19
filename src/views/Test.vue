<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title>Test</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" ref="content">

            <h2 class="center">Coming soon...</h2>

        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
// import DisplayOpen from '@/components/DisplayOpen.vue';

export default defineComponent({
    name: 'TestPage',
    components: {
        IonBackButton,
        // DisplayOpen,
        IonButtons,
        // IonButton,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar
    },
});
</script>

<style scoped>
.center {
    text-align: center;
}
</style>