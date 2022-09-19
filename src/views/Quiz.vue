<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title>Practice</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" ref="content">
            <div v-if="task">
                <display-open :task="task" @answer="setAnswer" :answer="answer" />
                <div class="center">
                    <ion-button :disabled="isLoading" @click="check" fill="outline" shape="round">Submit</ion-button>
                    <ion-button :disabled="isLoading" @click="next" v-if="correct != null" fill="outline" shape="round">
                        Next</ion-button>
                </div>
                <div className="score">
                    <span className="green">{{rightCounter}}</span>/<span className="red">{{wrongCounter}}</span>
                </div>
            </div>
            <div v-else>
                <h2 class="center">Loading...</h2>
            </div>
            <p class="center">{{message}}</p>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import DisplayOpen from '@/components/DisplayOpen.vue';
import { tsAnyKeyword } from '@babel/types';

export default defineComponent({
    name: 'NewItem',
    components: {
        IonBackButton,
        DisplayOpen,
        IonButtons,
        IonButton,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar
    },
    data() {
        return {
            task: null as any,
            isLoading: true,
            message: "",
            correct: null,
            answer: "",
            rightCounter: 0,
            wrongCounter: 0
        }
    },
    methods: {
        setAnswer(value: string) {
            this.answer = value;
        },
        async check(event: any) {
            if (this.task === null) {
                this.message = "Wait for question to load...";
                return;
            }
            this.isLoading = true;
            const res = await fetch("https://latinapi.cyclic.app/api/tasks/check", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ answer: this.answer, id: this.task._id })
            });
            const json = await res.json();
            if (!res.ok) {
                this.message = json.error;
            } else {
                if (this.correct == null) {
                    if (json.isCorrect) {
                        this.rightCounter += 1;
                    } else {
                        this.wrongCounter += 1;
                    }
                }
                this.correct = json.isCorrect;
                this.message = json.isCorrect ? "Correct!" : "Wrong!";
            }
            this.isLoading = false;
        },
        async next() {
            try {
                const res = await fetch('https://latinapi.cyclic.app/api/tasks/next');
                const json = await res.json();
                if (res.ok) {
                    this.task = json;
                    this.isLoading = false;
                    this.answer = "";
                    this.correct = null;
                    this.message = "";
                } else {
                    this.message = json.error;
                }
            } catch (err: any) {
                this.message = `Error: ${err.message}`;
            }
        }
    },
    mounted() {
        this.next();
    }
});
</script>

<style scoped>
.score {
    margin: auto;
    font-size: 2cm;
    font-weight: 600;
    text-align: center;
}

.red {
    color: red;
}

.green {
    color: green;
}

.center {
    display: grid;
    justify-content: center;
}
</style>