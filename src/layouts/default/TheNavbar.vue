<template >
    <v-app-bar app color="white blur" light elevation="1" style="padding:0px 80px">
        <v-icon icon="$vuetify"></v-icon>
        <v-toolbar-title>My-web.tools</v-toolbar-title>
        <v-spacer />
        <v-list class="d-flex align-center">
            <v-list-item link v-for="(menu, index) in menus" :key="index" :to="menu.route">
                <v-list-item-title>
                    {{ menu.title }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-app-bar>
</template>
<script scoped lang="ts">
export default {
    name: 'App',
    data() {
        return {
            menus: [
                { title: 'Home', route: '/' },
                { title: 'Blog', route: 'blog' },
                { title: 'About Us', route: 'about' },

            ]
        }
    }
};
</script>
