export default function createIcon(icon) {
  const iconSpan = document.createElement("span");
  iconSpan.className = "material-symbols-outlined icon";
  iconSpan.textContent = icon;

  return iconSpan;
}
