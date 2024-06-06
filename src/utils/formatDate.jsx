import { format } from 'date-fns';

export const formatDate = (itemPublishedAt) => {
    const date = new Date(itemPublishedAt);
    return format(date, "dd/MM/yyy HH:mm");
}
