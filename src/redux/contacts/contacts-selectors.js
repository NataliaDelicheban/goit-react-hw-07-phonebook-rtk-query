export const getContacts = ({contacts}) => contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
    if (!filter) {
        return contacts.items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({ name }) => {
        const normalizedName = name.toLowerCase();
        return normalizedName.includes(normalizedFilter)
    });
    return result;
}