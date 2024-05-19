
# Personal Portfolio Template

This simple template is designed to help technical users create a professional and polished personal portfolio to showcase their skills and projects. The template is fully customizable and includes sections for an about page, skills, projects, resume, and contact information. This README will guide you through the setup and customization process.

For less technical users, you can get a portfolio which is easier to edit and with setup support also provided here: 


## Features

- Responsive Design: Ensures your portfolio looks great on all devices
- Modern Layout: Clean and professional design.
- Customizable Sections: Easily update content and sections.
- Contact Form: Built-in contact form for easy communication.
- Social Media Integration: Link your social media profiles.


## Demo

Insert gif or link to demo


## Getting Started
### Prerequisites

To use this template, you need the following installed on your local machine:

- Node.js and npm (Node Package Manager): Vite requires Node.js version 12.0 or later. npm usually comes bundled with Node.js.

  You can download and install Node.js from the official website: Node.js Downloads.

- Git: You can download and install Git from the official website: Git Downloads.

### Installation

1. In the project directory, install npm

```bash
  cd my-project
  npm install
```

2. Start the Development Server: Once inside your project directory, you can start the development server using npm
```bash
 npm run dev
```

The development server will start at http://localhost:5173.
    
## Customizations

### Updating Content
All content can be updated by editing the files in the `src` folder.

- About Section: Edit `src/components/sections/About.js`
- Projects Section: Edit `src/components/sections/Projects.js`
- Contact Section: Edit `src/components/sections/Contact.js`
- Footer Section: Edit `src/components/sections/Footer.js`

### Adding a Project
To add new projects, update the projectsData array in `src/data/projectsData.js`. Each project object should have the following structure:

```
{
  title: 'Project Title',
  description: 'Short description of the project.',
  imageUrl: 'path/to/image.jpg',
  projectUrl: 'http://link-to-project.com'
}
```

### Configuring Social Media Links
Social media links are configured in the `src/data/socialData.js` file. Update the URLs to point to your profiles:

```
{
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-username',
  twitter: 'https://twitter.com/your-username',
  // Add other social media links as needed
}
```


## Deployment

### Building this project
To build this project run

```bash
  npm run build
```
This will create an optimized build of your project in the `build` directory.

### Deploying
You can deploy the built project to any static site hosting service such as GitHub Pages, Netlify, Vercel, or any other hosting platform.

For example, to deploy to GitHub Pages:

1. Install the gh-pages package:
```
npm install --save gh-pages
```

2. Add the following scripts to your `package.json`:
```
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy the site:
```
npm run deploy
```

