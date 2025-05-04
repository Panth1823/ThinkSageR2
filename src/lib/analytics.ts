type EventName = 
  | 'page_view'
  | 'button_click'
  | 'form_submit'
  | 'course_view'
  | 'signup_start'
  | 'signup_complete';

interface AnalyticsEvent {
  name: EventName;
  properties?: Record<string, any>;
}

class Analytics {
  private static instance: Analytics;
  private initialized: boolean = false;

  private constructor() {}

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  public init() {
    if (this.initialized) return;
    
    // Initialize analytics providers
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (import.meta.env.VITE_GA_ID) {
        this.loadScript(`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer.push(arguments); }
        window.gtag('js', new Date());
        window.gtag('config', import.meta.env.VITE_GA_ID);
      }

      // Meta Pixel
      if (import.meta.env.VITE_META_PIXEL_ID) {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        window.fbq('init', import.meta.env.VITE_META_PIXEL_ID);
        window.fbq('track', 'PageView');
      }
    }

    this.initialized = true;
  }

  private loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }

  public trackEvent({ name, properties = {} }: AnalyticsEvent) {
    if (!this.initialized) {
      console.warn('Analytics not initialized');
      return;
    }

    // Google Analytics
    if (window.gtag) {
      window.gtag('event', name, properties);
    }

    // Meta Pixel
    if (window.fbq) {
      window.fbq('track', name, properties);
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.log(`[Analytics] ${name}`, properties);
    }
  }

  public trackPageView(path: string) {
    this.trackEvent({
      name: 'page_view',
      properties: { path }
    });
  }

  public trackButtonClick(buttonId: string, buttonText: string) {
    this.trackEvent({
      name: 'button_click',
      properties: { buttonId, buttonText }
    });
  }

  public trackFormSubmit(formId: string, formData: Record<string, any>) {
    this.trackEvent({
      name: 'form_submit',
      properties: { formId, ...formData }
    });
  }

  public trackCourseView(courseId: string, courseName: string) {
    this.trackEvent({
      name: 'course_view',
      properties: { courseId, courseName }
    });
  }

  public trackSignupStart() {
    this.trackEvent({ name: 'signup_start' });
  }

  public trackSignupComplete(userId: string) {
    this.trackEvent({
      name: 'signup_complete',
      properties: { userId }
    });
  }
}

// Add types for window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

export const analytics = Analytics.getInstance(); 