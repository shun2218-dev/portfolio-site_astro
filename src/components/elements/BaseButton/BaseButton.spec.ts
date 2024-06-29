import { describe, expect, it } from "vitest";

import BaseButton from "./BaseButton.vue";

import { mount } from "@vue/test-utils";

describe("BaseButton", () => {
  it("type attribute is 'button' is specified when type attribute is not specified", () => {
    const wrapper = mount(BaseButton);
    expect(wrapper.attributes("type")).toBe("button");
  });

  it("type attribute is 'submit' is specified when type attribute is 'submit'", () => {
    const wrapper = mount(BaseButton, {
      props: {
        type: "submit",
      },
    });
    expect(wrapper.attributes("type")).toBe("submit");
  });
});
