<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>Laravel Vue</title>
</head>
<body>
<div id="app" class="container">
    <tabs>
        <tab name="Pictures" :selected=true><p>Some Content for pictures</p></tab>
        <tab name="Music"><p>Somce content for Music</p></tab>
        <tab name="Videos"><p>Somce content for Music</p></tab>
        <tab name="Document"><p>Somce content for Document</p></tab>
    </tabs>
    <coupon></coupon>
    <modal-component>
        <template slot="header">
            Slot Title
        </template>
        <template slot="content">
            Temporary Content
        </template>
        <div slot="footer">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
        </div>
    </modal-component>
    <progress-view inline-template>
            <h1>Your Progress @{{completionRate}}</h1>
    </progress-view>
</div>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>