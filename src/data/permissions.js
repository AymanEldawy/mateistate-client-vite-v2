import PATHS from "./paths";
import ROLES from "./roles";

export const ALL_ROLES = "ALL";

const PERMISSIONS = {
  /********** General **********/
  [PATHS.HOME]: ALL_ROLES,
  [PATHS.PROFILE]: ALL_ROLES,
  [PATHS.CHANGE_PASSWORD]: ALL_ROLES,
  /******************** Announcements ********************/
  [PATHS.ALL_ANNOUNCEMENTS]: [ROLES.ADMIN],
};

export default PERMISSIONS;

export const userHasPermission = (permissions, role) =>
  permissions === ALL_ROLES || permissions?.includes(role);
