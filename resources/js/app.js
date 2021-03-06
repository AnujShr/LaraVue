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
Vue.component('custom-input', require('./components/CustomInputComponent').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('form-model', require('./components/FormModelComponent').default);

import Form from './core/Form';

window.Form = Form;

const app = new Vue({
    el: '#app',
    data: {
        coupon: 'FREEBIE',
        name: 'John Doe',
        form: new Form({
            name: '',
            description: '',
        }),
    },
    methods:
        {
            onSubmit() {
                this.form.submit('post', 'project');
            }
        }
});
