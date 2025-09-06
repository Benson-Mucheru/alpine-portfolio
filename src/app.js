import Alpine from "alpinejs";
import { collapse } from "@alpinejs/collapse";
import { intersect } from "@alpinejs/intersect";
window.Alpine = Alpine;
Alpine.plugin(intersect);
Alpine.plugin(collapse);

//Navigation
Alpine.data("navigation", () => ({
  openMobileNavBar: false,
  navBarShadow: false,
  homeButton: false,
  activeLink: 1,

  toggleMobileNavBar() {
    this.openMobileNavBar = !this.openMobileNavBar;
  },

  toggleShadow() {
    this.shadow = !this.shadow;
  },
}));

//Skills & Tools
Alpine.data("skills_and_tools", () => ({
  showCards: false,
  skills: [
    {
      name: "Laravel",
      icon: "src/img/icons/laravel.svg",
      alt: "Laravel Icon",
    },
    {
      name: "HTML",
      icon: "src/img/icons/html-5.svg",
      alt: "HTML5 Icon",
    },
    {
      name: "Git",
      icon: "src/img/icons/git.svg",
      alt: "Git Icon",
    },
    {
      name: "Linkedin",
      icon: "src/img/icons/linkedin.svg",
      alt: "Linkedin Icon",
    },
  ],

  tools: [
    {
      name: "HTML",
      icon: "src/img/icons/html-5.svg",
      alt: "HTML5 Icon",
    },
    {
      name: "Git",
      icon: "src/img/icons/git.svg",
      alt: "Git Icon",
    },
    {
      name: "Linkedin",
      icon: "src/img/icons/linkedin.svg",
      alt: "Linkedin Icon",
    },
    {
      name: "Laravel",
      icon: "src/img/icons/laravel.svg",
      alt: "Laravel Icon",
    },
  ],
}));

//Projects
Alpine.data("projects", () => ({
  projectIndex: 1,
  toggleProject(projecNum) {
    this.projectIndex = projecNum;
  },

  laravels: [
    {
      icon: "src/img/icons/card.png",
      title: "Kampat",
      description: "jskjdkfjskdjfklsdfjdkkf",
      tools: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      icon: "src/img/icons/card.png",
      title: "Oracle",
      description: "jskjdkfjskdjfklsdfjdkkf",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      icon: "src/img/icons/card.png",
      title: "Musica",
      description: "jskjdkfjskdjfklsdfjdkkf",
      tools: ["HTML", "CSS", "JavaScript"],
    },
  ],

  emails: [
    {
      icon: "src/img/icons/card.png",
      title: "Email1",
      description: "jskjdkfjskdjfklsdfjdkkf",
      tools: ["HTML", "CSS", "MJML"],
    },
    {
      icon: "src/img/icons/card.png",
      title: "Email2",
      description: "jskjdkfjskdjfklsdfjdkkf",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      icon: "src/img/icons/card.png",
      title: "Email3",
      description: "jskjdkfjskdjfklsdfjdkkf",
      tools: ["HTML", "CSS", "JavaScript"],
    },
  ],

  wordpresses: [
    {
      icon: "src/img/icons/card.png",
      title: "Wordpress1",
      description: "jskjdkfjskdjfklsdfjdkkf",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      icon: "src/img/icons/card.png",
      title: "Wordpress2",
      description: "jskjdkfjskdjfklsdfjdkkf",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    /* {
      icon: "src/img/icons/card.png",
      title: "Wordpress3",
      description: "jskjdkfjskdjfklsdfjdkkf",
      tools: ["HTML", "CSS", "JavaScript"],
    }, */
  ],
}));

Alpine.start();
