

// Update preview on input
editor.addEventListener('input', updatePreview);

// Initial rendering
updatePreview();

function updatePreview() {
  const markdown = editor.value;
  const html = marked(markdown);
  preview.innerHTML = html;
}
