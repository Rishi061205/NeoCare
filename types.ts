export enum Role {
  USER = 'user',
  AI = 'model',
}

export interface Message {
  role: Role;
  content: string;
}
