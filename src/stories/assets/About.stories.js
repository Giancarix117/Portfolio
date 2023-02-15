// MyComponent.story.js|jsx

import React from "react";

import About from "../../components/About";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "About",
  component: About,
};

export const Basic = () => <About />;
