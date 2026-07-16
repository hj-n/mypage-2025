const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;

let initialized = false;
let lastTrackedLocationKey = null;

const isValidMeasurementId = /^G-[A-Z0-9]+$/i.test(measurementId || '');

export const isAnalyticsEnabled =
  process.env.NODE_ENV === 'production' && isValidMeasurementId;

export function initializeAnalytics() {
  if (!isAnalyticsEnabled || initialized || typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.id = 'google-analytics';
  document.head.appendChild(script);

  initialized = true;
}

export function trackPageView(location) {
  if (!isAnalyticsEnabled || typeof window === 'undefined') {
    return;
  }

  initializeAnalytics();

  // React StrictMode runs effects twice in development-like lifecycles.
  // A router location key lets us avoid duplicate page views without
  // suppressing a later visit to the same URL.
  if (location.key === lastTrackedLocationKey) {
    return;
  }

  const pagePath = `${location.pathname}${location.search}${location.hash}`;

  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });

  lastTrackedLocationKey = location.key;
}
