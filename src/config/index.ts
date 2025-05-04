interface Config {
  analytics: {
    enabled: boolean;
    gaId?: string;
    metaPixelId?: string;
  };
  api: {
    url: string;
    key?: string;
  };
  features: {
    newsletter: boolean;
    chatSupport: boolean;
  };
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
  app: {
    name: string;
    description: string;
    contactEmail: string;
  };
}

const config: Config = {
  analytics: {
    enabled: import.meta.env.VITE_ENABLE_ANALYTICS !== 'false',
    gaId: import.meta.env.VITE_GA_ID,
    metaPixelId: import.meta.env.VITE_META_PIXEL_ID,
  },
  api: {
    url: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    key: import.meta.env.VITE_API_KEY,
  },
  features: {
    newsletter: import.meta.env.VITE_ENABLE_NEWSLETTER !== 'false',
    chatSupport: import.meta.env.VITE_ENABLE_CHAT_SUPPORT === 'true',
  },
  social: {
    twitter: import.meta.env.VITE_TWITTER_HANDLE || 'codearchitect',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/company/codearchitect',
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/codearchitect',
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'CodeArchitect',
    description: import.meta.env.VITE_APP_DESCRIPTION || 'Master frontend development with our comprehensive course',
    contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'hello@codearchitect.dev',
  },
};

export default config; 