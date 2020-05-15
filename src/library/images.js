export const IMAGES = {
    DAFAULT: (width = 250, height = 350) => `https://via.placeholder.com/${width}x${height}.png`,
    TMDB_MOVIES_LAYER: (img, width = 600, height = 900) =>
        `https://image.tmdb.org/t/p/w${width}_and_h${height}_bestv2${img}`,
};

export default IMAGES;
