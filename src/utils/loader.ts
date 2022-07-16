type OnLoadCallback = () => void;
export const preloadImages = (urls: string[], callback?: OnLoadCallback) => {
  return urls.map((url) => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      img.decode().then(() => {
        if (callback) {
          callback();
        }
      });
    };

    return img;
  });
};
