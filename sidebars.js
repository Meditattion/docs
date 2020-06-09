module.exports = {
  main: {
    Introduction: ["intro", "architecture"],
    "User Manual": ["user-manual"],
    "Developer Manual": [
      "annotation-library",
      {
        type: "category",
        label: "Dashboard",
        items: ["dashboard-structure", "dashboard-setup"],
      },
    ],
  },
};
