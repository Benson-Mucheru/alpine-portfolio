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
  mode: false,

  toggleMobileNavBar() {
    this.openMobileNavBar = !this.openMobileNavBar;
  },

  toggleShadow() {
    this.shadow = !this.shadow;
  },

  toggleMode() {
    this.mode = !this.mode;
  },
}));

//Skills & Tools
Alpine.data("skills_and_tools", () => ({
  showCards: false,
  skills: [
    {
      name: "HTML",
      icon: "src/img/icons/skills/html.svg",
      alt: "HTML5 Icon",
    },
    {
      name: "Tailwind",
      icon: "src/img/icons/skills/tailwind.svg",
      alt: "Tailwind Icon",
    },
    {
      name: "Alpine",
      icon: "src/img/icons/skills/alpine.svg",
      alt: "Apline Icon",
    },
    {
      name: "Livewire",
      icon: "src/img/icons/skills/livewire.svg",
      alt: "Livewire Icon",
    },
    {
      name: "Laravel",
      icon: "src/img/icons/skills/laravel.svg",
      alt: "Laravel Icon",
    },
  ],

  tools: [
    {
      name: "Git",
      icon: "src/img/icons/tools/git.svg",
      alt: "Git Icon",
    },
    {
      name: "Google Analytics",
      icon: "src/img/icons/tools/google-analytics.svg",
      alt: "Google Analytics Icon",
    },
    {
      name: "Wordpress",
      icon: "src/img/icons/tools/wordpress.svg",
      alt: "Wordpress Icon",
    },
    {
      name: "Klaviyo",
      icon: "src/img/icons/tools/klaviyoo.svg",
      alt: "Klaviyo Icon",
    },
    {
      name: "Litmus",
      icon: "src/img/icons/tools/litmus.svg",
      alt: "Litmus Icon",
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
