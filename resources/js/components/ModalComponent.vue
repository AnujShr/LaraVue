<template>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="header"></slot>
                </p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <slot name="content"></slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer">
                    <button class="button is-primary">Ok</button>

                </slot>
            </footer>
        </div>
    </div>
</template>
<script>
    export default {}
</script>