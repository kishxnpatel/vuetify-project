<template>
    <v-container class="pt-10">
        <v-row no-gutters>
            <v-col lg="6" ma-50>
                <v-sheet class="pa-8">
                    <h2 class="intro ">My-Web.tools</h2>
                    <p class="description">Online Tools For Web Developers</p>
                    <v-btn color="success" prepend-icon="$vuetify" variant="tonal" class="mr-2">Explore Tools</v-btn>
                    <v-btn color="indigo" class="mr-3" variant="tonal"><router-link to="About">About
                            My-Web</router-link></v-btn>
                </v-sheet>
            </v-col>
            <v-col lg="6">
                <v-sheet>
                    <v-img src="./WebTools1.png" alt="image" class="heroimg" />
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
    <v-container style="max-width: 999px;">
        <v-row>
            <v-col class="d-flex">
                <v-card class="mx-auto code-editor" max-width="300">
                    <v-code class="editor-content">
                        <p><span class="color-0">.Extensive-tools &nbsp;</span><span>{</span></p>

                        <p class="property">
                            <span class="color-2">Over 30 amazingly useful and </span>
                            <span class="color-1">and</span>
                            <span class="color-2"> versatile tools for </span>
                            <span class="color-3">Web Development.</span>
                        </p>
                        <span>}</span>
                    </v-code>
                </v-card>
            </v-col>
            <v-col class="d-flex ">
                <v-card class="mx-auto code-editor" max-width="300">
                    <v-code class="editor-content">
                        <p><span class="color-0">.Cross-platform &nbsp;</span><span>{</span></p>

                        <p class="property">
                            <span class="color-2">Since it runs on a browser, </span>
                            <span class="color-1">it can be used on any OS or device </span>

                            <span class="color-2"> and </span>
                            <span class="color-3">does not require installation.</span>
                        </p>
                        <span>}</span>
                    </v-code>
                </v-card>
            </v-col>
            <v-col class="d-flex ">
                <v-card class="mx-auto code-editor" max-width="300">
                    <v-code class="editor-content">
                        <p><span class="color-0">.Easy-to-Use &nbsp;</span><span>{</span></p>

                        <p class="property">
                            <span class="color-2">No account registration required, </span>
                            <span class="color-1"> all tools are FREE</span>
                            <span class="color-2"> to use. </span>
                            <span class="color-3"> And secure!</span>
                        </p>
                        <span>}</span>
                    </v-code>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>



<style scoped>
.heroimg {
    /*filter: drop-shadow(10px 10px 10px pink); */
    width: 385px;
}

h2.intro {
    margin-top: 60px;
    font-size: 37px;
    font-weight: 600;
    color: #373737
}

p.description {
    font-size: 20px;
    font-weight: 300;
    margin: 25px 0px;
    color: #575757;
}

.code-editor {
    max-width: 300px;
    background-color: #1d1e22;
    box-shadow: 10px 10px 6px #727272;
    border-radius: 9px;
    padding: 5px;
}

.editor-content {
    margin: 0 8px 8px;
    color: white;
    background-color: #1d1e22;
}

.property {
    margin-left: 28px;
}

.property:hover {
    cursor: text;
}

.editor-content .color-0 {
    color: rgb(86 156 214);
}

.editor-content .color-1 {
    color: rgb(182 206 168);
}

.editor-content .color-2 {
    color: rgb(156 220 254);
}

.editor-content .color-3 {
    color: rgb(207 146 120);
}
</style>

  <!-- <v-container style="max-width: 999px;">
        <v-row>
            <v-col v-for="card in extensive" :key="card.title" class="d-flex ">
                <v-card class="mx-auto card3" max-width="300" variant="outlined">
                    <v-card-title class="text-white" v-text="card.title"></v-card-title>
                    <v-card-text v-text="card.desc"></v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="card in crosspalt" :key="card.title" class="d-flex ">
                <v-card class="mx-auto card3" max-width="300" variant="outlined">
                    <v-card-title class="text-white" v-text="card.title"></v-card-title>
                    <v-card-text v-text="card.desc"></v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="card in easytuse" :key="card.title" class="d-flex ">
                <v-card class="mx-auto card3" max-width="300" variant="outlined">
                    <v-card-title class="text-white" v-text="card.title"></v-card-title>
                    <v-card-text v-text="card.desc"></v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    /** 
export default {
     data: () => ({
         extensive: [
           { title: 'Extensive Tools ', desc: 'Over 30 amazingly useful and versatile tools for web development.' },
      ],
       crosspalt: [
            { title: 'Cross-Platform', desc: 'Since it runs on a browser, it can be used on any OS or device and does not require installation.' },
        ],
         easytuse: [
            { title: 'Easy to Use', desc: 'No account registration required, all tools are free to use. And secure!' },
        ],
     })
}**/
    -->