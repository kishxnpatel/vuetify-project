<template>
    <v-container class="pa-10">
        <h1>Heading Tag Extracter</h1>
        <p>Extracts the headline (h1/h2/h3/h4/h5/h6 tags) text, number of h tags, page title, and meta description of the
            specified page.</p>
        <br />


        <v-card title="Enter the URL to extract the heading
" URL="..." variant="outlined">
            <v-form @submit.prevent class="pa-7">
                <v-text-field label="Enter URL" variant="outlined"></v-text-field>
                <v-card-actions>
                    <v-btn :loading="loading" class="bg-indigo d-flex justify-center" height="48" variant="tonal"
                        @click="load" type="submit" size="large">Extract Heading</v-btn>

                    <v-btn variant="tonal">How to?</v-btn>

                </v-card-actions>


            </v-form>
            <v-expansion-panels variant="inset" class="pa-3">
                <v-expansion-panel title="Title"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </v-container>
    <v-container>
        <v-card variant="outlined" elevation="3" class="rounded-xl pa-3">
            <v-card-title class="font-weight-bold">
                What is the Heading Tag Extractor (h1-h6)?
            </v-card-title>
            <v-card-text>
                <p>This tool extracts the page title (title tag), meta description, and all heading tags (h1 to h6 tags)
                    from a page with a specified URL.</p>
                <p>You can also download the extraction results as CSV.</p>
                <p>By using this tool, you can check the titles and page structure of various sites, which can be useful for
                    SEO.</p>
            </v-card-text>
            <v-card-title class="font-weight-bold">
                How to use the Heading Tag Extractor
            </v-card-title>
            <v-card-text>
                <p>Just enter the URL of the page you want to extract the headings from in the input area and click the
                    Extract Headings button!</p>
                <p>It is also possible to extract multiple pages at a time. If you want to extract headings from multiple
                    pages, please enter the URLs in the input area, separated by a new line.</p>
                <p>If the extraction of the headings fails, only the URL that failed will show an extraction error. The
                    other URLs will output the normal extraction results.
                </p>
            </v-card-text>
            <v-card-title class="font-weight-bold">
                Limit on the number of URLs
            </v-card-title>
            <v-card-text>
                <p>Currently, there is no upper limit to the number of URLs to be extracted. However, if a large number of
                    URLs are targeted at once, it may take a long time to complete the process, or the process may fail.</p>

            </v-card-text>
        </v-card>

    </v-container>
</template>


<script lang="ts" scoped>
export default {
    name: 'Heading',

    // Button Loading
    data: () => ({ loading: false }),
    methods: {
        load() {
            this.loading = true
            setTimeout(() => (this.loading = false), 3000)
        },
    },

}
</script>