import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This already the default value - only for display pueposes.
    },
    theme: {
        defaultTheme:'light', // This sets the browser theme to white.
         themes: {
          light: {
           colors: {
            primary:"#388E3C",
            secondary: "#81C784"
        },
      },
     },
    },
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
