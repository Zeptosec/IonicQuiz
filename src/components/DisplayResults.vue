<template>
    <div className="testResults">
        <table v-if="headers && data">
            <tr>
                <th v-for="(text, index) in props.headers" :key="index">
                    {{text}}
                </th>
            </tr>
            <tr v-for="(userdata, index) in props.data" :key="index">
                <td v-for="(datapiece, index) in userdata" :key="index">
                    {{datapiece}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
    headers: null,
    data: null
})
</script>

<style scoped>
table {
    border-collapse: collapse;
    margin: 10px auto;
}

table th {
    background-color: #1aac83;
    color: white;
}

table td,
table th {
    border: 1px solid #ddd;
    padding: 6px;
}

table tr:nth-child(even) {
    background-color: #eee;
}

table tr td:nth-child(1) {
    text-align: left;
}

table tr:hover {
    background-color: #ddd;
}

body.dark table tr:nth-child(even) {
    background-color: #111;
}

body.dark table tr:hover {
    background-color: #333;
}
</style>