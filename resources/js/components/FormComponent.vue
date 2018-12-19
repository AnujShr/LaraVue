<template>
    <div class="container">
        <h3 style="margin-top:30px">Simple Desktop Push Notification Example</h3>
        <form style="margin-top:30px" @submit.prevent="createPost">
            <div class="form-group">
                <label>Title:</label>
                <input type="text" class="form-control" v-model="title">
            </div>
            <div class="form-group">
                <label>Body:</label>
                <textarea cols="8" rows="8" class="form-control" v-model="body"></textarea>
            </div>
            <button
                    :class="{ disabled: (!title || !body) }"
                    class="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "",
                body: ""
            }
        },
        created() {
            this.listenEvent();
        },
        methods: {
            createPost() {
                if (!this.title || !this.body)
                    return;

                axios.post('/api/post', {
                    title: this.title, body: this.body
                }).then(response => {
                    if (response.data) {
                        this.title = this.body = "";
                    }
                })
            },
            listenEvent() {
                alert('Listen event');
                Echo.channel('bluesky')
                    .listen('PostCreated', post => {
                        if (!('Notification' in window)) {
                            return;
                        }

                        Notification.requestPermission(permission => {
                            let notification = new Notification('New post alert!', {
                                body: post.title
                            });

                            notification.onclick = () => {
                                window.open(window.location.href);
                            };
                        });
                    });
            }
        }
    }
</script>