document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-upload');
    const fileNameDisplay = document.getElementById('file-name');

    fileInput.addEventListener('change', () => {
        const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file chosen';
        fileNameDisplay.textContent = fileName;
    });
});
