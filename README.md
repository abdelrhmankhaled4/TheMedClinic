# The Med Clinics 🏥
 
A bilingual (Arabic/English) marketing website for **The Med Clinics** (عيادات ذا ميد التخصصية), a dermatology and skincare clinic. Built with Angular, the site presents the clinic's services, doctors, gallery, and an appointment-booking flow, with full right-to-left (RTL) support for Arabic.
 
## Features
 
- 🌐 **Bilingual, RTL-first** — Arabic is the default language, with an English toggle. `LanguageService` persists the chosen language and switches the document's `lang`/`dir` attributes accordingly.
- 🏠 **Home** — hero section with clinic highlights.
- 👩‍⚕️ **About** — clinic background and information.
- 💉 **Services** — dermatology and cosmetic treatment offerings.
- 🖼️ **Gallery** — clinic and treatment photos.
- 📅 **Book Appointment** — appointment request flow.
- ✉️ **Contact** — contact details and inquiry form.
- 🧱 **Typed data models** — a comprehensive set of TypeScript interfaces (`src/app/core/models/clinic.models.ts`) covering doctors, services, blog posts, gallery items, testimonials, appointments, and more, ready to be backed by a real API.
## Tech Stack
 
- [Angular](https://angular.dev) 22 (standalone components)
- TypeScript
- [Vitest](https://vitest.dev/) for unit testing
- Angular CLI for tooling and builds
## Project Structure
 
```
src/app/
├── core/               # Services, data, and models shared app-wide
│   ├── data/           # Clinic settings/config data
│   ├── models/         # TypeScript interfaces for clinic domain data
│   └── language.service.ts
├── data/                # Additional clinic data
├── features/            # Feature/page components (one folder per route)
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── gallery/
│   ├── book-appointment/
│   └── contact/
├── layout/               # Shared layout components
│   ├── navbar/
│   └── footer/
├── shared/               # Reusable shared components
│   └── components/
├── app.routes.ts         # Application routes
└── app.config.ts         # Application configuration
```
 
## Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (this project uses `npm@11.13.0`, see `packageManager` in `package.json`)
### Installation
 
```bash
npm install
```
 
### Development Server
 
Start a local dev server:
 
```bash
npm start
```
 
Then open your browser at `http://localhost:4200/`. The app reloads automatically as you edit source files.
 
### Build
 
Compile the project for production:
 
```bash
npm run build
```
 
Build artifacts are output to the `dist/` directory.
 
### Running Unit Tests
 
```bash
npm test
```
 
Tests run via [Vitest](https://vitest.dev/).
 
## Updating Clinic Data
 
Placeholder content (contact details, services, opening hours, etc.) lives in `src/app/core/data/clinic-settings.data.ts` and `src/app/data/clinic-data.ts`. Update these files with the clinic's official information before deploying to production — look for `// UPDATE OFFICIAL DATA` / `// UPDATE OFFICIAL LINK` comments marking placeholder values.
 
## Additional Resources
 
For more on the Angular CLI, see the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
 
