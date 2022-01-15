// Generated by https://quicktype.io

export interface CommitsResponse {
    sha:          string;
    node_id:      string;
    commit:       Commit;
    url:          string;
    html_url:     string;
    comments_url: string;
    author:       CommitsResponseAuthor;
    committer:    CommitsResponseAuthor;
    parents:      Parent[];
}

export interface CommitsResponseAuthor {
    login:               Login;
    id:                  number;
    node_id:             NodeID;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           GistsURL;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          EventsURL;
    received_events_url: string;
    type:                Type;
    site_admin:          boolean;
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
    author:        CommitAuthor;
    committer:     CommitAuthor;
    message:       string;
    tree:          Tree;
    url:           string;
    comment_count: number;
    verification:  Verification;
}

export interface CommitAuthor {
    name:  Name;
    email: Email;
    date:  string;
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
    verified:  boolean;
    reason:    string;
    signature: null;
    payload:   null;
}

export interface Parent {
    sha:      string;
    url:      string;
    html_url: string;
}