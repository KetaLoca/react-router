const NAVIGATION_EVENT = "pushstate";

export function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}
