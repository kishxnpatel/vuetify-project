<template>
    <HeroComponent />
    <ToolComponent />
    <ToolComponent2 />
</template>

<script scoped lang="ts">
import HeroComponent from '@/components/My-Home/HeroComponent.vue';
import ToolComponent2 from '@/components/My-Home/ToolComponent2.vue';
import ToolComponent from '@/components/My-Home/ToolComponent.vue';
export default {
    name: "Home",
    components: { HeroComponent, ToolComponent, ToolComponent2 }
}
</script>
