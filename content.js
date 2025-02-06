const observer = new MutationObserver(() => {
  const columns = document.querySelectorAll('.eibkRJ');
  columns.forEach(column => {
    column.style.minWidth = '200px';
    column.style.maxWidth = '200px';
  });
});

observer.observe(document.body, { childList: true, subtree: true });
