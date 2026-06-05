export default function createErrorMessage(message) {
  const errorMessageContainer = document.createElement("div");

  const text = document.createElement("p");
  text.textContent = message;

  errorMessageContainer.append(text);

  return errorMessageContainer;
}
