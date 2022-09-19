<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title>Leaderboard</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" ref="content">
            <ion-grid v-if="data">
                <ion-row>
                    <ion-col v-for="htext in data.headers">
                        {{htext}}
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-text color="warning ion-text-center">
                {{error}}
            </ion-text>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonBackButton, IonText, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
// import DisplayOpen from '@/components/DisplayOpen.vue';

export default defineComponent({
    name: 'LeaderBoard',
    components: {
        IonBackButton,
        IonText,
        IonButtons,
        // IonButton,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar
    },
    data(){
        return {
            error: "",
            data: null as any
        }
    },
    methods: {
        async fetchLeaderboard(){
            const res = await fetch('https://latinapi.cyclic.app/api/leaderboard');
            const json = await res.json();
        }
    }
});
</script>

<style scoped>
.center {
    text-align: center;
}
</style>