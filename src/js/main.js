// Importar módulos
import Navigation from './modules/navigation.js';
import FormHandler from './modules/forms.js';
import { debounce, throttle } from './utils/helpers.js';

// Inicializar aplicação
class App {
  constructor() {
    this.init();
  }

  init() {
    // Aguardar DOM carregar
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }

  initializeComponents() {
    // Instanciar componentes
    new Navigation();
    new FormHandler();
    
    console.log('🚀 Aplicação inicializada!');
  }
}

// Inicializar
new App();
