const getIconUrl = icon => new URL(`../assets/img/${icon}`, import.meta.url).href;

export default getIconUrl;
