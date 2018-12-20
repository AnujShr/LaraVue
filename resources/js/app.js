/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/FormComponent.vue -> <form-component></form-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

window.Event = new Vue();

//pusher form component needs https
Vue.component('form-component', require('./components/FormComponent').default);
Vue.component('tabs', require('./components/TabsComponent').default);
Vue.component('tab', require('./components/TabComponent').default);
Vue.component('coupon', require('./components/CouponComponent.vue').default);
Vue.component('modal-component', require('./components/ModalComponent').default);
Vue.component('progress-view', require('./components/ProgressViewComponent').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('form-model', require('./components/FormModelComponent').default);

class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(field) {
        this.errors = field.errors;
    }

    clear(field) {
        if (field) delete this.errors[field];
        else this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
}

class Form {
    constructor(data) {
        this.originalData = data;
        for (let field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors()
    }

    data() {
        let data = Object.assign({}, this);
        delete data.originalData;
        delete data.errors;
        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = ''
        }
    }

    submit(requestType, url) {
        console.log(this.originalData);
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this))
    }

    onSuccess(response) {
        alert(response.data.message);
        this.errors.clear();
        this.reset();
    }

    onFail(error) {
        this.errors.record(error.response.data);
    }
}

const app = new Vue({
    el: '#app',
    data: {
        form: new Form({
            name: '',
            description: '',
        })
    },
    methods: {
        onSubmit() {
            this.form.submit('post', 'project');
        }
    }
});
