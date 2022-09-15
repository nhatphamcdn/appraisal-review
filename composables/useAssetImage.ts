export default function useAssetImage() {
  const getImageUrl = (name: string, type: string) => {
    return new URL(`../assets/images/themes/icons/editor/${name}.${type}`, import.meta.url).href;
  };

  return {
    getImageUrl,
  };
}
