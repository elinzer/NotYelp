const imageURLRegex = /\.(jpeg|jpg|png)$/;

export const previewImageValidation = (previewUrl) => {
  if (!previewUrl.match(imageURLRegex))
    return "preview_url: Preview url must end in valid img extension [png/jpg/jpeg]";
  return null;
};
