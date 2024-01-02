import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


export const AdminSidenavData = [
    { icon: <DashboardIcon />, name: "Dashboard", path: "/dashboard" },
    { icon: <AccountBoxIcon />, name: "profile", path: "/profile" },
    { icon: <VerifiedUserIcon />, name: "Verified Users", path: "/verified-users" },
    { icon: <RemoveModeratorIcon />, name: "Non Verifeid Users", path: "/non-verified-users" },
    { icon: <NoAccountsIcon />, name: "Blocked Users", path: "blocked-users" },


]