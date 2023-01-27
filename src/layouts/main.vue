<template>
<div>
    <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
        <slot />
    </Horizontal>
</div>
</template>

<script>
import { layoutComputed } from "@/state/helpers";

import Horizontal from "./horizontal";

export default {
    components: {
        Horizontal,
    },
    data() {
        return {};
    },
    computed: {
        ...layoutComputed,
    },
    mounted() {
        document.documentElement.setAttribute("data-layout","horizontal");
        document.documentElement.setAttribute("data-layout-width","fluid");
        document.documentElement.setAttribute("data-topbar", "dark");
        document.documentElement.setAttribute("data-sidebar-size", "sm");
        document.documentElement.setAttribute( "data-layout-position","fixed"); //scrollable
    },
};
</script>

