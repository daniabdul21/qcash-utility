export interface LoginPayload {
    branchCode: string;
    username: string;
    password: string;
}
export interface ForgotPasswordType {
    branchCode: string;
    username: string;
    emailAddress: string;
    answerQuestion1: string;
    answerQuestion2: string;
    type?: string;
}
export type ChangePasswordType = {
    branchCode?: string;
    username?: string;
    tempPassword?: string;
    password?: string;
    confirmPassword?: string;
    answerQuestion1?: string;
    answerQuestion2?: string;
    tokenFCM?: string;
    type?: string;
};
export interface LoginFormType {
    state: "branchCode" | "username" | "password";
    label: string;
    type: string;
}
export interface ForgotFormType {
    state: "branchCode" | "username" | "emailAddress" | "answerQuestion1" | "answerQuestion2";
    label: string;
    type: string;
    hidden: boolean;
}
export interface ChangeFormType {
    state: "branchCode" | "username" | "tempPassword" | "password" | "confirmPassword" | "answerQuestion1" | "answerQuestion2" | "tokenFCM";
    label: string;
    type: string;
}
export type VerifyUserQuestion = {
    branchCode: string;
    username: string;
    emailAddress: string;
    type?: string;
};
export interface ValidateType {
    error: boolean;
    message: string;
}
export interface MainPageTypeInfo {
    id: string;
    name: string;
}
export interface MainPagePopup {
    id?: string;
    imageUrl?: string;
    text?: string;
    title?: string;
}
export interface MainPageCarousel {
    id?: string;
    imageUrl?: string;
    text?: string;
    title?: string;
    type?: string;
}
export interface MainPageSitemap {
    contents?: MainPageSitemapContent[];
    heading?: string;
    id?: string;
}
export interface MainPageSitemapContent {
    id?: string;
    item?: string;
    type?: string;
}
export declare enum MainPageTypeEnum {
    Popup = "POPUP",
    Carousel = "CAROUSEL",
    Sitemap = "SITEMAP",
    CallToAction = "CALL_TO_ACTION"
}
