<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title>New item</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content></ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'NewItem',
        components: {
            IonBackButton,
            IonButtons,
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar
        }
    });
   
</script>

<style lang="scss" scoped>

</style>