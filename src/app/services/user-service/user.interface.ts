// UserLogin Data Interface
export interface UserLoginData {
    username: string;
    password: string;
  }
  
  // Server Login Response Interface
  export interface LoginResponse {
    message: string;
    token?: string;
  }
  
  // User Registration Data Interface
  export interface UserRegistrationData {
    firstName: string;
    lastName: string;
    jobRoleId: number;
    username: string;
    email: string;
    password: string;
  }