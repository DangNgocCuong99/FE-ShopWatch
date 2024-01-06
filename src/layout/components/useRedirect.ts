import { useMenuNavigation } from "/@/components/MenuSileBar/useHook";

export const useRedirect = () => {
  const { handleNavigation } = useMenuNavigation();

  const goProfile = () => {
    handleNavigation("/profile");
  };
  const goAvatar = () => {
    handleNavigation("/avatar");
  };
  const goChangePassword = () => {
    handleNavigation(`/change_password`);
  };
  const logout = () => {
    handleNavigation(`/`);
    // clear storage
  };

  return {
    goProfile,
    goAvatar,
    goChangePassword,
    logout,
  };
};
