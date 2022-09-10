import { describe, test, expect } from "vitest";
import Sidebar from "./Sidebar.vue";
import { render } from "~/tests/testingLibraryVue";
import { sidebarItems } from "@/constance/sidebar.constance";

describe("Sidebar Component with sidebarItems", () => {
  test("SidebarItem has item", () => {
    expect(sidebarItems.length).toBeGreaterThan(1);
  });

  test("Logo should be exist", () => {
    const { container } = render(Sidebar, {
      props: {
        items: sidebarItems,
      },
    });

    expect(container.querySelector(".logo")).not.toBeNull();
  });

  test("Menu item should be exist", () => {
    const { container } = render(Sidebar, {
      props: {
        items: sidebarItems,
      },
    });

    expect(container.querySelector("sidebar-group-item-stub")).not.toBeNull();
  });
});
