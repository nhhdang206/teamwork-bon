# 📝 Theme System - CSS Migration Guide

This guide shows you step-by-step how to update your existing CSS files to use the new theme variables.

## Overview

Your app has these CSS files to update:
- `public/css/main.css` - Global styles
- `public/css/app.css` - App layout styles
- `public/css/tasks.css` - Task-related styles
- `public/css/auth.css` - Auth page styles

---

## Step 1: Understand the Variable System

### Available Color Variables

Replace hardcoded colors with these:

```
PRIMARY COLORS:
  --primary-color       (main brand color, auto-lightens/darkens for hover)
  --primary-light       (lighter shade)
  --primary-dark        (darker shade)

BACKGROUNDS:
  --bg-primary          (main background: white in light, dark in dark)
  --bg-secondary        (cards, panels)
  --bg-tertiary         (input backgrounds)

TEXT:
  --text-primary        (main text)
  --text-secondary      (muted text, secondary labels)
  --text-tertiary       (very faint text)

BORDERS & SHADOWS:
  --border-color        (standard borders)
  --border-light        (subtle borders)
  --shadow-sm           (small shadows)
  --shadow-md           (medium shadows)
  --shadow-lg           (large shadows)

STATUS COLORS:
  --success-color       (#10b981)
  --warning-color       (#f59e0b)
  --danger-color        (#ef4444)
  --info-color          (#3b82f6)
```

---

## Step 2: Find and Replace Strategy

### Common Colors to Replace

| Hardcoded Color | Replace With | Use Case |
|-----------------|--------------|----------|
| `#667eea` | `var(--primary-color)` | Main brand color |
| `#8b9cff` | `var(--primary-light)` | Hover/focus states |
| `#4c63d2` | `var(--primary-dark)` | Active/darker states |
| `#ffffff` | `var(--bg-primary)` | Main background |
| `#f8f9fa` | `var(--bg-secondary)` | Cards/panels |
| `#f0f2f5` | `var(--bg-tertiary)` | Input backgrounds |
| `#1a1a1a` | `var(--text-primary)` | Main text |
| `#666666` | `var(--text-secondary)` | Secondary text |
| `#999999` | `var(--text-tertiary)` | Tertiary text |
| `#e0e0e0` | `var(--border-color)` | Borders |
| `#f0f0f0` | `var(--border-light)` | Light borders |
| `rgba(0,0,0,0.12)` | `var(--shadow-md)` | Shadow |

---

## Step 3: CSS Update Examples

### Example 1: Button Styling

**Before:**
```css
.btn {
  background-color: #667eea;
  color: white;
  border-radius: 6px;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #4c63d2;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}
```

**After:**
```css
.btn {
  background-color: var(--primary-color);
  color: white;
  border-radius: 6px;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn:hover {
  background-color: var(--primary-dark);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-outline:hover {
  background: var(--primary-color);
  color: white;
}
```

### Example 2: Card/Panel Styling

**Before:**
```css
.card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  padding: 20px;
}

.card-header {
  color: #1a1a1a;
  border-bottom: 1px solid #e0e0e0;
}

.card-body {
  color: #666666;
}
```

**After:**
```css
.card {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  padding: 20px;
}

.card-header {
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}

.card-body {
  color: var(--text-secondary);
}
```

### Example 3: Input Styling

**Before:**
```css
input,
textarea,
select {
  background-color: #f0f2f5;
  color: #1a1a1a;
  border: 1px solid #e0e0e0;
  padding: 10px;
  font-size: 14px;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  outline: none;
}
```

**After:**
```css
input,
textarea,
select {
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 10px;
  font-size: 14px;
  transition: all var(--transition-fast);
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  outline: none;
}
```

### Example 4: Header/Navigation

**Before:**
```css
.app-header {
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-title {
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 600;
}

.header-subtitle {
  color: #666666;
  font-size: 14px;
}
```

**After:**
```css
.app-header {
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-title {
  color: var(--text-primary);
  font-size: 18px;
  font-weight: 600;
}

.header-subtitle {
  color: var(--text-secondary);
  font-size: 14px;
}
```

### Example 5: Links and Text Colors

**Before:**
```css
a {
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #4c63d2;
}

.text-muted {
  color: #999999;
}

.text-success {
  color: #10b981;
}

.text-error {
  color: #ef4444;
}
```

**After:**
```css
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--primary-dark);
}

.text-muted {
  color: var(--text-tertiary);
}

.text-success {
  color: var(--success-color);
}

.text-error {
  color: var(--danger-color);
}
```

---

## Step 4: File-by-File Updates

### public/css/main.css

Look for patterns like:
- `background-color: #ffffff;` → `var(--bg-primary)`
- `color: #1a1a1a;` → `var(--text-primary)`
- `border: 1px solid #e0e0e0;` → `var(--border-color)`

### public/css/app.css

This file has your app-specific styles. Update:
- App container backgrounds
- Header styling
- Navigation colors
- All component backgrounds

### public/css/tasks.css

Update task-related colors:
- Task item backgrounds
- Task status colors
- Task priority colors
- Highlight colors

### public/css/auth.css

Update authentication page styles:
- Form backgrounds
- Button colors
- Link colors
- Error messages

---

## Step 5: Testing

After updating CSS:

1. **Light Mode Test**
   - Open app
   - Verify all text is readable
   - Check button hover states
   - Inspect card/panel styling

2. **Dark Mode Test**
   - Click settings 🎨
   - Toggle dark mode
   - Verify all text is readable
   - Check contrast (WCAG AA minimum)
   - Inspect all components

3. **Color Picker Test**
   - Pick different primary colors
   - Verify buttons, links, highlights change
   - Check that dark mode still works with new color

4. **Preset Test**
   - Apply each preset
   - Test in light mode
   - Test in dark mode
   - Verify contrast

---

## Step 6: Special Cases

### Gradients

**Before:**
```css
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**After:**
```css
.gradient-bg {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
}
```

### Transparent Colors

**Before:**
```css
.overlay {
  background: rgba(102, 126, 234, 0.1);
}
```

**After:**
```css
.overlay {
  background: rgba(102, 126, 234, 0.1); /* Keep as-is or create variable */
  /* Or create a variable for this */
}
```

### Multiple Colors in Dark Mode

**Before:**
```css
body.dark-mode {
  --bg-primary: #0d1117;
  --text-primary: #e6edf3;
}

.special-element {
  background: #1a1a1a;
  color: #ffffff;
}
```

**After:**
```css
body.dark-mode {
  --bg-primary: #0d1117;
  --text-primary: #e6edf3;
  --special-bg: #1a1a1a;
}

.special-element {
  background: var(--special-bg);
  color: white;
}
```

---

## Quick Reference: Search & Replace

Use your editor's find/replace with regex:

| Find | Replace | Notes |
|------|---------|-------|
| `#667eea` | `var(--primary-color)` | Main brand |
| `#4c63d2` | `var(--primary-dark)` | Dark hover |
| `#ffffff` | `var(--bg-primary)` | Main bg |
| `#1a1a1a` | `var(--text-primary)` | Main text |
| `#e0e0e0` | `var(--border-color)` | Borders |
| `0 2px 4px rgba\(0, 0, 0, 0.08\)` | `var(--shadow-sm)` | Small shadow |
| `0 4px 12px rgba\(0, 0, 0, 0.12\)` | `var(--shadow-md)` | Medium shadow |

---

## Validation Checklist

- [ ] All text colors use `var(--text-*)`
- [ ] All backgrounds use `var(--bg-*)`
- [ ] All buttons use `var(--primary-*)`
- [ ] All borders use `var(--border-*)`
- [ ] All shadows use `var(--shadow-*)`
- [ ] Links use `var(--primary-color)`
- [ ] Dark mode looks good
- [ ] Light mode looks good
- [ ] All presets work
- [ ] Color picker works
- [ ] No console errors
- [ ] Contrast is sufficient (WCAG AA)
- [ ] Transitions are smooth
- [ ] No hardcoded brand colors remain

---

## Performance Note

Using CSS variables is more efficient than:
- ✗ Multiple theme CSS files
- ✗ JavaScript DOM manipulation
- ✗ Class-based theme switching

Your approach:
- ✅ Single stylesheet
- ✅ Instant CSS updates
- ✅ Hardware-accelerated transitions
- ✅ Minimal JavaScript

---

Done! Your CSS is now fully theme-enabled! 🎉
