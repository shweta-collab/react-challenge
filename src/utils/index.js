export const fetchUsers = async (limit, skip) => {
  const response = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  );
  const data = await response.json();
  return data.users;
};

export const fetchUser = async (userId) => {
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const data = await response.json();
  return data;
};
