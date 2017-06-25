<template>
    <div>
        <template v-if="size === 1">
            <h1>
                <slot></slot>
            </h1>
        </template>
        <template v-else-if="size === 2">
            <h2>
                <slot></slot>
            </h2>
        </template>
    </div>    
</template>

<script>
export default {
    props: [ 'size', 'text' ]
}
</script>
