import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

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
    TWEEN.update(time)
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)

const app = createApp(App);

app
    .use(vuetify)
    .mount('#app')
