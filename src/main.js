import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {  mdi } from 'vuetify/iconsets/mdi'
import { aliases, fa } from 'vuetify/iconsets/fa'



const myCustomTheme = {
  dark: false,
  colors: {
    background: '#006D5B',    
    primary: '#00486D',    
    secondary: '#006D25',      
  },
}

const vuetify = createVuetify({
  components,
  directives,
  icons:{
    defaultSet: 'fa',
    aliases,
    sets: {
      mdi,
      fa
    },
  },
  theme:{
    defaultTheme: 'myCustomTheme',
    themes:{
      myCustomTheme,
    }
  }
})

createApp(App).use(vuetify).mount('#app')