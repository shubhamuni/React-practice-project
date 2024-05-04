const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Update preview on input
editor.addEventListener('input', updatePreview);

// Initial rendering
updatePreview();

function updatePreview() {
  const markdown = editor.value;
  const html = (markdown); 
  preview.innerHTML = html;
}
