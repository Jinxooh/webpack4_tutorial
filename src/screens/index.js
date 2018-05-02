import Loadable from 'libs/Loadable';

export const Navigation = Loadable({ loader: () => import(/* webpackChunkName: "Navigation" */ 'components/Navigation') });
export const Login = Loadable({ loader: () => import(/* webpackChunkName: "Login" */ 'components/auth/Login') });
export const Modal = Loadable({ loader: () => import(/* webpackChunkName: "Modal" */ 'components/common/Modal') });

export const Apis = Loadable({ loader: () => import(/* webpackChunkName: "Apis" */ 'screens/ApisScreen') });
export const Automate = Loadable({ loader: () => import(/* webpackChunkName: "Automate" */ 'screens/AutomateScreen') });
export const Campaigns = Loadable({ loader: () => import(/* webpackChunkName: "Campaigns" */ 'screens/CampaignsScreen') });
export const Channels = Loadable({ loader: () => import(/* webpackChunkName: "Channels" */ 'screens/ChannelsScreen') });
export const Chatrooms = Loadable({ loader: () => import(/* webpackChunkName: "Chatrooms" */ 'screens/ChatroomsScreen') });
export const Clients = Loadable({ loader: () => import(/* webpackChunkName: "Clients" */ 'screens/ClientsScreen') });
export const Projects = Loadable({ loader: () => import(/* webpackChunkName: "Projects" */ 'screens/projectsScreen') });
export const ProjectBusiness = Loadable({ loader: () => import(/* webpackChunkName: "ProjectBusiness" */ 'screens/ProjectBusinessScreen') });
export const ProjectDashboard = Loadable({ loader: () => import(/* webpackChunkName: "ProjectDashboard" */ 'screens/ProjectDashboardScreen') });
export const ProjectSettings = Loadable({ loader: () => import(/* webpackChunkName: "ProjectSettings" */ 'screens/ProjectSettingsScreen') });
export const Products = Loadable({ loader: () => import(/* webpackChunkName: "Products" */ 'screens/ProductsScreen') });
export const Intelligence = Loadable({ loader: () => import(/* webpackChunkName: "Intelligence" */ 'screens/IntelligenceScreen') });
export const Intent = Loadable({ loader: () => import(/* webpackChunkName: "Intent" */ 'screens/IntentScreen') });
export const Flow = Loadable({ loader: () => import(/* webpackChunkName: "Flow" */ 'screens/FlowScreen') });
export const Dashboard = Loadable({ loader: () => import(/* webpackChunkName: "Dashboard" */ 'screens/Dashboard') });
export const Credentials = Loadable({ loader: () => import(/* webpackChunkName: "Credentials" */ 'screens/Credentials') });
export const CredentialsDashboard = Loadable({ loader: () => import(/* webpackChunkName: "CredentialsDashboard" */ 'screens/CredentialsDashboard') });

export const CredentialsUsers = Loadable({ loader: () => import(/* webpackChunkName: "CredentialsUsers" */ 'screens/CredentialsUsers') });
export const CredentialsGroups = Loadable({ loader: () => import(/* webpackChunkName: "CredentialsGroups" */ 'screens/CredentialsGroups') });
export const CredentialsRoles = Loadable({ loader: () => import(/* webpackChunkName: "CredentialsRoles" */ 'screens/CredentialsRoles') });

export const CredentialsAddUser = Loadable({ loader: () => import(/* webpackChunkName: "CredentialsAddUser" */ 'screens/CredentialsAddUserScreen') });
export const CredentialsCreateGroup = Loadable({ loader: () => import(/* webpackChunkName: "CredentialsCreateGroup" */ 'screens/CredentialsCreateGroupScreen') });
export const CredentialsCreateRole = Loadable({ loader: () => import(/* webpackChunkName: "CredentialsCreateRole" */ 'screens/CredentialsCreateRoleScreen') });
export const CredentialsRoleSummary = Loadable({ loader: () => import(/* webpackChunkName: "CredentialsRoleSummary" */ 'screens/CredentialsRoleSummaryScreen') });
export const CredentialsGroupSummary = Loadable({ loader: () => import(/* webpackChunkName: "CredentialsGroupSummary" */ 'screens/CredentialsGroupSummaryScreen') });
export const CredentialsUserSummary = Loadable({ loader: () => import(/* webpackChunkName: "CredentialsUserSummary" */ 'screens/CredentialsUserSummaryScreen') });

export const Guide = Loadable({ loader: () => import(/* webpackChunkName: "Guide" */ 'screens/Guide') });