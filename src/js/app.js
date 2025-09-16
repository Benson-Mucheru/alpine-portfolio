import Alpine from "alpinejs";
import { intersect } from "@alpinejs/intersect";
import "./typeWritterEffect";
window.Alpine = Alpine;
Alpine.plugin(intersect);

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
  scaleImage: false,
  skills: [
    {
      name: "HTML",
      icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path> </g></svg>`,
      alt: "HTML5 Icon",
    },
    {
      name: "Tailwind",
      icon: "/src/img/icons/skills/tailwind.svg",
      alt: "Tailwind Icon",
    },
    {
      name: "Alpine",
      icon: "/src/img/icons/skills/alpine.svg",
      alt: "Apline Icon",
    },
    {
      name: "PHP",
      icon: "/src/img/icons/skills/php.svg",
      alt: "PHP Icon",
    },
    {
      name: "Livewire",
      icon: "/src/img/icons/skills/livewire.svg",
      alt: "Livewire Icon",
    },
    {
      name: "Laravel",
      icon: "/src/img/icons/skills/laravel.svg",
      alt: "Laravel Icon",
    },
  ],

  tools: [
    {
      name: "Git",
      icon: "/src/img/icons/tools/git.svg",
      alt: "Git Icon",
    },
    {
      name: "Google Analytics",
      icon: "/src/img/icons/tools/google-analytics.svg",
      alt: "Google Analytics Icon",
    },
    {
      name: "Wordpress",
      icon: "/src/img/icons/tools/wordpress.svg",
      alt: "Wordpress Icon",
    },
    {
      name: "Klaviyo",
      icon: "/src/img/icons/tools/klaviyoo.svg",
      alt: "Klaviyo Icon",
    },
    {
      name: "Litmus",
      icon: "/src/img/icons/tools/litmus.svg",
      alt: "Litmus Icon",
    },
  ],
}));

//About
Alpine.data("about", () => ({
  active: false,
}));
//Projects
Alpine.data("projects", () => ({
  projectIndex: 1,
  active: false,
  toggleProject(projecNum) {
    this.projectIndex = projecNum;
  },

  laravels: [
    {
      icon: "src/img/icons/card.png",
      title: "Kampat",
      description:
        "A website that showcases a company that offers roofing and ceiling services",
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
