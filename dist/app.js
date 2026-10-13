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

const contactDialog = document.querySelector('#contact-dialog');
document.querySelectorAll('[data-contact-open]').forEach(link => {
  link.addEventListener('click', event => {
    if (!contactDialog?.showModal) return;
    event.preventDefault();
    contactDialog.showModal();
  });
});
contactDialog?.querySelector('.dialog-close')?.addEventListener('click', () => contactDialog.close());
contactDialog?.addEventListener('click', event => {
  const rect = contactDialog.getBoundingClientRect();
  if (event.target === contactDialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) contactDialog.close();
});
