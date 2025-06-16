const KEY = "contacts";
export const saveContacts = (contacts) => {
  localStorage.setItem(KEY, JSON.stringify(contacts));
};

export const loadContacts = () => {
  try {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};
