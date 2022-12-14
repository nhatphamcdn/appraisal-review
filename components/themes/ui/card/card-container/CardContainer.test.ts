import { describe, expect, test } from "vitest";
import CardContainer from "./CardContainer.vue";
import { render } from "@/tests/testing-library-vue";

describe("CardContainer", () => {
  test("mounts and is still the same", () => {
    const { html } = render(CardContainer, { props: { backgroundColor: "black" } });
    expect(html()).toMatchSnapshot();
  });
});
