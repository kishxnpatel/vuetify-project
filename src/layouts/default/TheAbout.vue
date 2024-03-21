<template>
    <v-container>
        <v-card width="100%" height="180px">
            <v-card-text class="text-h4 text-center pa-14">About</v-card-text>
        </v-card>

        <v-card class="navbox" variant="outlined">
            <v-card-title class="text-black">About My-Web.tools </v-card-title>
            <v-card-text class="desc">
                <p>The My-web.tools is a web service that combines more than 30 useful tools for web development and programming
                    in one site.</p>
                <p>It can be used on a browser, and since it is cross-platform and independent of OS and
                    devices, it can be easily used anywhere</p>
                <p>
                    It is also completely free to use, with no account registration required.
                </p>
                <p>
                    My-Web.tools is used by a wide range of users, from beginners to advanced users of web development and
                    programming.
                </p>
                <p>
                    The operation and usage of the tools are easily explained on each tool's page, so even first-time users
                    can use the tools smoothly.
                </p>
            </v-card-text>
        </v-card>
        <v-card class="navbox" variant="outlined">
            <v-card-title class="text-black">Reason for Release </v-card-title>
            <v-card-text class="desc">
                <p>Webcity is a service that collects a large number of useful tools for web development and programming
                    in one place. Since the tools published in Webcity are relatively general-purpose tools, many
                    similar tools already exist on the Internet.</p>
                <p>However, there were some concerns with some of the existing tools.</p>
                <p>
                    For example, they are not SSL-enabled, so there are security issues; they do not support mobile layouts,
                    so they cannot be used from smartphones; and they have full functionality but poor performance and UI.
                </p>
                <p>
                    Therefore, we decided to create a web service for tools that are easy to use and use modern technology,
                    and released Webcity.
                    Webcity has been improved over existing tools in many ways, such as ease of use, security
                    considerations, mobile compatibility for use from smartphones and tablets, and improvements in
                    performance and UI.
                </p>
            </v-card-text>
        </v-card>
        <v-card class="navbox" variant="outlined">
            <v-card-title class="text-black">Technologies Used</v-card-title>
            <v-card-text class="desc">
                <p>The Webcity </p>
            </v-card-text>
        </v-card>
        <v-card class="navbox" variant="outlined">
            <v-card-title class="text-black">Developer</v-card-title>
            <v-card-text class="desc">
                <p>My-Web.tool is developed and managed by KishanPatel </p>

            </v-card-text>
        </v-card>
    </v-container>
</template>

<style scoped>
.navbox {
    border-radius: 10px;
    background-color: '';
    border: 1px solid rgb(214, 214, 214);
    margin: 10px;
}
</style>

<script lang="ts">
export default {

    name: 'About',
    data: () => ({})
}

</script>
