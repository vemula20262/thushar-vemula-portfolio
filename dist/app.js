const copyButton = document.querySelector('#copy-email');
copyButton?.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('vemulathusharreddy@gmail.com');
    status.textContent = 'Email copied.';
  } catch {
    status.textContent = 'vemulathusharreddy@gmail.com';
  }
});
