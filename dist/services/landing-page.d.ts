declare const MainPageService: () => {
    getLandingInfo: (typeID: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getMainPageTypeInfo: () => Promise<import("axios").AxiosResponse<any, any>>;
};
export default MainPageService;
