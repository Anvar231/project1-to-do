export const formatDate = (date:string): string => {
    const result = date.slice(0, 16).replace("T", " ");
    return result;
}