import createIcon from "./Icon";

export default function createLoading() {
  const loadingContainer = document.createElement("div");
  loadingContainer.className = "loading";

  const loadingIcon = createIcon("refresh");

  const loadingText = document.createElement("p");
  loadingText.className = "loading__text";
  loadingText.textContent = "Loading...";

  loadingContainer.append(loadingIcon, loadingText);

  return loadingContainer;
}
