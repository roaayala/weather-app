import createIcon from "./Icon";

export default function createErrorMessage({ icon, message }) {
  const errorMessageContainer = document.createElement("div");
  errorMessageContainer.className = "error-message";

  const iconMessage = createIcon(icon);

  const textMessage = document.createElement("p");
  textMessage.className = "error-message__text-message";
  textMessage.textContent = message;

  errorMessageContainer.append(iconMessage, textMessage);

  return errorMessageContainer;
}
