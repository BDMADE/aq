// This hook is being used for loading image from backend.

const useImageUrl = (url: string) => {
    let imageUrl: string;

    if(url !== undefined) {
        if (process.env.NODE_ENV === 'development') {
            imageUrl = `${process.env.REACT_APP_BACKEND_URL}${ url }`;
        } else {
            imageUrl = url;
        }
        return imageUrl;
    } else {
        return undefined;
    }
}

export default useImageUrl;
