
/*
  Paste your ad network global script (e.g., AdSense) in the <head> of each page,
  then replace these placeholders with your ad unit code, or inject via this file.
  Example (AdSense global):
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX" crossorigin="anonymous"></script>
*/

function injectAd(containerId, html) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = html;
}

// EXAMPLE placeholder ad boxes (remove once live)
injectAd('ad-top', '<div class="ad">[AD SLOT - TOP]</div>');
injectAd('ad-mid', '<div class="ad">[AD SLOT - MIDDLE]</div>');
injectAd('ad-bottom', '<div class="ad">[AD SLOT - BOTTOM]</div>');
