// utils.ts
export const supportsWebP = async (): Promise<boolean> => {
  if (typeof window === 'undefined' || !window.createImageBitmap) {
    return false; // La méthode createImageBitmap n'est pas supportée ou window n'est pas défini
  }

  const img = new Image();
  img.src =
    'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAgA0JaQAA3AA/vv9UAA==';

  return new Promise((resolve) => {
    img.onload = () => {
      window.createImageBitmap(img).then(
        () => {
          resolve(true); // Le navigateur supporte WebP
        },
        () => {
          resolve(false); // Le navigateur ne supporte pas WebP
        }
      );
    };
  });
};
