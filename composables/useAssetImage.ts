export default function useAssetImage(path = "themes/icons/editor" as string) {
  const BASE_ASSET_PATH = `../assets/images`;
  const getImageUrl = (name: string, type = "svg" as string) => {
    return new URL(`${BASE_ASSET_PATH}/${path}/${name}.${type}`, import.meta.url).href;
  };

  return {
    getImageUrl,
  };
}
