module.exports = {
  main: {
    Introduction: ["intro", "architecture"],
    "User Manual": ["user-manual"],
    "Developer Manual": [
      "developer-intro",
      {
        type: "category",
        label: "Core",
        items: [
          "quick-start",
          "backend-setup",
          "backend-structure",
          "backend-constraints",
          "backend-seed",
        ],
      },
      {
        type: "category",
        label: "Dashboard",
        items: ["frontend-structure", "frontend-setup"],
      },
    ],
  },
};
