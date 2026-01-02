## [prophone-the-future-of-mobile-tec](https://prophone-the-future-of-mobile-tec.netlify.app)
# Product Landing Page Clone - Development Plan

## Design Guidelines

### Design References (Primary Inspiration)
- **Apple.com**: Clean minimalism, bold typography, stunning product imagery
- **Tesla.com**: Dark theme, immersive hero sections, smooth animations
- **Style**: Modern Minimalism + Premium Product Showcase

### Color Palette
- Primary: #000000 (Pure Black - background)
- Secondary: #1D1D1F (Dark Gray - sections)
- Accent: #0071E3 (Apple Blue - CTAs)
- Text: #F5F5F7 (Off-White), #86868B (Gray - secondary)
- Highlight: #FFFFFF (White - emphasis)

### Typography
- Heading1: SF Pro Display font-weight 600 (56px) - Hero titles
- Heading2: SF Pro Display font-weight 600 (40px) - Section titles
- Heading3: SF Pro Display font-weight 500 (28px) - Feature titles
- Body: SF Pro Text font-weight 400 (17px) - Body text
- CTA: SF Pro Text font-weight 500 (17px) - Buttons

**Note**: Using system fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto) for authentic Apple-like feel

### Key Component Styles
- **Buttons**: Blue background (#0071E3), white text, 980px rounded-full, hover: brighten
- **Cards**: Transparent with subtle border, 18px rounded, backdrop-blur effect
- **Forms**: Dark inputs with light border, focus: blue accent glow
- **Navigation**: Fixed top, glass-morphism effect, backdrop-blur

### Layout & Spacing
- Hero section: Full viewport height with centered content
- Feature grid: 3 columns desktop, 2 tablet, 1 mobile, 40px gaps
- Section padding: 100px vertical, 80px horizontal
- Card hover: Scale 1.02, smooth shadow, 400ms transition

### Images to Generate
1. **hero-product-smartphone.jpg** - Premium smartphone floating in space, dark background with blue accent lighting (Style: photorealistic, premium tech)
2. **feature-camera-closeup.jpg** - Close-up of triple camera system with lens flare (Style: photorealistic, macro photography)
3. **feature-display-screen.jpg** - Vibrant OLED display showing colorful abstract art (Style: photorealistic, vibrant colors)
4. **feature-chip-processor.jpg** - Futuristic processor chip with circuit patterns and blue glow (Style: 3d, tech aesthetic)
5. **gallery-phone-angle1.jpg** - Smartphone at 45-degree angle, sleek design (Style: photorealistic, studio lighting)
6. **gallery-phone-angle2.jpg** - Smartphone back view showing camera array (Style: photorealistic, premium)

---

## Development Tasks

### 1. Project Setup & Structure
- [x] Initialize html_template
- [ ] Create todo.md with design guidelines
- [ ] Generate all product images

### 2. HTML Structure
- [ ] Create semantic HTML5 structure
- [ ] Navigation bar with logo and menu
- [ ] Hero section with product showcase
- [ ] Features section with grid layout
- [ ] Image carousel/gallery section
- [ ] Contact form section
- [ ] Footer with links

### 3. CSS Styling
- [ ] Implement design system (colors, typography, spacing)
- [ ] Responsive grid layouts with CSS Grid and Flexbox
- [ ] Glass-morphism navigation bar
- [ ] Smooth animations and transitions
- [ ] Hover effects on interactive elements
- [ ] Mobile-responsive breakpoints

### 4. JavaScript Interactivity
- [ ] Smooth scroll navigation
- [ ] Animated product image carousel with auto-play
- [ ] Form validation with real-time feedback
- [ ] Intersection Observer for scroll animations
- [ ] Mobile menu toggle
- [ ] Dynamic content loading effects

### 5. Testing & Optimization
- [ ] Cross-browser testing
- [ ] Responsive design testing
- [ ] Form validation testing
- [ ] Performance optimization
- [ ] Accessibility checks

### 6. Final Review
- [ ] Run lint check
- [ ] UI rendering validation
- [ ] Deploy preview
