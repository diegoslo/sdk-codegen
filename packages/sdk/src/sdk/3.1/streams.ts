/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import { Readable } from 'readable-stream'
import { APIMethods } from '../../rtl/apiMethods'
import { IAuthSession } from '../../rtl/authSession'
import { ITransportSettings, encodeParam } from '../../rtl/transport'
/**
 * DelimArray is primarily used as a self-documenting format for csv-formatted array parameters
 */
import { DelimArray } from '../../rtl/delimArray'
import {
  IDictionary,
  IAccessToken,
  IApiSession,
  IApiVersion,
  IBackupConfiguration,
  IColorCollection,
  IContentFavorite,
  IContentMeta,
  IContentMetaGroupUser,
  IContentValidation,
  IContentView,
  ICreateFolder,
  ICreateSpace,
  ICredentialsApi3,
  ICredentialsEmail,
  ICredentialsEmbed,
  ICredentialsGoogle,
  ICredentialsLDAP,
  ICredentialsLookerOpenid,
  ICredentialsOIDC,
  ICredentialsSaml,
  ICredentialsTotp,
  ICustomWelcomeEmail,
  IDashboard,
  IDashboardBase,
  IDashboardElement,
  IDashboardFilter,
  IDashboardLayout,
  IDashboardLayoutComponent,
  IDashboardLookml,
  IDataActionForm,
  IDataActionRequest,
  IDataActionResponse,
  IDatagroup,
  IDBConnection,
  IDBConnectionTestResult,
  IDialectInfo,
  IDigestEmails,
  IDigestEmailSend,
  IEmbedSsoParams,
  IEmbedUrlResponse,
  IFolder,
  IGitBranch,
  IGitConnectionTest,
  IGitConnectionTestResult,
  IGroup,
  IGroupIdForGroupInclusion,
  IGroupIdForGroupUserInclusion,
  IHomepage,
  IHomepageItem,
  IHomepageSection,
  IIntegration,
  IIntegrationHub,
  IIntegrationTestResult,
  IInternalHelpResources,
  IInternalHelpResourcesContent,
  ILDAPConfig,
  ILDAPConfigTestResult,
  ILegacyFeature,
  ILocale,
  ILook,
  ILookmlModel,
  ILookmlModelExplore,
  ILookmlTest,
  ILookmlTestResult,
  ILookWithQuery,
  IManifest,
  IMergeQuery,
  IModelSet,
  IOIDCConfig,
  IPasswordConfig,
  IPermission,
  IPermissionSet,
  IProject,
  IProjectFile,
  IProjectValidation,
  IProjectValidationCache,
  IProjectWorkspace,
  IQuery,
  IQueryTask,
  IRenderTask,
  IRepositoryCredential,
  IRequestActiveThemes,
  IRequestAllGroups,
  IRequestAllGroupUsers,
  IRequestAllHomepageItems,
  IRequestAllHomepageSections,
  IRequestAllIntegrations,
  IRequestAllRoles,
  IRequestAllScheduledPlans,
  IRequestAllUsers,
  IRequestCreateDashboardRenderTask,
  IRequestCreateLookmlDashboardRenderTask,
  IRequestCreateQueryTask,
  IRequestCreateUserCredentialsEmailPasswordReset,
  IRequestFolderChildren,
  IRequestFolderChildrenSearch,
  IRequestLogin,
  IRequestRoleUsers,
  IRequestRunInlineQuery,
  IRequestRunLook,
  IRequestRunLookmlTest,
  IRequestRunQuery,
  IRequestScheduledPlansForDashboard,
  IRequestScheduledPlansForLook,
  IRequestScheduledPlansForLookmlDashboard,
  IRequestSearchContentFavorites,
  IRequestSearchContentViews,
  IRequestSearchDashboardElements,
  IRequestSearchDashboards,
  IRequestSearchFolders,
  IRequestSearchGroups,
  IRequestSearchHomepages,
  IRequestSearchLooks,
  IRequestSearchModelSets,
  IRequestSearchRoles,
  IRequestSearchThemes,
  IRequestSearchUserLoginLockouts,
  IRequestSearchUsers,
  IRequestSearchUsersNames,
  IRequestSpaceChildren,
  IRequestSpaceChildrenSearch,
  IRequestUserAttributeUserValues,
  IRequestUserRoles,
  IRole,
  IRunningQueries,
  ISamlConfig,
  ISamlMetadataParseResult,
  IScheduledPlan,
  ISession,
  ISessionConfig,
  ISpace,
  ISpaceBase,
  ISqlQuery,
  ISqlQueryCreate,
  ITheme,
  ITimezone,
  IUpdateFolder,
  IUpdateSpace,
  IUser,
  IUserAttribute,
  IUserAttributeGroupValue,
  IUserAttributeWithValue,
  IUserLoginLockout,
  IValidationError,
  IWelcomeEmailTest,
  IWhitelabelConfiguration,
  IWorkspace,
  IWriteApiSession,
  IWriteBackupConfiguration,
  IWriteColorCollection,
  IWriteContentFavorite,
  IWriteContentMeta,
  IWriteCreateDashboardFilter,
  IWriteCredentialsEmail,
  IWriteCustomWelcomeEmail,
  IWriteDashboard,
  IWriteDashboardElement,
  IWriteDashboardFilter,
  IWriteDashboardLayout,
  IWriteDashboardLayoutComponent,
  IWriteDatagroup,
  IWriteDBConnection,
  IWriteGitBranch,
  IWriteGroup,
  IWriteHomepage,
  IWriteHomepageItem,
  IWriteHomepageSection,
  IWriteIntegration,
  IWriteIntegrationHub,
  IWriteInternalHelpResources,
  IWriteInternalHelpResourcesContent,
  IWriteLDAPConfig,
  IWriteLegacyFeature,
  IWriteLookmlModel,
  IWriteLookWithQuery,
  IWriteMergeQuery,
  IWriteModelSet,
  IWriteOIDCConfig,
  IWritePasswordConfig,
  IWritePermissionSet,
  IWriteProject,
  IWriteQuery,
  IWriteRepositoryCredential,
  IWriteRole,
  IWriteSamlConfig,
  IWriteScheduledPlan,
  IWriteSessionConfig,
  IWriteTheme,
  IWriteUser,
  IWriteUserAttribute,
  IWriteUserAttributeWithValue,
  IWriteWhitelabelConfiguration,
} from './models'

export class Looker31SDKStream extends APIMethods {
  constructor(authSession: IAuthSession) {
    super(authSession, '3.1')
  }

  /**
   * Accepts the legal agreement for a given integration hub. This only works for integration hubs that have legal_agreement_required set to true and legal_agreement_signed set to false.
   *
   * POST /integration_hubs/{integration_hub_id}/accept_legal_agreement -> IIntegrationHub
   */
  async accept_integration_hub_legal_agreement(
    callback: (readable: Readable) => Promise<IIntegrationHub>,
    /**
     * @param {number} integration_hub_id Id of integration_hub
     */
    integration_hub_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IIntegrationHub>(
      callback,
      'POST',
      `/integration_hubs/${integration_hub_id}/accept_legal_agreement`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get active themes
   *
   * Returns an array of active themes.
   *
   * If the `name` parameter is specified, it will return an array with one theme if it's active and found.
   *
   * The optional `ts` parameter can specify a different timestamp than "now."
   *
   * **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.
   *
   * GET /themes/active -> ITheme[]
   */
  async active_themes(
    callback: (readable: Readable) => Promise<ITheme[]>,
    request: IRequestActiveThemes,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ITheme[]>(
      callback,
      'GET',
      '/themes/active',
      { fields: request.fields, name: request.name, ts: request.ts },
      null,
      options
    )
  }

  /**
   * ### Adds a new group to a group.
   *
   * POST /groups/{group_id}/groups -> IGroup
   */
  async add_group_group(
    callback: (readable: Readable) => Promise<IGroup>,
    /**
     * @param {number} group_id Id of group
     */
    group_id: number,
    /**
     * @param {Partial<IGroupIdForGroupInclusion>} body
     */
    body: Partial<IGroupIdForGroupInclusion>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IGroup>(
      callback,
      'POST',
      `/groups/${group_id}/groups`,
      null,
      body,
      options
    )
  }

  /**
   * ### Adds a new user to a group.
   *
   * POST /groups/{group_id}/users -> IUser
   */
  async add_group_user(
    callback: (readable: Readable) => Promise<IUser>,
    /**
     * @param {number} group_id Id of group
     */
    group_id: number,
    /**
     * @param {Partial<IGroupIdForGroupUserInclusion>} body
     */
    body: Partial<IGroupIdForGroupUserInclusion>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUser>(
      callback,
      'POST',
      `/groups/${group_id}/users`,
      null,
      body,
      options
    )
  }

  /**
   * ### Get an array of all existing Color Collections
   * Get a **single** color collection by id with [ColorCollection](#!/ColorCollection/color_collection)
   *
   * Get all **standard** color collections with [ColorCollection](#!/ColorCollection/color_collections_standard)
   *
   * Get all **custom** color collections with [ColorCollection](#!/ColorCollection/color_collections_custom)
   *
   * **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return `Not Found` (404) errors.
   *
   * GET /color_collections -> IColorCollection[]
   */
  async all_color_collections(
    callback: (readable: Readable) => Promise<IColorCollection[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IColorCollection[]>(
      callback,
      'GET',
      '/color_collections',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all connections.
   *
   * GET /connections -> IDBConnection[]
   */
  async all_connections(
    callback: (readable: Readable) => Promise<IDBConnection[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDBConnection[]>(
      callback,
      'GET',
      '/connections',
      { fields },
      null,
      options
    )
  }

  /**
   * ### All content metadata access records for a content metadata item.
   *
   * GET /content_metadata_access -> IContentMetaGroupUser[]
   */
  async all_content_metadata_accesses(
    callback: (readable: Readable) => Promise<IContentMetaGroupUser[]>,
    /**
     * @param {number} content_metadata_id Id of content metadata
     */
    content_metadata_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentMetaGroupUser[]>(
      callback,
      'GET',
      '/content_metadata_access',
      { content_metadata_id, fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all content metadata in a space.
   *
   * GET /content_metadata -> IContentMeta[]
   */
  async all_content_metadatas(
    callback: (readable: Readable) => Promise<IContentMeta[]>,
    /**
     * @param {number} parent_id Parent space of content.
     */
    parent_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentMeta[]>(
      callback,
      'GET',
      '/content_metadata',
      { fields, parent_id },
      null,
      options
    )
  }

  /**
   * ### Get information about all active dashboards.
   *
   * Returns an array of **abbreviated dashboard objects**. Dashboards marked as deleted are excluded from this list.
   *
   * Get the **full details** of a specific dashboard by id with [dashboard()](#!/Dashboard/dashboard)
   *
   * Find **deleted dashboards** with [search_dashboards()](#!/Dashboard/search_dashboards)
   *
   * GET /dashboards -> IDashboardBase[]
   */
  async all_dashboards(
    callback: (readable: Readable) => Promise<IDashboardBase[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDashboardBase[]>(
      callback,
      'GET',
      '/dashboards',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all datagroups.
   *
   * GET /datagroups -> IDatagroup[]
   */
  async all_datagroups(
    callback: (readable: Readable) => Promise<IDatagroup[]>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDatagroup[]>(
      callback,
      'GET',
      '/datagroups',
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about all dialects.
   *
   * GET /dialect_info -> IDialectInfo[]
   */
  async all_dialect_infos(
    callback: (readable: Readable) => Promise<IDialectInfo[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDialectInfo[]>(
      callback,
      'GET',
      '/dialect_info',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all folders.
   *
   * GET /folders -> IFolder[]
   */
  async all_folders(
    callback: (readable: Readable) => Promise<IFolder[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IFolder[]>(
      callback,
      'GET',
      '/folders',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get All Git Branches
   *
   * Returns a list of git branches in the project repository
   *
   * GET /projects/{project_id}/git_branches -> IGitBranch[]
   */
  async all_git_branches(
    callback: (readable: Readable) => Promise<IGitBranch[]>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IGitBranch[]>(
      callback,
      'GET',
      `/projects/${project_id}/git_branches`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get All Git Connection Tests
   *
   * dev mode required.
   *   - Call `update_session` to select the 'dev' workspace.
   *
   * Returns a list of tests which can be run against a project's (or the dependency project for the provided remote_url) git connection. Call [Run Git Connection Test](#!/Project/run_git_connection_test) to execute each test in sequence.
   *
   * Tests are ordered by increasing specificity. Tests should be run in the order returned because later tests require functionality tested by tests earlier in the test list.
   *
   * For example, a late-stage test for write access is meaningless if connecting to the git server (an early test) is failing.
   *
   * GET /projects/{project_id}/git_connection_tests -> IGitConnectionTest[]
   */
  async all_git_connection_tests(
    callback: (readable: Readable) => Promise<IGitConnectionTest[]>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} remote_url (Optional: leave blank for root project) The remote url for remote dependency to test.
     */
    remote_url?: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IGitConnectionTest[]>(
      callback,
      'GET',
      `/projects/${project_id}/git_connection_tests`,
      { remote_url },
      null,
      options
    )
  }

  /**
   * ### Get information about all the groups in a group
   *
   * GET /groups/{group_id}/groups -> IGroup[]
   */
  async all_group_groups(
    callback: (readable: Readable) => Promise<IGroup[]>,
    /**
     * @param {number} group_id Id of group
     */
    group_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IGroup[]>(
      callback,
      'GET',
      `/groups/${group_id}/groups`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all the users directly included in a group.
   *
   * GET /groups/{group_id}/users -> IUser[]
   */
  async all_group_users(
    callback: (readable: Readable) => Promise<IUser[]>,
    request: IRequestAllGroupUsers,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUser[]>(
      callback,
      'GET',
      `/groups/${request.group_id}/users`,
      {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Get information about all groups.
   *
   * GET /groups -> IGroup[]
   */
  async all_groups(
    callback: (readable: Readable) => Promise<IGroup[]>,
    request: IRequestAllGroups,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IGroup[]>(
      callback,
      'GET',
      '/groups',
      {
        can_add_to_content_metadata: request.can_add_to_content_metadata,
        content_metadata_id: request.content_metadata_id,
        fields: request.fields,
        ids: request.ids,
        page: request.page,
        per_page: request.per_page,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Get information about all homepage items.
   *
   * GET /homepage_items -> IHomepageItem[]
   */
  async all_homepage_items(
    callback: (readable: Readable) => Promise<IHomepageItem[]>,
    request: IRequestAllHomepageItems,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepageItem[]>(
      callback,
      'GET',
      '/homepage_items',
      {
        fields: request.fields,
        homepage_section_id: request.homepage_section_id,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Get information about all homepage sections.
   *
   * GET /homepage_sections -> IHomepageSection[]
   */
  async all_homepage_sections(
    callback: (readable: Readable) => Promise<IHomepageSection[]>,
    request: IRequestAllHomepageSections,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepageSection[]>(
      callback,
      'GET',
      '/homepage_sections',
      { fields: request.fields, sorts: request.sorts },
      null,
      options
    )
  }

  /**
   * ### Get information about all homepages.
   *
   * GET /homepages -> IHomepage[]
   */
  async all_homepages(
    callback: (readable: Readable) => Promise<IHomepage[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepage[]>(
      callback,
      'GET',
      '/homepages',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all Integration Hubs.
   *
   * GET /integration_hubs -> IIntegrationHub[]
   */
  async all_integration_hubs(
    callback: (readable: Readable) => Promise<IIntegrationHub[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IIntegrationHub[]>(
      callback,
      'GET',
      '/integration_hubs',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all Integrations.
   *
   * GET /integrations -> IIntegration[]
   */
  async all_integrations(
    callback: (readable: Readable) => Promise<IIntegration[]>,
    request: IRequestAllIntegrations,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IIntegration[]>(
      callback,
      'GET',
      '/integrations',
      {
        fields: request.fields,
        integration_hub_id: request.integration_hub_id,
      },
      null,
      options
    )
  }

  /**
   * ### Get all legacy features.
   *
   * GET /legacy_features -> ILegacyFeature[]
   */
  async all_legacy_features(
    callback: (readable: Readable) => Promise<ILegacyFeature[]>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILegacyFeature[]>(
      callback,
      'GET',
      '/legacy_features',
      null,
      null,
      options
    )
  }

  /**
   * ### Get a list of locales that Looker supports.
   *
   * GET /locales -> ILocale[]
   */
  async all_locales(
    callback: (readable: Readable) => Promise<ILocale[]>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILocale[]>(
      callback,
      'GET',
      '/locales',
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about all lookml models.
   *
   * GET /lookml_models -> ILookmlModel[]
   */
  async all_lookml_models(
    callback: (readable: Readable) => Promise<ILookmlModel[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILookmlModel[]>(
      callback,
      'GET',
      '/lookml_models',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get All LookML Tests
   *
   * Returns a list of tests which can be run to validate a project's LookML code and/or the underlying data,
   * optionally filtered by the file id.
   * Call [Run LookML Test](#!/Project/run_lookml_test) to execute tests.
   *
   * GET /projects/{project_id}/lookml_tests -> ILookmlTest[]
   */
  async all_lookml_tests(
    callback: (readable: Readable) => Promise<ILookmlTest[]>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} file_id File Id
     */
    file_id?: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<ILookmlTest[]>(
      callback,
      'GET',
      `/projects/${project_id}/lookml_tests`,
      { file_id },
      null,
      options
    )
  }

  /**
   * ### Get information about all active Looks
   *
   * Returns an array of **abbreviated Look objects** describing all the looks that the caller has access to. Soft-deleted Looks are **not** included.
   *
   * Get the **full details** of a specific look by id with [look(id)](#!/Look/look)
   *
   * Find **soft-deleted looks** with [search_looks()](#!/Look/search_looks)
   *
   * GET /looks -> ILook[]
   */
  async all_looks(
    callback: (readable: Readable) => Promise<ILook[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILook[]>(
      callback,
      'GET',
      '/looks',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all model sets.
   *
   * GET /model_sets -> IModelSet[]
   */
  async all_model_sets(
    callback: (readable: Readable) => Promise<IModelSet[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IModelSet[]>(
      callback,
      'GET',
      '/model_sets',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all permission sets.
   *
   * GET /permission_sets -> IPermissionSet[]
   */
  async all_permission_sets(
    callback: (readable: Readable) => Promise<IPermissionSet[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IPermissionSet[]>(
      callback,
      'GET',
      '/permission_sets',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get all supported permissions.
   *
   * GET /permissions -> IPermission[]
   */
  async all_permissions(
    callback: (readable: Readable) => Promise<IPermission[]>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IPermission[]>(
      callback,
      'GET',
      '/permissions',
      null,
      null,
      options
    )
  }

  /**
   * ### Get All Project Files
   *
   * Returns a list of the files in the project
   *
   * GET /projects/{project_id}/files -> IProjectFile[]
   */
  async all_project_files(
    callback: (readable: Readable) => Promise<IProjectFile[]>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IProjectFile[]>(
      callback,
      'GET',
      `/projects/${project_id}/files`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get All Projects
   *
   * Returns all projects visible to the current user
   *
   * GET /projects -> IProject[]
   */
  async all_projects(
    callback: (readable: Readable) => Promise<IProject[]>,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IProject[]>(
      callback,
      'GET',
      '/projects',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all roles.
   *
   * GET /roles -> IRole[]
   */
  async all_roles(
    callback: (readable: Readable) => Promise<IRole[]>,
    request: IRequestAllRoles,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IRole[]>(
      callback,
      'GET',
      '/roles',
      { fields: request.fields, ids: request.ids },
      null,
      options
    )
  }

  /**
   * Get information about all running queries.
   *
   * GET /running_queries -> IRunningQueries[]
   */
  async all_running_queries(
    callback: (readable: Readable) => Promise<IRunningQueries[]>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IRunningQueries[]>(
      callback,
      'GET',
      '/running_queries',
      null,
      null,
      options
    )
  }

  /**
   * ### List All Scheduled Plans
   *
   * Returns all scheduled plans which belong to the caller or given user.
   *
   * If no user_id is provided, this function returns the scheduled plans owned by the caller.
   *
   *
   * To list all schedules for all users, pass `all_users=true`.
   *
   *
   * The caller must have `see_schedules` permission to see other users' scheduled plans.
   *
   * GET /scheduled_plans -> IScheduledPlan[]
   */
  async all_scheduled_plans(
    callback: (readable: Readable) => Promise<IScheduledPlan[]>,
    request: IRequestAllScheduledPlans,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IScheduledPlan[]>(
      callback,
      'GET',
      '/scheduled_plans',
      {
        all_users: request.all_users,
        fields: request.fields,
        user_id: request.user_id,
      },
      null,
      options
    )
  }

  /**
   * ### Get information about all spaces.
   *
   * GET /spaces -> ISpaceBase[]
   */
  async all_spaces(
    callback: (readable: Readable) => Promise<ISpaceBase[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISpaceBase[]>(
      callback,
      'GET',
      '/spaces',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get an array of all existing themes
   *
   * Get a **single theme** by id with [Theme](#!/Theme/theme)
   *
   * This method returns an array of all existing themes. The active time for the theme is not considered.
   *
   * **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.
   *
   * GET /themes -> ITheme[]
   */
  async all_themes(
    callback: (readable: Readable) => Promise<ITheme[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ITheme[]>(
      callback,
      'GET',
      '/themes',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get a list of timezones that Looker supports (e.g. useful for scheduling tasks).
   *
   * GET /timezones -> ITimezone[]
   */
  async all_timezones(
    callback: (readable: Readable) => Promise<ITimezone[]>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ITimezone[]>(
      callback,
      'GET',
      '/timezones',
      null,
      null,
      options
    )
  }

  /**
   * ### Returns all values of a user attribute defined by user groups, in precedence order.
   *
   * A user may be a member of multiple groups which define different values for a given user attribute.
   * The order of group-values in the response determines precedence for selecting which group-value applies
   * to a given user.  For more information, see [Set User Attribute Group Values](#!/UserAttribute/set_user_attribute_group_values).
   *
   * Results will only include groups that the caller's user account has permission to see.
   *
   * GET /user_attributes/{user_attribute_id}/group_values -> IUserAttributeGroupValue[]
   */
  async all_user_attribute_group_values(
    callback: (readable: Readable) => Promise<IUserAttributeGroupValue[]>,
    /**
     * @param {number} user_attribute_id Id of user attribute
     */
    user_attribute_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserAttributeGroupValue[]>(
      callback,
      'GET',
      `/user_attributes/${user_attribute_id}/group_values`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all user attributes.
   *
   * GET /user_attributes -> IUserAttribute[]
   */
  async all_user_attributes(
    callback: (readable: Readable) => Promise<IUserAttribute[]>,
    request: IRequestAllHomepageSections,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserAttribute[]>(
      callback,
      'GET',
      '/user_attributes',
      { fields: request.fields, sorts: request.sorts },
      null,
      options
    )
  }

  /**
   * ### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.
   *
   * GET /users/{user_id}/credentials_api3 -> ICredentialsApi3[]
   */
  async all_user_credentials_api3s(
    callback: (readable: Readable) => Promise<ICredentialsApi3[]>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsApi3[]>(
      callback,
      'GET',
      `/users/${user_id}/credentials_api3`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Embed login information for the specified user.
   *
   * GET /users/{user_id}/credentials_embed -> ICredentialsEmbed[]
   */
  async all_user_credentials_embeds(
    callback: (readable: Readable) => Promise<ICredentialsEmbed[]>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsEmbed[]>(
      callback,
      'GET',
      `/users/${user_id}/credentials_embed`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get currently locked-out users.
   *
   * GET /user_login_lockouts -> IUserLoginLockout[]
   */
  async all_user_login_lockouts(
    callback: (readable: Readable) => Promise<IUserLoginLockout[]>,
    /**
     * @param {string} fields Include only these fields in the response
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserLoginLockout[]>(
      callback,
      'GET',
      '/user_login_lockouts',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Web login session for the specified user.
   *
   * GET /users/{user_id}/sessions -> ISession[]
   */
  async all_user_sessions(
    callback: (readable: Readable) => Promise<ISession[]>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISession[]>(
      callback,
      'GET',
      `/users/${user_id}/sessions`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all users.
   *
   * GET /users -> IUser[]
   */
  async all_users(
    callback: (readable: Readable) => Promise<IUser[]>,
    request: IRequestAllUsers,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUser[]>(
      callback,
      'GET',
      '/users',
      {
        fields: request.fields,
        ids: request.ids,
        page: request.page,
        per_page: request.per_page,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Get All Workspaces
   *
   * Returns all workspaces available to the calling user.
   *
   * GET /workspaces -> IWorkspace[]
   */
  async all_workspaces(
    callback: (readable: Readable) => Promise<IWorkspace[]>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IWorkspace[]>(
      callback,
      'GET',
      '/workspaces',
      null,
      null,
      options
    )
  }

  /**
   * ### WARNING: The Looker internal database backup function has been deprecated.
   *
   * GET /backup_configuration -> IBackupConfiguration
   */
  async backup_configuration(
    callback: (readable: Readable) => Promise<IBackupConfiguration>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IBackupConfiguration>(
      callback,
      'GET',
      '/backup_configuration',
      null,
      null,
      options
    )
  }

  /**
   * Get the current Cloud Storage Configuration.
   *
   * GET /cloud_storage -> IBackupConfiguration
   */
  async cloud_storage_configuration(
    callback: (readable: Readable) => Promise<IBackupConfiguration>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IBackupConfiguration>(
      callback,
      'GET',
      '/cloud_storage',
      null,
      null,
      options
    )
  }

  /**
   * ### Get a Color Collection by ID
   *
   * Use this to retrieve a specific Color Collection.
   * Get a **single** color collection by id with [ColorCollection](#!/ColorCollection/color_collection)
   *
   * Get all **standard** color collections with [ColorCollection](#!/ColorCollection/color_collections_standard)
   *
   * Get all **custom** color collections with [ColorCollection](#!/ColorCollection/color_collections_custom)
   *
   * **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return `Not Found` (404) errors.
   *
   * GET /color_collections/{collection_id} -> IColorCollection
   */
  async color_collection(
    callback: (readable: Readable) => Promise<IColorCollection>,
    /**
     * @param {string} collection_id Id of Color Collection
     */
    collection_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    collection_id = encodeParam(collection_id)
    return this.authStream<IColorCollection>(
      callback,
      'GET',
      `/color_collections/${collection_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get an array of all existing **Custom** Color Collections
   * Get a **single** color collection by id with [ColorCollection](#!/ColorCollection/color_collection)
   *
   * Get all **standard** color collections with [ColorCollection](#!/ColorCollection/color_collections_standard)
   *
   * **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return `Not Found` (404) errors.
   *
   * GET /color_collections/custom -> IColorCollection[]
   */
  async color_collections_custom(
    callback: (readable: Readable) => Promise<IColorCollection[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IColorCollection[]>(
      callback,
      'GET',
      '/color_collections/custom',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get an array of all existing **Standard** Color Collections
   * Get a **single** color collection by id with [ColorCollection](#!/ColorCollection/color_collection)
   *
   * Get all **custom** color collections with [ColorCollection](#!/ColorCollection/color_collections_custom)
   *
   * **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return `Not Found` (404) errors.
   *
   * GET /color_collections/standard -> IColorCollection[]
   */
  async color_collections_standard(
    callback: (readable: Readable) => Promise<IColorCollection[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IColorCollection[]>(
      callback,
      'GET',
      '/color_collections/standard',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about a connection.
   *
   * GET /connections/{connection_name} -> IDBConnection
   */
  async connection(
    callback: (readable: Readable) => Promise<IDBConnection>,
    /**
     * @param {string} connection_name Name of connection
     */
    connection_name: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    connection_name = encodeParam(connection_name)
    return this.authStream<IDBConnection>(
      callback,
      'GET',
      `/connections/${connection_name}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get favorite content by its id
   *
   * GET /content_favorite/{content_favorite_id} -> IContentFavorite
   */
  async content_favorite(
    callback: (readable: Readable) => Promise<IContentFavorite>,
    /**
     * @param {number} content_favorite_id Id of favorite content
     */
    content_favorite_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentFavorite>(
      callback,
      'GET',
      `/content_favorite/${content_favorite_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about an individual content metadata record.
   *
   * GET /content_metadata/{content_metadata_id} -> IContentMeta
   */
  async content_metadata(
    callback: (readable: Readable) => Promise<IContentMeta>,
    /**
     * @param {number} content_metadata_id Id of content metadata
     */
    content_metadata_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentMeta>(
      callback,
      'GET',
      `/content_metadata/${content_metadata_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Validate All Content
   *
   * Performs validation of all looks and dashboards
   * Returns a list of errors found as well as metadata about the content validation run.
   *
   * GET /content_validation -> IContentValidation
   */
  async content_validation(
    callback: (readable: Readable) => Promise<IContentValidation>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentValidation>(
      callback,
      'GET',
      '/content_validation',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Create a custom color collection with the specified information
   *
   * Creates a new custom color collection object, returning the details, including the created id.
   *
   * **Update** an existing color collection with [Update Color Collection](#!/ColorCollection/update_color_collection)
   *
   * **Permanently delete** an existing custom color collection with [Delete Color Collection](#!/ColorCollection/delete_color_collection)
   *
   * **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return `Not Found` (404) errors.
   *
   * POST /color_collections -> IColorCollection
   */
  async create_color_collection(
    callback: (readable: Readable) => Promise<IColorCollection>,
    /**
     * @param {Partial<IWriteColorCollection>} body
     */
    body: Partial<IWriteColorCollection>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IColorCollection>(
      callback,
      'POST',
      '/color_collections',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a connection using the specified configuration.
   *
   * POST /connections -> IDBConnection
   */
  async create_connection(
    callback: (readable: Readable) => Promise<IDBConnection>,
    /**
     * @param {Partial<IWriteDBConnection>} body
     */
    body: Partial<IWriteDBConnection>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDBConnection>(
      callback,
      'POST',
      '/connections',
      null,
      body,
      options
    )
  }

  /**
   * ### Create favorite content
   *
   * POST /content_favorite -> IContentFavorite
   */
  async create_content_favorite(
    callback: (readable: Readable) => Promise<IContentFavorite>,
    /**
     * @param {Partial<IWriteContentFavorite>} body
     */
    body: Partial<IWriteContentFavorite>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentFavorite>(
      callback,
      'POST',
      '/content_favorite',
      null,
      body,
      options
    )
  }

  /**
   * ### Create content metadata access.
   *
   * POST /content_metadata_access -> IContentMetaGroupUser
   */
  async create_content_metadata_access(
    callback: (readable: Readable) => Promise<IContentMetaGroupUser>,
    /**
     * @param {Partial<IContentMetaGroupUser>} body
     */
    body: Partial<IContentMetaGroupUser>,
    /**
     * @param {boolean} send_boards_notification_email Optionally sends notification email when granting access to a board.
     */
    send_boards_notification_email?: boolean,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentMetaGroupUser>(
      callback,
      'POST',
      '/content_metadata_access',
      { send_boards_notification_email },
      body,
      options
    )
  }

  /**
   * ### Create a new dashboard
   *
   * Creates a new dashboard object and returns the details of the newly created dashboard.
   *
   * `Title`, `user_id`, and `space_id` are all required fields.
   * `Space_id` and `user_id` must contain the id of an existing space or user, respectively.
   * A dashboard's `title` must be unique within the space in which it resides.
   *
   * If you receive a 422 error response when creating a dashboard, be sure to look at the
   * response body for information about exactly which fields are missing or contain invalid data.
   *
   * You can **update** an existing dashboard with [update_dashboard()](#!/Dashboard/update_dashboard)
   *
   * You can **permanently delete** an existing dashboard with [delete_dashboard()](#!/Dashboard/delete_dashboard)
   *
   * POST /dashboards -> IDashboard
   */
  async create_dashboard(
    callback: (readable: Readable) => Promise<IDashboard>,
    /**
     * @param {Partial<IWriteDashboard>} body
     */
    body: Partial<IWriteDashboard>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDashboard>(
      callback,
      'POST',
      '/dashboards',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a dashboard element on the dashboard with a specific id.
   *
   * POST /dashboard_elements -> IDashboardElement
   */
  async create_dashboard_element(
    callback: (readable: Readable) => Promise<IDashboardElement>,
    /**
     * @param {Partial<IWriteDashboardElement>} body
     */
    body: Partial<IWriteDashboardElement>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDashboardElement>(
      callback,
      'POST',
      '/dashboard_elements',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a dashboard filter on the dashboard with a specific id.
   *
   * POST /dashboard_filters -> IDashboardFilter
   */
  async create_dashboard_filter(
    callback: (readable: Readable) => Promise<IDashboardFilter>,
    /**
     * @param {Partial<IWriteCreateDashboardFilter>} body
     */
    body: Partial<IWriteCreateDashboardFilter>,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDashboardFilter>(
      callback,
      'POST',
      '/dashboard_filters',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a dashboard layout on the dashboard with a specific id.
   *
   * POST /dashboard_layouts -> IDashboardLayout
   */
  async create_dashboard_layout(
    callback: (readable: Readable) => Promise<IDashboardLayout>,
    /**
     * @param {Partial<IWriteDashboardLayout>} body
     */
    body: Partial<IWriteDashboardLayout>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDashboardLayout>(
      callback,
      'POST',
      '/dashboard_layouts',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a new task to render a dashboard to a document or image.
   *
   * Returns a render task object.
   * To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task).
   * Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).
   *
   * POST /render_tasks/dashboards/{dashboard_id}/{result_format} -> IRenderTask
   */
  async create_dashboard_render_task(
    callback: (readable: Readable) => Promise<IRenderTask>,
    request: IRequestCreateDashboardRenderTask,
    options?: Partial<ITransportSettings>
  ) {
    request.result_format = encodeParam(request.result_format)
    return this.authStream<IRenderTask>(
      callback,
      'POST',
      `/render_tasks/dashboards/${request.dashboard_id}/${request.result_format}`,
      {
        fields: request.fields,
        height: request.height,
        pdf_landscape: request.pdf_landscape,
        pdf_paper_size: request.pdf_paper_size,
        width: request.width,
      },
      request.body,
      options
    )
  }

  /**
   * ### Trigger the generation of digest email records and send them to Looker's internal system. This does not send
   * any actual emails, it generates records containing content which may be of interest for users who have become inactive.
   * Emails will be sent at a later time from Looker's internal system if the Digest Emails feature is enabled in settings.
   *
   * POST /digest_email_send -> IDigestEmailSend
   */
  async create_digest_email_send(
    callback: (readable: Readable) => Promise<IDigestEmailSend>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDigestEmailSend>(
      callback,
      'POST',
      '/digest_email_send',
      null,
      null,
      options
    )
  }

  /**
   * ### Create a folder with specified information.
   *
   * Caller must have permission to edit the parent folder and to create folders, otherwise the request
   * returns 404 Not Found.
   *
   * POST /folders -> IFolder
   */
  async create_folder(
    callback: (readable: Readable) => Promise<IFolder>,
    /**
     * @param {Partial<ICreateFolder>} body
     */
    body: Partial<ICreateFolder>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IFolder>(
      callback,
      'POST',
      '/folders',
      null,
      body,
      options
    )
  }

  /**
   * ### Create and Checkout a Git Branch
   *
   * Creates and checks out a new branch in the given project repository
   * Only allowed in development mode
   *   - Call `update_session` to select the 'dev' workspace.
   *
   * Optionally specify a branch name, tag name or commit SHA as the start point in the ref field.
   *   If no ref is specified, HEAD of the current branch will be used as the start point for the new branch.
   *
   * POST /projects/{project_id}/git_branch -> IGitBranch
   */
  async create_git_branch(
    callback: (readable: Readable) => Promise<IGitBranch>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {Partial<IWriteGitBranch>} body
     */
    body: Partial<IWriteGitBranch>,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IGitBranch>(
      callback,
      'POST',
      `/projects/${project_id}/git_branch`,
      null,
      body,
      options
    )
  }

  /**
   * ### Create Git Deploy Key
   *
   * Create a public/private key pair for authenticating ssh git requests from Looker to a remote git repository
   * for a particular Looker project.
   *
   * Returns the public key of the generated ssh key pair.
   *
   * Copy this public key to your remote git repository's ssh keys configuration so that the remote git service can
   * validate and accept git requests from the Looker server.
   *
   * POST /projects/{project_id}/git/deploy_key -> string
   */
  async create_git_deploy_key(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<string>(
      callback,
      'POST',
      `/projects/${project_id}/git/deploy_key`,
      null,
      null,
      options
    )
  }

  /**
   * ### Creates a new group (admin only).
   *
   * POST /groups -> IGroup
   */
  async create_group(
    callback: (readable: Readable) => Promise<IGroup>,
    /**
     * @param {Partial<IWriteGroup>} body
     */
    body: Partial<IWriteGroup>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IGroup>(
      callback,
      'POST',
      '/groups',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a new homepage.
   *
   * POST /homepages -> IHomepage
   */
  async create_homepage(
    callback: (readable: Readable) => Promise<IHomepage>,
    /**
     * @param {Partial<IWriteHomepage>} body
     */
    body: Partial<IWriteHomepage>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepage>(
      callback,
      'POST',
      '/homepages',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a new homepage item.
   *
   * POST /homepage_items -> IHomepageItem
   */
  async create_homepage_item(
    callback: (readable: Readable) => Promise<IHomepageItem>,
    /**
     * @param {Partial<IWriteHomepageItem>} body
     */
    body: Partial<IWriteHomepageItem>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepageItem>(
      callback,
      'POST',
      '/homepage_items',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a new homepage section.
   *
   * POST /homepage_sections -> IHomepageSection
   */
  async create_homepage_section(
    callback: (readable: Readable) => Promise<IHomepageSection>,
    /**
     * @param {Partial<IWriteHomepageSection>} body
     */
    body: Partial<IWriteHomepageSection>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepageSection>(
      callback,
      'POST',
      '/homepage_sections',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a new Integration Hub.
   *
   * This API is rate limited to prevent it from being used for SSRF attacks
   *
   * POST /integration_hubs -> IIntegrationHub
   */
  async create_integration_hub(
    callback: (readable: Readable) => Promise<IIntegrationHub>,
    /**
     * @param {Partial<IWriteIntegrationHub>} body
     */
    body: Partial<IWriteIntegrationHub>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IIntegrationHub>(
      callback,
      'POST',
      '/integration_hubs',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a Look
   *
   * To create a look to display query data, first create the query with [create_query()](#!/Query/create_query)
   * then assign the query's id to the `query_id` property in the call to `create_look()`.
   *
   * To place the look into a particular space, assign the space's id to the `space_id` property
   * in the call to `create_look()`.
   *
   * POST /looks -> ILookWithQuery
   */
  async create_look(
    callback: (readable: Readable) => Promise<ILookWithQuery>,
    /**
     * @param {Partial<IWriteLookWithQuery>} body
     */
    body: Partial<IWriteLookWithQuery>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILookWithQuery>(
      callback,
      'POST',
      '/looks',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a new task to render a look to an image.
   *
   * Returns a render task object.
   * To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task).
   * Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).
   *
   * POST /render_tasks/looks/{look_id}/{result_format} -> IRenderTask
   */
  async create_look_render_task(
    callback: (readable: Readable) => Promise<IRenderTask>,
    /**
     * @param {number} look_id Id of look to render
     */
    look_id: number,
    /**
     * @param {string} result_format Output type: png, or jpg
     */
    result_format: string,
    /**
     * @param {number} width Output width in pixels
     */
    width: number,
    /**
     * @param {number} height Output height in pixels
     */
    height: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    result_format = encodeParam(result_format)
    return this.authStream<IRenderTask>(
      callback,
      'POST',
      `/render_tasks/looks/${look_id}/${result_format}`,
      { fields, height, width },
      null,
      options
    )
  }

  /**
   * ### Create a new task to render a lookml dashboard to a document or image.
   *
   * # DEPRECATED:  Use [create_dashboard_render_task()](#!/RenderTask/create_dashboard_render_task) in API 4.0+
   *
   * Returns a render task object.
   * To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task).
   * Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).
   *
   * POST /render_tasks/lookml_dashboards/{dashboard_id}/{result_format} -> IRenderTask
   */
  async create_lookml_dashboard_render_task(
    callback: (readable: Readable) => Promise<IRenderTask>,
    request: IRequestCreateLookmlDashboardRenderTask,
    options?: Partial<ITransportSettings>
  ) {
    request.dashboard_id = encodeParam(request.dashboard_id)
    request.result_format = encodeParam(request.result_format)
    return this.authStream<IRenderTask>(
      callback,
      'POST',
      `/render_tasks/lookml_dashboards/${request.dashboard_id}/${request.result_format}`,
      {
        fields: request.fields,
        height: request.height,
        pdf_landscape: request.pdf_landscape,
        pdf_paper_size: request.pdf_paper_size,
        width: request.width,
      },
      request.body,
      options
    )
  }

  /**
   * ### Create a lookml model using the specified configuration.
   *
   * POST /lookml_models -> ILookmlModel
   */
  async create_lookml_model(
    callback: (readable: Readable) => Promise<ILookmlModel>,
    /**
     * @param {Partial<IWriteLookmlModel>} body
     */
    body: Partial<IWriteLookmlModel>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILookmlModel>(
      callback,
      'POST',
      '/lookml_models',
      null,
      body,
      options
    )
  }

  /**
   * ### Create Merge Query
   *
   * Creates a new merge query object.
   *
   * A merge query takes the results of one or more queries and combines (merges) the results
   * according to field mapping definitions. The result is similar to a SQL left outer join.
   *
   * A merge query can merge results of queries from different SQL databases.
   *
   * The order that queries are defined in the source_queries array property is significant. The
   * first query in the array defines the primary key into which the results of subsequent
   * queries will be merged.
   *
   * Like model/view query objects, merge queries are immutable and have structural identity - if
   * you make a request to create a new merge query that is identical to an existing merge query,
   * the existing merge query will be returned instead of creating a duplicate. Conversely, any
   * change to the contents of a merge query will produce a new object with a new id.
   *
   * POST /merge_queries -> IMergeQuery
   */
  async create_merge_query(
    callback: (readable: Readable) => Promise<IMergeQuery>,
    /**
     * @param {Partial<IWriteMergeQuery>} body
     */
    body?: Partial<IWriteMergeQuery>,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IMergeQuery>(
      callback,
      'POST',
      '/merge_queries',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a model set with the specified information. Model sets are used by Roles.
   *
   * POST /model_sets -> IModelSet
   */
  async create_model_set(
    callback: (readable: Readable) => Promise<IModelSet>,
    /**
     * @param {Partial<IWriteModelSet>} body
     */
    body: Partial<IWriteModelSet>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IModelSet>(
      callback,
      'POST',
      '/model_sets',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a OIDC test configuration.
   *
   * POST /oidc_test_configs -> IOIDCConfig
   */
  async create_oidc_test_config(
    callback: (readable: Readable) => Promise<IOIDCConfig>,
    /**
     * @param {Partial<IWriteOIDCConfig>} body
     */
    body: Partial<IWriteOIDCConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IOIDCConfig>(
      callback,
      'POST',
      '/oidc_test_configs',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a permission set with the specified information. Permission sets are used by Roles.
   *
   * POST /permission_sets -> IPermissionSet
   */
  async create_permission_set(
    callback: (readable: Readable) => Promise<IPermissionSet>,
    /**
     * @param {Partial<IWritePermissionSet>} body
     */
    body: Partial<IWritePermissionSet>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IPermissionSet>(
      callback,
      'POST',
      '/permission_sets',
      null,
      body,
      options
    )
  }

  /**
   * ### Create A Project
   *
   * dev mode required.
   * - Call `update_session` to select the 'dev' workspace.
   *
   * `name` is required.
   * `git_remote_url` is not allowed. To configure Git for the newly created project, follow the instructions in `update_project`.
   *
   * POST /projects -> IProject
   */
  async create_project(
    callback: (readable: Readable) => Promise<IProject>,
    /**
     * @param {Partial<IWriteProject>} body
     */
    body: Partial<IWriteProject>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IProject>(
      callback,
      'POST',
      '/projects',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a query.
   *
   * This allows you to create a new query that you can later run. Looker queries are immutable once created
   * and are not deleted. If you create a query that is exactly like an existing query then the existing query
   * will be returned and no new query will be created. Whether a new query is created or not, you can use
   * the 'id' in the returned query with the 'run' method.
   *
   * The query parameters are passed as json in the body of the request.
   *
   * POST /queries -> IQuery
   */
  async create_query(
    callback: (readable: Readable) => Promise<IQuery>,
    /**
     * @param {Partial<IWriteQuery>} body
     */
    body: Partial<IWriteQuery>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IQuery>(
      callback,
      'POST',
      '/queries',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a new task to render an existing query to an image.
   *
   * Returns a render task object.
   * To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task).
   * Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).
   *
   * POST /render_tasks/queries/{query_id}/{result_format} -> IRenderTask
   */
  async create_query_render_task(
    callback: (readable: Readable) => Promise<IRenderTask>,
    /**
     * @param {number} query_id Id of the query to render
     */
    query_id: number,
    /**
     * @param {string} result_format Output type: png or jpg
     */
    result_format: string,
    /**
     * @param {number} width Output width in pixels
     */
    width: number,
    /**
     * @param {number} height Output height in pixels
     */
    height: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    result_format = encodeParam(result_format)
    return this.authStream<IRenderTask>(
      callback,
      'POST',
      `/render_tasks/queries/${query_id}/${result_format}`,
      { fields, height, width },
      null,
      options
    )
  }

  /**
   * ### Create an async query task
   *
   * Creates a query task (job) to run a previously created query asynchronously. Returns a Query Task ID.
   *
   * Use [query_task(query_task_id)](#!/Query/query_task) to check the execution status of the query task.
   * After the query task status reaches "Complete", use [query_task_results(query_task_id)](#!/Query/query_task_results) to fetch the results of the query.
   *
   * POST /query_tasks -> IQueryTask
   */
  async create_query_task(
    callback: (readable: Readable) => Promise<IQueryTask>,
    request: IRequestCreateQueryTask,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IQueryTask>(
      callback,
      'POST',
      '/query_tasks',
      {
        apply_formatting: request.apply_formatting,
        apply_vis: request.apply_vis,
        cache: request.cache,
        cache_only: request.cache_only,
        fields: request.fields,
        force_production: request.force_production,
        generate_drill_links: request.generate_drill_links,
        image_height: request.image_height,
        image_width: request.image_width,
        limit: request.limit,
        path_prefix: request.path_prefix,
        rebuild_pdts: request.rebuild_pdts,
        server_table_calcs: request.server_table_calcs,
      },
      request.body,
      options
    )
  }

  /**
   * ### Create a role with the specified information.
   *
   * POST /roles -> IRole
   */
  async create_role(
    callback: (readable: Readable) => Promise<IRole>,
    /**
     * @param {Partial<IWriteRole>} body
     */
    body: Partial<IWriteRole>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IRole>(
      callback,
      'POST',
      '/roles',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a SAML test configuration.
   *
   * POST /saml_test_configs -> ISamlConfig
   */
  async create_saml_test_config(
    callback: (readable: Readable) => Promise<ISamlConfig>,
    /**
     * @param {Partial<IWriteSamlConfig>} body
     */
    body: Partial<IWriteSamlConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISamlConfig>(
      callback,
      'POST',
      '/saml_test_configs',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a Scheduled Plan
   *
   * Create a scheduled plan to render a Look or Dashboard on a recurring schedule.
   *
   * To create a scheduled plan, you MUST provide values for the following fields:
   * `name`
   * and
   * `look_id`, `dashboard_id`, `lookml_dashboard_id`, or `query_id`
   * and
   * `cron_tab` or `datagroup`
   * and
   * at least one scheduled_plan_destination
   *
   * A scheduled plan MUST have at least one scheduled_plan_destination defined.
   *
   * When `look_id` is set, `require_no_results`, `require_results`, and `require_change` are all required.
   *
   * If `create_scheduled_plan` fails with a 422 error, be sure to look at the error messages in the response which will explain exactly what fields are missing or values that are incompatible.
   *
   * The queries that provide the data for the look or dashboard are run in the context of user account that owns the scheduled plan.
   *
   * When `run_as_recipient` is `false` or not specified, the queries that provide the data for the
   * look or dashboard are run in the context of user account that owns the scheduled plan.
   *
   * When `run_as_recipient` is `true` and all the email recipients are Looker user accounts, the
   * queries are run in the context of each recipient, so different recipients may see different
   * data from the same scheduled render of a look or dashboard. For more details, see [Run As Recipient](https://looker.com/docs/r/admin/run-as-recipient).
   *
   * Admins can create and modify scheduled plans on behalf of other users by specifying a user id.
   * Non-admin users may not create or modify scheduled plans by or for other users.
   *
   * #### Email Permissions:
   *
   * For details about permissions required to schedule delivery to email and the safeguards
   * Looker offers to protect against sending to unauthorized email destinations, see [Email Domain Whitelist for Scheduled Looks](https://docs.looker.com/r/api/embed-permissions).
   *
   *
   * #### Scheduled Plan Destination Formats
   *
   * Scheduled plan destinations must specify the data format to produce and send to the destination.
   *
   * Formats:
   *
   * | format | Description
   * | :-----------: | :--- |
   * | json | A JSON object containing a `data` property which contains an array of JSON objects, one per row. No metadata.
   * | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
   * | inline_json | Same as the JSON format, except that the `data` property is a string containing JSON-escaped row data. Additional properties describe the data operation. This format is primarily used to send data to web hooks so that the web hook doesn't have to re-encode the JSON row data in order to pass it on to its ultimate destination.
   * | csv | Comma separated values with a header
   * | txt | Tab separated values with a header
   * | html | Simple html
   * | xlsx | MS Excel spreadsheet
   * | wysiwyg_pdf | Dashboard rendered in a tiled layout to produce a PDF document
   * | assembled_pdf | Dashboard rendered in a single column layout to produce a PDF document
   * | wysiwyg_png | Dashboard rendered in a tiled layout to produce a PNG image
   * ||
   *
   * Valid formats vary by destination type and source object. `wysiwyg_pdf` is only valid for dashboards, for example.
   *
   * POST /scheduled_plans -> IScheduledPlan
   */
  async create_scheduled_plan(
    callback: (readable: Readable) => Promise<IScheduledPlan>,
    /**
     * @param {Partial<IWriteScheduledPlan>} body
     */
    body: Partial<IWriteScheduledPlan>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IScheduledPlan>(
      callback,
      'POST',
      '/scheduled_plans',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a space with specified information.
   *
   * Caller must have permission to edit the parent space and to create spaces, otherwise the request
   * returns 404 Not Found.
   *
   * POST /spaces -> ISpace
   */
  async create_space(
    callback: (readable: Readable) => Promise<ISpace>,
    /**
     * @param {Partial<ICreateSpace>} body
     */
    body: Partial<ICreateSpace>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISpace>(
      callback,
      'POST',
      '/spaces',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a SQL Runner Query
   *
   * Either the `connection_name` or `model_name` parameter MUST be provided.
   *
   * POST /sql_queries -> ISqlQuery
   */
  async create_sql_query(
    callback: (readable: Readable) => Promise<ISqlQuery>,
    /**
     * @param {Partial<ISqlQueryCreate>} body
     */
    body: Partial<ISqlQueryCreate>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISqlQuery>(
      callback,
      'POST',
      '/sql_queries',
      null,
      body,
      options
    )
  }

  /**
   * ### Create SSO Embed URL
   *
   * Creates an SSO embed URL and cryptographically signs it with an embed secret.
   * This signed URL can then be used to instantiate a Looker embed session in a PBL web application.
   * Do not make any modifications to this URL - any change may invalidate the signature and
   * cause the URL to fail to load a Looker embed session.
   *
   * A signed SSO embed URL can only be used once. After it has been used to request a page from the
   * Looker server, the URL is invalid. Future requests using the same URL will fail. This is to prevent
   * 'replay attacks'.
   *
   * The `target_url` property must be a complete URL of a Looker UI page - scheme, hostname, path and query params.
   * To load a dashboard with id 56 and with a filter of `Date=1 years`, the looker URL would look like `https:/myname.looker.com/dashboards/56?Date=1%20years`.
   * The best way to obtain this target_url is to navigate to the desired Looker page in your web browser,
   * copy the URL shown in the browser address bar and paste it into the `target_url` property as a quoted string value in this API request.
   *
   * Permissions for the embed user are defined by the groups in which the embed user is a member (group_ids property)
   * and the lists of models and permissions assigned to the embed user.
   * At a minimum, you must provide values for either the group_ids property, or both the models and permissions properties.
   * These properties are additive; an embed user can be a member of certain groups AND be granted access to models and permissions.
   *
   * The embed user's access is the union of permissions granted by the group_ids, models, and permissions properties.
   *
   * This function does not strictly require all group_ids, user attribute names, or model names to exist at the moment the
   * SSO embed url is created. Unknown group_id, user attribute names or model names will be passed through to the output URL.
   * To diagnose potential problems with an SSO embed URL, you can copy the signed URL into the Embed URI Validator text box in `<your looker instance>/admin/embed`.
   *
   * The `secret_id` parameter is optional. If specified, its value must be the id of an active secret defined in the Looker instance.
   * if not specified, the URL will be signed using the newest active secret defined in the Looker instance.
   *
   * #### Security Note
   * Protect this signed URL as you would an access token or password credentials - do not write
   * it to disk, do not pass it to a third party, and only pass it through a secure HTTPS
   * encrypted transport.
   *
   * POST /embed/sso_url -> IEmbedUrlResponse
   */
  async create_sso_embed_url(
    callback: (readable: Readable) => Promise<IEmbedUrlResponse>,
    /**
     * @param {Partial<IEmbedSsoParams>} body
     */
    body: Partial<IEmbedSsoParams>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IEmbedUrlResponse>(
      callback,
      'POST',
      '/embed/sso_url',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a theme
   *
   * Creates a new theme object, returning the theme details, including the created id.
   *
   * If `settings` are not specified, the default theme settings will be copied into the new theme.
   *
   * The theme `name` can only contain alphanumeric characters or underscores. Theme names should not contain any confidential information, such as customer names.
   *
   * **Update** an existing theme with [Update Theme](#!/Theme/update_theme)
   *
   * **Permanently delete** an existing theme with [Delete Theme](#!/Theme/delete_theme)
   *
   * For more information, see [Creating and Applying Themes](https://looker.com/docs/r/admin/themes).
   *
   * **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.
   *
   * POST /themes -> ITheme
   */
  async create_theme(
    callback: (readable: Readable) => Promise<ITheme>,
    /**
     * @param {Partial<IWriteTheme>} body
     */
    body: Partial<IWriteTheme>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ITheme>(
      callback,
      'POST',
      '/themes',
      null,
      body,
      options
    )
  }

  /**
   * ### Create a user with the specified information.
   *
   * POST /users -> IUser
   */
  async create_user(
    callback: (readable: Readable) => Promise<IUser>,
    /**
     * @param {Partial<IWriteUser>} body
     */
    body?: Partial<IWriteUser>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUser>(
      callback,
      'POST',
      '/users',
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a new user attribute
   *
   * Permission information for a user attribute is conveyed through the `can` and `user_can_edit` fields.
   * The `user_can_edit` field indicates whether an attribute is user-editable _anywhere_ in the application.
   * The `can` field gives more granular access information, with the `set_value` child field indicating whether
   * an attribute's value can be set by [Setting the User Attribute User Value](#!/User/set_user_attribute_user_value).
   *
   * Note: `name` and `label` fields must be unique across all user attributes in the Looker instance.
   * Attempting to create a new user attribute with a name or label that duplicates an existing
   * user attribute will fail with a 422 error.
   *
   * POST /user_attributes -> IUserAttribute
   */
  async create_user_attribute(
    callback: (readable: Readable) => Promise<IUserAttribute>,
    /**
     * @param {Partial<IWriteUserAttribute>} body
     */
    body: Partial<IWriteUserAttribute>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserAttribute>(
      callback,
      'POST',
      '/user_attributes',
      { fields },
      body,
      options
    )
  }

  /**
   * ### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.
   *
   * POST /users/{user_id}/credentials_api3 -> ICredentialsApi3
   */
  async create_user_credentials_api3(
    callback: (readable: Readable) => Promise<ICredentialsApi3>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {Partial<ICredentialsApi3>} body
     */
    body?: Partial<ICredentialsApi3>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsApi3>(
      callback,
      'POST',
      `/users/${user_id}/credentials_api3`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Email/password login information for the specified user.
   *
   * POST /users/{user_id}/credentials_email -> ICredentialsEmail
   */
  async create_user_credentials_email(
    callback: (readable: Readable) => Promise<ICredentialsEmail>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {Partial<IWriteCredentialsEmail>} body
     */
    body: Partial<IWriteCredentialsEmail>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsEmail>(
      callback,
      'POST',
      `/users/${user_id}/credentials_email`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Create a password reset token.
   * This will create a cryptographically secure random password reset token for the user.
   * If the user already has a password reset token then this invalidates the old token and creates a new one.
   * The token is expressed as the 'password_reset_url' of the user's email/password credential object.
   * This takes an optional 'expires' param to indicate if the new token should be an expiring token.
   * Tokens that expire are typically used for self-service password resets for existing users.
   * Invitation emails for new users typically are not set to expire.
   * The expire period is always 60 minutes when expires is enabled.
   * This method can be called with an empty body.
   *
   * POST /users/{user_id}/credentials_email/password_reset -> ICredentialsEmail
   */
  async create_user_credentials_email_password_reset(
    callback: (readable: Readable) => Promise<ICredentialsEmail>,
    request: IRequestCreateUserCredentialsEmailPasswordReset,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsEmail>(
      callback,
      'POST',
      `/users/${request.user_id}/credentials_email/password_reset`,
      { expires: request.expires, fields: request.fields },
      null,
      options
    )
  }

  /**
   * ### Two-factor login information for the specified user.
   *
   * POST /users/{user_id}/credentials_totp -> ICredentialsTotp
   */
  async create_user_credentials_totp(
    callback: (readable: Readable) => Promise<ICredentialsTotp>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {Partial<ICredentialsTotp>} body
     */
    body?: Partial<ICredentialsTotp>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsTotp>(
      callback,
      'POST',
      `/users/${user_id}/credentials_totp`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Get the current status and content of custom welcome emails
   *
   * GET /custom_welcome_email -> ICustomWelcomeEmail
   */
  async custom_welcome_email(
    callback: (readable: Readable) => Promise<ICustomWelcomeEmail>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICustomWelcomeEmail>(
      callback,
      'GET',
      '/custom_welcome_email',
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about a dashboard
   *
   * Returns the full details of the identified dashboard object
   *
   * Get a **summary list** of all active dashboards with [all_dashboards()](#!/Dashboard/all_dashboards)
   *
   * You can **Search** for dashboards with [search_dashboards()](#!/Dashboard/search_dashboards)
   *
   * GET /dashboards/{dashboard_id} -> IDashboard
   */
  async dashboard(
    callback: (readable: Readable) => Promise<IDashboard>,
    /**
     * @param {string} dashboard_id Id of dashboard
     */
    dashboard_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_id = encodeParam(dashboard_id)
    return this.authStream<IDashboard>(
      callback,
      'GET',
      `/dashboards/${dashboard_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all the dashboard elements on a dashboard with a specific id.
   *
   * GET /dashboards/{dashboard_id}/dashboard_elements -> IDashboardElement[]
   */
  async dashboard_dashboard_elements(
    callback: (readable: Readable) => Promise<IDashboardElement[]>,
    /**
     * @param {string} dashboard_id Id of dashboard
     */
    dashboard_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_id = encodeParam(dashboard_id)
    return this.authStream<IDashboardElement[]>(
      callback,
      'GET',
      `/dashboards/${dashboard_id}/dashboard_elements`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all the dashboard filters on a dashboard with a specific id.
   *
   * GET /dashboards/{dashboard_id}/dashboard_filters -> IDashboardFilter[]
   */
  async dashboard_dashboard_filters(
    callback: (readable: Readable) => Promise<IDashboardFilter[]>,
    /**
     * @param {string} dashboard_id Id of dashboard
     */
    dashboard_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_id = encodeParam(dashboard_id)
    return this.authStream<IDashboardFilter[]>(
      callback,
      'GET',
      `/dashboards/${dashboard_id}/dashboard_filters`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all the dashboard elements on a dashboard with a specific id.
   *
   * GET /dashboards/{dashboard_id}/dashboard_layouts -> IDashboardLayout[]
   */
  async dashboard_dashboard_layouts(
    callback: (readable: Readable) => Promise<IDashboardLayout[]>,
    /**
     * @param {string} dashboard_id Id of dashboard
     */
    dashboard_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_id = encodeParam(dashboard_id)
    return this.authStream<IDashboardLayout[]>(
      callback,
      'GET',
      `/dashboards/${dashboard_id}/dashboard_layouts`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about the dashboard element with a specific id.
   *
   * GET /dashboard_elements/{dashboard_element_id} -> IDashboardElement
   */
  async dashboard_element(
    callback: (readable: Readable) => Promise<IDashboardElement>,
    /**
     * @param {string} dashboard_element_id Id of dashboard element
     */
    dashboard_element_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_element_id = encodeParam(dashboard_element_id)
    return this.authStream<IDashboardElement>(
      callback,
      'GET',
      `/dashboard_elements/${dashboard_element_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about the dashboard filters with a specific id.
   *
   * GET /dashboard_filters/{dashboard_filter_id} -> IDashboardFilter
   */
  async dashboard_filter(
    callback: (readable: Readable) => Promise<IDashboardFilter>,
    /**
     * @param {string} dashboard_filter_id Id of dashboard filters
     */
    dashboard_filter_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_filter_id = encodeParam(dashboard_filter_id)
    return this.authStream<IDashboardFilter>(
      callback,
      'GET',
      `/dashboard_filters/${dashboard_filter_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about the dashboard layouts with a specific id.
   *
   * GET /dashboard_layouts/{dashboard_layout_id} -> IDashboardLayout
   */
  async dashboard_layout(
    callback: (readable: Readable) => Promise<IDashboardLayout>,
    /**
     * @param {string} dashboard_layout_id Id of dashboard layouts
     */
    dashboard_layout_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_layout_id = encodeParam(dashboard_layout_id)
    return this.authStream<IDashboardLayout>(
      callback,
      'GET',
      `/dashboard_layouts/${dashboard_layout_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about the dashboard elements with a specific id.
   *
   * GET /dashboard_layout_components/{dashboard_layout_component_id} -> IDashboardLayoutComponent
   */
  async dashboard_layout_component(
    callback: (readable: Readable) => Promise<IDashboardLayoutComponent>,
    /**
     * @param {string} dashboard_layout_component_id Id of dashboard layout component
     */
    dashboard_layout_component_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_layout_component_id = encodeParam(dashboard_layout_component_id)
    return this.authStream<IDashboardLayoutComponent>(
      callback,
      'GET',
      `/dashboard_layout_components/${dashboard_layout_component_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all the dashboard layout components for a dashboard layout with a specific id.
   *
   * GET /dashboard_layouts/{dashboard_layout_id}/dashboard_layout_components -> IDashboardLayoutComponent[]
   */
  async dashboard_layout_dashboard_layout_components(
    callback: (readable: Readable) => Promise<IDashboardLayoutComponent[]>,
    /**
     * @param {string} dashboard_layout_id Id of dashboard layout component
     */
    dashboard_layout_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_layout_id = encodeParam(dashboard_layout_id)
    return this.authStream<IDashboardLayoutComponent[]>(
      callback,
      'GET',
      `/dashboard_layouts/${dashboard_layout_id}/dashboard_layout_components`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get lookml of a UDD
   *
   * Returns a JSON object that contains the dashboard id and the full lookml
   *
   * GET /dashboards/lookml/{dashboard_id} -> IDashboardLookml
   */
  async dashboard_lookml(
    callback: (readable: Readable) => Promise<IDashboardLookml>,
    /**
     * @param {string} dashboard_id Id of dashboard
     */
    dashboard_id: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_id = encodeParam(dashboard_id)
    return this.authStream<IDashboardLookml>(
      callback,
      'GET',
      `/dashboards/lookml/${dashboard_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about a datagroup.
   *
   * GET /datagroups/{datagroup_id} -> IDatagroup
   */
  async datagroup(
    callback: (readable: Readable) => Promise<IDatagroup>,
    /**
     * @param {string} datagroup_id ID of datagroup.
     */
    datagroup_id: string,
    options?: Partial<ITransportSettings>
  ) {
    datagroup_id = encodeParam(datagroup_id)
    return this.authStream<IDatagroup>(
      callback,
      'GET',
      `/datagroups/${datagroup_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get the default color collection
   *
   * Use this to retrieve the default Color Collection.
   *
   * Set the default color collection with [ColorCollection](#!/ColorCollection/set_default_color_collection)
   *
   * GET /color_collections/default -> IColorCollection
   */
  async default_color_collection(
    callback: (readable: Readable) => Promise<IColorCollection>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IColorCollection>(
      callback,
      'GET',
      '/color_collections/default',
      null,
      null,
      options
    )
  }

  /**
   * ### Get the default theme
   *
   * Returns the active theme object set as the default.
   *
   * The **default** theme name can be set in the UI on the Admin|Theme UI page
   *
   * The optional `ts` parameter can specify a different timestamp than "now." If specified, it returns the default theme at the time indicated.
   *
   * GET /themes/default -> ITheme
   */
  async default_theme(
    callback: (readable: Readable) => Promise<ITheme>,
    /**
     * @param {Date} ts Timestamp representing the target datetime for the active period. Defaults to 'now'
     */
    ts?: Date,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ITheme>(
      callback,
      'GET',
      '/themes/default',
      { ts },
      null,
      options
    )
  }

  /**
   * ### Delete a custom color collection by id
   *
   * This operation permanently deletes the identified **Custom** color collection.
   *
   * **Standard** color collections cannot be deleted
   *
   * Because multiple color collections can have the same label, they must be deleted by ID, not name.
   * **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return `Not Found` (404) errors.
   *
   * DELETE /color_collections/{collection_id} -> string
   */
  async delete_color_collection(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} collection_id Id of Color Collection
     */
    collection_id: string,
    options?: Partial<ITransportSettings>
  ) {
    collection_id = encodeParam(collection_id)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/color_collections/${collection_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a connection.
   *
   * DELETE /connections/{connection_name} -> string
   */
  async delete_connection(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} connection_name Name of connection
     */
    connection_name: string,
    options?: Partial<ITransportSettings>
  ) {
    connection_name = encodeParam(connection_name)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/connections/${connection_name}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a connection override.
   *
   * DELETE /connections/{connection_name}/connection_override/{override_context} -> string
   */
  async delete_connection_override(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} connection_name Name of connection
     */
    connection_name: string,
    /**
     * @param {string} override_context Context of connection override
     */
    override_context: string,
    options?: Partial<ITransportSettings>
  ) {
    connection_name = encodeParam(connection_name)
    override_context = encodeParam(override_context)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/connections/${connection_name}/connection_override/${override_context}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete favorite content
   *
   * DELETE /content_favorite/{content_favorite_id} -> string
   */
  async delete_content_favorite(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} content_favorite_id Id of favorite content
     */
    content_favorite_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/content_favorite/${content_favorite_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Remove content metadata access.
   *
   * DELETE /content_metadata_access/{content_metadata_access_id} -> string
   */
  async delete_content_metadata_access(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} content_metadata_access_id Id of content metadata access
     */
    content_metadata_access_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/content_metadata_access/${content_metadata_access_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete the dashboard with the specified id
   *
   * Permanently **deletes** a dashboard. (The dashboard cannot be recovered after this operation.)
   *
   * "Soft" delete or hide a dashboard by setting its `deleted` status to `True` with [update_dashboard()](#!/Dashboard/update_dashboard).
   *
   * Note: When a dashboard is deleted in the UI, it is soft deleted. Use this API call to permanently remove it, if desired.
   *
   * DELETE /dashboards/{dashboard_id} -> string
   */
  async delete_dashboard(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} dashboard_id Id of dashboard
     */
    dashboard_id: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_id = encodeParam(dashboard_id)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/dashboards/${dashboard_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a dashboard element with a specific id.
   *
   * DELETE /dashboard_elements/{dashboard_element_id} -> string
   */
  async delete_dashboard_element(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} dashboard_element_id Id of dashboard element
     */
    dashboard_element_id: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_element_id = encodeParam(dashboard_element_id)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/dashboard_elements/${dashboard_element_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a dashboard filter with a specific id.
   *
   * DELETE /dashboard_filters/{dashboard_filter_id} -> string
   */
  async delete_dashboard_filter(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} dashboard_filter_id Id of dashboard filter
     */
    dashboard_filter_id: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_filter_id = encodeParam(dashboard_filter_id)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/dashboard_filters/${dashboard_filter_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a dashboard layout with a specific id.
   *
   * DELETE /dashboard_layouts/{dashboard_layout_id} -> string
   */
  async delete_dashboard_layout(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} dashboard_layout_id Id of dashboard layout
     */
    dashboard_layout_id: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_layout_id = encodeParam(dashboard_layout_id)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/dashboard_layouts/${dashboard_layout_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete the folder with a specific id including any children folders.
   * **DANGER** this will delete all looks and dashboards in the folder.
   *
   * DELETE /folders/{folder_id} -> string
   */
  async delete_folder(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} folder_id Id of folder
     */
    folder_id: string,
    options?: Partial<ITransportSettings>
  ) {
    folder_id = encodeParam(folder_id)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/folders/${folder_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete the specified Git Branch
   *
   * Delete git branch specified in branch_name path param from local and remote of specified project repository
   *
   * DELETE /projects/{project_id}/git_branch/{branch_name} -> string
   */
  async delete_git_branch(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} branch_name Branch Name
     */
    branch_name: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    branch_name = encodeParam(branch_name)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/projects/${project_id}/git_branch/${branch_name}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Deletes a group (admin only).
   *
   * DELETE /groups/{group_id} -> string
   */
  async delete_group(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} group_id Id of group
     */
    group_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/groups/${group_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Removes a group from a group.
   *
   * DELETE /groups/{group_id}/groups/{deleting_group_id} -> void
   */
  async delete_group_from_group(
    callback: (readable: Readable) => Promise<void>,
    /**
     * @param {number} group_id Id of group
     */
    group_id: number,
    /**
     * @param {number} deleting_group_id Id of group to delete
     */
    deleting_group_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<void>(
      callback,
      'DELETE',
      `/groups/${group_id}/groups/${deleting_group_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Removes a user from a group.
   *
   * DELETE /groups/{group_id}/users/{user_id} -> void
   */
  async delete_group_user(
    callback: (readable: Readable) => Promise<void>,
    /**
     * @param {number} group_id Id of group
     */
    group_id: number,
    /**
     * @param {number} user_id Id of user to remove from group
     */
    user_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<void>(
      callback,
      'DELETE',
      `/groups/${group_id}/users/${user_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a homepage.
   *
   * DELETE /homepages/{homepage_id} -> string
   */
  async delete_homepage(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} homepage_id Id of homepage
     */
    homepage_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/homepages/${homepage_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a homepage item.
   *
   * DELETE /homepage_items/{homepage_item_id} -> string
   */
  async delete_homepage_item(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} homepage_item_id Id of homepage_item
     */
    homepage_item_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/homepage_items/${homepage_item_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a homepage section.
   *
   * DELETE /homepage_sections/{homepage_section_id} -> string
   */
  async delete_homepage_section(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} homepage_section_id Id of homepage_section
     */
    homepage_section_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/homepage_sections/${homepage_section_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a Integration Hub.
   *
   * DELETE /integration_hubs/{integration_hub_id} -> string
   */
  async delete_integration_hub(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} integration_hub_id Id of integration_hub
     */
    integration_hub_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/integration_hubs/${integration_hub_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Permanently Delete a Look
   *
   * This operation **permanently** removes a look from the Looker database.
   *
   * NOTE: There is no "undo" for this kind of delete.
   *
   * For information about soft-delete (which can be undone) see [update_look()](#!/Look/update_look).
   *
   * DELETE /looks/{look_id} -> string
   */
  async delete_look(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} look_id Id of look
     */
    look_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/looks/${look_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a lookml model.
   *
   * DELETE /lookml_models/{lookml_model_name} -> string
   */
  async delete_lookml_model(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} lookml_model_name Name of lookml model.
     */
    lookml_model_name: string,
    options?: Partial<ITransportSettings>
  ) {
    lookml_model_name = encodeParam(lookml_model_name)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/lookml_models/${lookml_model_name}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete the model set with a specific id.
   *
   * DELETE /model_sets/{model_set_id} -> string
   */
  async delete_model_set(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} model_set_id id of model set
     */
    model_set_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/model_sets/${model_set_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a OIDC test configuration.
   *
   * DELETE /oidc_test_configs/{test_slug} -> string
   */
  async delete_oidc_test_config(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} test_slug Slug of test config
     */
    test_slug: string,
    options?: Partial<ITransportSettings>
  ) {
    test_slug = encodeParam(test_slug)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/oidc_test_configs/${test_slug}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete the permission set with a specific id.
   *
   * DELETE /permission_sets/{permission_set_id} -> string
   */
  async delete_permission_set(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} permission_set_id Id of permission set
     */
    permission_set_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/permission_sets/${permission_set_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Repository Credential for a remote dependency
   *
   * Admin required.
   *
   * `root_project_id` is required.
   * `credential_id` is required.
   *
   * DELETE /projects/{root_project_id}/credential/{credential_id} -> string
   */
  async delete_repository_credential(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} root_project_id Root Project Id
     */
    root_project_id: string,
    /**
     * @param {string} credential_id Credential Id
     */
    credential_id: string,
    options?: Partial<ITransportSettings>
  ) {
    root_project_id = encodeParam(root_project_id)
    credential_id = encodeParam(credential_id)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/projects/${root_project_id}/credential/${credential_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete the role with a specific id.
   *
   * DELETE /roles/{role_id} -> string
   */
  async delete_role(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} role_id id of role
     */
    role_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/roles/${role_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a SAML test configuration.
   *
   * DELETE /saml_test_configs/{test_slug} -> string
   */
  async delete_saml_test_config(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} test_slug Slug of test config
     */
    test_slug: string,
    options?: Partial<ITransportSettings>
  ) {
    test_slug = encodeParam(test_slug)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/saml_test_configs/${test_slug}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a Scheduled Plan
   *
   * Normal users can only delete their own scheduled plans.
   * Admins can delete other users' scheduled plans.
   * This delete cannot be undone.
   *
   * DELETE /scheduled_plans/{scheduled_plan_id} -> string
   */
  async delete_scheduled_plan(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} scheduled_plan_id Scheduled Plan Id
     */
    scheduled_plan_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/scheduled_plans/${scheduled_plan_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete the space with a specific id including any children spaces.
   * **DANGER** this will delete all looks and dashboards in the space.
   *
   * DELETE /spaces/{space_id} -> string
   */
  async delete_space(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} space_id Id of space
     */
    space_id: string,
    options?: Partial<ITransportSettings>
  ) {
    space_id = encodeParam(space_id)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/spaces/${space_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a specific theme by id
   *
   * This operation permanently deletes the identified theme from the database.
   *
   * Because multiple themes can have the same name (with different activation time spans) themes can only be deleted by ID.
   *
   * All IDs associated with a theme name can be retrieved by searching for the theme name with [Theme Search](#!/Theme/search).
   *
   * **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.
   *
   * DELETE /themes/{theme_id} -> string
   */
  async delete_theme(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} theme_id Id of theme
     */
    theme_id: string,
    options?: Partial<ITransportSettings>
  ) {
    theme_id = encodeParam(theme_id)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/themes/${theme_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete the user with a specific id.
   *
   * **DANGER** this will delete the user and all looks and other information owned by the user.
   *
   * DELETE /users/{user_id} -> string
   */
  async delete_user(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id Id of user
     */
    user_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a user attribute (admin only).
   *
   * DELETE /user_attributes/{user_attribute_id} -> string
   */
  async delete_user_attribute(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_attribute_id Id of user_attribute
     */
    user_attribute_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/user_attributes/${user_attribute_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Remove a user attribute value from a group.
   *
   * DELETE /groups/{group_id}/attribute_values/{user_attribute_id} -> void
   */
  async delete_user_attribute_group_value(
    callback: (readable: Readable) => Promise<void>,
    /**
     * @param {number} group_id Id of group
     */
    group_id: number,
    /**
     * @param {number} user_attribute_id Id of user attribute
     */
    user_attribute_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<void>(
      callback,
      'DELETE',
      `/groups/${group_id}/attribute_values/${user_attribute_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Delete a user attribute value from a user's account settings.
   *
   * After the user attribute value is deleted from the user's account settings, subsequent requests
   * for the user attribute value for this user will draw from the user's groups or the default
   * value of the user attribute. See [Get User Attribute Values](#!/User/user_attribute_user_values) for more
   * information about how user attribute values are resolved.
   *
   * DELETE /users/{user_id}/attribute_values/{user_attribute_id} -> void
   */
  async delete_user_attribute_user_value(
    callback: (readable: Readable) => Promise<void>,
    /**
     * @param {number} user_id Id of user
     */
    user_id: number,
    /**
     * @param {number} user_attribute_id Id of user attribute
     */
    user_attribute_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<void>(
      callback,
      'DELETE',
      `/users/${user_id}/attribute_values/${user_attribute_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.
   *
   * DELETE /users/{user_id}/credentials_api3/{credentials_api3_id} -> string
   */
  async delete_user_credentials_api3(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {number} credentials_api3_id id of API 3 Credential
     */
    credentials_api3_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}/credentials_api3/${credentials_api3_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Email/password login information for the specified user.
   *
   * DELETE /users/{user_id}/credentials_email -> string
   */
  async delete_user_credentials_email(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}/credentials_email`,
      null,
      null,
      options
    )
  }

  /**
   * ### Embed login information for the specified user.
   *
   * DELETE /users/{user_id}/credentials_embed/{credentials_embed_id} -> string
   */
  async delete_user_credentials_embed(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {number} credentials_embed_id id of Embedding Credential
     */
    credentials_embed_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}/credentials_embed/${credentials_embed_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Google authentication login information for the specified user.
   *
   * DELETE /users/{user_id}/credentials_google -> string
   */
  async delete_user_credentials_google(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}/credentials_google`,
      null,
      null,
      options
    )
  }

  /**
   * ### LDAP login information for the specified user.
   *
   * DELETE /users/{user_id}/credentials_ldap -> string
   */
  async delete_user_credentials_ldap(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}/credentials_ldap`,
      null,
      null,
      options
    )
  }

  /**
   * ### Looker Openid login information for the specified user. Used by Looker Analysts.
   *
   * DELETE /users/{user_id}/credentials_looker_openid -> string
   */
  async delete_user_credentials_looker_openid(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}/credentials_looker_openid`,
      null,
      null,
      options
    )
  }

  /**
   * ### OpenID Connect (OIDC) authentication login information for the specified user.
   *
   * DELETE /users/{user_id}/credentials_oidc -> string
   */
  async delete_user_credentials_oidc(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}/credentials_oidc`,
      null,
      null,
      options
    )
  }

  /**
   * ### Saml authentication login information for the specified user.
   *
   * DELETE /users/{user_id}/credentials_saml -> string
   */
  async delete_user_credentials_saml(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}/credentials_saml`,
      null,
      null,
      options
    )
  }

  /**
   * ### Two-factor login information for the specified user.
   *
   * DELETE /users/{user_id}/credentials_totp -> string
   */
  async delete_user_credentials_totp(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}/credentials_totp`,
      null,
      null,
      options
    )
  }

  /**
   * ### Removes login lockout for the associated user.
   *
   * DELETE /user_login_lockout/{key} -> string
   */
  async delete_user_login_lockout(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} key The key associated with the locked user
     */
    key: string,
    options?: Partial<ITransportSettings>
  ) {
    key = encodeParam(key)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/user_login_lockout/${key}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Web login session for the specified user.
   *
   * DELETE /users/{user_id}/sessions/{session_id} -> string
   */
  async delete_user_session(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {number} session_id id of Web Login Session
     */
    session_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      `/users/${user_id}/sessions/${session_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Deploy LookML from this Development Mode Project to Production
   *
   * Git must have been configured, must be in dev mode and deploy permission required
   *
   * Deploy is a two / three step process
   * 1. Push commits in current branch of dev mode project to the production branch (origin/master).
   *    Note a. This step is skipped in read-only projects.
   *    Note b. If this step is unsuccessful for any reason (e.g. rejected non-fastforward because production branch has
   *              commits not in current branch), subsequent steps will be skipped.
   * 2. If this is the first deploy of this project, create the production project with git repository.
   * 3. Pull the production branch into the production project.
   *
   * POST /projects/{project_id}/deploy_to_production -> string
   */
  async deploy_to_production(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} project_id Id of project
     */
    project_id: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<string>(
      callback,
      'POST',
      `/projects/${project_id}/deploy_to_production`,
      null,
      null,
      options
    )
  }

  /**
   * ### Retrieve the value for whether or not digest emails is enabled
   *
   * GET /digest_emails_enabled -> IDigestEmails
   */
  async digest_emails_enabled(
    callback: (readable: Readable) => Promise<IDigestEmails>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDigestEmails>(
      callback,
      'GET',
      '/digest_emails_enabled',
      null,
      null,
      options
    )
  }

  /**
   * ### Fetch the given url and parse it as a SAML IdP metadata document and return the result.
   * Note that this requires that the url be public or at least at a location where the Looker instance
   * can fetch it without requiring any special authentication.
   *
   * POST /fetch_and_parse_saml_idp_metadata -> ISamlMetadataParseResult
   */
  async fetch_and_parse_saml_idp_metadata(
    callback: (readable: Readable) => Promise<ISamlMetadataParseResult>,
    /**
     * @param {Partial<string>} body
     */
    body: Partial<string>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISamlMetadataParseResult>(
      callback,
      'POST',
      '/fetch_and_parse_saml_idp_metadata',
      null,
      body,
      options
    )
  }

  /**
   * Returns the Integration form for presentation to the user.
   *
   * POST /integrations/{integration_id}/form -> IDataActionForm
   */
  async fetch_integration_form(
    callback: (readable: Readable) => Promise<IDataActionForm>,
    /**
     * @param {string} integration_id Id of integration
     */
    integration_id: string,
    options?: Partial<ITransportSettings>
  ) {
    integration_id = encodeParam(integration_id)
    return this.authStream<IDataActionForm>(
      callback,
      'POST',
      `/integrations/${integration_id}/form`,
      null,
      null,
      options
    )
  }

  /**
   * For some data actions, the remote server may supply a form requesting further user input. This endpoint takes a data action, asks the remote server to generate a form for it, and returns that form to you for presentation to the user.
   *
   * POST /data_actions/form -> IDataActionForm
   */
  async fetch_remote_data_action_form(
    callback: (readable: Readable) => Promise<IDataActionForm>,
    /**
     * @param {Partial<IDictionary<string>>} body
     */
    body: Partial<IDictionary<string>>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDataActionForm>(
      callback,
      'POST',
      '/data_actions/form',
      null,
      body,
      options
    )
  }

  /**
   * ### Get the specified Git Branch
   *
   * Returns the git branch specified in branch_name path param if it exists in the given project repository
   *
   * GET /projects/{project_id}/git_branch/{branch_name} -> IGitBranch
   */
  async find_git_branch(
    callback: (readable: Readable) => Promise<IGitBranch>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} branch_name Branch Name
     */
    branch_name: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    branch_name = encodeParam(branch_name)
    return this.authStream<IGitBranch>(
      callback,
      'GET',
      `/projects/${project_id}/git_branch/${branch_name}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about the folder with a specific id.
   *
   * GET /folders/{folder_id} -> IFolder
   */
  async folder(
    callback: (readable: Readable) => Promise<IFolder>,
    /**
     * @param {string} folder_id Id of folder
     */
    folder_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    folder_id = encodeParam(folder_id)
    return this.authStream<IFolder>(
      callback,
      'GET',
      `/folders/${folder_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the ancestors of a folder
   *
   * GET /folders/{folder_id}/ancestors -> IFolder[]
   */
  async folder_ancestors(
    callback: (readable: Readable) => Promise<IFolder[]>,
    /**
     * @param {string} folder_id Id of folder
     */
    folder_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    folder_id = encodeParam(folder_id)
    return this.authStream<IFolder[]>(
      callback,
      'GET',
      `/folders/${folder_id}/ancestors`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the children of a folder.
   *
   * GET /folders/{folder_id}/children -> IFolder[]
   */
  async folder_children(
    callback: (readable: Readable) => Promise<IFolder[]>,
    request: IRequestFolderChildren,
    options?: Partial<ITransportSettings>
  ) {
    request.folder_id = encodeParam(request.folder_id)
    return this.authStream<IFolder[]>(
      callback,
      'GET',
      `/folders/${request.folder_id}/children`,
      {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search the children of a folder
   *
   * GET /folders/{folder_id}/children/search -> IFolder[]
   */
  async folder_children_search(
    callback: (readable: Readable) => Promise<IFolder[]>,
    request: IRequestFolderChildrenSearch,
    options?: Partial<ITransportSettings>
  ) {
    request.folder_id = encodeParam(request.folder_id)
    return this.authStream<IFolder[]>(
      callback,
      'GET',
      `/folders/${request.folder_id}/children/search`,
      { fields: request.fields, name: request.name, sorts: request.sorts },
      null,
      options
    )
  }

  /**
   * ### Get the dashboards in a folder
   *
   * GET /folders/{folder_id}/dashboards -> IDashboard[]
   */
  async folder_dashboards(
    callback: (readable: Readable) => Promise<IDashboard[]>,
    /**
     * @param {string} folder_id Id of folder
     */
    folder_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    folder_id = encodeParam(folder_id)
    return this.authStream<IDashboard[]>(
      callback,
      'GET',
      `/folders/${folder_id}/dashboards`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the looks in a folder
   *
   * GET /folders/{folder_id}/looks -> ILookWithQuery[]
   */
  async folder_looks(
    callback: (readable: Readable) => Promise<ILookWithQuery[]>,
    /**
     * @param {string} folder_id Id of folder
     */
    folder_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    folder_id = encodeParam(folder_id)
    return this.authStream<ILookWithQuery[]>(
      callback,
      'GET',
      `/folders/${folder_id}/looks`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the parent of a folder
   *
   * GET /folders/{folder_id}/parent -> IFolder
   */
  async folder_parent(
    callback: (readable: Readable) => Promise<IFolder>,
    /**
     * @param {string} folder_id Id of folder
     */
    folder_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    folder_id = encodeParam(folder_id)
    return this.authStream<IFolder>(
      callback,
      'GET',
      `/folders/${folder_id}/parent`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Force all credentials_email users to reset their login passwords upon their next login.
   *
   * PUT /password_config/force_password_reset_at_next_login_for_all_users -> string
   */
  async force_password_reset_at_next_login_for_all_users(
    callback: (readable: Readable) => Promise<string>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'PUT',
      '/password_config/force_password_reset_at_next_login_for_all_users',
      null,
      null,
      options
    )
  }

  /**
   * ### Get all Repository Credentials for a project
   *
   * `root_project_id` is required.
   *
   * GET /projects/{root_project_id}/credentials -> IRepositoryCredential[]
   */
  async get_all_repository_credentials(
    callback: (readable: Readable) => Promise<IRepositoryCredential[]>,
    /**
     * @param {string} root_project_id Root Project Id
     */
    root_project_id: string,
    options?: Partial<ITransportSettings>
  ) {
    root_project_id = encodeParam(root_project_id)
    return this.authStream<IRepositoryCredential[]>(
      callback,
      'GET',
      `/projects/${root_project_id}/credentials`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get the Current Git Branch
   *
   * Returns the git branch currently checked out in the given project repository
   *
   * GET /projects/{project_id}/git_branch -> IGitBranch
   */
  async git_branch(
    callback: (readable: Readable) => Promise<IGitBranch>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IGitBranch>(
      callback,
      'GET',
      `/projects/${project_id}/git_branch`,
      null,
      null,
      options
    )
  }

  /**
   * ### Git Deploy Key
   *
   * Returns the ssh public key previously created for a project's git repository.
   *
   * GET /projects/{project_id}/git/deploy_key -> string
   */
  async git_deploy_key(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<string>(
      callback,
      'GET',
      `/projects/${project_id}/git/deploy_key`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about a group.
   *
   * GET /groups/{group_id} -> IGroup
   */
  async group(
    callback: (readable: Readable) => Promise<IGroup>,
    /**
     * @param {number} group_id Id of group
     */
    group_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IGroup>(
      callback,
      'GET',
      `/groups/${group_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about a homepage.
   *
   * GET /homepages/{homepage_id} -> IHomepage
   */
  async homepage(
    callback: (readable: Readable) => Promise<IHomepage>,
    /**
     * @param {number} homepage_id Id of homepage
     */
    homepage_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepage>(
      callback,
      'GET',
      `/homepages/${homepage_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about a homepage item.
   *
   * GET /homepage_items/{homepage_item_id} -> IHomepageItem
   */
  async homepage_item(
    callback: (readable: Readable) => Promise<IHomepageItem>,
    /**
     * @param {number} homepage_item_id Id of homepage item
     */
    homepage_item_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepageItem>(
      callback,
      'GET',
      `/homepage_items/${homepage_item_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about a homepage section.
   *
   * GET /homepage_sections/{homepage_section_id} -> IHomepageSection
   */
  async homepage_section(
    callback: (readable: Readable) => Promise<IHomepageSection>,
    /**
     * @param {number} homepage_section_id Id of homepage section
     */
    homepage_section_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepageSection>(
      callback,
      'GET',
      `/homepage_sections/${homepage_section_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Import a LookML dashboard to a space as a UDD
   * Creates a UDD (a dashboard which exists in the Looker database rather than as a LookML file) from the LookML dashboard
   * and puts it in the space specified. The created UDD will have a lookml_link_id which links to the original LookML dashboard.
   *
   * To give the imported dashboard specify a (e.g. title: "my title") in the body of your request, otherwise the imported
   * dashboard will have the same title as the original LookML dashboard.
   *
   * For this operation to succeed the user must have permission to see the LookML dashboard in question, and have permission to
   * create content in the space the dashboard is being imported to.
   *
   * **Sync** a linked UDD with [sync_lookml_dashboard()](#!/Dashboard/sync_lookml_dashboard)
   * **Unlink** a linked UDD by setting lookml_link_id to null with [update_dashboard()](#!/Dashboard/update_dashboard)
   *
   * POST /dashboards/{lookml_dashboard_id}/import/{space_id} -> IDashboard
   */
  async import_lookml_dashboard(
    callback: (readable: Readable) => Promise<IDashboard>,
    /**
     * @param {string} lookml_dashboard_id Id of LookML dashboard
     */
    lookml_dashboard_id: string,
    /**
     * @param {string} space_id Id of space to import the dashboard to
     */
    space_id: string,
    /**
     * @param {Partial<IWriteDashboard>} body
     */
    body?: Partial<IWriteDashboard>,
    /**
     * @param {boolean} raw_locale If true, and this dashboard is localized, export it with the raw keys, not localized.
     */
    raw_locale?: boolean,
    options?: Partial<ITransportSettings>
  ) {
    lookml_dashboard_id = encodeParam(lookml_dashboard_id)
    space_id = encodeParam(space_id)
    return this.authStream<IDashboard>(
      callback,
      'POST',
      `/dashboards/${lookml_dashboard_id}/import/${space_id}`,
      { raw_locale },
      body,
      options
    )
  }

  /**
   * ### Get information about a Integration.
   *
   * GET /integrations/{integration_id} -> IIntegration
   */
  async integration(
    callback: (readable: Readable) => Promise<IIntegration>,
    /**
     * @param {string} integration_id Id of integration
     */
    integration_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    integration_id = encodeParam(integration_id)
    return this.authStream<IIntegration>(
      callback,
      'GET',
      `/integrations/${integration_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about a Integration Hub.
   *
   * GET /integration_hubs/{integration_hub_id} -> IIntegrationHub
   */
  async integration_hub(
    callback: (readable: Readable) => Promise<IIntegrationHub>,
    /**
     * @param {number} integration_hub_id Id of Integration Hub
     */
    integration_hub_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IIntegrationHub>(
      callback,
      'GET',
      `/integration_hubs/${integration_hub_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get and set the options for internal help resources
   *
   * GET /internal_help_resources_enabled -> IInternalHelpResources
   */
  async internal_help_resources(
    callback: (readable: Readable) => Promise<IInternalHelpResources>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IInternalHelpResources>(
      callback,
      'GET',
      '/internal_help_resources_enabled',
      null,
      null,
      options
    )
  }

  /**
   * ### Set the menu item name and content for internal help resources
   *
   * GET /internal_help_resources_content -> IInternalHelpResourcesContent
   */
  async internal_help_resources_content(
    callback: (readable: Readable) => Promise<IInternalHelpResourcesContent>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IInternalHelpResourcesContent>(
      callback,
      'GET',
      '/internal_help_resources_content',
      null,
      null,
      options
    )
  }

  /**
   * Kill a query with a specific query_task_id.
   *
   * DELETE /running_queries/{query_task_id} -> string
   */
  async kill_query(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} query_task_id Query task id.
     */
    query_task_id: string,
    options?: Partial<ITransportSettings>
  ) {
    query_task_id = encodeParam(query_task_id)
    return this.authStream<string>(
      callback,
      'DELETE',
      `/running_queries/${query_task_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get the LDAP configuration.
   *
   * Looker can be optionally configured to authenticate users against an Active Directory or other LDAP directory server.
   * LDAP setup requires coordination with an administrator of that directory server.
   *
   * Only Looker administrators can read and update the LDAP configuration.
   *
   * Configuring LDAP impacts authentication for all users. This configuration should be done carefully.
   *
   * Looker maintains a single LDAP configuration. It can be read and updated.       Updates only succeed if the new state will be valid (in the sense that all required fields are populated);       it is up to you to ensure that the configuration is appropriate and correct).
   *
   * LDAP is enabled or disabled for Looker using the **enabled** field.
   *
   * Looker will never return an **auth_password** field. That value can be set, but never retrieved.
   *
   * See the [Looker LDAP docs](https://www.looker.com/docs/r/api/ldap_setup) for additional information.
   *
   * GET /ldap_config -> ILDAPConfig
   */
  async ldap_config(
    callback: (readable: Readable) => Promise<ILDAPConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILDAPConfig>(
      callback,
      'GET',
      '/ldap_config',
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about the legacy feature with a specific id.
   *
   * GET /legacy_features/{legacy_feature_id} -> ILegacyFeature
   */
  async legacy_feature(
    callback: (readable: Readable) => Promise<ILegacyFeature>,
    /**
     * @param {number} legacy_feature_id id of legacy feature
     */
    legacy_feature_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILegacyFeature>(
      callback,
      'GET',
      `/legacy_features/${legacy_feature_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Present client credentials to obtain an authorization token
   *
   * Looker API implements the OAuth2 [Resource Owner Password Credentials Grant](https://looker.com/docs/r/api/outh2_resource_owner_pc) pattern.
   * The client credentials required for this login must be obtained by creating an API3 key on a user account
   * in the Looker Admin console. The API3 key consists of a public `client_id` and a private `client_secret`.
   *
   * The access token returned by `login` must be used in the HTTP Authorization header of subsequent
   * API requests, like this:
   * ```
   * Authorization: token 4QDkCyCtZzYgj4C2p2cj3csJH7zqS5RzKs2kTnG4
   * ```
   * Replace "4QDkCy..." with the `access_token` value returned by `login`.
   * The word `token` is a string literal and must be included exactly as shown.
   *
   * This function can accept `client_id` and `client_secret` parameters as URL query params or as www-form-urlencoded params in the body of the HTTP request. Since there is a small risk that URL parameters may be visible to intermediate nodes on the network route (proxies, routers, etc), passing credentials in the body of the request is considered more secure than URL params.
   *
   * Example of passing credentials in the HTTP request body:
   * ````
   * POST HTTP /login
   * Content-Type: application/x-www-form-urlencoded
   *
   * client_id=CGc9B7v7J48dQSJvxxx&client_secret=nNVS9cSS3xNpSC9JdsBvvvvv
   * ````
   *
   * ### Best Practice:
   * Always pass credentials in body params. Pass credentials in URL query params **only** when you cannot pass body params due to application, tool, or other limitations.
   *
   * For more information and detailed examples of Looker API authorization, see [How to Authenticate to Looker API3](https://github.com/looker/looker-sdk-ruby/blob/master/authentication.md).
   *
   * POST /login -> IAccessToken
   */
  async login(
    callback: (readable: Readable) => Promise<IAccessToken>,
    request: IRequestLogin,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IAccessToken>(
      callback,
      'POST',
      '/login',
      { client_id: request.client_id, client_secret: request.client_secret },
      null,
      options
    )
  }

  /**
   * ### Create an access token that runs as a given user.
   *
   * This can only be called by an authenticated admin user. It allows that admin to generate a new
   * authentication token for the user with the given user id. That token can then be used for subsequent
   * API calls - which are then performed *as* that target user.
   *
   * The target user does *not* need to have a pre-existing API client_id/client_secret pair. And, no such
   * credentials are created by this call.
   *
   * This allows for building systems where api user authentication for an arbitrary number of users is done
   * outside of Looker and funneled through a single 'service account' with admin permissions. Note that a
   * new access token is generated on each call. If target users are going to be making numerous API
   * calls in a short period then it is wise to cache this authentication token rather than call this before
   * each of those API calls.
   *
   * See 'login' for more detail on the access token and how to use it.
   *
   * POST /login/{user_id} -> IAccessToken
   */
  async login_user(
    callback: (readable: Readable) => Promise<IAccessToken>,
    /**
     * @param {number} user_id Id of user.
     */
    user_id: number,
    /**
     * @param {boolean} associative When true (default), API calls using the returned access_token are attributed to the admin user who created the access_token. When false, API activity is attributed to the user the access_token runs as. False requires a looker license.
     */
    associative?: boolean,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IAccessToken>(
      callback,
      'POST',
      `/login/${user_id}`,
      { associative },
      null,
      options
    )
  }

  /**
   * ### Logout of the API and invalidate the current access token.
   *
   * DELETE /logout -> string
   */
  async logout(
    callback: (readable: Readable) => Promise<string>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<string>(
      callback,
      'DELETE',
      '/logout',
      null,
      null,
      options
    )
  }

  /**
   * ### Get a Look.
   *
   * Returns detailed information about a Look and its associated Query.
   *
   * GET /looks/{look_id} -> ILookWithQuery
   */
  async look(
    callback: (readable: Readable) => Promise<ILookWithQuery>,
    /**
     * @param {number} look_id Id of look
     */
    look_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILookWithQuery>(
      callback,
      'GET',
      `/looks/${look_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about a lookml model.
   *
   * GET /lookml_models/{lookml_model_name} -> ILookmlModel
   */
  async lookml_model(
    callback: (readable: Readable) => Promise<ILookmlModel>,
    /**
     * @param {string} lookml_model_name Name of lookml model.
     */
    lookml_model_name: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    lookml_model_name = encodeParam(lookml_model_name)
    return this.authStream<ILookmlModel>(
      callback,
      'GET',
      `/lookml_models/${lookml_model_name}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about a lookml model explore.
   *
   * GET /lookml_models/{lookml_model_name}/explores/{explore_name} -> ILookmlModelExplore
   */
  async lookml_model_explore(
    callback: (readable: Readable) => Promise<ILookmlModelExplore>,
    /**
     * @param {string} lookml_model_name Name of lookml model.
     */
    lookml_model_name: string,
    /**
     * @param {string} explore_name Name of explore.
     */
    explore_name: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    lookml_model_name = encodeParam(lookml_model_name)
    explore_name = encodeParam(explore_name)
    return this.authStream<ILookmlModelExplore>(
      callback,
      'GET',
      `/lookml_models/${lookml_model_name}/explores/${explore_name}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get A Projects Manifest object
   *
   * Returns the project with the given project id
   *
   * GET /projects/{project_id}/manifest -> IManifest
   */
  async manifest(
    callback: (readable: Readable) => Promise<IManifest>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IManifest>(
      callback,
      'GET',
      `/projects/${project_id}/manifest`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about the current user; i.e. the user account currently calling the API.
   *
   * GET /user -> IUser
   */
  async me(
    callback: (readable: Readable) => Promise<IUser>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUser>(
      callback,
      'GET',
      '/user',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get Merge Query
   *
   * Returns a merge query object given its id.
   *
   * GET /merge_queries/{merge_query_id} -> IMergeQuery
   */
  async merge_query(
    callback: (readable: Readable) => Promise<IMergeQuery>,
    /**
     * @param {string} merge_query_id Merge Query Id
     */
    merge_query_id: string,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    merge_query_id = encodeParam(merge_query_id)
    return this.authStream<IMergeQuery>(
      callback,
      'GET',
      `/merge_queries/${merge_query_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about the model set with a specific id.
   *
   * GET /model_sets/{model_set_id} -> IModelSet
   */
  async model_set(
    callback: (readable: Readable) => Promise<IModelSet>,
    /**
     * @param {number} model_set_id Id of model set
     */
    model_set_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IModelSet>(
      callback,
      'GET',
      `/model_sets/${model_set_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the OIDC configuration.
   *
   * Looker can be optionally configured to authenticate users against an OpenID Connect (OIDC)
   * authentication server. OIDC setup requires coordination with an administrator of that server.
   *
   * Only Looker administrators can read and update the OIDC configuration.
   *
   * Configuring OIDC impacts authentication for all users. This configuration should be done carefully.
   *
   * Looker maintains a single OIDC configuation. It can be read and updated.       Updates only succeed if the new state will be valid (in the sense that all required fields are populated);       it is up to you to ensure that the configuration is appropriate and correct).
   *
   * OIDC is enabled or disabled for Looker using the **enabled** field.
   *
   * GET /oidc_config -> IOIDCConfig
   */
  async oidc_config(
    callback: (readable: Readable) => Promise<IOIDCConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IOIDCConfig>(
      callback,
      'GET',
      '/oidc_config',
      null,
      null,
      options
    )
  }

  /**
   * ### Get a OIDC test configuration by test_slug.
   *
   * GET /oidc_test_configs/{test_slug} -> IOIDCConfig
   */
  async oidc_test_config(
    callback: (readable: Readable) => Promise<IOIDCConfig>,
    /**
     * @param {string} test_slug Slug of test config
     */
    test_slug: string,
    options?: Partial<ITransportSettings>
  ) {
    test_slug = encodeParam(test_slug)
    return this.authStream<IOIDCConfig>(
      callback,
      'GET',
      `/oidc_test_configs/${test_slug}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Parse the given xml as a SAML IdP metadata document and return the result.
   *
   * POST /parse_saml_idp_metadata -> ISamlMetadataParseResult
   */
  async parse_saml_idp_metadata(
    callback: (readable: Readable) => Promise<ISamlMetadataParseResult>,
    /**
     * @param {Partial<string>} body
     */
    body: Partial<string>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISamlMetadataParseResult>(
      callback,
      'POST',
      '/parse_saml_idp_metadata',
      null,
      body,
      options
    )
  }

  /**
   * ### Get password config.
   *
   * GET /password_config -> IPasswordConfig
   */
  async password_config(
    callback: (readable: Readable) => Promise<IPasswordConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IPasswordConfig>(
      callback,
      'GET',
      '/password_config',
      null,
      null,
      options
    )
  }

  /**
   * Perform a data action. The data action object can be obtained from query results, and used to perform an arbitrary action.
   *
   * POST /data_actions -> IDataActionResponse
   */
  async perform_data_action(
    callback: (readable: Readable) => Promise<IDataActionResponse>,
    /**
     * @param {Partial<IDataActionRequest>} body
     */
    body: Partial<IDataActionRequest>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDataActionResponse>(
      callback,
      'POST',
      '/data_actions',
      null,
      body,
      options
    )
  }

  /**
   * ### Get information about the permission set with a specific id.
   *
   * GET /permission_sets/{permission_set_id} -> IPermissionSet
   */
  async permission_set(
    callback: (readable: Readable) => Promise<IPermissionSet>,
    /**
     * @param {number} permission_set_id Id of permission set
     */
    permission_set_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IPermissionSet>(
      callback,
      'GET',
      `/permission_sets/${permission_set_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get A Project
   *
   * Returns the project with the given project id
   *
   * GET /projects/{project_id} -> IProject
   */
  async project(
    callback: (readable: Readable) => Promise<IProject>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IProject>(
      callback,
      'GET',
      `/projects/${project_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get Project File Info
   *
   * Returns information about a file in the project
   *
   * GET /projects/{project_id}/files/file -> IProjectFile
   */
  async project_file(
    callback: (readable: Readable) => Promise<IProjectFile>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} file_id File Id
     */
    file_id: string,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IProjectFile>(
      callback,
      'GET',
      `/projects/${project_id}/files/file`,
      { fields, file_id },
      null,
      options
    )
  }

  /**
   * ### Get Cached Project Validation Results
   *
   * Returns the cached results of a previous project validation calculation, if any.
   * Returns http status 204 No Content if no validation results exist.
   *
   * Validating the content of all the files in a project can be computationally intensive
   * for large projects. Use this API to simply fetch the results of the most recent
   * project validation rather than revalidating the entire project from scratch.
   *
   * A value of `"stale": true` in the response indicates that the project has changed since
   * the cached validation results were computed. The cached validation results may no longer
   * reflect the current state of the project.
   *
   * GET /projects/{project_id}/validate -> IProjectValidationCache
   */
  async project_validation_results(
    callback: (readable: Readable) => Promise<IProjectValidationCache>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IProjectValidationCache>(
      callback,
      'GET',
      `/projects/${project_id}/validate`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get Project Workspace
   *
   * Returns information about the state of the project files in the currently selected workspace
   *
   * GET /projects/{project_id}/current_workspace -> IProjectWorkspace
   */
  async project_workspace(
    callback: (readable: Readable) => Promise<IProjectWorkspace>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IProjectWorkspace>(
      callback,
      'GET',
      `/projects/${project_id}/current_workspace`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get a previously created query by id.
   *
   * A Looker query object includes the various parameters that define a database query that has been run or
   * could be run in the future. These parameters include: model, view, fields, filters, pivots, etc.
   * Query *results* are not part of the query object.
   *
   * Query objects are unique and immutable. Query objects are created automatically in Looker as users explore data.
   * Looker does not delete them; they become part of the query history. When asked to create a query for
   * any given set of parameters, Looker will first try to find an existing query object with matching
   * parameters and will only create a new object when an appropriate object can not be found.
   *
   * This 'get' method is used to get the details about a query for a given id. See the other methods here
   * to 'create' and 'run' queries.
   *
   * Note that some fields like 'filter_config' and 'vis_config' etc are specific to how the Looker UI
   * builds queries and visualizations and are not generally useful for API use. They are not required when
   * creating new queries and can usually just be ignored.
   *
   * GET /queries/{query_id} -> IQuery
   */
  async query(
    callback: (readable: Readable) => Promise<IQuery>,
    /**
     * @param {number} query_id Id of query
     */
    query_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IQuery>(
      callback,
      'GET',
      `/queries/${query_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the query for a given query slug.
   *
   * This returns the query for the 'slug' in a query share URL.
   *
   * The 'slug' is a randomly chosen short string that is used as an alternative to the query's id value
   * for use in URLs etc. This method exists as a convenience to help you use the API to 'find' queries that
   * have been created using the Looker UI.
   *
   * You can use the Looker explore page to build a query and then choose the 'Share' option to
   * show the share url for the query. Share urls generally look something like 'https://looker.yourcompany/x/vwGSbfc'.
   * The trailing 'vwGSbfc' is the share slug. You can pass that string to this api method to get details about the query.
   * Those details include the 'id' that you can use to run the query. Or, you can copy the query body
   * (perhaps with your own modification) and use that as the basis to make/run new queries.
   *
   * This will also work with slugs from Looker explore urls like
   * 'https://looker.yourcompany/explore/ecommerce/orders?qid=aogBgL6o3cKK1jN3RoZl5s'. In this case
   * 'aogBgL6o3cKK1jN3RoZl5s' is the slug.
   *
   * GET /queries/slug/{slug} -> IQuery
   */
  async query_for_slug(
    callback: (readable: Readable) => Promise<IQuery>,
    /**
     * @param {string} slug Slug of query
     */
    slug: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    slug = encodeParam(slug)
    return this.authStream<IQuery>(
      callback,
      'GET',
      `/queries/slug/${slug}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get Query Task details
   *
   * Use this function to check the status of an async query task. After the status
   * reaches "Complete", you can call [query_task_results(query_task_id)](#!/Query/query_task_results) to
   * retrieve the results of the query.
   *
   * Use [create_query_task()](#!/Query/create_query_task) to create an async query task.
   *
   * GET /query_tasks/{query_task_id} -> IQueryTask
   */
  async query_task(
    callback: (readable: Readable) => Promise<IQueryTask>,
    /**
     * @param {string} query_task_id ID of the Query Task
     */
    query_task_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    query_task_id = encodeParam(query_task_id)
    return this.authStream<IQueryTask>(
      callback,
      'GET',
      `/query_tasks/${query_task_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Fetch results of multiple async queries
   *
   * Returns the results of multiple async queries in one request.
   *
   * For Query Tasks that are not completed, the response will include the execution status of the Query Task but will not include query results.
   * Query Tasks whose results have expired will have a status of 'expired'.
   * If the user making the API request does not have sufficient privileges to view a Query Task result, the result will have a status of 'missing'
   *
   * GET /query_tasks/multi_results -> IDictionary<string>
   */
  async query_task_multi_results(
    callback: (readable: Readable) => Promise<IDictionary<string>>,
    /**
     * @param {DelimArray<string>} query_task_ids List of Query Task IDs
     */
    query_task_ids: DelimArray<string>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDictionary<string>>(
      callback,
      'GET',
      '/query_tasks/multi_results',
      { query_task_ids },
      null,
      options
    )
  }

  /**
   * ### Get Async Query Results
   *
   * Returns the results of an async query task if the query has completed.
   *
   * If the query task is still running or waiting to run, this function returns 204 No Content.
   *
   * If the query task ID is invalid or the cached results of the query task have expired, this function returns 404 Not Found.
   *
   * Use [query_task(query_task_id)](#!/Query/query_task) to check the execution status of the query task
   * Call query_task_results only after the query task status reaches "Complete".
   *
   * You can also use [query_task_multi_results()](#!/Query/query_task_multi_results) retrieve the
   * results of multiple async query tasks at the same time.
   *
   * #### SQL Error Handling:
   * If the query fails due to a SQL db error, how this is communicated depends on the result_format you requested in `create_query_task()`.
   *
   * For `json_detail` result_format: `query_task_results()` will respond with HTTP status '200 OK' and db SQL error info
   * will be in the `errors` property of the response object. The 'data' property will be empty.
   *
   * For all other result formats: `query_task_results()` will respond with HTTP status `400 Bad Request` and some db SQL error info
   * will be in the message of the 400 error response, but not as detailed as expressed in `json_detail.errors`.
   * These data formats can only carry row data, and error info is not row data.
   *
   * GET /query_tasks/{query_task_id}/results -> string
   */
  async query_task_results(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} query_task_id ID of the Query Task
     */
    query_task_id: string,
    options?: Partial<ITransportSettings>
  ) {
    query_task_id = encodeParam(query_task_id)
    return this.authStream<string>(
      callback,
      'GET',
      `/query_tasks/${query_task_id}/results`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about a render task.
   *
   * Returns a render task object.
   * To check the status of a render task, pass the render_task.id to [Get Render Task](#!/RenderTask/get_render_task).
   * Once the render task is complete, you can download the resulting document or image using [Get Render Task Results](#!/RenderTask/get_render_task_results).
   *
   * GET /render_tasks/{render_task_id} -> IRenderTask
   */
  async render_task(
    callback: (readable: Readable) => Promise<IRenderTask>,
    /**
     * @param {string} render_task_id Id of render task
     */
    render_task_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    render_task_id = encodeParam(render_task_id)
    return this.authStream<IRenderTask>(
      callback,
      'GET',
      `/render_tasks/${render_task_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the document or image produced by a completed render task.
   *
   * Note that the PDF or image result will be a binary blob in the HTTP response, as indicated by the
   * Content-Type in the response headers. This may require specialized (or at least different) handling than text
   * responses such as JSON. You may need to tell your HTTP client that the response is binary so that it does not
   * attempt to parse the binary data as text.
   *
   * If the render task exists but has not finished rendering the results, the response HTTP status will be
   * **202 Accepted**, the response body will be empty, and the response will have a Retry-After header indicating
   * that the caller should repeat the request at a later time.
   *
   * Returns 404 if the render task cannot be found, if the cached result has expired, or if the caller
   * does not have permission to view the results.
   *
   * For detailed information about the status of the render task, use [Render Task](#!/RenderTask/render_task).
   * Polling loops waiting for completion of a render task would be better served by polling **render_task(id)** until
   * the task status reaches completion (or error) instead of polling **render_task_results(id)** alone.
   *
   * GET /render_tasks/{render_task_id}/results -> string
   *
   * **Note**: Binary content is returned by this method.
   */
  async render_task_results(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} render_task_id Id of render task
     */
    render_task_id: string,
    options?: Partial<ITransportSettings>
  ) {
    render_task_id = encodeParam(render_task_id)
    return this.authStream<string>(
      callback,
      'GET',
      `/render_tasks/${render_task_id}/results`,
      null,
      null,
      options
    )
  }

  /**
   * ### Reset a project to the revision of the project that is in production.
   *
   * **DANGER** this will delete any changes that have not been pushed to a remote repository.
   *
   * POST /projects/{project_id}/reset_to_production -> string
   */
  async reset_project_to_production(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} project_id Id of project
     */
    project_id: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<string>(
      callback,
      'POST',
      `/projects/${project_id}/reset_to_production`,
      null,
      null,
      options
    )
  }

  /**
   * ### Reset a project development branch to the revision of the project that is on the remote.
   *
   * **DANGER** this will delete any changes that have not been pushed to a remote repository.
   *
   * POST /projects/{project_id}/reset_to_remote -> string
   */
  async reset_project_to_remote(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} project_id Id of project
     */
    project_id: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<string>(
      callback,
      'POST',
      `/projects/${project_id}/reset_to_remote`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about the role with a specific id.
   *
   * GET /roles/{role_id} -> IRole
   */
  async role(
    callback: (readable: Readable) => Promise<IRole>,
    /**
     * @param {number} role_id id of role
     */
    role_id: number,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IRole>(
      callback,
      'GET',
      `/roles/${role_id}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get information about all the groups with the role that has a specific id.
   *
   * GET /roles/{role_id}/groups -> IGroup[]
   */
  async role_groups(
    callback: (readable: Readable) => Promise<IGroup[]>,
    /**
     * @param {number} role_id id of role
     */
    role_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IGroup[]>(
      callback,
      'GET',
      `/roles/${role_id}/groups`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about all the users with the role that has a specific id.
   *
   * GET /roles/{role_id}/users -> IUser[]
   */
  async role_users(
    callback: (readable: Readable) => Promise<IUser[]>,
    request: IRequestRoleUsers,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUser[]>(
      callback,
      'GET',
      `/roles/${request.role_id}/users`,
      {
        direct_association_only: request.direct_association_only,
        fields: request.fields,
      },
      null,
      options
    )
  }

  /**
   * ### Run a git connection test
   *
   * Run the named test on the git service used by this project (or the dependency project for the provided remote_url) and return the result. This
   * is intended to help debug git connections when things do not work properly, to give
   * more helpful information about why a git url is not working with Looker.
   *
   * Tests should be run in the order they are returned by [Get All Git Connection Tests](#!/Project/all_git_connection_tests).
   *
   * GET /projects/{project_id}/git_connection_tests/{test_id} -> IGitConnectionTestResult
   */
  async run_git_connection_test(
    callback: (readable: Readable) => Promise<IGitConnectionTestResult>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} test_id Test Id
     */
    test_id: string,
    /**
     * @param {string} remote_url (Optional: leave blank for root project) The remote url for remote dependency to test.
     */
    remote_url?: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    test_id = encodeParam(test_id)
    return this.authStream<IGitConnectionTestResult>(
      callback,
      'GET',
      `/projects/${project_id}/git_connection_tests/${test_id}`,
      { remote_url },
      null,
      options
    )
  }

  /**
   * ### Run the query that is specified inline in the posted body.
   *
   * This allows running a query as defined in json in the posted body. This combines
   * the two actions of posting & running a query into one step.
   *
   * Here is an example body in json:
   * ```
   * {
   *   "model":"thelook",
   *   "view":"inventory_items",
   *   "fields":["category.name","inventory_items.days_in_inventory_tier","products.count"],
   *   "filters":{"category.name":"socks"},
   *   "sorts":["products.count desc 0"],
   *   "limit":"500",
   *   "query_timezone":"America/Los_Angeles"
   * }
   * ```
   *
   * When using the Ruby SDK this would be passed as a Ruby hash like:
   * ```
   * {
   *  :model=>"thelook",
   *  :view=>"inventory_items",
   *  :fields=>
   *   ["category.name",
   *    "inventory_items.days_in_inventory_tier",
   *    "products.count"],
   *  :filters=>{:"category.name"=>"socks"},
   *  :sorts=>["products.count desc 0"],
   *  :limit=>"500",
   *  :query_timezone=>"America/Los_Angeles",
   * }
   * ```
   *
   * This will return the result of running the query in the format specified by the 'result_format' parameter.
   *
   * Supported formats:
   *
   * | result_format | Description
   * | :-----------: | :--- |
   * | json | Plain json
   * | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
   * | csv | Comma separated values with a header
   * | txt | Tab separated values with a header
   * | html | Simple html
   * | md | Simple markdown
   * | xlsx | MS Excel spreadsheet
   * | sql | Returns the generated SQL rather than running the query
   * | png | A PNG image of the visualization of the query
   * | jpg | A JPG image of the visualization of the query
   *
   * POST /queries/run/{result_format} -> string
   *
   * **Note**: Binary content may be returned by this method.
   */
  async run_inline_query(
    callback: (readable: Readable) => Promise<string>,
    request: IRequestRunInlineQuery,
    options?: Partial<ITransportSettings>
  ) {
    request.result_format = encodeParam(request.result_format)
    return this.authStream<string>(
      callback,
      'POST',
      `/queries/run/${request.result_format}`,
      {
        apply_formatting: request.apply_formatting,
        apply_vis: request.apply_vis,
        cache: request.cache,
        cache_only: request.cache_only,
        force_production: request.force_production,
        generate_drill_links: request.generate_drill_links,
        image_height: request.image_height,
        image_width: request.image_width,
        limit: request.limit,
        path_prefix: request.path_prefix,
        rebuild_pdts: request.rebuild_pdts,
        server_table_calcs: request.server_table_calcs,
      },
      request.body,
      options
    )
  }

  /**
   * ### Run a Look
   *
   * Runs a given look's query and returns the results in the requested format.
   *
   * Supported formats:
   *
   * | result_format | Description
   * | :-----------: | :--- |
   * | json | Plain json
   * | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
   * | csv | Comma separated values with a header
   * | txt | Tab separated values with a header
   * | html | Simple html
   * | md | Simple markdown
   * | xlsx | MS Excel spreadsheet
   * | sql | Returns the generated SQL rather than running the query
   * | png | A PNG image of the visualization of the query
   * | jpg | A JPG image of the visualization of the query
   *
   * GET /looks/{look_id}/run/{result_format} -> string
   *
   * **Note**: Binary content may be returned by this method.
   */
  async run_look(
    callback: (readable: Readable) => Promise<string>,
    request: IRequestRunLook,
    options?: Partial<ITransportSettings>
  ) {
    request.result_format = encodeParam(request.result_format)
    return this.authStream<string>(
      callback,
      'GET',
      `/looks/${request.look_id}/run/${request.result_format}`,
      {
        apply_formatting: request.apply_formatting,
        apply_vis: request.apply_vis,
        cache: request.cache,
        cache_only: request.cache_only,
        force_production: request.force_production,
        generate_drill_links: request.generate_drill_links,
        image_height: request.image_height,
        image_width: request.image_width,
        limit: request.limit,
        path_prefix: request.path_prefix,
        rebuild_pdts: request.rebuild_pdts,
        server_table_calcs: request.server_table_calcs,
      },
      null,
      options
    )
  }

  /**
   * ### Run LookML Tests
   *
   * Runs all tests in the project, optionally filtered by file, test, and/or model.
   *
   * GET /projects/{project_id}/lookml_tests/run -> ILookmlTestResult[]
   */
  async run_lookml_test(
    callback: (readable: Readable) => Promise<ILookmlTestResult[]>,
    request: IRequestRunLookmlTest,
    options?: Partial<ITransportSettings>
  ) {
    request.project_id = encodeParam(request.project_id)
    return this.authStream<ILookmlTestResult[]>(
      callback,
      'GET',
      `/projects/${request.project_id}/lookml_tests/run`,
      { file_id: request.file_id, model: request.model, test: request.test },
      null,
      options
    )
  }

  /**
   * ### Run a saved query.
   *
   * This runs a previously saved query. You can use this on a query that was generated in the Looker UI
   * or one that you have explicitly created using the API. You can also use a query 'id' from a saved 'Look'.
   *
   * The 'result_format' parameter specifies the desired structure and format of the response.
   *
   * Supported formats:
   *
   * | result_format | Description
   * | :-----------: | :--- |
   * | json | Plain json
   * | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
   * | csv | Comma separated values with a header
   * | txt | Tab separated values with a header
   * | html | Simple html
   * | md | Simple markdown
   * | xlsx | MS Excel spreadsheet
   * | sql | Returns the generated SQL rather than running the query
   * | png | A PNG image of the visualization of the query
   * | jpg | A JPG image of the visualization of the query
   *
   * GET /queries/{query_id}/run/{result_format} -> string
   *
   * **Note**: Binary content may be returned by this method.
   */
  async run_query(
    callback: (readable: Readable) => Promise<string>,
    request: IRequestRunQuery,
    options?: Partial<ITransportSettings>
  ) {
    request.result_format = encodeParam(request.result_format)
    return this.authStream<string>(
      callback,
      'GET',
      `/queries/${request.query_id}/run/${request.result_format}`,
      {
        apply_formatting: request.apply_formatting,
        apply_vis: request.apply_vis,
        cache: request.cache,
        cache_only: request.cache_only,
        force_production: request.force_production,
        generate_drill_links: request.generate_drill_links,
        image_height: request.image_height,
        image_width: request.image_width,
        limit: request.limit,
        path_prefix: request.path_prefix,
        rebuild_pdts: request.rebuild_pdts,
        server_table_calcs: request.server_table_calcs,
      },
      null,
      options
    )
  }

  /**
   * Execute a SQL Runner query in a given result_format.
   *
   * POST /sql_queries/{slug}/run/{result_format} -> string
   *
   * **Note**: Binary content may be returned by this method.
   */
  async run_sql_query(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} slug slug of query
     */
    slug: string,
    /**
     * @param {string} result_format Format of result, options are: ["json", "json_detail", "json_fe", "csv", "html", "md", "txt", "xlsx", "gsxml", "json_label"]
     */
    result_format: string,
    /**
     * @param {string} download Defaults to false. If set to true, the HTTP response will have content-disposition and other headers set to make the HTTP response behave as a downloadable attachment instead of as inline content.
     */
    download?: string,
    options?: Partial<ITransportSettings>
  ) {
    slug = encodeParam(slug)
    result_format = encodeParam(result_format)
    return this.authStream<string>(
      callback,
      'POST',
      `/sql_queries/${slug}/run/${result_format}`,
      { download },
      null,
      options
    )
  }

  /**
   * ### Run an URL encoded query.
   *
   * This requires the caller to encode the specifiers for the query into the URL query part using
   * Looker-specific syntax as explained below.
   *
   * Generally, you would want to use one of the methods that takes the parameters as json in the POST body
   * for creating and/or running queries. This method exists for cases where one really needs to encode the
   * parameters into the URL of a single 'GET' request. This matches the way that the Looker UI formats
   * 'explore' URLs etc.
   *
   * The parameters here are very similar to the json body formatting except that the filter syntax is
   * tricky. Unfortunately, this format makes this method not currently callible via the 'Try it out!' button
   * in this documentation page. But, this is callable  when creating URLs manually or when using the Looker SDK.
   *
   * Here is an example inline query URL:
   *
   * ```
   * https://looker.mycompany.com:19999/api/3.0/queries/models/thelook/views/inventory_items/run/json?fields=category.name,inventory_items.days_in_inventory_tier,products.count&f[category.name]=socks&sorts=products.count+desc+0&limit=500&query_timezone=America/Los_Angeles
   * ```
   *
   * When invoking this endpoint with the Ruby SDK, pass the query parameter parts as a hash. The hash to match the above would look like:
   *
   * ```ruby
   * query_params =
   * {
   *   :fields => "category.name,inventory_items.days_in_inventory_tier,products.count",
   *   :"f[category.name]" => "socks",
   *   :sorts => "products.count desc 0",
   *   :limit => "500",
   *   :query_timezone => "America/Los_Angeles"
   * }
   * response = ruby_sdk.run_url_encoded_query('thelook','inventory_items','json', query_params)
   *
   * ```
   *
   * Again, it is generally easier to use the variant of this method that passes the full query in the POST body.
   * This method is available for cases where other alternatives won't fit the need.
   *
   * Supported formats:
   *
   * | result_format | Description
   * | :-----------: | :--- |
   * | json | Plain json
   * | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
   * | csv | Comma separated values with a header
   * | txt | Tab separated values with a header
   * | html | Simple html
   * | md | Simple markdown
   * | xlsx | MS Excel spreadsheet
   * | sql | Returns the generated SQL rather than running the query
   * | png | A PNG image of the visualization of the query
   * | jpg | A JPG image of the visualization of the query
   *
   * GET /queries/models/{model_name}/views/{view_name}/run/{result_format} -> string
   *
   * **Note**: Binary content may be returned by this method.
   */
  async run_url_encoded_query(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} model_name Model name
     */
    model_name: string,
    /**
     * @param {string} view_name View name
     */
    view_name: string,
    /**
     * @param {string} result_format Format of result
     */
    result_format: string,
    options?: Partial<ITransportSettings>
  ) {
    model_name = encodeParam(model_name)
    view_name = encodeParam(view_name)
    result_format = encodeParam(result_format)
    return this.authStream<string>(
      callback,
      'GET',
      `/queries/models/${model_name}/views/${view_name}/run/${result_format}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get the SAML configuration.
   *
   * Looker can be optionally configured to authenticate users against a SAML authentication server.
   * SAML setup requires coordination with an administrator of that server.
   *
   * Only Looker administrators can read and update the SAML configuration.
   *
   * Configuring SAML impacts authentication for all users. This configuration should be done carefully.
   *
   * Looker maintains a single SAML configuation. It can be read and updated.       Updates only succeed if the new state will be valid (in the sense that all required fields are populated);       it is up to you to ensure that the configuration is appropriate and correct).
   *
   * SAML is enabled or disabled for Looker using the **enabled** field.
   *
   * GET /saml_config -> ISamlConfig
   */
  async saml_config(
    callback: (readable: Readable) => Promise<ISamlConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISamlConfig>(
      callback,
      'GET',
      '/saml_config',
      null,
      null,
      options
    )
  }

  /**
   * ### Get a SAML test configuration by test_slug.
   *
   * GET /saml_test_configs/{test_slug} -> ISamlConfig
   */
  async saml_test_config(
    callback: (readable: Readable) => Promise<ISamlConfig>,
    /**
     * @param {string} test_slug Slug of test config
     */
    test_slug: string,
    options?: Partial<ITransportSettings>
  ) {
    test_slug = encodeParam(test_slug)
    return this.authStream<ISamlConfig>(
      callback,
      'GET',
      `/saml_test_configs/${test_slug}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Get Information About a Scheduled Plan
   *
   * Admins can fetch information about other users' Scheduled Plans.
   *
   * GET /scheduled_plans/{scheduled_plan_id} -> IScheduledPlan
   */
  async scheduled_plan(
    callback: (readable: Readable) => Promise<IScheduledPlan>,
    /**
     * @param {number} scheduled_plan_id Scheduled Plan Id
     */
    scheduled_plan_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IScheduledPlan>(
      callback,
      'GET',
      `/scheduled_plans/${scheduled_plan_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Run a Scheduled Plan Immediately
   *
   * Create a scheduled plan that runs only once, and immediately.
   *
   * This can be useful for testing a Scheduled Plan before committing to a production schedule.
   *
   * Admins can create scheduled plans on behalf of other users by specifying a user id.
   *
   * This API is rate limited to prevent it from being used for relay spam or DoS attacks
   *
   * #### Email Permissions:
   *
   * For details about permissions required to schedule delivery to email and the safeguards
   * Looker offers to protect against sending to unauthorized email destinations, see [Email Domain Whitelist for Scheduled Looks](https://docs.looker.com/r/api/embed-permissions).
   *
   *
   * #### Scheduled Plan Destination Formats
   *
   * Scheduled plan destinations must specify the data format to produce and send to the destination.
   *
   * Formats:
   *
   * | format | Description
   * | :-----------: | :--- |
   * | json | A JSON object containing a `data` property which contains an array of JSON objects, one per row. No metadata.
   * | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
   * | inline_json | Same as the JSON format, except that the `data` property is a string containing JSON-escaped row data. Additional properties describe the data operation. This format is primarily used to send data to web hooks so that the web hook doesn't have to re-encode the JSON row data in order to pass it on to its ultimate destination.
   * | csv | Comma separated values with a header
   * | txt | Tab separated values with a header
   * | html | Simple html
   * | xlsx | MS Excel spreadsheet
   * | wysiwyg_pdf | Dashboard rendered in a tiled layout to produce a PDF document
   * | assembled_pdf | Dashboard rendered in a single column layout to produce a PDF document
   * | wysiwyg_png | Dashboard rendered in a tiled layout to produce a PNG image
   * ||
   *
   * Valid formats vary by destination type and source object. `wysiwyg_pdf` is only valid for dashboards, for example.
   *
   * POST /scheduled_plans/run_once -> IScheduledPlan
   */
  async scheduled_plan_run_once(
    callback: (readable: Readable) => Promise<IScheduledPlan>,
    /**
     * @param {Partial<IWriteScheduledPlan>} body
     */
    body: Partial<IWriteScheduledPlan>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IScheduledPlan>(
      callback,
      'POST',
      '/scheduled_plans/run_once',
      null,
      body,
      options
    )
  }

  /**
   * ### Run a Scheduled Plan By Id Immediately
   * This function creates a run-once schedule plan based on an existing scheduled plan,
   * applies modifications (if any) to the new scheduled plan, and runs the new schedule plan immediately.
   * This can be useful for testing modifications to an existing scheduled plan before committing to a production schedule.
   *
   * This function internally performs the following operations:
   * 1. Copies the properties of the existing scheduled plan into a new scheduled plan
   * 2. Copies any properties passed in the JSON body of this request into the new scheduled plan (replacing the original values)
   * 3. Creates the new scheduled plan
   * 4. Runs the new scheduled plan
   *
   * The original scheduled plan is not modified by this operation.
   * Admins can create, modify, and run scheduled plans on behalf of other users by specifying a user id.
   * Non-admins can only create, modify, and run their own scheduled plans.
   *
   * #### Email Permissions:
   *
   * For details about permissions required to schedule delivery to email and the safeguards
   * Looker offers to protect against sending to unauthorized email destinations, see [Email Domain Whitelist for Scheduled Looks](https://docs.looker.com/r/api/embed-permissions).
   *
   *
   * #### Scheduled Plan Destination Formats
   *
   * Scheduled plan destinations must specify the data format to produce and send to the destination.
   *
   * Formats:
   *
   * | format | Description
   * | :-----------: | :--- |
   * | json | A JSON object containing a `data` property which contains an array of JSON objects, one per row. No metadata.
   * | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
   * | inline_json | Same as the JSON format, except that the `data` property is a string containing JSON-escaped row data. Additional properties describe the data operation. This format is primarily used to send data to web hooks so that the web hook doesn't have to re-encode the JSON row data in order to pass it on to its ultimate destination.
   * | csv | Comma separated values with a header
   * | txt | Tab separated values with a header
   * | html | Simple html
   * | xlsx | MS Excel spreadsheet
   * | wysiwyg_pdf | Dashboard rendered in a tiled layout to produce a PDF document
   * | assembled_pdf | Dashboard rendered in a single column layout to produce a PDF document
   * | wysiwyg_png | Dashboard rendered in a tiled layout to produce a PNG image
   * ||
   *
   * Valid formats vary by destination type and source object. `wysiwyg_pdf` is only valid for dashboards, for example.
   *
   *
   *
   * This API is rate limited to prevent it from being used for relay spam or DoS attacks
   *
   * POST /scheduled_plans/{scheduled_plan_id}/run_once -> IScheduledPlan
   */
  async scheduled_plan_run_once_by_id(
    callback: (readable: Readable) => Promise<IScheduledPlan>,
    /**
     * @param {number} scheduled_plan_id Id of schedule plan to copy and run
     */
    scheduled_plan_id: number,
    /**
     * @param {Partial<IWriteScheduledPlan>} body
     */
    body?: Partial<IWriteScheduledPlan>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IScheduledPlan>(
      callback,
      'POST',
      `/scheduled_plans/${scheduled_plan_id}/run_once`,
      null,
      body,
      options
    )
  }

  /**
   * ### Get Scheduled Plans for a Dashboard
   *
   * Returns all scheduled plans for a dashboard which belong to the caller or given user.
   *
   * If no user_id is provided, this function returns the scheduled plans owned by the caller.
   *
   *
   * To list all schedules for all users, pass `all_users=true`.
   *
   *
   * The caller must have `see_schedules` permission to see other users' scheduled plans.
   *
   * GET /scheduled_plans/dashboard/{dashboard_id} -> IScheduledPlan[]
   */
  async scheduled_plans_for_dashboard(
    callback: (readable: Readable) => Promise<IScheduledPlan[]>,
    request: IRequestScheduledPlansForDashboard,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IScheduledPlan[]>(
      callback,
      'GET',
      `/scheduled_plans/dashboard/${request.dashboard_id}`,
      {
        all_users: request.all_users,
        fields: request.fields,
        user_id: request.user_id,
      },
      null,
      options
    )
  }

  /**
   * ### Get Scheduled Plans for a Look
   *
   * Returns all scheduled plans for a look which belong to the caller or given user.
   *
   * If no user_id is provided, this function returns the scheduled plans owned by the caller.
   *
   *
   * To list all schedules for all users, pass `all_users=true`.
   *
   *
   * The caller must have `see_schedules` permission to see other users' scheduled plans.
   *
   * GET /scheduled_plans/look/{look_id} -> IScheduledPlan[]
   */
  async scheduled_plans_for_look(
    callback: (readable: Readable) => Promise<IScheduledPlan[]>,
    request: IRequestScheduledPlansForLook,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IScheduledPlan[]>(
      callback,
      'GET',
      `/scheduled_plans/look/${request.look_id}`,
      {
        all_users: request.all_users,
        fields: request.fields,
        user_id: request.user_id,
      },
      null,
      options
    )
  }

  /**
   * ### Get Scheduled Plans for a LookML Dashboard
   *
   * Returns all scheduled plans for a LookML Dashboard which belong to the caller or given user.
   *
   * If no user_id is provided, this function returns the scheduled plans owned by the caller.
   *
   *
   * To list all schedules for all users, pass `all_users=true`.
   *
   *
   * The caller must have `see_schedules` permission to see other users' scheduled plans.
   *
   * GET /scheduled_plans/lookml_dashboard/{lookml_dashboard_id} -> IScheduledPlan[]
   */
  async scheduled_plans_for_lookml_dashboard(
    callback: (readable: Readable) => Promise<IScheduledPlan[]>,
    request: IRequestScheduledPlansForLookmlDashboard,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IScheduledPlan[]>(
      callback,
      'GET',
      `/scheduled_plans/lookml_dashboard/${request.lookml_dashboard_id}`,
      {
        all_users: request.all_users,
        fields: request.fields,
        user_id: request.user_id,
      },
      null,
      options
    )
  }

  /**
   * ### Get Scheduled Plans for a Space
   *
   * Returns scheduled plans owned by the caller for a given space id.
   *
   * GET /scheduled_plans/space/{space_id} -> IScheduledPlan[]
   */
  async scheduled_plans_for_space(
    callback: (readable: Readable) => Promise<IScheduledPlan[]>,
    /**
     * @param {number} space_id Space Id
     */
    space_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IScheduledPlan[]>(
      callback,
      'GET',
      `/scheduled_plans/space/${space_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Search Favorite Content
   *
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   * GET /content_favorite/search -> IContentFavorite[]
   */
  async search_content_favorites(
    callback: (readable: Readable) => Promise<IContentFavorite[]>,
    request: IRequestSearchContentFavorites,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentFavorite[]>(
      callback,
      'GET',
      '/content_favorite/search',
      {
        content_metadata_id: request.content_metadata_id,
        dashboard_id: request.dashboard_id,
        fields: request.fields,
        filter_or: request.filter_or,
        id: request.id,
        limit: request.limit,
        look_id: request.look_id,
        offset: request.offset,
        sorts: request.sorts,
        user_id: request.user_id,
      },
      null,
      options
    )
  }

  /**
   * ### Search Content Views
   *
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   * GET /content_view/search -> IContentView[]
   */
  async search_content_views(
    callback: (readable: Readable) => Promise<IContentView[]>,
    request: IRequestSearchContentViews,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentView[]>(
      callback,
      'GET',
      '/content_view/search',
      {
        all_time: request.all_time,
        content_metadata_id: request.content_metadata_id,
        dashboard_id: request.dashboard_id,
        fields: request.fields,
        filter_or: request.filter_or,
        group_id: request.group_id,
        limit: request.limit,
        look_id: request.look_id,
        offset: request.offset,
        sorts: request.sorts,
        view_count: request.view_count,
        start_of_week_date: request.start_of_week_date,
        user_id: request.user_id,
      },
      null,
      options
    )
  }

  /**
   * ### Search Dashboard Elements
   *
   * Returns an **array of DashboardElement objects** that match the specified search criteria.
   *
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   * GET /dashboard_elements/search -> IDashboardElement[]
   */
  async search_dashboard_elements(
    callback: (readable: Readable) => Promise<IDashboardElement[]>,
    request: IRequestSearchDashboardElements,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDashboardElement[]>(
      callback,
      'GET',
      '/dashboard_elements/search',
      {
        dashboard_id: request.dashboard_id,
        deleted: request.deleted,
        fields: request.fields,
        filter_or: request.filter_or,
        look_id: request.look_id,
        sorts: request.sorts,
        title: request.title,
      },
      null,
      options
    )
  }

  /**
   * ### Search Dashboards
   *
   * Returns an **array of dashboard objects** that match the specified search criteria.
   *
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   *
   * The parameters `limit`, and `offset` are recommended for fetching results in page-size chunks.
   *
   * Get a **single dashboard** by id with [dashboard()](#!/Dashboard/dashboard)
   *
   * GET /dashboards/search -> IDashboard[]
   */
  async search_dashboards(
    callback: (readable: Readable) => Promise<IDashboard[]>,
    request: IRequestSearchDashboards,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDashboard[]>(
      callback,
      'GET',
      '/dashboards/search',
      {
        content_favorite_id: request.content_favorite_id,
        content_metadata_id: request.content_metadata_id,
        deleted: request.deleted,
        curate: request.curate,
        description: request.description,
        fields: request.fields,
        folder_id: request.folder_id,
        id: request.id,
        limit: request.limit,
        offset: request.offset,
        slug: request.slug,
        filter_or: request.filter_or,
        title: request.title,
        page: request.page,
        per_page: request.per_page,
        space_id: request.space_id,
        sorts: request.sorts,
        user_id: request.user_id,
        view_count: request.view_count,
      },
      null,
      options
    )
  }

  /**
   * Search for folders by creator id, parent id, name, etc
   *
   * GET /folders/search -> IFolder[]
   */
  async search_folders(
    callback: (readable: Readable) => Promise<IFolder[]>,
    request: IRequestSearchFolders,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IFolder[]>(
      callback,
      'GET',
      '/folders/search',
      {
        fields: request.fields,
        creator_id: request.creator_id,
        id: request.id,
        filter_or: request.filter_or,
        limit: request.limit,
        name: request.name,
        offset: request.offset,
        page: request.page,
        parent_id: request.parent_id,
        per_page: request.per_page,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search groups
   *
   * Returns all group records that match the given search criteria.
   *
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   * GET /groups/search -> IGroup[]
   */
  async search_groups(
    callback: (readable: Readable) => Promise<IGroup[]>,
    request: IRequestSearchGroups,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IGroup[]>(
      callback,
      'GET',
      '/groups/search',
      {
        external_group_id: request.external_group_id,
        externally_managed: request.externally_managed,
        externally_orphaned: request.externally_orphaned,
        fields: request.fields,
        filter_or: request.filter_or,
        id: request.id,
        limit: request.limit,
        name: request.name,
        offset: request.offset,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search Homepages
   *
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   * GET /homepages/search -> IHomepage[]
   */
  async search_homepages(
    callback: (readable: Readable) => Promise<IHomepage[]>,
    request: IRequestSearchHomepages,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepage[]>(
      callback,
      'GET',
      '/homepages/search',
      {
        created_at: request.created_at,
        creator_id: request.creator_id,
        favorited: request.favorited,
        fields: request.fields,
        filter_or: request.filter_or,
        first_name: request.first_name,
        last_name: request.last_name,
        limit: request.limit,
        offset: request.offset,
        page: request.page,
        title: request.title,
        per_page: request.per_page,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search Looks
   *
   * Returns an **array of Look objects** that match the specified search criteria.
   *
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   *
   * Get a **single look** by id with [look(id)](#!/Look/look)
   *
   * GET /looks/search -> ILook[]
   */
  async search_looks(
    callback: (readable: Readable) => Promise<ILook[]>,
    request: IRequestSearchLooks,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILook[]>(
      callback,
      'GET',
      '/looks/search',
      {
        content_favorite_id: request.content_favorite_id,
        curate: request.curate,
        deleted: request.deleted,
        description: request.description,
        fields: request.fields,
        id: request.id,
        limit: request.limit,
        offset: request.offset,
        filter_or: request.filter_or,
        space_id: request.space_id,
        page: request.page,
        title: request.title,
        per_page: request.per_page,
        query_id: request.query_id,
        user_id: request.user_id,
        sorts: request.sorts,
        view_count: request.view_count,
      },
      null,
      options
    )
  }

  /**
   * ### Search model sets
   * Returns all model set records that match the given search criteria.
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   * GET /model_sets/search -> IModelSet[]
   */
  async search_model_sets(
    callback: (readable: Readable) => Promise<IModelSet[]>,
    request: IRequestSearchModelSets,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IModelSet[]>(
      callback,
      'GET',
      '/model_sets/search',
      {
        all_access: request.all_access,
        built_in: request.built_in,
        fields: request.fields,
        filter_or: request.filter_or,
        id: request.id,
        limit: request.limit,
        name: request.name,
        offset: request.offset,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search permission sets
   * Returns all permission set records that match the given search criteria.
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   * GET /permission_sets/search -> IPermissionSet[]
   */
  async search_permission_sets(
    callback: (readable: Readable) => Promise<IPermissionSet[]>,
    request: IRequestSearchModelSets,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IPermissionSet[]>(
      callback,
      'GET',
      '/permission_sets/search',
      {
        all_access: request.all_access,
        built_in: request.built_in,
        fields: request.fields,
        filter_or: request.filter_or,
        id: request.id,
        limit: request.limit,
        name: request.name,
        offset: request.offset,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search roles
   *
   * Returns all role records that match the given search criteria.
   *
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   * GET /roles/search -> IRole[]
   */
  async search_roles(
    callback: (readable: Readable) => Promise<IRole[]>,
    request: IRequestSearchRoles,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IRole[]>(
      callback,
      'GET',
      '/roles/search',
      {
        built_in: request.built_in,
        fields: request.fields,
        filter_or: request.filter_or,
        id: request.id,
        limit: request.limit,
        name: request.name,
        offset: request.offset,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search Spaces
   *
   *   Returns an **array of space objects** that match the given search criteria.
   *
   *   If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   *
   *   The parameters `limit`, and `offset` are recommended for fetching results in page-size chunks.
   *
   *   Get a **single space** by id with [Space](#!/Space/space)
   *
   * GET /spaces/search -> ISpace[]
   */
  async search_spaces(
    callback: (readable: Readable) => Promise<ISpace[]>,
    request: IRequestSearchFolders,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISpace[]>(
      callback,
      'GET',
      '/spaces/search',
      {
        fields: request.fields,
        creator_id: request.creator_id,
        id: request.id,
        filter_or: request.filter_or,
        limit: request.limit,
        name: request.name,
        offset: request.offset,
        page: request.page,
        parent_id: request.parent_id,
        per_page: request.per_page,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search all themes for matching criteria.
   *
   * Returns an **array of theme objects** that match the specified search criteria.
   *
   * | Search Parameters | Description
   * | :-------------------: | :------ |
   * | `begin_at` only | Find themes active at or after `begin_at`
   * | `end_at` only | Find themes active at or before `end_at`
   * | both set | Find themes with an active inclusive period between `begin_at` and `end_at`
   *
   * Note: Range matching requires boolean AND logic.
   * When using `begin_at` and `end_at` together, do not use `filter_or`=TRUE
   *
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   *
   * Get a **single theme** by id with [Theme](#!/Theme/theme)
   *
   * **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.
   *
   * GET /themes/search -> ITheme[]
   */
  async search_themes(
    callback: (readable: Readable) => Promise<ITheme[]>,
    request: IRequestSearchThemes,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ITheme[]>(
      callback,
      'GET',
      '/themes/search',
      {
        begin_at: request.begin_at,
        end_at: request.end_at,
        fields: request.fields,
        filter_or: request.filter_or,
        id: request.id,
        limit: request.limit,
        name: request.name,
        offset: request.offset,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search currently locked-out users.
   *
   * GET /user_login_lockouts/search -> IUserLoginLockout[]
   */
  async search_user_login_lockouts(
    callback: (readable: Readable) => Promise<IUserLoginLockout[]>,
    request: IRequestSearchUserLoginLockouts,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserLoginLockout[]>(
      callback,
      'GET',
      '/user_login_lockouts/search',
      {
        auth_type: request.auth_type,
        email: request.email,
        fields: request.fields,
        filter_or: request.filter_or,
        full_name: request.full_name,
        page: request.page,
        per_page: request.per_page,
        remote_id: request.remote_id,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search users
   *
   * Returns all<sup>*</sup> user records that match the given search criteria.
   *
   * If multiple search params are given and `filter_or` is FALSE or not specified,
   * search params are combined in a logical AND operation.
   * Only rows that match *all* search param criteria will be returned.
   *
   * If `filter_or` is TRUE, multiple search params are combined in a logical OR operation.
   * Results will include rows that match **any** of the search criteria.
   *
   * String search params use case-insensitive matching.
   * String search params can contain `%` and '_' as SQL LIKE pattern match wildcard expressions.
   * example="dan%" will match "danger" and "Danzig" but not "David"
   * example="D_m%" will match "Damage" and "dump"
   *
   * Integer search params can accept a single value or a comma separated list of values. The multiple
   * values will be combined under a logical OR operation - results will match at least one of
   * the given values.
   *
   * Most search params can accept "IS NULL" and "NOT NULL" as special expressions to match
   * or exclude (respectively) rows where the column is null.
   *
   * Boolean search params accept only "true" and "false" as values.
   *
   *
   * (<sup>*</sup>) Results are always filtered to the level of information the caller is permitted to view.
   * Looker admins can see all user details; normal users in an open system can see
   * names of other users but no details; normal users in a closed system can only see
   * names of other users who are members of the same group as the user.
   *
   * GET /users/search -> IUser[]
   */
  async search_users(
    callback: (readable: Readable) => Promise<IUser[]>,
    request: IRequestSearchUsers,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUser[]>(
      callback,
      'GET',
      '/users/search',
      {
        email: request.email,
        fields: request.fields,
        content_metadata_id: request.content_metadata_id,
        filter_or: request.filter_or,
        first_name: request.first_name,
        group_id: request.group_id,
        id: request.id,
        is_disabled: request.is_disabled,
        last_name: request.last_name,
        page: request.page,
        per_page: request.per_page,
        sorts: request.sorts,
        verified_looker_employee: request.verified_looker_employee,
      },
      null,
      options
    )
  }

  /**
   * ### Search for user accounts by name
   *
   * Returns all user accounts where `first_name` OR `last_name` OR `email` field values match a pattern.
   * The pattern can contain `%` and `_` wildcards as in SQL LIKE expressions.
   *
   * Any additional search params will be combined into a logical AND expression.
   *
   * GET /users/search/names/{pattern} -> IUser[]
   */
  async search_users_names(
    callback: (readable: Readable) => Promise<IUser[]>,
    request: IRequestSearchUsersNames,
    options?: Partial<ITransportSettings>
  ) {
    request.pattern = encodeParam(request.pattern)
    return this.authStream<IUser[]>(
      callback,
      'GET',
      `/users/search/names/${request.pattern}`,
      {
        email: request.email,
        fields: request.fields,
        first_name: request.first_name,
        id: request.id,
        is_disabled: request.is_disabled,
        last_name: request.last_name,
        page: request.page,
        per_page: request.per_page,
        sorts: request.sorts,
        verified_looker_employee: request.verified_looker_employee,
      },
      null,
      options
    )
  }

  /**
   * ### Get API Session
   *
   * Returns information about the current API session, such as which workspace is selected for the session.
   *
   * GET /session -> IApiSession
   */
  async session(
    callback: (readable: Readable) => Promise<IApiSession>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IApiSession>(
      callback,
      'GET',
      '/session',
      null,
      null,
      options
    )
  }

  /**
   * ### Get session config.
   *
   * GET /session_config -> ISessionConfig
   */
  async session_config(
    callback: (readable: Readable) => Promise<ISessionConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISessionConfig>(
      callback,
      'GET',
      '/session_config',
      null,
      null,
      options
    )
  }

  /**
   * ### Set the global default Color Collection by ID
   *
   * Returns the new specified default Color Collection object.
   * **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return `Not Found` (404) errors.
   *
   * PUT /color_collections/default -> IColorCollection
   */
  async set_default_color_collection(
    callback: (readable: Readable) => Promise<IColorCollection>,
    /**
     * @param {string} collection_id ID of color collection to set as default
     */
    collection_id: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IColorCollection>(
      callback,
      'PUT',
      '/color_collections/default',
      { collection_id },
      null,
      options
    )
  }

  /**
   * ### Set the global default theme by theme name
   *
   * Only Admin users can call this function.
   *
   * Only an active theme with no expiration (`end_at` not set) can be assigned as the default theme. As long as a theme has an active record with no expiration, it can be set as the default.
   *
   * [Create Theme](#!/Theme/create) has detailed information on rules for default and active themes
   *
   * Returns the new specified default theme object.
   *
   * **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.
   *
   * PUT /themes/default -> ITheme
   */
  async set_default_theme(
    callback: (readable: Readable) => Promise<ITheme>,
    /**
     * @param {string} name Name of theme to set as default
     */
    name: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ITheme>(
      callback,
      'PUT',
      '/themes/default',
      { name },
      null,
      options
    )
  }

  /**
   * ### Set all groups for a role, removing all existing group associations from that role.
   *
   * PUT /roles/{role_id}/groups -> IGroup[]
   */
  async set_role_groups(
    callback: (readable: Readable) => Promise<IGroup[]>,
    /**
     * @param {number} role_id Id of Role
     */
    role_id: number,
    /**
     * @param {Partial<number[]>} body
     */
    body: Partial<number[]>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IGroup[]>(
      callback,
      'PUT',
      `/roles/${role_id}/groups`,
      null,
      body,
      options
    )
  }

  /**
   * ### Set all the users of the role with a specific id.
   *
   * PUT /roles/{role_id}/users -> IUser[]
   */
  async set_role_users(
    callback: (readable: Readable) => Promise<IUser[]>,
    /**
     * @param {number} role_id id of role
     */
    role_id: number,
    /**
     * @param {Partial<number[]>} body
     */
    body: Partial<number[]>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUser[]>(
      callback,
      'PUT',
      `/roles/${role_id}/users`,
      null,
      body,
      options
    )
  }

  /**
   * ### Define values for a user attribute across a set of groups, in priority order.
   *
   * This function defines all values for a user attribute defined by user groups. This is a global setting, potentially affecting
   * all users in the system. This function replaces any existing group value definitions for the indicated user attribute.
   *
   * The value of a user attribute for a given user is determined by searching the following locations, in this order:
   *
   * 1. the user's account settings
   * 2. the groups that the user is a member of
   * 3. the default value of the user attribute, if any
   *
   * The user may be a member of multiple groups which define different values for that user attribute. The order of items in the group_values parameter
   * determines which group takes priority for that user. Lowest array index wins.
   *
   * An alternate method to indicate the selection precedence of group-values is to assign numbers to the 'rank' property of each
   * group-value object in the array. Lowest 'rank' value wins. If you use this technique, you must assign a
   * rank value to every group-value object in the array.
   *
   *   To set a user attribute value for a single user, see [Set User Attribute User Value](#!/User/set_user_attribute_user_value).
   * To set a user attribute value for all members of a group, see [Set User Attribute Group Value](#!/Group/update_user_attribute_group_value).
   *
   * POST /user_attributes/{user_attribute_id}/group_values -> IUserAttributeGroupValue[]
   */
  async set_user_attribute_group_values(
    callback: (readable: Readable) => Promise<IUserAttributeGroupValue[]>,
    /**
     * @param {number} user_attribute_id Id of user attribute
     */
    user_attribute_id: number,
    /**
     * @param {Partial<IUserAttributeGroupValue[]>} body
     */
    body: Partial<IUserAttributeGroupValue[]>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserAttributeGroupValue[]>(
      callback,
      'POST',
      `/user_attributes/${user_attribute_id}/group_values`,
      null,
      body,
      options
    )
  }

  /**
   * ### Store a custom value for a user attribute in a user's account settings.
   *
   * Per-user user attribute values take precedence over group or default values.
   *
   * PATCH /users/{user_id}/attribute_values/{user_attribute_id} -> IUserAttributeWithValue
   */
  async set_user_attribute_user_value(
    callback: (readable: Readable) => Promise<IUserAttributeWithValue>,
    /**
     * @param {number} user_id Id of user
     */
    user_id: number,
    /**
     * @param {number} user_attribute_id Id of user attribute
     */
    user_attribute_id: number,
    /**
     * @param {Partial<IWriteUserAttributeWithValue>} body
     */
    body: Partial<IWriteUserAttributeWithValue>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserAttributeWithValue>(
      callback,
      'PATCH',
      `/users/${user_id}/attribute_values/${user_attribute_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Set roles of the user with a specific id.
   *
   * PUT /users/{user_id}/roles -> IRole[]
   */
  async set_user_roles(
    callback: (readable: Readable) => Promise<IRole[]>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {Partial<number[]>} body
     */
    body: Partial<number[]>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IRole[]>(
      callback,
      'PUT',
      `/users/${user_id}/roles`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Get information about the space with a specific id.
   *
   * GET /spaces/{space_id} -> ISpace
   */
  async space(
    callback: (readable: Readable) => Promise<ISpace>,
    /**
     * @param {string} space_id Id of space
     */
    space_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    space_id = encodeParam(space_id)
    return this.authStream<ISpace>(
      callback,
      'GET',
      `/spaces/${space_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the ancestors of a space
   *
   * GET /spaces/{space_id}/ancestors -> ISpace[]
   */
  async space_ancestors(
    callback: (readable: Readable) => Promise<ISpace[]>,
    /**
     * @param {string} space_id Id of space
     */
    space_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    space_id = encodeParam(space_id)
    return this.authStream<ISpace[]>(
      callback,
      'GET',
      `/spaces/${space_id}/ancestors`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the children of a space.
   *
   * GET /spaces/{space_id}/children -> ISpace[]
   */
  async space_children(
    callback: (readable: Readable) => Promise<ISpace[]>,
    request: IRequestSpaceChildren,
    options?: Partial<ITransportSettings>
  ) {
    request.space_id = encodeParam(request.space_id)
    return this.authStream<ISpace[]>(
      callback,
      'GET',
      `/spaces/${request.space_id}/children`,
      {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        sorts: request.sorts,
      },
      null,
      options
    )
  }

  /**
   * ### Search the children of a space
   *
   * GET /spaces/{space_id}/children/search -> ISpace[]
   */
  async space_children_search(
    callback: (readable: Readable) => Promise<ISpace[]>,
    request: IRequestSpaceChildrenSearch,
    options?: Partial<ITransportSettings>
  ) {
    request.space_id = encodeParam(request.space_id)
    return this.authStream<ISpace[]>(
      callback,
      'GET',
      `/spaces/${request.space_id}/children/search`,
      { fields: request.fields, name: request.name, sorts: request.sorts },
      null,
      options
    )
  }

  /**
   * ### Get the dashboards in a space
   *
   * GET /spaces/{space_id}/dashboards -> IDashboard[]
   */
  async space_dashboards(
    callback: (readable: Readable) => Promise<IDashboard[]>,
    /**
     * @param {string} space_id Id of space
     */
    space_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    space_id = encodeParam(space_id)
    return this.authStream<IDashboard[]>(
      callback,
      'GET',
      `/spaces/${space_id}/dashboards`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the looks in a space
   *
   * GET /spaces/{space_id}/looks -> ILookWithQuery[]
   */
  async space_looks(
    callback: (readable: Readable) => Promise<ILookWithQuery[]>,
    /**
     * @param {string} space_id Id of space
     */
    space_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    space_id = encodeParam(space_id)
    return this.authStream<ILookWithQuery[]>(
      callback,
      'GET',
      `/spaces/${space_id}/looks`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the parent of a space
   *
   * GET /spaces/{space_id}/parent -> ISpace
   */
  async space_parent(
    callback: (readable: Readable) => Promise<ISpace>,
    /**
     * @param {string} space_id Id of space
     */
    space_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    space_id = encodeParam(space_id)
    return this.authStream<ISpace>(
      callback,
      'GET',
      `/spaces/${space_id}/parent`,
      { fields },
      null,
      options
    )
  }

  /**
   * Get a SQL Runner query.
   *
   * GET /sql_queries/{slug} -> ISqlQuery
   */
  async sql_query(
    callback: (readable: Readable) => Promise<ISqlQuery>,
    /**
     * @param {string} slug slug of query
     */
    slug: string,
    options?: Partial<ITransportSettings>
  ) {
    slug = encodeParam(slug)
    return this.authStream<ISqlQuery>(
      callback,
      'GET',
      `/sql_queries/${slug}`,
      null,
      null,
      options
    )
  }

  /**
   * ### Update all linked dashboards to match the specified LookML dashboard.
   *
   * Any UDD (a dashboard which exists in the Looker database rather than as a LookML file) which has a `lookml_link_id`
   * property value referring to a LookML dashboard's id (model::dashboardname) will be updated so that it matches the current state of the LookML dashboard.
   *
   * For this operation to succeed the user must have permission to view the LookML dashboard, and only linked dashboards
   * that the user has permission to update will be synced.
   *
   * To **link** or **unlink** a UDD set the `lookml_link_id` property with [update_dashboard()](#!/Dashboard/update_dashboard)
   *
   * PATCH /dashboards/{lookml_dashboard_id}/sync -> number[]
   */
  async sync_lookml_dashboard(
    callback: (readable: Readable) => Promise<number[]>,
    /**
     * @param {string} lookml_dashboard_id Id of LookML dashboard, in the form 'model::dashboardname'
     */
    lookml_dashboard_id: string,
    /**
     * @param {Partial<IWriteDashboard>} body
     */
    body: Partial<IWriteDashboard>,
    /**
     * @param {boolean} raw_locale If true, and this dashboard is localized, export it with the raw keys, not localized.
     */
    raw_locale?: boolean,
    options?: Partial<ITransportSettings>
  ) {
    lookml_dashboard_id = encodeParam(lookml_dashboard_id)
    return this.authStream<number[]>(
      callback,
      'PATCH',
      `/dashboards/${lookml_dashboard_id}/sync`,
      { raw_locale },
      body,
      options
    )
  }

  /**
   * ### Test an existing connection.
   *
   * Note that a connection's 'dialect' property has a 'connection_tests' property that lists the
   * specific types of tests that the connection supports.
   *
   * This API is rate limited.
   *
   * Unsupported tests in the request will be ignored.
   *
   * PUT /connections/{connection_name}/test -> IDBConnectionTestResult[]
   */
  async test_connection(
    callback: (readable: Readable) => Promise<IDBConnectionTestResult[]>,
    /**
     * @param {string} connection_name Name of connection
     */
    connection_name: string,
    /**
     * @param {DelimArray<string>} tests Array of names of tests to run
     */
    tests?: DelimArray<string>,
    options?: Partial<ITransportSettings>
  ) {
    connection_name = encodeParam(connection_name)
    return this.authStream<IDBConnectionTestResult[]>(
      callback,
      'PUT',
      `/connections/${connection_name}/test`,
      { tests },
      null,
      options
    )
  }

  /**
   * ### Test a connection configuration.
   *
   * Note that a connection's 'dialect' property has a 'connection_tests' property that lists the
   * specific types of tests that the connection supports.
   *
   * This API is rate limited.
   *
   * Unsupported tests in the request will be ignored.
   *
   * PUT /connections/test -> IDBConnectionTestResult[]
   */
  async test_connection_config(
    callback: (readable: Readable) => Promise<IDBConnectionTestResult[]>,
    /**
     * @param {Partial<IWriteDBConnection>} body
     */
    body: Partial<IWriteDBConnection>,
    /**
     * @param {DelimArray<string>} tests Array of names of tests to run
     */
    tests?: DelimArray<string>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDBConnectionTestResult[]>(
      callback,
      'PUT',
      '/connections/test',
      { tests },
      body,
      options
    )
  }

  /**
   * Tests the integration to make sure all the settings are working.
   *
   * POST /integrations/{integration_id}/test -> IIntegrationTestResult
   */
  async test_integration(
    callback: (readable: Readable) => Promise<IIntegrationTestResult>,
    /**
     * @param {string} integration_id Id of integration
     */
    integration_id: string,
    options?: Partial<ITransportSettings>
  ) {
    integration_id = encodeParam(integration_id)
    return this.authStream<IIntegrationTestResult>(
      callback,
      'POST',
      `/integrations/${integration_id}/test`,
      null,
      null,
      options
    )
  }

  /**
   * ### Test the connection authentication settings for an LDAP configuration.
   *
   * This tests that the connection is possible and that a 'server' account to be used by Looker can       authenticate to the LDAP server given connection and authentication information.
   *
   * **connection_host**, **connection_port**, and **auth_username**, are required.       **connection_tls** and **auth_password** are optional.
   *
   * Example:
   * ```json
   * {
   *   "connection_host": "ldap.example.com",
   *   "connection_port": "636",
   *   "connection_tls": true,
   *   "auth_username": "cn=looker,dc=example,dc=com",
   *   "auth_password": "secret"
   * }
   * ```
   *
   * Looker will never return an **auth_password**. If this request omits the **auth_password** field, then       the **auth_password** value from the active config (if present) will be used for the test.
   *
   * The active LDAP settings are not modified.
   *
   * PUT /ldap_config/test_auth -> ILDAPConfigTestResult
   */
  async test_ldap_config_auth(
    callback: (readable: Readable) => Promise<ILDAPConfigTestResult>,
    /**
     * @param {Partial<IWriteLDAPConfig>} body
     */
    body: Partial<IWriteLDAPConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILDAPConfigTestResult>(
      callback,
      'PUT',
      '/ldap_config/test_auth',
      null,
      body,
      options
    )
  }

  /**
   * ### Test the connection settings for an LDAP configuration.
   *
   * This tests that the connection is possible given a connection_host and connection_port.
   *
   * **connection_host** and **connection_port** are required. **connection_tls** is optional.
   *
   * Example:
   * ```json
   * {
   *   "connection_host": "ldap.example.com",
   *   "connection_port": "636",
   *   "connection_tls": true
   * }
   * ```
   *
   * No authentication to the LDAP server is attempted.
   *
   * The active LDAP settings are not modified.
   *
   * PUT /ldap_config/test_connection -> ILDAPConfigTestResult
   */
  async test_ldap_config_connection(
    callback: (readable: Readable) => Promise<ILDAPConfigTestResult>,
    /**
     * @param {Partial<IWriteLDAPConfig>} body
     */
    body: Partial<IWriteLDAPConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILDAPConfigTestResult>(
      callback,
      'PUT',
      '/ldap_config/test_connection',
      null,
      body,
      options
    )
  }

  /**
   * ### Test the user authentication settings for an LDAP configuration.
   *
   * This test accepts a full LDAP configuration along with a username/password pair and attempts to       authenticate the user with the LDAP server. The configuration is validated before attempting the       authentication.
   *
   * Looker will never return an **auth_password**. If this request omits the **auth_password** field, then       the **auth_password** value from the active config (if present) will be used for the test.
   *
   * **test_ldap_user** and **test_ldap_password** are required.
   *
   * The active LDAP settings are not modified.
   *
   * PUT /ldap_config/test_user_auth -> ILDAPConfigTestResult
   */
  async test_ldap_config_user_auth(
    callback: (readable: Readable) => Promise<ILDAPConfigTestResult>,
    /**
     * @param {Partial<IWriteLDAPConfig>} body
     */
    body: Partial<IWriteLDAPConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILDAPConfigTestResult>(
      callback,
      'PUT',
      '/ldap_config/test_user_auth',
      null,
      body,
      options
    )
  }

  /**
   * ### Test the user authentication settings for an LDAP configuration without authenticating the user.
   *
   * This test will let you easily test the mapping for user properties and roles for any user without      needing to authenticate as that user.
   *
   * This test accepts a full LDAP configuration along with a username and attempts to find the full info      for the user from the LDAP server without actually authenticating the user. So, user password is not      required.The configuration is validated before attempting to contact the server.
   *
   * **test_ldap_user** is required.
   *
   * The active LDAP settings are not modified.
   *
   * PUT /ldap_config/test_user_info -> ILDAPConfigTestResult
   */
  async test_ldap_config_user_info(
    callback: (readable: Readable) => Promise<ILDAPConfigTestResult>,
    /**
     * @param {Partial<IWriteLDAPConfig>} body
     */
    body: Partial<IWriteLDAPConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILDAPConfigTestResult>(
      callback,
      'PUT',
      '/ldap_config/test_user_info',
      null,
      body,
      options
    )
  }

  /**
   * ### Get a theme by ID
   *
   * Use this to retrieve a specific theme, whether or not it's currently active.
   *
   * **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.
   *
   * GET /themes/{theme_id} -> ITheme
   */
  async theme(
    callback: (readable: Readable) => Promise<ITheme>,
    /**
     * @param {string} theme_id Id of theme
     */
    theme_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    theme_id = encodeParam(theme_id)
    return this.authStream<ITheme>(
      callback,
      'GET',
      `/themes/${theme_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get the named theme if it's active. Otherwise, return the default theme
   *
   * The optional `ts` parameter can specify a different timestamp than "now."
   * Note: API users with `show` ability can call this function
   *
   * **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.
   *
   * GET /themes/theme_or_default -> ITheme
   */
  async theme_or_default(
    callback: (readable: Readable) => Promise<ITheme>,
    /**
     * @param {string} name Name of theme
     */
    name: string,
    /**
     * @param {Date} ts Timestamp representing the target datetime for the active period. Defaults to 'now'
     */
    ts?: Date,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ITheme>(
      callback,
      'GET',
      '/themes/theme_or_default',
      { name, ts },
      null,
      options
    )
  }

  /**
   * ### WARNING: The Looker internal database backup function has been deprecated.
   *
   * PATCH /backup_configuration -> IBackupConfiguration
   */
  async update_backup_configuration(
    callback: (readable: Readable) => Promise<IBackupConfiguration>,
    /**
     * @param {Partial<IWriteBackupConfiguration>} body
     */
    body: Partial<IWriteBackupConfiguration>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IBackupConfiguration>(
      callback,
      'PATCH',
      '/backup_configuration',
      null,
      body,
      options
    )
  }

  /**
   * Update the current Cloud Storage Configuration.
   *
   * PATCH /cloud_storage -> IBackupConfiguration
   */
  async update_cloud_storage_configuration(
    callback: (readable: Readable) => Promise<IBackupConfiguration>,
    /**
     * @param {Partial<IWriteBackupConfiguration>} body
     */
    body: Partial<IWriteBackupConfiguration>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IBackupConfiguration>(
      callback,
      'PATCH',
      '/cloud_storage',
      null,
      body,
      options
    )
  }

  /**
   * ### Update a custom color collection by id.
   * **Note**: Only an API user with the Admin role can call this endpoint. Unauthorized requests will return `Not Found` (404) errors.
   *
   * PATCH /color_collections/{collection_id} -> IColorCollection
   */
  async update_color_collection(
    callback: (readable: Readable) => Promise<IColorCollection>,
    /**
     * @param {string} collection_id Id of Custom Color Collection
     */
    collection_id: string,
    /**
     * @param {Partial<IWriteColorCollection>} body
     */
    body: Partial<IWriteColorCollection>,
    options?: Partial<ITransportSettings>
  ) {
    collection_id = encodeParam(collection_id)
    return this.authStream<IColorCollection>(
      callback,
      'PATCH',
      `/color_collections/${collection_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update a connection using the specified configuration.
   *
   * PATCH /connections/{connection_name} -> IDBConnection
   */
  async update_connection(
    callback: (readable: Readable) => Promise<IDBConnection>,
    /**
     * @param {string} connection_name Name of connection
     */
    connection_name: string,
    /**
     * @param {Partial<IWriteDBConnection>} body
     */
    body: Partial<IWriteDBConnection>,
    options?: Partial<ITransportSettings>
  ) {
    connection_name = encodeParam(connection_name)
    return this.authStream<IDBConnection>(
      callback,
      'PATCH',
      `/connections/${connection_name}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Move a piece of content.
   *
   * PATCH /content_metadata/{content_metadata_id} -> IContentMeta
   */
  async update_content_metadata(
    callback: (readable: Readable) => Promise<IContentMeta>,
    /**
     * @param {number} content_metadata_id Id of content metadata
     */
    content_metadata_id: number,
    /**
     * @param {Partial<IWriteContentMeta>} body
     */
    body: Partial<IWriteContentMeta>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentMeta>(
      callback,
      'PATCH',
      `/content_metadata/${content_metadata_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update type of access for content metadata.
   *
   * PUT /content_metadata_access/{content_metadata_access_id} -> IContentMetaGroupUser
   */
  async update_content_metadata_access(
    callback: (readable: Readable) => Promise<IContentMetaGroupUser>,
    /**
     * @param {number} content_metadata_access_id Id of content metadata access
     */
    content_metadata_access_id: number,
    /**
     * @param {Partial<IContentMetaGroupUser>} body
     */
    body: Partial<IContentMetaGroupUser>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IContentMetaGroupUser>(
      callback,
      'PUT',
      `/content_metadata_access/${content_metadata_access_id}`,
      null,
      body,
      options
    )
  }

  /**
   * Update custom welcome email setting and values. Optionally send a test email with the new content to the currently logged in user.
   *
   * PATCH /custom_welcome_email -> ICustomWelcomeEmail
   */
  async update_custom_welcome_email(
    callback: (readable: Readable) => Promise<ICustomWelcomeEmail>,
    /**
     * @param {Partial<IWriteCustomWelcomeEmail>} body
     */
    body: Partial<IWriteCustomWelcomeEmail>,
    /**
     * @param {boolean} send_test_welcome_email If true a test email with the content from the request will be sent to the current user after saving
     */
    send_test_welcome_email?: boolean,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICustomWelcomeEmail>(
      callback,
      'PATCH',
      '/custom_welcome_email',
      { send_test_welcome_email },
      body,
      options
    )
  }

  /**
   * Requests to this endpoint will send a welcome email with the custom content provided in the body to the currently logged in user.
   *
   * PUT /custom_welcome_email_test -> IWelcomeEmailTest
   */
  async update_custom_welcome_email_test(
    callback: (readable: Readable) => Promise<IWelcomeEmailTest>,
    /**
     * @param {Partial<IWelcomeEmailTest>} body
     */
    body: Partial<IWelcomeEmailTest>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IWelcomeEmailTest>(
      callback,
      'PUT',
      '/custom_welcome_email_test',
      null,
      body,
      options
    )
  }

  /**
   * ### Update a dashboard
   *
   * You can use this function to change the string and integer properties of
   * a dashboard. Nested objects such as filters, dashboard elements, or dashboard layout components
   * cannot be modified by this function - use the update functions for the respective
   * nested object types (like [update_dashboard_filter()](#!/3.1/Dashboard/update_dashboard_filter) to change a filter)
   * to modify nested objects referenced by a dashboard.
   *
   * If you receive a 422 error response when updating a dashboard, be sure to look at the
   * response body for information about exactly which fields are missing or contain invalid data.
   *
   * PATCH /dashboards/{dashboard_id} -> IDashboard
   */
  async update_dashboard(
    callback: (readable: Readable) => Promise<IDashboard>,
    /**
     * @param {string} dashboard_id Id of dashboard
     */
    dashboard_id: string,
    /**
     * @param {Partial<IWriteDashboard>} body
     */
    body: Partial<IWriteDashboard>,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_id = encodeParam(dashboard_id)
    return this.authStream<IDashboard>(
      callback,
      'PATCH',
      `/dashboards/${dashboard_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update the dashboard element with a specific id.
   *
   * PATCH /dashboard_elements/{dashboard_element_id} -> IDashboardElement
   */
  async update_dashboard_element(
    callback: (readable: Readable) => Promise<IDashboardElement>,
    /**
     * @param {string} dashboard_element_id Id of dashboard element
     */
    dashboard_element_id: string,
    /**
     * @param {Partial<IWriteDashboardElement>} body
     */
    body: Partial<IWriteDashboardElement>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_element_id = encodeParam(dashboard_element_id)
    return this.authStream<IDashboardElement>(
      callback,
      'PATCH',
      `/dashboard_elements/${dashboard_element_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update the dashboard filter with a specific id.
   *
   * PATCH /dashboard_filters/{dashboard_filter_id} -> IDashboardFilter
   */
  async update_dashboard_filter(
    callback: (readable: Readable) => Promise<IDashboardFilter>,
    /**
     * @param {string} dashboard_filter_id Id of dashboard filter
     */
    dashboard_filter_id: string,
    /**
     * @param {Partial<IWriteDashboardFilter>} body
     */
    body: Partial<IWriteDashboardFilter>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_filter_id = encodeParam(dashboard_filter_id)
    return this.authStream<IDashboardFilter>(
      callback,
      'PATCH',
      `/dashboard_filters/${dashboard_filter_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update the dashboard layout with a specific id.
   *
   * PATCH /dashboard_layouts/{dashboard_layout_id} -> IDashboardLayout
   */
  async update_dashboard_layout(
    callback: (readable: Readable) => Promise<IDashboardLayout>,
    /**
     * @param {string} dashboard_layout_id Id of dashboard layout
     */
    dashboard_layout_id: string,
    /**
     * @param {Partial<IWriteDashboardLayout>} body
     */
    body: Partial<IWriteDashboardLayout>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_layout_id = encodeParam(dashboard_layout_id)
    return this.authStream<IDashboardLayout>(
      callback,
      'PATCH',
      `/dashboard_layouts/${dashboard_layout_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update the dashboard element with a specific id.
   *
   * PATCH /dashboard_layout_components/{dashboard_layout_component_id} -> IDashboardLayoutComponent
   */
  async update_dashboard_layout_component(
    callback: (readable: Readable) => Promise<IDashboardLayoutComponent>,
    /**
     * @param {string} dashboard_layout_component_id Id of dashboard layout component
     */
    dashboard_layout_component_id: string,
    /**
     * @param {Partial<IWriteDashboardLayoutComponent>} body
     */
    body: Partial<IWriteDashboardLayoutComponent>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    dashboard_layout_component_id = encodeParam(dashboard_layout_component_id)
    return this.authStream<IDashboardLayoutComponent>(
      callback,
      'PATCH',
      `/dashboard_layout_components/${dashboard_layout_component_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update a datagroup using the specified params.
   *
   * PATCH /datagroups/{datagroup_id} -> IDatagroup
   */
  async update_datagroup(
    callback: (readable: Readable) => Promise<IDatagroup>,
    /**
     * @param {string} datagroup_id ID of datagroup.
     */
    datagroup_id: string,
    /**
     * @param {Partial<IWriteDatagroup>} body
     */
    body: Partial<IWriteDatagroup>,
    options?: Partial<ITransportSettings>
  ) {
    datagroup_id = encodeParam(datagroup_id)
    return this.authStream<IDatagroup>(
      callback,
      'PATCH',
      `/datagroups/${datagroup_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update the setting for enabling/disabling digest emails
   *
   * PATCH /digest_emails_enabled -> IDigestEmails
   */
  async update_digest_emails_enabled(
    callback: (readable: Readable) => Promise<IDigestEmails>,
    /**
     * @param {Partial<IDigestEmails>} body
     */
    body: Partial<IDigestEmails>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IDigestEmails>(
      callback,
      'PATCH',
      '/digest_emails_enabled',
      null,
      body,
      options
    )
  }

  /**
   * ### Update the folder with a specific id.
   *
   * PATCH /folders/{folder_id} -> IFolder
   */
  async update_folder(
    callback: (readable: Readable) => Promise<IFolder>,
    /**
     * @param {string} folder_id Id of folder
     */
    folder_id: string,
    /**
     * @param {Partial<IUpdateFolder>} body
     */
    body: Partial<IUpdateFolder>,
    options?: Partial<ITransportSettings>
  ) {
    folder_id = encodeParam(folder_id)
    return this.authStream<IFolder>(
      callback,
      'PATCH',
      `/folders/${folder_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Checkout and/or reset --hard an existing Git Branch
   *
   * Only allowed in development mode
   *   - Call `update_session` to select the 'dev' workspace.
   *
   * Checkout an existing branch if name field is different from the name of the currently checked out branch.
   *
   * Optionally specify a branch name, tag name or commit SHA to which the branch should be reset.
   *   **DANGER** hard reset will be force pushed to the remote. Unsaved changes and commits may be permanently lost.
   *
   * PUT /projects/{project_id}/git_branch -> IGitBranch
   */
  async update_git_branch(
    callback: (readable: Readable) => Promise<IGitBranch>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {Partial<IWriteGitBranch>} body
     */
    body: Partial<IWriteGitBranch>,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IGitBranch>(
      callback,
      'PUT',
      `/projects/${project_id}/git_branch`,
      null,
      body,
      options
    )
  }

  /**
   * ### Updates the a group (admin only).
   *
   * PATCH /groups/{group_id} -> IGroup
   */
  async update_group(
    callback: (readable: Readable) => Promise<IGroup>,
    /**
     * @param {number} group_id Id of group
     */
    group_id: number,
    /**
     * @param {Partial<IWriteGroup>} body
     */
    body: Partial<IWriteGroup>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IGroup>(
      callback,
      'PATCH',
      `/groups/${group_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update a homepage definition.
   *
   * PATCH /homepages/{homepage_id} -> IHomepage
   */
  async update_homepage(
    callback: (readable: Readable) => Promise<IHomepage>,
    /**
     * @param {number} homepage_id Id of homepage
     */
    homepage_id: number,
    /**
     * @param {Partial<IWriteHomepage>} body
     */
    body: Partial<IWriteHomepage>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepage>(
      callback,
      'PATCH',
      `/homepages/${homepage_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update a homepage item definition.
   *
   * PATCH /homepage_items/{homepage_item_id} -> IHomepageItem
   */
  async update_homepage_item(
    callback: (readable: Readable) => Promise<IHomepageItem>,
    /**
     * @param {number} homepage_item_id Id of homepage item
     */
    homepage_item_id: number,
    /**
     * @param {Partial<IWriteHomepageItem>} body
     */
    body: Partial<IWriteHomepageItem>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepageItem>(
      callback,
      'PATCH',
      `/homepage_items/${homepage_item_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update a homepage section definition.
   *
   * PATCH /homepage_sections/{homepage_section_id} -> IHomepageSection
   */
  async update_homepage_section(
    callback: (readable: Readable) => Promise<IHomepageSection>,
    /**
     * @param {number} homepage_section_id Id of homepage section
     */
    homepage_section_id: number,
    /**
     * @param {Partial<IWriteHomepageSection>} body
     */
    body: Partial<IWriteHomepageSection>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IHomepageSection>(
      callback,
      'PATCH',
      `/homepage_sections/${homepage_section_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update parameters on a Integration.
   *
   * PATCH /integrations/{integration_id} -> IIntegration
   */
  async update_integration(
    callback: (readable: Readable) => Promise<IIntegration>,
    /**
     * @param {string} integration_id Id of integration
     */
    integration_id: string,
    /**
     * @param {Partial<IWriteIntegration>} body
     */
    body: Partial<IWriteIntegration>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    integration_id = encodeParam(integration_id)
    return this.authStream<IIntegration>(
      callback,
      'PATCH',
      `/integrations/${integration_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update a Integration Hub definition.
   *
   * This API is rate limited to prevent it from being used for SSRF attacks
   *
   * PATCH /integration_hubs/{integration_hub_id} -> IIntegrationHub
   */
  async update_integration_hub(
    callback: (readable: Readable) => Promise<IIntegrationHub>,
    /**
     * @param {number} integration_hub_id Id of Integration Hub
     */
    integration_hub_id: number,
    /**
     * @param {Partial<IWriteIntegrationHub>} body
     */
    body: Partial<IWriteIntegrationHub>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IIntegrationHub>(
      callback,
      'PATCH',
      `/integration_hubs/${integration_hub_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * Update internal help resources settings
   *
   * PATCH /internal_help_resources -> IInternalHelpResources
   */
  async update_internal_help_resources(
    callback: (readable: Readable) => Promise<IInternalHelpResources>,
    /**
     * @param {Partial<IWriteInternalHelpResources>} body
     */
    body: Partial<IWriteInternalHelpResources>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IInternalHelpResources>(
      callback,
      'PATCH',
      '/internal_help_resources',
      null,
      body,
      options
    )
  }

  /**
   * Update internal help resources content
   *
   * PATCH /internal_help_resources_content -> IInternalHelpResourcesContent
   */
  async update_internal_help_resources_content(
    callback: (readable: Readable) => Promise<IInternalHelpResourcesContent>,
    /**
     * @param {Partial<IWriteInternalHelpResourcesContent>} body
     */
    body: Partial<IWriteInternalHelpResourcesContent>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IInternalHelpResourcesContent>(
      callback,
      'PATCH',
      '/internal_help_resources_content',
      null,
      body,
      options
    )
  }

  /**
   * ### Update the LDAP configuration.
   *
   * Configuring LDAP impacts authentication for all users. This configuration should be done carefully.
   *
   * Only Looker administrators can read and update the LDAP configuration.
   *
   * LDAP is enabled or disabled for Looker using the **enabled** field.
   *
   * It is **highly** recommended that any LDAP setting changes be tested using the APIs below before being set globally.
   *
   * See the [Looker LDAP docs](https://www.looker.com/docs/r/api/ldap_setup) for additional information.
   *
   * PATCH /ldap_config -> ILDAPConfig
   */
  async update_ldap_config(
    callback: (readable: Readable) => Promise<ILDAPConfig>,
    /**
     * @param {Partial<IWriteLDAPConfig>} body
     */
    body: Partial<IWriteLDAPConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILDAPConfig>(
      callback,
      'PATCH',
      '/ldap_config',
      null,
      body,
      options
    )
  }

  /**
   * ### Update information about the legacy feature with a specific id.
   *
   * PATCH /legacy_features/{legacy_feature_id} -> ILegacyFeature
   */
  async update_legacy_feature(
    callback: (readable: Readable) => Promise<ILegacyFeature>,
    /**
     * @param {number} legacy_feature_id id of legacy feature
     */
    legacy_feature_id: number,
    /**
     * @param {Partial<IWriteLegacyFeature>} body
     */
    body: Partial<IWriteLegacyFeature>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILegacyFeature>(
      callback,
      'PATCH',
      `/legacy_features/${legacy_feature_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Modify a Look
   *
   * Use this function to modify parts of a look. Property values given in a call to `update_look` are
   * applied to the existing look, so there's no need to include properties whose values are not changing.
   * It's best to specify only the properties you want to change and leave everything else out
   * of your `update_look` call. **Look properties marked 'read-only' will be ignored.**
   *
   * When a user deletes a look in the Looker UI, the look data remains in the database but is
   * marked with a deleted flag ("soft-deleted"). Soft-deleted looks can be undeleted (by an admin)
   * if the delete was in error.
   *
   * To soft-delete a look via the API, use [update_look()](#!/Look/update_look) to change the look's `deleted` property to `true`.
   * You can undelete a look by calling `update_look` to change the look's `deleted` property to `false`.
   *
   * Soft-deleted looks are excluded from the results of [all_looks()](#!/Look/all_looks) and [search_looks()](#!/Look/search_looks), so they
   * essentially disappear from view even though they still reside in the db.
   * In API 3.1 and later, you can pass `deleted: true` as a parameter to [search_looks()](#!/3.1/Look/search_looks) to list soft-deleted looks.
   *
   * NOTE: [delete_look()](#!/Look/delete_look) performs a "hard delete" - the look data is removed from the Looker
   * database and destroyed. There is no "undo" for `delete_look()`.
   *
   * PATCH /looks/{look_id} -> ILookWithQuery
   */
  async update_look(
    callback: (readable: Readable) => Promise<ILookWithQuery>,
    /**
     * @param {number} look_id Id of look
     */
    look_id: number,
    /**
     * @param {Partial<IWriteLookWithQuery>} body
     */
    body: Partial<IWriteLookWithQuery>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ILookWithQuery>(
      callback,
      'PATCH',
      `/looks/${look_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update a lookml model using the specified configuration.
   *
   * PATCH /lookml_models/{lookml_model_name} -> ILookmlModel
   */
  async update_lookml_model(
    callback: (readable: Readable) => Promise<ILookmlModel>,
    /**
     * @param {string} lookml_model_name Name of lookml model.
     */
    lookml_model_name: string,
    /**
     * @param {Partial<IWriteLookmlModel>} body
     */
    body: Partial<IWriteLookmlModel>,
    options?: Partial<ITransportSettings>
  ) {
    lookml_model_name = encodeParam(lookml_model_name)
    return this.authStream<ILookmlModel>(
      callback,
      'PATCH',
      `/lookml_models/${lookml_model_name}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update information about the model set with a specific id.
   *
   * PATCH /model_sets/{model_set_id} -> IModelSet
   */
  async update_model_set(
    callback: (readable: Readable) => Promise<IModelSet>,
    /**
     * @param {number} model_set_id id of model set
     */
    model_set_id: number,
    /**
     * @param {Partial<IWriteModelSet>} body
     */
    body: Partial<IWriteModelSet>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IModelSet>(
      callback,
      'PATCH',
      `/model_sets/${model_set_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update the OIDC configuration.
   *
   * Configuring OIDC impacts authentication for all users. This configuration should be done carefully.
   *
   * Only Looker administrators can read and update the OIDC configuration.
   *
   * OIDC is enabled or disabled for Looker using the **enabled** field.
   *
   * It is **highly** recommended that any OIDC setting changes be tested using the APIs below before being set globally.
   *
   * PATCH /oidc_config -> IOIDCConfig
   */
  async update_oidc_config(
    callback: (readable: Readable) => Promise<IOIDCConfig>,
    /**
     * @param {Partial<IWriteOIDCConfig>} body
     */
    body: Partial<IWriteOIDCConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IOIDCConfig>(
      callback,
      'PATCH',
      '/oidc_config',
      null,
      body,
      options
    )
  }

  /**
   * ### Update password config.
   *
   * PATCH /password_config -> IPasswordConfig
   */
  async update_password_config(
    callback: (readable: Readable) => Promise<IPasswordConfig>,
    /**
     * @param {Partial<IWritePasswordConfig>} body
     */
    body: Partial<IWritePasswordConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IPasswordConfig>(
      callback,
      'PATCH',
      '/password_config',
      null,
      body,
      options
    )
  }

  /**
   * ### Update information about the permission set with a specific id.
   *
   * PATCH /permission_sets/{permission_set_id} -> IPermissionSet
   */
  async update_permission_set(
    callback: (readable: Readable) => Promise<IPermissionSet>,
    /**
     * @param {number} permission_set_id id of permission set
     */
    permission_set_id: number,
    /**
     * @param {Partial<IWritePermissionSet>} body
     */
    body: Partial<IWritePermissionSet>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IPermissionSet>(
      callback,
      'PATCH',
      `/permission_sets/${permission_set_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update Project Configuration
   *
   * Apply changes to a project's configuration.
   *
   *
   * #### Configuring Git for a Project
   *
   * To set up a Looker project with a remote git repository, follow these steps:
   *
   * 1. Call `update_session` to select the 'dev' workspace.
   * 1. Call `create_git_deploy_key` to create a new deploy key for the project
   * 1. Copy the deploy key text into the remote git repository's ssh key configuration
   * 1. Call `update_project` to set project's `git_remote_url` ()and `git_service_name`, if necessary).
   *
   * When you modify a project's `git_remote_url`, Looker connects to the remote repository to fetch
   * metadata. The remote git repository MUST be configured with the Looker-generated deploy
   * key for this project prior to setting the project's `git_remote_url`.
   *
   * To set up a Looker project with a git repository residing on the Looker server (a 'bare' git repo):
   * 1. Call `update_session` to select the 'dev' workspace.
   * 1. Call `update_project` setting `git_remote_url` to nil and `git_service_name` to "bare".
   *
   * PATCH /projects/{project_id} -> IProject
   */
  async update_project(
    callback: (readable: Readable) => Promise<IProject>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {Partial<IWriteProject>} body
     */
    body: Partial<IWriteProject>,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IProject>(
      callback,
      'PATCH',
      `/projects/${project_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Configure Repository Credential for a remote dependency
   *
   * Admin required.
   *
   * `root_project_id` is required.
   * `credential_id` is required.
   *
   * PUT /projects/{root_project_id}/credential/{credential_id} -> IRepositoryCredential
   */
  async update_repository_credential(
    callback: (readable: Readable) => Promise<IRepositoryCredential>,
    /**
     * @param {string} root_project_id Root Project Id
     */
    root_project_id: string,
    /**
     * @param {string} credential_id Credential Id
     */
    credential_id: string,
    /**
     * @param {Partial<IWriteRepositoryCredential>} body
     */
    body: Partial<IWriteRepositoryCredential>,
    options?: Partial<ITransportSettings>
  ) {
    root_project_id = encodeParam(root_project_id)
    credential_id = encodeParam(credential_id)
    return this.authStream<IRepositoryCredential>(
      callback,
      'PUT',
      `/projects/${root_project_id}/credential/${credential_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update information about the role with a specific id.
   *
   * PATCH /roles/{role_id} -> IRole
   */
  async update_role(
    callback: (readable: Readable) => Promise<IRole>,
    /**
     * @param {number} role_id id of role
     */
    role_id: number,
    /**
     * @param {Partial<IWriteRole>} body
     */
    body: Partial<IWriteRole>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IRole>(
      callback,
      'PATCH',
      `/roles/${role_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update the SAML configuration.
   *
   * Configuring SAML impacts authentication for all users. This configuration should be done carefully.
   *
   * Only Looker administrators can read and update the SAML configuration.
   *
   * SAML is enabled or disabled for Looker using the **enabled** field.
   *
   * It is **highly** recommended that any SAML setting changes be tested using the APIs below before being set globally.
   *
   * PATCH /saml_config -> ISamlConfig
   */
  async update_saml_config(
    callback: (readable: Readable) => Promise<ISamlConfig>,
    /**
     * @param {Partial<IWriteSamlConfig>} body
     */
    body: Partial<IWriteSamlConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISamlConfig>(
      callback,
      'PATCH',
      '/saml_config',
      null,
      body,
      options
    )
  }

  /**
   * ### Update a Scheduled Plan
   *
   * Admins can update other users' Scheduled Plans.
   *
   * Note: Any scheduled plan destinations specified in an update will **replace** all scheduled plan destinations
   * currently defined for the scheduled plan.
   *
   * For Example: If a scheduled plan has destinations A, B, and C, and you call update on this scheduled plan
   * specifying only B in the destinations, then destinations A and C will be deleted by the update.
   *
   * Updating a scheduled plan to assign null or an empty array to the scheduled_plan_destinations property is an error, as a scheduled plan must always have at least one destination.
   *
   * If you omit the scheduled_plan_destinations property from the object passed to update, then the destinations
   * defined on the original scheduled plan will remain unchanged.
   *
   * #### Email Permissions:
   *
   * For details about permissions required to schedule delivery to email and the safeguards
   * Looker offers to protect against sending to unauthorized email destinations, see [Email Domain Whitelist for Scheduled Looks](https://docs.looker.com/r/api/embed-permissions).
   *
   *
   * #### Scheduled Plan Destination Formats
   *
   * Scheduled plan destinations must specify the data format to produce and send to the destination.
   *
   * Formats:
   *
   * | format | Description
   * | :-----------: | :--- |
   * | json | A JSON object containing a `data` property which contains an array of JSON objects, one per row. No metadata.
   * | json_detail | Row data plus metadata describing the fields, pivots, table calcs, and other aspects of the query
   * | inline_json | Same as the JSON format, except that the `data` property is a string containing JSON-escaped row data. Additional properties describe the data operation. This format is primarily used to send data to web hooks so that the web hook doesn't have to re-encode the JSON row data in order to pass it on to its ultimate destination.
   * | csv | Comma separated values with a header
   * | txt | Tab separated values with a header
   * | html | Simple html
   * | xlsx | MS Excel spreadsheet
   * | wysiwyg_pdf | Dashboard rendered in a tiled layout to produce a PDF document
   * | assembled_pdf | Dashboard rendered in a single column layout to produce a PDF document
   * | wysiwyg_png | Dashboard rendered in a tiled layout to produce a PNG image
   * ||
   *
   * Valid formats vary by destination type and source object. `wysiwyg_pdf` is only valid for dashboards, for example.
   *
   * PATCH /scheduled_plans/{scheduled_plan_id} -> IScheduledPlan
   */
  async update_scheduled_plan(
    callback: (readable: Readable) => Promise<IScheduledPlan>,
    /**
     * @param {number} scheduled_plan_id Scheduled Plan Id
     */
    scheduled_plan_id: number,
    /**
     * @param {Partial<IWriteScheduledPlan>} body
     */
    body: Partial<IWriteScheduledPlan>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IScheduledPlan>(
      callback,
      'PATCH',
      `/scheduled_plans/${scheduled_plan_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update API Session
   *
   * #### API Session Workspace
   *
   * You can use this endpoint to change the active workspace for the current API session.
   *
   * Only one workspace can be active in a session. The active workspace can be changed
   * any number of times in a session.
   *
   * The default workspace for API sessions is the "production" workspace.
   *
   * All Looker APIs that use projects or lookml models (such as running queries) will
   * use the version of project and model files defined by this workspace for the lifetime of the
   * current API session or until the session workspace is changed again.
   *
   * An API session has the same lifetime as the access_token used to authenticate API requests. Each successful
   * API login generates a new access_token and a new API session.
   *
   * If your Looker API client application needs to work in a dev workspace across multiple
   * API sessions, be sure to select the dev workspace after each login.
   *
   * PATCH /session -> IApiSession
   */
  async update_session(
    callback: (readable: Readable) => Promise<IApiSession>,
    /**
     * @param {Partial<IWriteApiSession>} body
     */
    body: Partial<IWriteApiSession>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IApiSession>(
      callback,
      'PATCH',
      '/session',
      null,
      body,
      options
    )
  }

  /**
   * ### Update session config.
   *
   * PATCH /session_config -> ISessionConfig
   */
  async update_session_config(
    callback: (readable: Readable) => Promise<ISessionConfig>,
    /**
     * @param {Partial<IWriteSessionConfig>} body
     */
    body: Partial<IWriteSessionConfig>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISessionConfig>(
      callback,
      'PATCH',
      '/session_config',
      null,
      body,
      options
    )
  }

  /**
   * ### Update the space with a specific id.
   *
   * PATCH /spaces/{space_id} -> ISpace
   */
  async update_space(
    callback: (readable: Readable) => Promise<ISpace>,
    /**
     * @param {string} space_id Id of space
     */
    space_id: string,
    /**
     * @param {Partial<IUpdateSpace>} body
     */
    body: Partial<IUpdateSpace>,
    options?: Partial<ITransportSettings>
  ) {
    space_id = encodeParam(space_id)
    return this.authStream<ISpace>(
      callback,
      'PATCH',
      `/spaces/${space_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update the theme by id.
   *
   * **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.
   *
   * PATCH /themes/{theme_id} -> ITheme
   */
  async update_theme(
    callback: (readable: Readable) => Promise<ITheme>,
    /**
     * @param {string} theme_id Id of theme
     */
    theme_id: string,
    /**
     * @param {Partial<IWriteTheme>} body
     */
    body: Partial<IWriteTheme>,
    options?: Partial<ITransportSettings>
  ) {
    theme_id = encodeParam(theme_id)
    return this.authStream<ITheme>(
      callback,
      'PATCH',
      `/themes/${theme_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Update information about the user with a specific id.
   *
   * PATCH /users/{user_id} -> IUser
   */
  async update_user(
    callback: (readable: Readable) => Promise<IUser>,
    /**
     * @param {number} user_id Id of user
     */
    user_id: number,
    /**
     * @param {Partial<IWriteUser>} body
     */
    body: Partial<IWriteUser>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUser>(
      callback,
      'PATCH',
      `/users/${user_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update a user attribute definition.
   *
   * PATCH /user_attributes/{user_attribute_id} -> IUserAttribute
   */
  async update_user_attribute(
    callback: (readable: Readable) => Promise<IUserAttribute>,
    /**
     * @param {number} user_attribute_id Id of user attribute
     */
    user_attribute_id: number,
    /**
     * @param {Partial<IWriteUserAttribute>} body
     */
    body: Partial<IWriteUserAttribute>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserAttribute>(
      callback,
      'PATCH',
      `/user_attributes/${user_attribute_id}`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Set the value of a user attribute for a group.
   *
   * For information about how user attribute values are calculated, see [Set User Attribute Group Values](#!/UserAttribute/set_user_attribute_group_values).
   *
   * PATCH /groups/{group_id}/attribute_values/{user_attribute_id} -> IUserAttributeGroupValue
   */
  async update_user_attribute_group_value(
    callback: (readable: Readable) => Promise<IUserAttributeGroupValue>,
    /**
     * @param {number} group_id Id of group
     */
    group_id: number,
    /**
     * @param {number} user_attribute_id Id of user attribute
     */
    user_attribute_id: number,
    /**
     * @param {Partial<IUserAttributeGroupValue>} body
     */
    body: Partial<IUserAttributeGroupValue>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserAttributeGroupValue>(
      callback,
      'PATCH',
      `/groups/${group_id}/attribute_values/${user_attribute_id}`,
      null,
      body,
      options
    )
  }

  /**
   * ### Email/password login information for the specified user.
   *
   * PATCH /users/{user_id}/credentials_email -> ICredentialsEmail
   */
  async update_user_credentials_email(
    callback: (readable: Readable) => Promise<ICredentialsEmail>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {Partial<IWriteCredentialsEmail>} body
     */
    body: Partial<IWriteCredentialsEmail>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsEmail>(
      callback,
      'PATCH',
      `/users/${user_id}/credentials_email`,
      { fields },
      body,
      options
    )
  }

  /**
   * ### Update the whitelabel configuration
   *
   * PUT /whitelabel_configuration -> IWhitelabelConfiguration
   */
  async update_whitelabel_configuration(
    callback: (readable: Readable) => Promise<IWhitelabelConfiguration>,
    /**
     * @param {Partial<IWriteWhitelabelConfiguration>} body
     */
    body: Partial<IWriteWhitelabelConfiguration>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IWhitelabelConfiguration>(
      callback,
      'PUT',
      '/whitelabel_configuration',
      null,
      body,
      options
    )
  }

  /**
   * ### Get information about the user with a specific id.
   *
   * If the caller is an admin or the caller is the user being specified, then full user information will
   * be returned. Otherwise, a minimal 'public' variant of the user information will be returned. This contains
   * The user name and avatar url, but no sensitive information.
   *
   * GET /users/{user_id} -> IUser
   */
  async user(
    callback: (readable: Readable) => Promise<IUser>,
    /**
     * @param {number} user_id Id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUser>(
      callback,
      'GET',
      `/users/${user_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about a user attribute.
   *
   * GET /user_attributes/{user_attribute_id} -> IUserAttribute
   */
  async user_attribute(
    callback: (readable: Readable) => Promise<IUserAttribute>,
    /**
     * @param {number} user_attribute_id Id of user attribute
     */
    user_attribute_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserAttribute>(
      callback,
      'GET',
      `/user_attributes/${user_attribute_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get user attribute values for a given user.
   *
   * Returns the values of specified user attributes (or all user attributes) for a certain user.
   *
   * A value for each user attribute is searched for in the following locations, in this order:
   * 1. in the user's account information
   * 1. in groups that the user is a member of
   * 1. the default value of the user attribute
   *
   * If more than one group has a value defined for a user attribute, the group with the lowest rank wins.
   *
   * The response will only include user attributes for which values were found. Use `include_unset=true` to include
   * empty records for user attributes with no value.
   *
   * The value of all hidden user attributes will be blank.
   *
   * GET /users/{user_id}/attribute_values -> IUserAttributeWithValue[]
   */
  async user_attribute_user_values(
    callback: (readable: Readable) => Promise<IUserAttributeWithValue[]>,
    request: IRequestUserAttributeUserValues,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IUserAttributeWithValue[]>(
      callback,
      'GET',
      `/users/${request.user_id}/attribute_values`,
      {
        all_values: request.all_values,
        fields: request.fields,
        include_unset: request.include_unset,
        user_attribute_ids: request.user_attribute_ids,
      },
      null,
      options
    )
  }

  /**
   * ### API 3 login information for the specified user. This is for the newer API keys that can be added for any user.
   *
   * GET /users/{user_id}/credentials_api3/{credentials_api3_id} -> ICredentialsApi3
   */
  async user_credentials_api3(
    callback: (readable: Readable) => Promise<ICredentialsApi3>,
    /**
     * @param {number} user_id Id of user
     */
    user_id: number,
    /**
     * @param {number} credentials_api3_id Id of API 3 Credential
     */
    credentials_api3_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsApi3>(
      callback,
      'GET',
      `/users/${user_id}/credentials_api3/${credentials_api3_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Email/password login information for the specified user.
   *
   * GET /users/{user_id}/credentials_email -> ICredentialsEmail
   */
  async user_credentials_email(
    callback: (readable: Readable) => Promise<ICredentialsEmail>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsEmail>(
      callback,
      'GET',
      `/users/${user_id}/credentials_email`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Embed login information for the specified user.
   *
   * GET /users/{user_id}/credentials_embed/{credentials_embed_id} -> ICredentialsEmbed
   */
  async user_credentials_embed(
    callback: (readable: Readable) => Promise<ICredentialsEmbed>,
    /**
     * @param {number} user_id Id of user
     */
    user_id: number,
    /**
     * @param {number} credentials_embed_id Id of Embedding Credential
     */
    credentials_embed_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsEmbed>(
      callback,
      'GET',
      `/users/${user_id}/credentials_embed/${credentials_embed_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Google authentication login information for the specified user.
   *
   * GET /users/{user_id}/credentials_google -> ICredentialsGoogle
   */
  async user_credentials_google(
    callback: (readable: Readable) => Promise<ICredentialsGoogle>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsGoogle>(
      callback,
      'GET',
      `/users/${user_id}/credentials_google`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### LDAP login information for the specified user.
   *
   * GET /users/{user_id}/credentials_ldap -> ICredentialsLDAP
   */
  async user_credentials_ldap(
    callback: (readable: Readable) => Promise<ICredentialsLDAP>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsLDAP>(
      callback,
      'GET',
      `/users/${user_id}/credentials_ldap`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Looker Openid login information for the specified user. Used by Looker Analysts.
   *
   * GET /users/{user_id}/credentials_looker_openid -> ICredentialsLookerOpenid
   */
  async user_credentials_looker_openid(
    callback: (readable: Readable) => Promise<ICredentialsLookerOpenid>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsLookerOpenid>(
      callback,
      'GET',
      `/users/${user_id}/credentials_looker_openid`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### OpenID Connect (OIDC) authentication login information for the specified user.
   *
   * GET /users/{user_id}/credentials_oidc -> ICredentialsOIDC
   */
  async user_credentials_oidc(
    callback: (readable: Readable) => Promise<ICredentialsOIDC>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsOIDC>(
      callback,
      'GET',
      `/users/${user_id}/credentials_oidc`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Saml authentication login information for the specified user.
   *
   * GET /users/{user_id}/credentials_saml -> ICredentialsSaml
   */
  async user_credentials_saml(
    callback: (readable: Readable) => Promise<ICredentialsSaml>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsSaml>(
      callback,
      'GET',
      `/users/${user_id}/credentials_saml`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Two-factor login information for the specified user.
   *
   * GET /users/{user_id}/credentials_totp -> ICredentialsTotp
   */
  async user_credentials_totp(
    callback: (readable: Readable) => Promise<ICredentialsTotp>,
    /**
     * @param {number} user_id id of user
     */
    user_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ICredentialsTotp>(
      callback,
      'GET',
      `/users/${user_id}/credentials_totp`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about the user with a credential of given type with specific id.
   *
   * This is used to do things like find users by their embed external_user_id. Or, find the user with
   * a given api3 client_id, etc. The 'credential_type' matchs the 'type' name of the various credential
   * types. It must be one of the values listed in the table below. The 'credential_id' is your unique Id
   * for the user and is specific to each type of credential.
   *
   * An example using the Ruby sdk might look like:
   *
   * `sdk.user_for_credential('embed', 'customer-4959425')`
   *
   * This table shows the supported 'Credential Type' strings. The right column is for reference; it shows
   * which field in the given credential type is actually searched when finding a user with the supplied
   * 'credential_id'.
   *
   * | Credential Types | Id Field Matched |
   * | ---------------- | ---------------- |
   * | email            | email            |
   * | google           | google_user_id   |
   * | saml             | saml_user_id     |
   * | oidc             | oidc_user_id     |
   * | ldap             | ldap_id          |
   * | api              | token            |
   * | api3             | client_id        |
   * | embed            | external_user_id |
   * | looker_openid    | email            |
   *
   * NOTE: The 'api' credential type was only used with the legacy Looker query API and is no longer supported. The credential type for API you are currently looking at is 'api3'.
   *
   * GET /users/credential/{credential_type}/{credential_id} -> IUser
   */
  async user_for_credential(
    callback: (readable: Readable) => Promise<IUser>,
    /**
     * @param {string} credential_type Type name of credential
     */
    credential_type: string,
    /**
     * @param {string} credential_id Id of credential
     */
    credential_id: string,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    credential_type = encodeParam(credential_type)
    credential_id = encodeParam(credential_id)
    return this.authStream<IUser>(
      callback,
      'GET',
      `/users/credential/${credential_type}/${credential_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get information about roles of a given user
   *
   * GET /users/{user_id}/roles -> IRole[]
   */
  async user_roles(
    callback: (readable: Readable) => Promise<IRole[]>,
    request: IRequestUserRoles,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IRole[]>(
      callback,
      'GET',
      `/users/${request.user_id}/roles`,
      {
        direct_association_only: request.direct_association_only,
        fields: request.fields,
      },
      null,
      options
    )
  }

  /**
   * ### Web login session for the specified user.
   *
   * GET /users/{user_id}/sessions/{session_id} -> ISession
   */
  async user_session(
    callback: (readable: Readable) => Promise<ISession>,
    /**
     * @param {number} user_id Id of user
     */
    user_id: number,
    /**
     * @param {number} session_id Id of Web Login Session
     */
    session_id: number,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<ISession>(
      callback,
      'GET',
      `/users/${user_id}/sessions/${session_id}`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Validate Project
   *
   * Performs lint validation of all lookml files in the project.
   * Returns a list of errors found, if any.
   *
   * Validating the content of all the files in a project can be computationally intensive
   * for large projects. For best performance, call `validate_project(project_id)` only
   * when you really want to recompute project validation. To quickly display the results of
   * the most recent project validation (without recomputing), use `project_validation_results(project_id)`
   *
   * POST /projects/{project_id}/validate -> IProjectValidation
   */
  async validate_project(
    callback: (readable: Readable) => Promise<IProjectValidation>,
    /**
     * @param {string} project_id Project Id
     */
    project_id: string,
    /**
     * @param {string} fields Requested fields
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    project_id = encodeParam(project_id)
    return this.authStream<IProjectValidation>(
      callback,
      'POST',
      `/projects/${project_id}/validate`,
      { fields },
      null,
      options
    )
  }

  /**
   * ### Validate a theme with the specified information
   *
   * Validates all values set for the theme, returning any errors encountered, or 200 OK if valid
   *
   * See [Create Theme](#!/Theme/create_theme) for constraints
   *
   * **Note**: Custom themes needs to be enabled by Looker. Unless custom themes are enabled, only the automatically generated default theme can be used. Please contact your Account Manager or support@looker.com to update your license for this feature.
   *
   * POST /themes/validate -> IValidationError
   */
  async validate_theme(
    callback: (readable: Readable) => Promise<IValidationError>,
    /**
     * @param {Partial<IWriteTheme>} body
     */
    body: Partial<IWriteTheme>,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IValidationError>(
      callback,
      'POST',
      '/themes/validate',
      null,
      body,
      options
    )
  }

  /**
   * ### Get a vector image representing the contents of a dashboard or look.
   *
   * The returned thumbnail is an abstract representation of the contents of a dashbord or look and does not
   * reflect the actual data displayed in the respective visualizations.
   *
   * GET /vector_thumbnail/{type}/{resource_id} -> string
   */
  async vector_thumbnail(
    callback: (readable: Readable) => Promise<string>,
    /**
     * @param {string} type Either dashboard or look
     */
    type: string,
    /**
     * @param {string} resource_id ID of the dashboard or look to render
     */
    resource_id: string,
    /**
     * @param {string} reload Whether or not to refresh the rendered image with the latest content
     */
    reload?: string,
    options?: Partial<ITransportSettings>
  ) {
    type = encodeParam(type)
    resource_id = encodeParam(resource_id)
    return this.authStream<string>(
      callback,
      'GET',
      `/vector_thumbnail/${type}/${resource_id}`,
      { reload },
      null,
      options
    )
  }

  /**
   * ### Get information about all API versions supported by this Looker instance.
   *
   * GET /versions -> IApiVersion
   */
  async versions(
    callback: (readable: Readable) => Promise<IApiVersion>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IApiVersion>(
      callback,
      'GET',
      '/versions',
      { fields },
      null,
      options
    )
  }

  /**
   * ### This feature is enabled only by special license.
   * ### Gets the whitelabel configuration, which includes hiding documentation links, custom favicon uploading, etc.
   *
   * GET /whitelabel_configuration -> IWhitelabelConfiguration
   */
  async whitelabel_configuration(
    callback: (readable: Readable) => Promise<IWhitelabelConfiguration>,
    /**
     * @param {string} fields Requested fields.
     */
    fields?: string,
    options?: Partial<ITransportSettings>
  ) {
    return this.authStream<IWhitelabelConfiguration>(
      callback,
      'GET',
      '/whitelabel_configuration',
      { fields },
      null,
      options
    )
  }

  /**
   * ### Get A Workspace
   *
   * Returns information about a workspace such as the git status and selected branches
   * of all projects available to the caller's user account.
   *
   * A workspace defines which versions of project files will be used to evaluate expressions
   * and operations that use model definitions - operations such as running queries or rendering dashboards.
   * Each project has its own git repository, and each project in a workspace may be configured to reference
   * particular branch or revision within their respective repositories.
   *
   * There are two predefined workspaces available: "production" and "dev".
   *
   * The production workspace is shared across all Looker users. Models in the production workspace are read-only.
   * Changing files in production is accomplished by modifying files in a git branch and using Pull Requests
   * to merge the changes from the dev branch into the production branch, and then telling
   * Looker to sync with production.
   *
   * The dev workspace is local to each Looker user. Changes made to project/model files in the dev workspace only affect
   * that user, and only when the dev workspace is selected as the active workspace for the API session.
   * (See set_session_workspace()).
   *
   * The dev workspace is NOT unique to an API session. Two applications accessing the Looker API using
   * the same user account will see the same files in the dev workspace. To avoid collisions between
   * API clients it's best to have each client login with API3 credentials for a different user account.
   *
   * Changes made to files in a dev workspace are persistent across API sessions. It's a good
   * idea to commit any changes you've made to the git repository, but not strictly required. Your modified files
   * reside in a special user-specific directory on the Looker server and will still be there when you login in again
   * later and use update_session(workspace_id: "dev") to select the dev workspace for the new API session.
   *
   * GET /workspaces/{workspace_id} -> IWorkspace
   */
  async workspace(
    callback: (readable: Readable) => Promise<IWorkspace>,
    /**
     * @param {string} workspace_id Id of the workspace
     */
    workspace_id: string,
    options?: Partial<ITransportSettings>
  ) {
    workspace_id = encodeParam(workspace_id)
    return this.authStream<IWorkspace>(
      callback,
      'GET',
      `/workspaces/${workspace_id}`,
      null,
      null,
      options
    )
  }
}
