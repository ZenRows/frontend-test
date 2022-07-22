import { createStore } from "vuex";

export default createStore({
  state: {
    origins: [
      {
        id: "12359b63-3d93-49ad-90b1-0ef5c44b1ad4",
        name: "Zillow",
        image: "https://image-placeholder.com/images/actual-size/57x57.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel eros donec ac odio tempor orci dapibus ultrices in. Congue quisque egestas diam in arcu cursus euismod quis.",
      },
      {
        id: "8d68a2a8-fa9c-439e-962e-b2bf9edf1c9e",
        name: "Redfin",
        image: "https://image-placeholder.com/images/actual-size/57x57.png",
        description:
          "Odio ut sem nulla pharetra diam sit. Ornare aenean euismod elementum nisi quis eleifend. Tortor vitae purus faucibus ornare suspendisse. Lectus sit amet est placerat.",
      },
      {
        id: "e6215619-d65b-4635-bb66-b49a4ef4d7f0",
        name: "Trulia",
        image: "https://image-placeholder.com/images/actual-size/57x57.png",
        description:
          "Amet consectetur adipiscing elit pellentesque habitant. In massa tempor nec feugiat nisl pretium fusce id velit.",
      },
      {
        id: "bce6ab39-518d-4200-a8bc-3ae92ddebd71",
        name: "Realtor",
        image: "https://image-placeholder.com/images/actual-size/57x57.png",
        description:
          "Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Nec feugiat in fermentum posuere urna nec. Egestas quis ipsum suspendisse ultrices gravida.",
      },
    ],
    destinations: [
      {
        id: "616204ad-4ce7-4b13-8ad3-dea44a18c85e",
        name: "Amazon S3",
        image: "https://image-placeholder.com/images/actual-size/57x57.png",
        description:
          "Turpis egestas pretium aenean pharetra magna ac placerat.",
      },
      {
        id: "56b1d1ab-8e53-42e3-91dd-9a954ca4d89d",
        name: "MySQL",
        image: "https://image-placeholder.com/images/actual-size/57x57.png",
        description:
          "Accumsan sit amet nulla facilisi morbi tempus. Placerat in egestas erat imperdiet sed.",
      },
      {
        id: "225e2462-a50c-4efd-b9d0-90b1365fdde1",
        name: "MongoDB",
        image: "https://image-placeholder.com/images/actual-size/57x57.png",
        description:
          "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi.",
      },
      {
        uuid: "09be0dd4-b673-46f1-9e9f-20d5e36eb1b4",
        name: "PostgreSQL",
        image: "https://image-placeholder.com/images/actual-size/57x57.png",
        description:
          "Neque sodales ut etiam sit amet nisl purus in mollis. Ut sem viverra aliquet eget sit.",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
