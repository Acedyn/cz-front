import { ref, onMounted, onUnmounted } from "vue";

export enum Breakpoint {
  XXS = 1,
  XS,
  SM,
  MD,
  LD,
  XL,
  XXL,
}

export const computeBreakpoint = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth < 640) {
    return Breakpoint.XXS;
  }
  if (windowWidth < 768) {
    return Breakpoint.XS;
  }
  if (windowWidth < 1024) {
    return Breakpoint.SM;
  }
  if (windowWidth < 1280) {
    return Breakpoint.MD;
  }
  if (windowWidth < 1920) {
    return Breakpoint.LD;
  }
  if (windowWidth < 2560) {
    return Breakpoint.XL;
  }

  return Breakpoint.XXL;
};

export const getBreakpoint = (
  mount: typeof onMounted,
  unmount: typeof onUnmounted
) => {
  const breakpoint = ref<Breakpoint>(computeBreakpoint());

  mount(() => {
    window.addEventListener("resize", () => {
      breakpoint.value = computeBreakpoint();
    });
  });

  unmount(() => {
    window.removeEventListener("resize", () => {
      breakpoint.value = computeBreakpoint();
    });
  });

  return breakpoint;
};
