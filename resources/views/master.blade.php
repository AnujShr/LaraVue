<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>Laravel Vue</title>

</head>
<body>
<div id="app" class="container">

    <form style="margin-top:30px" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
        {{csrf_field()}}
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" name="name" v-model="form.name" type="text" placeholder="Project Name">
                <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
            </div>
        </div>

        <div class="field">
            <label class="label">Project Description</label>
            <div class="control">
                <textarea class="textarea" name="description" v-model="form.description"
                          placeholder="Descriptions"></textarea>
                <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" :disabled="form.errors.any()">Submit</button>
            </div>
        </div>
    </form>

</div>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>