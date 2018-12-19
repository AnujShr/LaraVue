<template>
    <div class="container">
        <form style="margin-top:30px" @sumbit.prevent="sumbitForm">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" v-model="name" placeholder="Project Name">
                </div>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                    <textarea class="textarea" v-model="description" placeholder="Textarea"></textarea>
                </div>
            </div>


            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Create</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    }
</script>