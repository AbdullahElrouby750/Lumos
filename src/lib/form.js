export async function sendContactForm(formData) {
  // Minimal wrapper: expects Formspree or EmailJS endpoint via env
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '';
  if (!endpoint) {
    // Simulate success in local dev
    return { ok: true, message: 'Local: form submit simulated' };
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    const text = await res.text();
    return { ok: false, message: text };
  }
  return { ok: true };
}
