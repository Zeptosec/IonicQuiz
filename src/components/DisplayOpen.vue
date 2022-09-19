<template>
    <div class="center-page">
        <h2>{{task.question}}</h2>
        <ion-item fill="outline">
            <ion-input @input="setAnswer" placeholder="Type your answer here..." autocorrect="off"
                autocomplete="off" required mode="md" :value="answer" type="text" />
        </ion-item>
    </div>
</template>

<script lang="ts">
import { IonInput, IonItem, IonLabel } from '@ionic/vue'
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonInput, IonItem },
    methods: {
        setAnswer(e: any) {
            this.$emit('answer', e.target.value);
        }
    },
    props: {
        task: {
            type: Object,
            required: true
        },
        answer:{
            type: String
        }
    }
});
</script>

<style scoped>
.center-page {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 20px 0;
}

.m-auto {
    margin: auto;
}

.item {
    max-width: 250px;
    margin: auto;
    padding-top: 12px;
}
</style>