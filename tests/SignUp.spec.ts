import { mount } from "@vue/test-utils";
import SignUp from "@/components/SignUp.vue";

describe("SignUp.vue", () => {
  it("renders a form", () => {
    const wrapper = mount(SignUp);
    expect(wrapper.find("form").exists()).toBe(true);
  });

  it("renders a submit button", () => {
    const wrapper = mount(SignUp);
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("renders a link to the login page", () => {
    const wrapper = mount(SignUp);
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.find("a").text()).toBe("Already have an account? Log in");
  });
});

