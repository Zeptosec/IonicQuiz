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
            <display-results v-if="data" :headers="data.headers" :data="data.data"></display-results>
            <ion-text color="danger ion-text-center">
                <h3>{{error}}</h3>
            </ion-text>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonGrid, IonRow, IonCol, IonBackButton, IonText, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import DisplayResults from '@/components/DisplayResults.vue';

export default defineComponent({
    name: 'LeaderBoard',
    components: {
        IonBackButton,
        IonText,
        IonButtons,
        DisplayResults,
        // IonButton,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar
    },
    data() {
        return {
            error: "",
            data: null as any
        }
    },
    methods: {
        async fetchLeaderboard() {
            try {
                const res = await fetch('https://latinapi.cyclic.app/api/leaderboard');
                const json = await res.json();

                if (res.ok) {
                    let headers = ["#", ...json.headers];
                    let data = json.data.map((w: any, i: any) => [i + 1, ...w]);
                    this.data = { headers, data };
                    this.error = ""
                } else {
                    this.error = json.error;
                }
            } catch (err){
                this.error = "Check your internet connection and reload."
            }
        }
    },
    mounted() {
        this.fetchLeaderboard();
    }
});
</script>

<style scoped>
.header {
    background-color: #1aac83;
}

ion-col {
    border: 1px solid grey;
}
</style>