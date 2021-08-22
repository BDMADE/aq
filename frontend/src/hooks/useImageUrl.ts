// This hook is being used for loading image from backend.

const useImageUrl = (url: any) => {
    let imageUrl: string;

    if (process.env.NODE_ENV === 'development') {
        imageUrl = `${process.env.REACT_APP_BACKEND_URL}${ url }`;
    } else {
        imageUrl = url;
    }

    return imageUrl;
}

export default useImageUrl;
