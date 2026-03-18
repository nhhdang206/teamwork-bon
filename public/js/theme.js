/**
 * Theme System Manager
 * Handles light/dark mode, custom colors, background colors, and persistence
 */

class ThemeManager {
  constructor() {
    this.storageKey = 'uocpass_theme_settings';
    this.defaultTheme = {
      mode: 'light',
      primaryColor: '#667eea',
      backgroundColor: '#ffffff',
      darkModeBackgroundColor: '#0d1117',
    };
    
    this.presets = [
      {
        name: 'Ocean',
        primaryColor: '#0284c7',
        backgroundColor: '#f0f9ff',
        darkModeBackgroundColor: '#0c0d0e',
      },
      {
        name: 'Forest',
        primaryColor: '#059669',
        backgroundColor: '#ecfdf5',
        darkModeBackgroundColor: '#1f2937',
      },
      {
        name: 'Sunset',
        primaryColor: '#f97316',
        backgroundColor: '#fff7ed',
        darkModeBackgroundColor: '#1c1917',
      },
      {
        name: 'Purple',
        primaryColor: '#a855f7',
        backgroundColor: '#faf5ff',
        darkModeBackgroundColor: '#2d1b4e',
      },
      {
        name: 'Coral',
        primaryColor: '#ff6b6b',
        backgroundColor: '#fff5f5',
        darkModeBackgroundColor: '#2c1515',
      },
      {
        name: 'Indigo',
        primaryColor: '#667eea',
        backgroundColor: '#ffffff',
        darkModeBackgroundColor: '#0d1117',
      },
    ];

    this.init();
  }

  init() {
    // Add no-transitions class initially to prevent flashing
    document.body.classList.add('no-transitions');

    // Load saved theme or use defaults
    this.loadTheme();

    // Apply initial theme
    this.applyTheme(this.currentTheme);

    // Remove no-transitions class after brief delay
    setTimeout(() => {
      document.body.classList.remove('no-transitions');
    }, 50);

    this.setupEventListeners();
  }

  loadTheme() {
    const saved = localStorage.getItem(this.storageKey);
    this.currentTheme = saved ? JSON.parse(saved) : { ...this.defaultTheme };
  }

  saveTheme() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.currentTheme));
  }

  applyTheme(theme) {
    // Apply mode
    if (theme.mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Apply primary color
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    
    // Calculate lighter and darker variants
    const primaryLight = this.lightenColor(theme.primaryColor, 20);
    const primaryDark = this.darkenColor(theme.primaryColor, 20);
    document.documentElement.style.setProperty('--primary-light', primaryLight);
    document.documentElement.style.setProperty('--primary-dark', primaryDark);

    // Apply background colors
    if (theme.mode === 'light') {
      document.documentElement.style.setProperty('--bg-primary', theme.backgroundColor);
    } else {
      document.documentElement.style.setProperty('--bg-primary', theme.darkModeBackgroundColor);
    }

    this.currentTheme = theme;
  }

  toggleMode() {
    this.currentTheme.mode = this.currentTheme.mode === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    this.saveTheme();
    this.updateSettingsPanel();
  }

  setPrimaryColor(color) {
    this.currentTheme.primaryColor = color;
    this.applyTheme(this.currentTheme);
    this.saveTheme();
    this.updateSettingsPanel();
  }

  setBackgroundColor(color) {
    if (this.currentTheme.mode === 'light') {
      this.currentTheme.backgroundColor = color;
    } else {
      this.currentTheme.darkModeBackgroundColor = color;
    }
    this.applyTheme(this.currentTheme);
    this.saveTheme();
    this.updateSettingsPanel();
  }

  applyPreset(presetName) {
    const preset = this.presets.find(p => p.name === presetName);
    if (preset) {
      this.currentTheme = {
        mode: this.currentTheme.mode,
        ...preset,
      };
      this.applyTheme(this.currentTheme);
      this.saveTheme();
      this.updateSettingsPanel();
    }
  }

  resetToDefault() {
    this.currentTheme = { ...this.defaultTheme };
    this.applyTheme(this.currentTheme);
    this.saveTheme();
    this.updateSettingsPanel();
  }

  // Helper: Lighten color
  lightenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R : 255) * 0x10000 +
      (G < 255 ? G : 255) * 0x100 + (B < 255 ? B : 255))
      .toString(16).slice(1);
  }

  // Helper: Darken color
  darkenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, (num >> 16) - amt);
    const G = Math.max(0, (num >> 8 & 0x00FF) - amt);
    const B = Math.max(0, (num & 0x0000FF) - amt);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B)
      .toString(16).slice(1);
  }

  setupEventListeners() {
    // Listen for settings panel changes
    const modeToggle = document.getElementById('themeToggle');
    const primaryColorPicker = document.getElementById('primaryColorPicker');
    const bgColorPicker = document.getElementById('bgColorPicker');
    const presetButtons = document.querySelectorAll('.theme-preset-btn');
    const resetBtn = document.getElementById('resetThemeBtn');
    const settingsBtn = document.getElementById('themeSettingsBtn');
    const closeSettingsBtn = document.getElementById('closeSettingsPanel');

    if (modeToggle) {
      modeToggle.addEventListener('change', () => this.toggleMode());
    }

    if (primaryColorPicker) {
      primaryColorPicker.addEventListener('input', (e) => {
        this.setPrimaryColor(e.target.value);
      });
    }

    if (bgColorPicker) {
      bgColorPicker.addEventListener('input', (e) => {
        this.setBackgroundColor(e.target.value);
      });
    }

    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.applyPreset(btn.dataset.preset);
        this.highlightActivePreset();
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetToDefault());
    }

    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => this.openSettingsPanel());
    }

    if (closeSettingsBtn) {
      closeSettingsBtn.addEventListener('click', () => this.closeSettingsPanel());
    }

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
      const panel = document.getElementById('themeSettingsPanel');
      if (panel && !panel.contains(e.target) && e.target !== settingsBtn) {
        this.closeSettingsPanel();
      }
    });
  }

  updateSettingsPanel() {
    const modeToggle = document.getElementById('themeToggle');
    const primaryColorPicker = document.getElementById('primaryColorPicker');
    const bgColorPicker = document.getElementById('bgColorPicker');

    if (modeToggle) {
      modeToggle.checked = this.currentTheme.mode === 'dark';
    }

    if (primaryColorPicker) {
      primaryColorPicker.value = this.currentTheme.primaryColor;
    }

    if (bgColorPicker) {
      const bgColor = this.currentTheme.mode === 'light'
        ? this.currentTheme.backgroundColor
        : this.currentTheme.darkModeBackgroundColor;
      bgColorPicker.value = bgColor;
    }

    this.highlightActivePreset();
  }

  highlightActivePreset() {
    const presetButtons = document.querySelectorAll('.theme-preset-btn');
    presetButtons.forEach(btn => {
      const preset = this.presets.find(p => p.name === btn.dataset.preset);
      if (preset &&
        preset.primaryColor === this.currentTheme.primaryColor &&
        preset.backgroundColor === (this.currentTheme.mode === 'light' ? this.currentTheme.backgroundColor : this.currentTheme.darkModeBackgroundColor)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  openSettingsPanel() {
    const panel = document.getElementById('themeSettingsPanel');
    if (panel) {
      panel.classList.add('open');
      // Trigger animation
      setTimeout(() => {
        panel.classList.add('visible');
      }, 10);
    }
  }

  closeSettingsPanel() {
    const panel = document.getElementById('themeSettingsPanel');
    if (panel) {
      panel.classList.remove('visible');
      setTimeout(() => {
        panel.classList.remove('open');
      }, 300);
    }
  }
}

// Initialize theme manager when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
  });
} else {
  window.themeManager = new ThemeManager();
}
