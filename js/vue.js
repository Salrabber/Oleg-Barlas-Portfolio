Vue.createApp({
  data() {
    return {
      projects: {
        landings: [
          {
            descrVisible: false,
            name: "Carshering layout",
            descr:
              "Adaptive Front-end layout created as HTML/CSS practice for skills improvement. Also deployed on GitHub pages",
          },
          {
            descrVisible: false,
            name: "USA-auto shop-service",
            descr:
              "Front-end layout created as HTML/CSS practice for skills improvement. Also deployed on GitHub pages",
          },
          {
            descrVisible: false,
            name: "Bikes shop layout",
            descr:
              "Front-end layout created with HTML/CSS/HTML using before/after elements, slick-slider and other tools. Deployed on GitHub pages",
          },
        ],

        apps: [
          {
            descrVisible: false,
            name: "Todo Task List",
            descr:
              "Stack: React, Github, Github Actions. Single page React-application implementing basic logic of TODO list - creating, deleting, completion marks, sorting Deployed on Github pages using Github-actions CI/CD workflow",
          },
          {
            descrVisible: false,
            name: "React chat-app",
            descr:
              "Stack: React, Redux, API requests, Github,Github Actions. Single page React-application implementing logic of sending messages in chat and automatic receiving response with API request. Implemented system of multiple chat dialogs and showing the last message in each chat’s preview section.",
          },
          {
            descrVisible: false,
            name: "Angular Contacts app",
            descr:
              "Stack: Angular, RX.JS, SCSS, API. Single-page Angular-application implementing logic of contacts list: loading initial contacts list with API request, multiple paging, enabling edit mode to edit current contact with forms by PUT request.",
          },
        ],
      },
    };
  },
  methods: {
    switchDescr(columnId, projectId) {
        if (columnId == 'apps'){
            this.projects.apps[projectId].descrVisible = !this.projects.apps[projectId].descrVisible
        }else{
            this.projects.landings[projectId].descrVisible = !this.projects.landings[projectId].descrVisible
        }
    },
  },
}).mount("#app");
