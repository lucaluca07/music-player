import { AxiosRequestConfig } from "axios";

export interface ApiProps {
  name: string;
  config: AxiosRequestConfig;
  options?: {
    loading?: boolean;
    mock?: boolean;
    error?: boolean;
  };
  success?: () => void;
  faild?: () => void;
}
