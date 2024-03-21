<template>
    <v-footer class=" d-flex mt-10 bg-blue-grey-lighten-5
" variant="outlined">
        <v-row class="ma-6">
            <v-col lg-5>
                <p>About us</p>
                <p>Privacy Policy</p>
                <p>Disclaimer</p>
            </v-col>
            <v-col lg-5>
                <h2>My-Web.tools</h2>
                <p>Online Tools for Free</p>
                <p> {{ new Date().getFullYear() }} — <strong>My-Web.tools</strong></p>
            </v-col>
        </v-row>
    </v-footer>
</template>


<script  lang="ts">
export default {
    name: 'Thefooter',
}
</script>