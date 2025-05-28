// Accesibilidad: permite ver tooltip con enter/espacio
document.querySelectorAll('.phase-block').forEach(block => {
  block.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const tooltip = block.querySelector('.tooltip');
      if (tooltip) {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        setTimeout(() => {
          tooltip.style.visibility = '';
          tooltip.style.opacity = '';
        }, 3500);
      }
    }
  });
});