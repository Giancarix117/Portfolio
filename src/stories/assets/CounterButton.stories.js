// MyComponent.story.js|jsx

import React from "react";

import CounterButton from "../../components/CounterButton";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CounterButton",
  component: CounterButton,
};

export const Basic = () => <CounterButton />;
