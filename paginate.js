import _ from 'https://cdn.skypack.dev/lodash';
export const paginate = (images, currentPage, perPage) => {
    const startIndex = (currentPage - 1) * perPage;
    console.log(startIndex)
    return _(images)
        .slice(startIndex)
        .take(perPage)
        .value();
};
