type OnLoadCallback = () => void;
export const preloadImages = (urls: string[], callback?: OnLoadCallback) => {
  return urls.map((url) => {
    const img = new Image();
    img.src = url;

    if (callback) {
      img.onload = callback;
    }

    return img;
  });
};
