import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { LINKS } from '../data/links';

// Share the site: native share sheet where available (mobile), otherwise
// copy the URL to the clipboard with brief "Link copied" feedback.
export default function ShareButton({
  className = 'btn btn-outline',
  label = 'Share',
  iconOnly = false,
  size = 15,
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = LINKS.domain;
    const shareData = {
      title: 'Aleh Sitsko — Software Developer',
      text: 'Aleh Sitsko — Operations-Focused Full Stack Developer',
      url,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* user dismissed */ }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleShare}
      aria-label="Share this site"
      title="Share this site"
    >
      {copied ? <Check size={size} /> : <Share2 size={size} />}
      {!iconOnly && (copied ? 'Link copied' : label)}
    </button>
  );
}
