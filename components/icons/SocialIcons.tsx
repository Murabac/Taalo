type IconProps = {
  className?: string;
};

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.5 9H4v11h2.5V9zM5.2 4C4.4 4 3.7 4.7 3.7 5.5S4.4 7 5.2 7 6.8 6.3 6.8 5.5 6.1 4 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.2-1.6-2.2s-1.8.8-1.8 2.3V20H11.6V9h2.5v1.5c.5-.9 1.6-1.8 3.3-1.8 2.2 0 3.6 1.4 3.6 4.3V20z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.6 5.3 12 5.3 12 5.3s-6.6 0-8 .3c-.8.2-1.4.8-1.6 1.6C2 8.6 2 12 2 12s0 3.4.4 4.8c.2.8.8 1.4 1.6 1.6 1.4.3 8 .3 8 .3s6.6 0 8-.3c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.8.4-4.8s0-3.4-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

export const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
} as const;
