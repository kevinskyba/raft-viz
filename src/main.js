import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import Pencil from "vue-pencil.js";

import TWEEN from "tween.js";

import 'vuetify/lib/styles/main.sass'

import App from './App.vue'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark'
    }
})

// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
}
requestAnimationFrame(animate)

const app = createApp(App);

app
    .use(vuetify)
    .use(Pencil)
    .mount('#app')
