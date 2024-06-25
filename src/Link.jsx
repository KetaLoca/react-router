const NAVIGATION_EVENT = "pushstate";

export function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button == 0; //primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKeyt || event.shiftKey;
    const isManageableEvent = target == undefined || target == "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault(); //si no hacemos esto se realiza una navegación completa en vez del navigate
      navigate(to); //navegación SPA
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
