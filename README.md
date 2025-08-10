# 🌟 Around The U.S. - Interactive Photo Gallery

<div align="center">
  
  ![GitHub stars](https://img.shields.io/github/stars/Freixanet/se_project_aroundtheus?style=for-the-badge&logo=github&color=gold)
  ![GitHub forks](https://img.shields.io/github/forks/Freixanet/se_project_aroundtheus?style=for-the-badge&logo=github&color=blue)
  ![GitHub issues](https://img.shields.io/github/issues/Freixanet/se_project_aroundtheus?style=for-the-badge&logo=github&color=red)
  ![GitHub license](https://img.shields.io/github/license/Freixanet/se_project_aroundtheus?style=for-the-badge&logo=github&color=green)

  **An interactive gallery celebrating the natural beauty of the United States**
  
  [🚀 Live Demo](https://freixanet.github.io/se_project_aroundtheus-main_2/) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/Freixanet/se_project_aroundtheus/issues) • [💡 Request Feature](https://github.com/Freixanet/se_project_aroundtheus/issues)

</div>

---

## 🎯 **Project Overview**

**Around The U.S.** is a modern, fully responsive web application that allows users to explore and share photographs of iconic locations across the United States. Built with vanilla JavaScript and frontend development best practices, it offers a smooth and intuitive experience for managing a personal image gallery.

### ✨ **Key Features**

- 🖼️ **Interactive Gallery** - View high-resolution images with modal preview
- 👤 **Customizable Profile** - Edit your profile information and avatar
- ❤️ **Like System** - Interact with other users' images
- 📱 **Responsive Design** - Optimized experience from 320px to 1280px
- 🔄 **Dynamic Loading** - Real-time content management via REST API
- ⚡ **Real-time Validation** - Forms with instant validation
- 🎨 **Modern UI/UX** - Clean interface following Material Design principles
- ♿ **Fully Accessible** - WCAG 2.1 compliant

---

## 🛠️ **Tech Stack**

<div align="center">

| Frontend | Tools | API | Deployment |
|----------|-------|-----|------------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![Webpack](https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black) | ![REST API](https://img.shields.io/badge/REST-API-009688?style=for-the-badge) | ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black) | ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white) | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white) | ![HTTP](https://img.shields.io/badge/HTTP-005571?style=for-the-badge) | |

</div>

---

## 🚀 **Installation & Setup**

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Freixanet/se_project_aroundtheus.git

# Navigate to project directory
cd se_project_aroundtheus

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# 🔥 Development - Server with hot reload
npm run dev

# 🏗️ Production - Optimized build
npm run build

# 🚀 Deploy - Upload to GitHub Pages
npm run deploy
```

### **🌐 Live Application**
Visit the deployed application: **https://freixanet.github.io/se_project_aroundtheus-main_2/**

---

## 📁 **Project Architecture**

```
src/
├── 📱 pages/
│   ├── index.html          # Main HTML structure
│   ├── index.js            # JavaScript entry point
│   └── index.css           # Style imports
├── 🧩 components/          # Modular JavaScript components
│   ├── Api.js              # HTTP request handling
│   ├── Card.js             # Card logic
│   ├── FormValidator.js    # Form validation
│   ├── Popup*.js           # Different modal types
│   ├── Section.js          # Section rendering
│   └── UserInfo.js         # User information management
├── 🎨 blocks/              # CSS styles by component
│   ├── page.css            # Global styles
│   ├── header.css          # Header styles
│   ├── profile.css         # Profile styles
│   ├── cards.css           # Gallery styles
│   └── modal.css           # Modal styles
├── 🔧 utils/               # Utilities and constants
│   └── constants.js        # Global configurations
└── 🖼️ images/              # Image assets
```

---

## 🎯 **Detailed Features**

### 👤 **Profile Management**
- **Personal information editing** (name and biography)
- **Avatar change** with URL validation
- **Real-time updates** via API
- **Visual feedback** during operations

### 🖼️ **Image Gallery**
- **Responsive grid layout** adapts to any screen
- **Preview modal** with high-resolution images
- **Lazy loading** for optimized performance
- **Loading state management** with spinners and placeholders

### ❤️ **Interaction System**
- **Likes/Unlikes** with real-time counter
- **Add new images** through validated form
- **Delete own content** with safety confirmation
- **Visual states** reflecting user interactions

### 🔐 **Advanced Validation**
- **Real-time validation** while user types
- **Custom error messages** and contextual
- **Invalid submission prevention** with dynamic button states
- **Full accessibility** with ARIA labels and focus management

---

## 📱 **Responsive Design**

| Device | Resolution | Features |
|--------|------------|----------|
| 📱 **Mobile** | 320px - 767px | • Collapsed nav<br>• 1-column grid<br>• Touch optimized |
| 📟 **Tablet** | 768px - 1023px | • 2-column grid<br>• Resized elements |
| 🖥️ **Desktop** | 1024px+ | • Full grid<br>• Hover effects<br>• Max width 1280px |

---

## ⚡ **Performance Optimizations**

- **Bundle splitting** with Webpack for efficient loading
- **Minified CSS** with PostCSS and autoprefixing
- **Automatic image compression**
- **Lazy loading** of non-critical content
- **Strategic caching** of static resources
- **Tree shaking** to eliminate unused code

---

## 🔒 **Security & Accessibility**

### Security
- ✅ Sanitized input validation
- ✅ XSS prevention
- ✅ URLs validated before rendering
- ✅ Safe API error handling

### Accessibility
- ✅ Complete keyboard navigation
- ✅ Screen reader compatible
- ✅ WCAG AA color contrast
- ✅ Focus management in modals
- ✅ Descriptive alternative texts

---

## 🌐 **API Reference**

The application connects to Tripleten's API for data management:

```javascript
// Main endpoints
GET    /users/me          // User information
PATCH  /users/me          // Update profile
PATCH  /users/me/avatar   // Change avatar
GET    /cards             // Get cards
POST   /cards             // Create card
DELETE /cards/:id         // Delete card
PUT    /cards/:id/likes   // Like card
DELETE /cards/:id/likes   // Unlike card
```

---

## 🎨 **Design & UX**

### Color Palette
- **Primary**: `#000000` (Elegant black)
- **Secondary**: `#FFFFFF` (Clean white)
- **Accent**: `#545454` (Modern gray)
- **Interactive**: `#0077FF` (Vibrant blue)
- **Error**: `#FF0000` (Alert red)

### Typography
- **Family**: Inter (Modern san-serif)
- **Weights**: 400 (Regular), 500 (Medium), 900 (Black)
- **Responsive**: Fluid scaling across devices

---

## 🧪 **Testing & Quality Assurance**

- **Cross-browser testing** (Chrome, Firefox, Safari, Edge)
- **Responsive testing** on multiple devices
- **Performance auditing** with Lighthouse
- **Accessibility testing** with WAVE tools
- **Code quality** with ESLint and Prettier

---

## 🚀 **Roadmap & Future Improvements**

- [ ] 🌙 **Dark mode** toggle
- [ ] 🔍 **Advanced search** and filters
- [ ] 📤 **Social media** sharing
- [ ] 💾 **Offline support** with Service Workers
- [ ] 🔔 **Push notifications**
- [ ] 🌍 **Internationalization** (i18n)
- [ ] 📊 **Analytics** and usage metrics
- [ ] 🎮 **Gamification** with point system

---

## 👥 **Contributing**

Contributions are welcome! To contribute:

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

### Contribution Guidelines
- Follow existing code conventions
- Write descriptive commits
- Include tests for new features
- Update documentation when necessary

---

## 📝 **Changelog**

### v2.0.0 (Current)
- ✨ Full REST API integration
- 🎨 UI/UX redesign
- ♿ Accessibility improvements
- 📱 Optimized responsiveness

### v1.0.0
- 🎉 Initial release
- 🖼️ Basic gallery
- 👤 User profile
- ❤️ Like system

---

## 📄 **License**

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

## 👤 **Author**

**M. Freixanet** - *Frontend Developer*

- 🌐 **Website**: [freixanet.dev](https://freixanet.dev)
- 💼 **LinkedIn**: [linkedin.com/in/mfreixanet](https://linkedin.com/in/mfreixanet)
- 🐙 **GitHub**: [@Freixanet](https://github.com/Freixanet)
- 📧 **Email**: hello@freixanet.dev

---

## 🙏 **Acknowledgments**

- **Tripleten** - For API and educational resources
- **Figma Community** - For design inspiration
- **MDN Web Docs** - For technical documentation
- **Stack Overflow** - For solving complex issues

---

<div align="center">

**⭐ If you liked this project, don't forget to give it a star ⭐**

**🌐 [View Live Demo](https://freixanet.github.io/se_project_aroundtheus-main_2/)**

**Made with ❤️ by [Freixanet](https://github.com/Freixanet)**

</div>
