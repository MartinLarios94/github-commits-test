// Generated by https://quicktype.io

export interface CommitsResponse {
  commit: Commit;
  html_url: string;
  committer: CommitsResponseAuthor;
}

export interface CommitResp {
  committerName: string;
  commitDate: string;
  committerAvatarUrl: string;
  commitMessage: string;
  commitUrl: string;
}

export interface CommitsResponseAuthor {
  avatar_url: string;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersMartinLarios94EventsPrivacy = "https://api.github.com/users/MartinLarios94/events{/privacy}",
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersMartinLarios94GistsGistID = "https://api.github.com/users/MartinLarios94/gists{/gist_id}",
}

export enum Login {
  MartinLarios94 = "MartinLarios94",
}

export enum NodeID {
  MDQ6VXNlcjEzMjIxODIw = "MDQ6VXNlcjEzMjIxODIw",
}

export enum Type {
  User = "User",
}

export interface Commit {
  committer: CommitAuthor;
  message: string;
}

export interface CommitAuthor {
  name: Name;
  email: Email;
  date: string;
}

export enum Email {
  Mrlarios1994HotmailEs = "mrlarios_1994@hotmail.es",
}

export enum Name {
  MartinLarios = "Martin Larios",
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  verified: boolean;
  reason: string;
  signature: null;
  payload: null;
}

export interface Parent {
  sha: string;
  url: string;
  html_url: string;
}
