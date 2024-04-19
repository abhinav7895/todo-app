const useUserAuthenticated = (): boolean => {
  const localUser = localStorage.getItem("user");
  if (!localUser) {
    return false;
  }
  return true;
};

export default useUserAuthenticated;
