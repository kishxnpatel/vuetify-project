<template>
    <v-container class="my-15">
        <v-row justify="center">
            <v-col lg="12" class="text-center">
                <v-subheader class="text-h5 justify-center text-decoration-underline"> Deployment Tools</v-subheader>
            </v-col>
        </v-row>
        <v-container>
            <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
                <v-tab :value="4">Encoder / Decoder</v-tab>
                <v-tab :value="1">Generator</v-tab>
                <v-tab :value="2">Formatters</v-tab>
                <v-tab :value="3">Converter</v-tab>

            </v-tabs>
            <v-window v-model="tab">
                <v-window-item :value="1">
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="card in generators" :key="card.title" class="d-flex">
                                <v-card class="mx-auto navbox" max-width="300" variant="outlined">
                                    <v-card-title class="text-black" v-text="card.title"></v-card-title>
                                    <v-card-text v-text="card.desc"></v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>

                <v-window-item :value="2">
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="card in formaters" :key="card.title" class="d-flex">
                                <v-card class="mx-auto navbox" max-width="300" variant="outlined">
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
                            <v-col v-for="card in convertors" :key="card.title" class="d-flex">
                                <v-card class="mx-auto navbox" max-width="300" variant="outlined">
                                    <v-card-title class="text-black" v-text="card.title"></v-card-title>
                                    <v-card-text v-text="card.desc"></v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>

                <v-window-item :value="4">
                    <v-container fluid>
                        <v-row>
                            <v-col v-for="card in encoded" :key="card.title" class="d-flex">
                                <v-card class="mx-auto navbox" max-width="300" variant="outlined">
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

<script lang="ts">
export default {
    data: () => ({
        tab: null,
        generators: [
            { title: 'QR Code Generator', desc: 'Generate QR Code for a variety of uses' },
            { title: 'Password Generator', desc: 'Generate random passwords in bulk' },
            { title: 'UUID/GUID Generator ', desc: 'Generate UUIDs/GUIDs' },
        ],
        formaters: [
            { title: 'JSON Linter and Formatter', desc: 'Tools for JSON linting and formatting' },
            { title: 'XML Formatter', desc: 'Formatting an XML string with arbitary indentation' },
            { title: 'SQL Formatter', desc: 'Format SQL into an easy-to-read format' },
        ],
        convertors: [
            { title: 'Epoch Converter', desc: 'Convert between epoch seconds and date/time' },
            { title: 'JSON/YAML Converter', desc: 'Interconvert JSON and YAML' },
            { title: 'Number Base Converter', desc: 'Converts between binary ,octal, decimal, and hexadecimal numbers' },
        ],

        encoded: [
            { title: 'Base64 Encode', desc: 'Convert string to Base64 encoding' },
            { title: 'Base64 Decode', desc: 'Convert string to Base64 decoding' },
            { title: 'Image Base64 Encode ', desc: 'Encode an image file to a Base64 string' },
            { title: 'Image Base64 Decode', desc: 'Decode an image file to a Base64 string' },
            { title: 'URL Encode/Decode', desc: 'URL encode and decode strings' },
            { title: 'JWT Decoder', desc: 'Decode JWT (JSON Web Token)' },
        ],


    }),
}
</script>

<style scoped>
.navbox {
    border-radius: 13px;
    background-color: '';
    box-shadow: 8px 8px 8px #bebebe;
    border: 2px solid rgb(196, 196, 196);
}

.navbox:hover {
    border-color: rgba(166, 0, 255, 0.758);
}
</style>