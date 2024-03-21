<template>
    <v-container class="my-15">
        <v-row justify="center">
            <v-col lg="12" class="text-center">
                <v-subheader class="text-h5 justify-center text-decoration-underline"> Frontend
                    Tools</v-subheader>
            </v-col>
        </v-row>
        <v-container>
            <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
                <v-tab :value="1">SEO Tools</v-tab>
                <v-tab :value="2">CSS Tools</v-tab>
                <v-tab :value="3">Grapfic</v-tab>
                <!--<v-tab :value="4">Color Picker</v-tab>-->
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item :value="1">
                    <v-container fluid>
                        <v-row>
                            <v-col class="d-flex flex-wrap pa-1">
                                <v-card link v-for="card in seo" :key="card.title" :to="card.route" class="navbox"
                                    variant="outlined">
                                    <v-card-title class="text-black" v-text="card.title"> </v-card-title>
                                    <v-card-text v-text="card.desc"></v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>

                <v-window-item :value="2">
                    <v-container fluid>
                        <v-row>
                            <v-col class="d-flex flex-wrap pa-1">
                                <v-card link v-for="card in css" :key="card.title" :to="card.route" class="navbox"
                                    variant="outlined">
                                    <v-card-title class="text-black" v-text="card.title"></v-card-title>
                                    <v-card-text v-text="card.desc"></v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>

                <v-window-item :value="3">
                    <v-container fluid>
                        <v-row>
                            <v-col class="d-flex flex-wrap pa-1">
                                <v-card link v-for="card in graphics" :key="card.title" :to="card.route"
                                    class="mx-auto navbox" variant="outlined">
                                    <v-card-title class="text-black" v-text="card.title"></v-card-title>
                                    <v-card-text v-text="card.desc"></v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>


            </v-window>
        </v-container>
    </v-container>
</template>

<script scoped lang="ts">
export default {
    data: () => ({
        tab: null,
        seo: [
            { title: 'Heading Tag Extractor', desc: 'Extract page heading (H tags)', route: 'tools' },
            { title: 'OGP Checker', desc: 'Check OGP tags and OGP images when sharing on SNS', route: 'ogp-checker' },
            { title: 'OGP Image Simulator', desc: 'Simulate the display of OGP images when sharing on SNS', route: 'ogp-image' },
            { title: 'Broken Link Checker', desc: 'Check for broken internal and external links on the page', route: 'brokenlink-checker' },
            { title: 'Email Address Checker', desc: 'Email address syntax check/existence check', route: 'email-address-checker' },
            { title: 'Suggestion Keyword Extractor', desc: 'Extract google search suggestion keywords', route: 'suggestion-keyword-extractor' },
        ],
        css: [
            { title: 'Character Counter', desc: 'Real-time counting od text character', route: 'character-counter' },
            { title: 'Word Counter', desc: 'Real-time countng of English words in text', route: 'word-counter' },
            { title: 'Line break Remover', desc: 'Remove line breaks, spaces, and tab from text', route: 'line-break-remover' },
            { title: 'Color Code Convertor', desc: 'Convert Hex color codes, RGBA, HSLA, and HSVA to each other', route: 'color-code-convertor' },
            { title: 'Border Radius gererator', desc: 'Interactively generate CSS border-radius', route: 'border-radius-generator' },
            { title: 'Box Shadow gererator', desc: 'Interactively generate CSS Box-Shadow', route: 'box-shadow-generator' },
        ],
        graphics: [
            { title: 'Color Code Extractor', desc: 'Batch extraction of color codes from images', route: 'blog' },
            { title: 'Image Comparison Slider', desc: 'Easily compare two images using a slider', route: 'blog' },
            { title: 'Color Eyedropper ', desc: 'Easily extract of color codes from images', route: 'blog' },
            { title: 'QR Code Reader', desc: 'Scanning a QR code from a webcam/image', route: 'blog' },
        ],
        /**     picker: [
                { title: 'Pre-fab homes', desc: 'qwsaswqaqqww', route: 'blog' },
                { title: 'Pre g g g g', desc: 'qwsaswqaqqww', route: 'blog' },
                { title: 'Pre h h h h ', desc: 'qwsaswqaqqww', route: 'blog' },
                { title: ' y  y y homes', desc: 'qwsaswqaqqww', route: 'blog' },
            ],*/
    }),
}
</script>

<style scoped>
.navbox {
    border-radius: 10px;
    background-color: '';
    box-shadow: 3px 3px 2px #bebebe;
    border: 2px solid rgb(196, 196, 196);
    width: 380px;
    height: 130px;
    margin: 10px;
}

.navbox:hover {
    border-color: rgba(166, 0, 255, 0.758);
}
</style>