import AuthLogo from './extensions/logo.png';
import MenuLogo from './extensions/round-logo.png';
import favicon from './extensions/favicon.ico';


export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Ponderosa Printing",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "app.components.HomePage.welcome.again": "Welcome 👋",
        "app.components.HomePage.welcomeBlock.content.again": "Welcome to the Ponderosa Printing backend system. Here you'll manage print jobs, webpage content, and more. If you have questions or concerns please contact Carson.",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
