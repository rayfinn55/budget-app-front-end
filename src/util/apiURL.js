export const apiURL = () => {
    return window.location.hostname === "localhost"
        ? "http://localhost:3009"
        : "https://www.productionaddress.com";
};
