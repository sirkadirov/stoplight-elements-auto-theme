/**
 * Nord Theme Originally by Arctic Ice Studio
 * https://nordtheme.com
 * 
 * Ported for PrismJS by Zane Hitchcoxc (@zwhitchcox) and Gabriel Ramos (@gabrieluizramos)
 * Ported for Stoplight Elements by Yurii Kadirov (@sirkadirov)
 * 
 * Script by Yurii Kadirov (@sirkadirov), licensed under MIT.
 */

const mql = window.matchMedia('(prefers-color-scheme: dark)');

function applyDarkModeSwitching(e) {
  const isDark = e.matches;
  if (isDark) document.documentElement.setAttribute('data-theme', 'dark');
  else document.documentElement.removeAttribute('data-theme');
}

// Initial switching of the color scheme
applyDarkModeSwitching(mql);

// Live updates when OS theme changes
mql.addEventListener('change', applyDarkModeSwitching);
