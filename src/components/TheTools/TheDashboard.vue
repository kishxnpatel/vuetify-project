<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title>All Tools</v-toolbar-title>
        </v-toolbar>
        <div class="d-flex flex-row">
            <v-tabs v-model="tab" direction="vertical" color="indigo">

                <v-tab value="option-1">
                    HeadingText Extractor
                </v-tab>
                <v-tab value="option-2">

                    Option 2
                </v-tab>
                <v-tab value="option-3">

                    Option 3
                </v-tab>
                <v-tab value="option-4">

                    Option 4
                </v-tab>

            </v-tabs>

            <v-window v-model="tab">
                <v-window-item value="option-1">
                    <v-card flat>
                        <HeadingText />
                    </v-card>
                </v-window-item>
                <v-window-item value="option-2">
                    <v-card flat>

                    </v-card>
                </v-window-item>
                <v-window-item value="option-3">
                    <v-card flat>

                    </v-card>
                </v-window-item>
            </v-window>
        </div>

    </v-card>
</template>
<script scoped lang="ts">
import HeadingText from './HeadingText.vue';

export default {
    name: 'tools',
    data: () => ({
        tab: 'option-1',
    }),
    components: { HeadingText }
}
</script>