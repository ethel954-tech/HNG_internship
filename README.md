# Responsive Profile Card

A fully accessible, responsive profile card built with **HTML5**, **CSS3**, and **vanilla JavaScript**.

![Profile Card Preview](screenshot.png)

## ✨ Features

- **Semantic HTML5** - Uses `article`, `header`, `section`, `figure`, `nav`
- **All test attributes** - Exact `data-testid` attributes for testing
- **Live Timer** - Updates `Date.now()` milliseconds every 1 second
- **Fully Responsive** - Mobile stacked → Desktop side-by-side (≥768px)
- **Accessible** - ARIA labels, focus styles, keyboard navigation
- **Social Links** - Open in new tabs with `noopener noreferrer`
- **Modern CSS** - Gradients, shadows, hover animations

## 🧪 Test Attributes

```
test-profile-card      - Main container
test-user-name         - Profile name  
test-user-bio          - Bio text
test-user-time         - Live timestamp
test-user-avatar       - Profile image
test-user-social-links - Social navigation
test-user-hobbies      - Hobbies list
test-user-dislikes     - Dislikes list
```

## 🚀 Quick Start

1. **Open in browser:**
   ```bash
   # Windows
   start index.html
   
   # macOS  
   open index.html
   
   # Or drag index.html to browser
   ```

2. **Live Server (recommended):**
   ```bash
   npx live-server
   ```

3. **VS Code Live Server extension** - Right-click `index.html` → "Open with Live Server"

## 📱 Responsive Breakpoints

| Screen Size | Layout |
|-------------|--------|
| < 480px | Fully stacked |
| 480px+ | Social links vertical |
| **768px+** | **Desktop grid layout** |

## ♿ Accessibility

- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ Focus indicators & trap
- ✅ ARIA labels & roles
- ✅ Semantic HTML
- ✅ Alt text & meaningful links

## 🏗️ File Structure

```
profile-card/
├── index.html     # Semantic structure + test attributes
├── style.css      # Responsive design + animations  
├── script.js      # Live timer + keyboard enhancements
└── README.md      # You're reading it! 📖
```

## 🎨 Customization

```css
/* Colors */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Profile data in index.html */
.user-name::after { content: 'Your Name'; }
```

## 🔍 Testing

```bash
# Find test attributes
grep -r "data-testid" .

# Cypress / Playwright ready
npm install cypress
```

**Live Demo:** [index.html opens automatically on Windows]

---
⭐ **Built with vanilla web technologies - Zero dependencies!**
