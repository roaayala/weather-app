import createIcon from "./Icon";

export default function createErrorMessage({ icon, message }) {
  const errorMessageContainer = document.createElement("div");

  const iconMessage = createIcon(icon);

  const textMessage = document.createElement("p");
  textMessage.textContent = message;

  errorMessageContainer.append(iconMessage, textMessage);

  return errorMessageContainer;
}
