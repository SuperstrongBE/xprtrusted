export interface TwitterConfig {
  enabled: boolean;
  apiKey?: string;
  callbackUrl?: string;
}

export interface TwitterUser {
  id: string;
  username: string;
  name: string;
  profile_image_url?: string;
  verified?: boolean;
  followers_count?: number;
}

export interface TwitterAuthResponse {
  user: TwitterUser;
  accessToken: string;
  accessTokenSecret: string;
}

export interface TwitterAuthState {
  isLoading: boolean;
  isConnected: boolean;
  user?: TwitterUser;
  error?: string;
}