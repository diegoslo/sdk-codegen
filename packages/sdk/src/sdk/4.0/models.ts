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

import { Url } from '../../rtl/constants'
import { DelimArray } from '../../rtl/delimArray'

export interface IDictionary<T> {
  [key: string]: T
}

export interface IAccessToken {
  /**
   * Access Token used for API calls (read-only)
   */
  access_token?: string
  /**
   * Type of Token (read-only)
   */
  token_type?: string
  /**
   * Number of seconds before the token expires (read-only)
   */
  expires_in?: number
  /**
   * Refresh token which can be used to obtain a new access token (read-only)
   */
  refresh_token?: string
}

export interface IApiSession {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * The id of active workspace for this session
   */
  workspace_id?: string
  /**
   * The id of the actual user in the case when this session represents one user sudo'ing as another (read-only)
   */
  sudo_user_id?: number
}

export interface IApiVersion {
  /**
   * Current Looker release version number (read-only)
   */
  looker_release_version?: string
  current_version?: IApiVersionElement
  /**
   * Array of versions supported by this Looker instance (read-only)
   */
  supported_versions?: IApiVersionElement[]
}

export interface IApiVersionElement {
  /**
   * Version number as it appears in '/api/xxx/' urls (read-only)
   */
  version?: string
  /**
   * Full version number including minor version (read-only)
   */
  full_version?: string
  /**
   * Status of this version (read-only)
   */
  status?: string
  /**
   * Url for swagger.json for this version (read-only)
   */
  swagger_url?: Url
}

export interface IBackupConfiguration {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Type of backup: looker-s3 or custom-s3
   */
  type?: string
  /**
   * Name of bucket for custom-s3 backups
   */
  custom_s3_bucket?: string
  /**
   * Name of region where the bucket is located
   */
  custom_s3_bucket_region?: string
  /**
   * (Write-Only) AWS S3 key used for custom-s3 backups
   */
  custom_s3_key?: string
  /**
   * (Write-Only) AWS S3 secret used for custom-s3 backups
   */
  custom_s3_secret?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface IBoard {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Id of associated content_metadata record (read-only)
   */
  content_metadata_id?: number
  /**
   * Date of board creation (read-only)
   */
  created_at?: Date
  /**
   * Date of board deletion
   */
  deleted_at?: Date
  /**
   * Description of the board
   */
  description?: string
  /**
   * Sections of the board (read-only)
   */
  board_sections?: IBoardSection[]
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * ids of the board sections in the order they should be displayed
   */
  section_order?: number[]
  /**
   * Title of the board
   */
  title?: string
  /**
   * Date of last board update (read-only)
   */
  updated_at?: Date
  /**
   * User id of board creator (read-only)
   */
  user_id?: number
  /**
   * Whether the board is the primary homepage or not (read-only)
   */
  primary_homepage?: boolean
}

export interface IBoardItem {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Name of user who created the content this item is based on (read-only)
   */
  content_created_by?: string
  /**
   * Content favorite id associated with the item this content is based on (read-only)
   */
  content_favorite_id?: number
  /**
   * Content metadata id associated with the item this content is based on (read-only)
   */
  content_metadata_id?: number
  /**
   * Last time the content that this item is based on was updated (read-only)
   */
  content_updated_at?: string
  /**
   * Dashboard to base this item on
   */
  dashboard_id?: number
  /**
   * The actual description for display (read-only)
   */
  description?: string
  /**
   * Number of times content has been favorited, if present (read-only)
   */
  favorite_count?: number
  /**
   * Associated Board Section
   */
  board_section_id?: number
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * The container folder name of the content (read-only)
   */
  location?: string
  /**
   * Look to base this item on
   */
  look_id?: number
  /**
   * LookML Dashboard to base this item on
   */
  lookml_dashboard_id?: string
  /**
   * An arbitrary integer representing the sort order within the section
   */
  order?: number
  /**
   * The actual title for display (read-only)
   */
  title?: string
  /**
   * Number of times content has been viewed, if present (read-only)
   */
  view_count?: number
}

export interface IBoardSection {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Time at which this section was created. (read-only)
   */
  created_at?: Date
  /**
   * Time at which this section was deleted.
   */
  deleted_at?: Date
  /**
   * Description of the content found in this section.
   */
  description?: string
  /**
   * Id reference to parent board
   */
  board_id?: number
  /**
   * Items in the board section (read-only)
   */
  board_items?: IBoardItem[]
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * ids of the board items in the order they should be displayed
   */
  item_order?: number[]
  /**
   * Name of row
   */
  title?: string
  /**
   * Time at which this section was last updated. (read-only)
   */
  updated_at?: Date
}

export interface IColorCollection {
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Label of color collection
   */
  label?: string
  /**
   * Array of categorical palette definitions
   */
  categoricalPalettes?: IDiscretePalette[]
  /**
   * Array of discrete palette definitions
   */
  sequentialPalettes?: IContinuousPalette[]
  /**
   * Array of diverging palette definitions
   */
  divergingPalettes?: IContinuousPalette[]
}

export interface IColorStop {
  /**
   * CSS color string
   */
  color?: string
  /**
   * Offset in continuous palette (0 to 100)
   */
  offset?: number
}

export interface IContentFavorite {
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * User Id which owns this ContentFavorite
   */
  user_id?: number
  /**
   * Content Metadata Id associated with this ContentFavorite
   */
  content_metadata_id?: number
  /**
   * Id of a look (read-only)
   */
  look_id?: number
  /**
   * Id of a dashboard (read-only)
   */
  dashboard_id?: number
  look?: ILookBasic
  dashboard?: IDashboardBase
  /**
   * Id of a board (read-only)
   */
  board_id?: number
}

export interface IContentMeta {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Name or title of underlying content (read-only)
   */
  name?: string
  /**
   * Id of Parent Content (read-only)
   */
  parent_id?: number
  /**
   * Id of associated dashboard when content_type is "dashboard" (read-only)
   */
  dashboard_id?: string
  /**
   * Id of associated look when content_type is "look" (read-only)
   */
  look_id?: number
  /**
   * Id of associated folder when content_type is "space" (read-only)
   */
  folder_id?: string
  /**
   * Content Type ("dashboard", "look", or "folder") (read-only)
   */
  content_type?: string
  /**
   * Whether content inherits its access levels from parent
   */
  inherits?: boolean
  /**
   * Id of Inherited Content (read-only)
   */
  inheriting_id?: number
  /**
   * Content Slug (read-only)
   */
  slug?: string
}

export interface IContentMetaGroupUser {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Id of associated Content Metadata (read-only)
   */
  content_metadata_id?: string
  /**
   * Type of permission: "view" or "edit" Valid values are: "view", "edit". (read-only)
   */
  permission_type?: string
  /**
   * ID of associated group (read-only)
   */
  group_id?: number
  /**
   * ID of associated user (read-only)
   */
  user_id?: number
}

export interface IContentValidation {
  /**
   * A list of content errors (read-only)
   */
  content_with_errors?: IContentValidatorError[]
  /**
   * Duration of content validation in seconds (read-only)
   */
  computation_time?: number
  /**
   * The number of looks validated (read-only)
   */
  total_looks_validated?: number
  /**
   * The number of dashboard elements validated (read-only)
   */
  total_dashboard_elements_validated?: number
  /**
   * The number of explores used across all content validated (read-only)
   */
  total_explores_validated?: number
}

export interface IContentValidationDashboard {
  /**
   * Description
   */
  description?: string
  /**
   * Unique Id (read-only)
   */
  id?: string
  folder?: IContentValidationFolder
  /**
   * Dashboard Title
   */
  title?: string
}

export interface IContentValidationDashboardElement {
  /**
   * Text tile body text
   */
  body_text?: string
  /**
   * Id of Dashboard
   */
  dashboard_id?: string
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Id Of Look
   */
  look_id?: string
  /**
   * Note Display
   */
  note_display?: string
  /**
   * Note State
   */
  note_state?: string
  /**
   * Note Text
   */
  note_text?: string
  /**
   * Note Text as Html (read-only)
   */
  note_text_as_html?: string
  /**
   * Id Of Query
   */
  query_id?: number
  /**
   * Text tile subtitle text
   */
  subtitle_text?: string
  /**
   * Title of dashboard element
   */
  title?: string
  /**
   * Whether title is hidden
   */
  title_hidden?: boolean
  /**
   * Text tile title
   */
  title_text?: string
  /**
   * Type
   */
  type?: string
}

export interface IContentValidationDashboardFilter {
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Id of Dashboard (read-only)
   */
  dashboard_id?: string
  /**
   * Name of filter
   */
  name?: string
  /**
   * Title of filter
   */
  title?: string
  /**
   * Type of filter: one of date, number, string, or field
   */
  type?: string
  /**
   * Default value of filter
   */
  default_value?: string
  /**
   * Model of filter (required if type = field)
   */
  model?: string
  /**
   * Explore of filter (required if type = field)
   */
  explore?: string
  /**
   * Dimension of filter (required if type = field)
   */
  dimension?: string
}

export interface IContentValidationError {
  /**
   * Error message (read-only)
   */
  message?: string
  /**
   * Name of the field involved in the error (read-only)
   */
  field_name?: string
  /**
   * Name of the model involved in the error (read-only)
   */
  model_name?: string
  /**
   * Name of the explore involved in the error (read-only)
   */
  explore_name?: string
  /**
   * Whether this validation error is removable (read-only)
   */
  removable?: boolean
}

export interface IContentValidationFolder {
  /**
   * Unique Name
   */
  name: string
  /**
   * Unique Id (read-only)
   */
  id?: string
}

export interface IContentValidationLook {
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Look Title
   */
  title?: string
  folder?: IContentValidationFolder
}

export interface IContentValidatorError {
  look?: IContentValidationLook
  dashboard?: IContentValidationDashboard
  dashboard_element?: IContentValidationDashboardElement
  dashboard_filter?: IContentValidationDashboardFilter
  /**
   * A list of errors found for this piece of content (read-only)
   */
  errors?: IContentValidationError[]
  /**
   * An id unique to this piece of content for this validation run (read-only)
   */
  id?: string
}

export interface IContentView {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Id of viewed Look (read-only)
   */
  look_id?: number
  /**
   * Id of the viewed Dashboard (read-only)
   */
  dashboard_id?: number
  /**
   * Content metadata id of the Look or Dashboard (read-only)
   */
  content_metadata_id?: number
  /**
   * Id of user content was viewed by (read-only)
   */
  user_id?: number
  /**
   * Id of group content was viewed by (read-only)
   */
  group_id?: number
  /**
   * Number of times piece of content was viewed (read-only)
   */
  view_count?: number
  /**
   * Number of times piece of content was favorited (read-only)
   */
  favorite_count?: number
  /**
   * Date the piece of content was last viewed (read-only)
   */
  last_viewed_at?: string
  /**
   * Week start date for the view and favorite count during that given week (read-only)
   */
  start_of_week_date?: string
}

export interface IContinuousPalette {
  /**
   * Unique identity string (read-only)
   */
  id?: string
  /**
   * Label for palette
   */
  label?: string
  /**
   * Type of palette
   */
  type?: string
  /**
   * Array of ColorStops in the palette
   */
  stops?: IColorStop[]
}

export interface ICreateDashboardFilter {
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Id of Dashboard
   */
  dashboard_id: string
  /**
   * Name of filter
   */
  name: string
  /**
   * Title of filter
   */
  title: string
  /**
   * Type of filter: one of date, number, string, or field
   */
  type: string
  /**
   * Default value of filter
   */
  default_value?: string
  /**
   * Model of filter (required if type = field)
   */
  model?: string
  /**
   * Explore of filter (required if type = field)
   */
  explore?: string
  /**
   * Dimension of filter (required if type = field)
   */
  dimension?: string
  /**
   * Field information (read-only)
   */
  field?: IDictionary<string>
  /**
   * Display order of this filter relative to other filters
   */
  row?: number
  /**
   * Array of listeners for faceted filters
   */
  listens_to_filters?: string[]
  /**
   * Whether the filter allows multiple filter values
   */
  allow_multiple_values?: boolean
  /**
   * Whether the filter requires a value to run the dashboard
   */
  required?: boolean
  /**
   * The visual configuration for this filter. Used to set up how the UI for this filter should appear.
   */
  ui_config?: IDictionary<string>
}

export interface ICreateDashboardRenderTask {
  /**
   * Filter values to apply to the dashboard queries, in URL query format
   */
  dashboard_filters?: string
  /**
   * Dashboard layout style: single_column or tiled
   */
  dashboard_style?: string
}

export interface ICreateFolder {
  /**
   * Unique Name
   */
  name: string
  /**
   * Id of Parent. If the parent id is null, this is a root-level entry
   */
  parent_id: string
}

export interface ICreateQueryTask {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Id of query to run
   */
  query_id: number
  /**
   * Desired async query result format. Valid values are: "json", "json_detail", "json_fe", "csv", "html", "md", "txt", "xlsx", "gsxml".
   */
  result_format: string
  /**
   * Source of query task
   */
  source?: string
  /**
   * Create the task but defer execution
   */
  deferred?: boolean
  /**
   * Id of look associated with query.
   */
  look_id?: number
  /**
   * Id of dashboard associated with query.
   */
  dashboard_id?: string
}

export interface ICredentialsApi3 {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * API key client_id (read-only)
   */
  client_id?: string
  /**
   * Timestamp for the creation of this credential (read-only)
   */
  created_at?: string
  /**
   * Has this credential been disabled? (read-only)
   */
  is_disabled?: boolean
  /**
   * Short name for the type of this kind of credential (read-only)
   */
  type?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface ICredentialsEmail {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Timestamp for the creation of this credential (read-only)
   */
  created_at?: string
  /**
   * EMail address used for user login
   */
  email?: string
  /**
   * Force the user to change their password upon their next login
   */
  forced_password_reset_at_next_login?: boolean
  /**
   * Has this credential been disabled? (read-only)
   */
  is_disabled?: boolean
  /**
   * Timestamp for most recent login using credential (read-only)
   */
  logged_in_at?: string
  /**
   * Url with one-time use secret token that the user can use to reset password (read-only)
   */
  password_reset_url?: string
  /**
   * Short name for the type of this kind of credential (read-only)
   */
  type?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
  /**
   * Link to get this user (read-only)
   */
  user_url?: Url
}

export interface ICredentialsEmbed {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Timestamp for the creation of this credential (read-only)
   */
  created_at?: string
  /**
   * Embedder's id for a group to which this user was added during the most recent login (read-only)
   */
  external_group_id?: string
  /**
   * Embedder's unique id for the user (read-only)
   */
  external_user_id?: string
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Has this credential been disabled? (read-only)
   */
  is_disabled?: boolean
  /**
   * Timestamp for most recent login using credential (read-only)
   */
  logged_in_at?: string
  /**
   * Short name for the type of this kind of credential (read-only)
   */
  type?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface ICredentialsGoogle {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Timestamp for the creation of this credential (read-only)
   */
  created_at?: string
  /**
   * Google domain (read-only)
   */
  domain?: string
  /**
   * EMail address (read-only)
   */
  email?: string
  /**
   * Google's Unique ID for this user (read-only)
   */
  google_user_id?: string
  /**
   * Has this credential been disabled? (read-only)
   */
  is_disabled?: boolean
  /**
   * Timestamp for most recent login using credential (read-only)
   */
  logged_in_at?: string
  /**
   * Short name for the type of this kind of credential (read-only)
   */
  type?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface ICredentialsLDAP {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Timestamp for the creation of this credential (read-only)
   */
  created_at?: string
  /**
   * EMail address (read-only)
   */
  email?: string
  /**
   * Has this credential been disabled? (read-only)
   */
  is_disabled?: boolean
  /**
   * LDAP Distinguished name for this user (as-of the last login) (read-only)
   */
  ldap_dn?: string
  /**
   * LDAP Unique ID for this user (read-only)
   */
  ldap_id?: string
  /**
   * Timestamp for most recent login using credential (read-only)
   */
  logged_in_at?: string
  /**
   * Short name for the type of this kind of credential (read-only)
   */
  type?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface ICredentialsLookerOpenid {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Timestamp for the creation of this credential (read-only)
   */
  created_at?: string
  /**
   * EMail address used for user login (read-only)
   */
  email?: string
  /**
   * Has this credential been disabled? (read-only)
   */
  is_disabled?: boolean
  /**
   * Timestamp for most recent login using credential (read-only)
   */
  logged_in_at?: string
  /**
   * IP address of client for most recent login using credential (read-only)
   */
  logged_in_ip?: string
  /**
   * Short name for the type of this kind of credential (read-only)
   */
  type?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
  /**
   * Link to get this user (read-only)
   */
  user_url?: Url
}

export interface ICredentialsOIDC {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Timestamp for the creation of this credential (read-only)
   */
  created_at?: string
  /**
   * EMail address (read-only)
   */
  email?: string
  /**
   * Has this credential been disabled? (read-only)
   */
  is_disabled?: boolean
  /**
   * Timestamp for most recent login using credential (read-only)
   */
  logged_in_at?: string
  /**
   * OIDC OP's Unique ID for this user (read-only)
   */
  oidc_user_id?: string
  /**
   * Short name for the type of this kind of credential (read-only)
   */
  type?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface ICredentialsSaml {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Timestamp for the creation of this credential (read-only)
   */
  created_at?: string
  /**
   * EMail address (read-only)
   */
  email?: string
  /**
   * Has this credential been disabled? (read-only)
   */
  is_disabled?: boolean
  /**
   * Timestamp for most recent login using credential (read-only)
   */
  logged_in_at?: string
  /**
   * Saml IdP's Unique ID for this user (read-only)
   */
  saml_user_id?: string
  /**
   * Short name for the type of this kind of credential (read-only)
   */
  type?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface ICredentialsTotp {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Timestamp for the creation of this credential (read-only)
   */
  created_at?: string
  /**
   * Has this credential been disabled? (read-only)
   */
  is_disabled?: boolean
  /**
   * Short name for the type of this kind of credential (read-only)
   */
  type?: string
  /**
   * User has verified (read-only)
   */
  verified?: boolean
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface ICustomWelcomeEmail {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * If true, custom email content will replace the default body of welcome emails
   */
  enabled?: boolean
  /**
   * The HTML to use as custom content for welcome emails. Script elements and other potentially dangerous markup will be removed.
   */
  content?: string
  /**
   * The text to appear in the email subject line.
   */
  subject?: string
  /**
   * The text to appear in the header line of the email body.
   */
  header?: string
}

export interface IDashboard {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Content Favorite Id (read-only)
   */
  content_favorite_id?: number
  /**
   * Id of content metadata (read-only)
   */
  content_metadata_id?: number
  /**
   * Description
   */
  description?: string
  /**
   * Is Hidden
   */
  hidden?: boolean
  /**
   * Unique Id (read-only)
   */
  id?: string
  model?: ILookModel
  /**
   * Timezone in which the Dashboard will run by default.
   */
  query_timezone?: string
  /**
   * Is Read-only (read-only)
   */
  readonly?: boolean
  /**
   * Refresh Interval, as a time duration phrase like "2 hours 30 minutes". A number with no time units will be interpreted as whole seconds.
   */
  refresh_interval?: string
  /**
   * Refresh Interval in milliseconds (read-only)
   */
  refresh_interval_to_i?: number
  folder?: IFolderBase
  /**
   * Dashboard Title
   */
  title?: string
  /**
   * Id of User (read-only)
   */
  user_id?: number
  /**
   * Background color
   */
  background_color?: string
  /**
   * Time that the Dashboard was created. (read-only)
   */
  created_at?: Date
  /**
   * Enables crossfiltering in dashboards - only available in dashboards-next (beta)
   */
  crossfilter_enabled?: boolean
  /**
   * Elements (read-only)
   */
  dashboard_elements?: IDashboardElement[]
  /**
   * Filters (read-only)
   */
  dashboard_filters?: IDashboardFilter[]
  /**
   * Layouts (read-only)
   */
  dashboard_layouts?: IDashboardLayout[]
  /**
   * Whether or not a dashboard is 'soft' deleted.
   */
  deleted?: boolean
  /**
   * Time that the Dashboard was 'soft' deleted. (read-only)
   */
  deleted_at?: Date
  /**
   * Id of User that 'soft' deleted the dashboard. (read-only)
   */
  deleter_id?: number
  /**
   * Relative path of URI of LookML file to edit the dashboard (LookML dashboard only). (read-only)
   */
  edit_uri?: Url
  /**
   * Number of times favorited (read-only)
   */
  favorite_count?: number
  /**
   * Time the dashboard was last accessed (read-only)
   */
  last_accessed_at?: Date
  /**
   * Time last viewed in the Looker web UI (read-only)
   */
  last_viewed_at?: Date
  /**
   * configuration option that governs how dashboard loading will happen.
   */
  load_configuration?: string
  /**
   * Links this dashboard to a particular LookML dashboard such that calling a **sync** operation on that LookML dashboard will update this dashboard to match.
   */
  lookml_link_id?: string
  /**
   * Show filters bar.  **Security Note:** This property only affects the *cosmetic* appearance of the dashboard, not a user's ability to access data. Hiding the filters bar does **NOT** prevent users from changing filters by other means. For information on how to set up secure data access control policies, see [Control User Access to Data](https://looker.com/docs/r/api/control-access)
   */
  show_filters_bar?: boolean
  /**
   * Show title
   */
  show_title?: boolean
  /**
   * Content Metadata Slug
   */
  slug?: string
  /**
   * Id of folder
   */
  folder_id?: string
  /**
   * Color of text on text tiles
   */
  text_tile_text_color?: string
  /**
   * Tile background color
   */
  tile_background_color?: string
  /**
   * Tile text color
   */
  tile_text_color?: string
  /**
   * Title color
   */
  title_color?: string
  /**
   * Number of times viewed in the Looker web UI (read-only)
   */
  view_count?: number
  appearance?: IDashboardAppearance
  /**
   * The preferred route for viewing this dashboard (ie: dashboards or dashboards-next)
   */
  preferred_viewer?: string
}

export interface IDashboardAppearance {
  /**
   * Page margin (side) width
   */
  page_side_margins?: number
  /**
   * Background color for the dashboard
   */
  page_background_color?: string
  /**
   * Title alignment on dashboard tiles
   */
  tile_title_alignment?: string
  /**
   * Space between tiles
   */
  tile_space_between?: number
  /**
   * Background color for tiles
   */
  tile_background_color?: string
  /**
   * Tile shadow on/off
   */
  tile_shadow?: boolean
  /**
   * Key color
   */
  key_color?: string
}

export interface IDashboardBase {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Content Favorite Id (read-only)
   */
  content_favorite_id?: number
  /**
   * Id of content metadata (read-only)
   */
  content_metadata_id?: number
  /**
   * Description (read-only)
   */
  description?: string
  /**
   * Is Hidden (read-only)
   */
  hidden?: boolean
  /**
   * Unique Id (read-only)
   */
  id?: string
  model?: ILookModel
  /**
   * Timezone in which the Dashboard will run by default. (read-only)
   */
  query_timezone?: string
  /**
   * Is Read-only (read-only)
   */
  readonly?: boolean
  /**
   * Refresh Interval, as a time duration phrase like "2 hours 30 minutes". A number with no time units will be interpreted as whole seconds. (read-only)
   */
  refresh_interval?: string
  /**
   * Refresh Interval in milliseconds (read-only)
   */
  refresh_interval_to_i?: number
  folder?: IFolderBase
  /**
   * Dashboard Title (read-only)
   */
  title?: string
  /**
   * Id of User (read-only)
   */
  user_id?: number
}

export interface IDashboardElement {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Text tile body text
   */
  body_text?: string
  /**
   * Text tile body text as Html (read-only)
   */
  body_text_as_html?: string
  /**
   * Id of Dashboard
   */
  dashboard_id?: string
  /**
   * Relative path of URI of LookML file to edit the dashboard element (LookML dashboard only). (read-only)
   */
  edit_uri?: Url
  /**
   * Unique Id (read-only)
   */
  id?: string
  look?: ILookWithQuery
  /**
   * Id Of Look
   */
  look_id?: string
  /**
   * LookML link ID (read-only)
   */
  lookml_link_id?: string
  /**
   * ID of merge result
   */
  merge_result_id?: string
  /**
   * Note Display
   */
  note_display?: string
  /**
   * Note State
   */
  note_state?: string
  /**
   * Note Text
   */
  note_text?: string
  /**
   * Note Text as Html (read-only)
   */
  note_text_as_html?: string
  query?: IQuery
  /**
   * Id Of Query
   */
  query_id?: number
  /**
   * Refresh Interval
   */
  refresh_interval?: string
  /**
   * Refresh Interval as integer (read-only)
   */
  refresh_interval_to_i?: number
  result_maker?: IResultMakerWithIdVisConfigAndDynamicFields
  /**
   * ID of the ResultMakerLookup entry.
   */
  result_maker_id?: number
  /**
   * Text tile subtitle text
   */
  subtitle_text?: string
  /**
   * Title of dashboard element
   */
  title?: string
  /**
   * Whether title is hidden
   */
  title_hidden?: boolean
  /**
   * Text tile title
   */
  title_text?: string
  /**
   * Type
   */
  type?: string
  /**
   * Count of Alerts associated to a dashboard element (read-only)
   */
  alert_count?: number
  /**
   * Text tile title text as Html (read-only)
   */
  title_text_as_html?: string
  /**
   * Text tile subtitle text as Html (read-only)
   */
  subtitle_text_as_html?: string
}

export interface IDashboardFilter {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Id of Dashboard (read-only)
   */
  dashboard_id?: string
  /**
   * Name of filter
   */
  name?: string
  /**
   * Title of filter
   */
  title?: string
  /**
   * Type of filter: one of date, number, string, or field
   */
  type?: string
  /**
   * Default value of filter
   */
  default_value?: string
  /**
   * Model of filter (required if type = field)
   */
  model?: string
  /**
   * Explore of filter (required if type = field)
   */
  explore?: string
  /**
   * Dimension of filter (required if type = field)
   */
  dimension?: string
  /**
   * Field information (read-only)
   */
  field?: IDictionary<string>
  /**
   * Display order of this filter relative to other filters
   */
  row?: number
  /**
   * Array of listeners for faceted filters
   */
  listens_to_filters?: string[]
  /**
   * Whether the filter allows multiple filter values
   */
  allow_multiple_values?: boolean
  /**
   * Whether the filter requires a value to run the dashboard
   */
  required?: boolean
  /**
   * The visual configuration for this filter. Used to set up how the UI for this filter should appear.
   */
  ui_config?: IDictionary<string>
}

export interface IDashboardLayout {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Id of Dashboard
   */
  dashboard_id?: string
  /**
   * Type
   */
  type?: string
  /**
   * Is Active
   */
  active?: boolean
  /**
   * Column Width
   */
  column_width?: number
  /**
   * Width
   */
  width?: number
  /**
   * Whether or not the dashboard layout is deleted. (read-only)
   */
  deleted?: boolean
  /**
   * Title extracted from the dashboard this layout represents. (read-only)
   */
  dashboard_title?: string
  /**
   * Components (read-only)
   */
  dashboard_layout_components?: IDashboardLayoutComponent[]
}

export interface IDashboardLayoutComponent {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Id of Dashboard Layout
   */
  dashboard_layout_id?: string
  /**
   * Id Of Dashboard Element
   */
  dashboard_element_id?: string
  /**
   * Row
   */
  row?: number
  /**
   * Column
   */
  column?: number
  /**
   * Width
   */
  width?: number
  /**
   * Height
   */
  height?: number
  /**
   * Whether or not the dashboard layout component is deleted (read-only)
   */
  deleted?: boolean
  /**
   * Dashboard element title, extracted from the Dashboard Element. (read-only)
   */
  element_title?: string
  /**
   * Whether or not the dashboard element title is displayed. (read-only)
   */
  element_title_hidden?: boolean
  /**
   * Visualization type, extracted from a query's vis_config (read-only)
   */
  vis_type?: string
}

export interface IDashboardLookml {
  /**
   * Id of Dashboard (read-only)
   */
  dashboard_id?: string
  /**
   * lookml of UDD (read-only)
   */
  lookml?: string
}

export interface IDataActionForm {
  state?: IDataActionUserState
  /**
   * Array of form fields. (read-only)
   */
  fields?: IDataActionFormField[]
}

export interface IDataActionFormField {
  /**
   * Name (read-only)
   */
  name?: string
  /**
   * Human-readable label (read-only)
   */
  label?: string
  /**
   * Description of field (read-only)
   */
  description?: string
  /**
   * Type of field. (read-only)
   */
  type?: string
  /**
   * Default value of the field. (read-only)
   */
  default?: string
  /**
   * The URL for an oauth link, if type is 'oauth_link'. (read-only)
   */
  oauth_url?: string
  /**
   * Whether or not a field supports interactive forms. (read-only)
   */
  interactive?: boolean
  /**
   * Whether or not the field is required. This is a user-interface hint. A user interface displaying this form should not submit it without a value for this field. The action server must also perform this validation. (read-only)
   */
  required?: boolean
  /**
   * If the form type is 'select', a list of options to be selected from. (read-only)
   */
  options?: IDataActionFormSelectOption[]
}

export interface IDataActionFormSelectOption {
  /**
   * Name (read-only)
   */
  name?: string
  /**
   * Human-readable label (read-only)
   */
  label?: string
}

export interface IDataActionRequest {
  /**
   * The JSON describing the data action. This JSON should be considered opaque and should be passed through unmodified from the query result it came from.
   */
  action?: IDictionary<string>
  /**
   * User input for any form values the data action might use.
   */
  form_values?: IDictionary<string>
}

export interface IDataActionResponse {
  /**
   * ID of the webhook event that sent this data action. In some error conditions, this may be null. (read-only)
   */
  webhook_id?: string
  /**
   * Whether the data action was successful. (read-only)
   */
  success?: boolean
  /**
   * When true, indicates that the client should refresh (rerun) the source query because the data may have been changed by the action. (read-only)
   */
  refresh_query?: boolean
  validation_errors?: IValidationError
  /**
   * Optional message returned by the data action server describing the state of the action that took place. This can be used to implement custom failure messages. If a failure is related to a particular form field, the server should send back a validation error instead. The Looker web UI does not currently display any message if the action indicates 'success', but may do so in the future. (read-only)
   */
  message?: string
}

export interface IDataActionUserState {
  /**
   * User state data (read-only)
   */
  data?: string
  /**
   * Time in seconds until the state needs to be refreshed (read-only)
   */
  refresh_time?: number
}

export interface IDatagroup {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * UNIX timestamp at which this entry was created. (read-only)
   */
  created_at?: number
  /**
   * Unique ID of the datagroup (read-only)
   */
  id?: number
  /**
   * Name of the model containing the datagroup. Unique when combined with name. (read-only)
   */
  model_name?: string
  /**
   * Name of the datagroup. Unique when combined with model_name. (read-only)
   */
  name?: string
  /**
   * UNIX timestamp before which cache entries are considered stale. Cannot be in the future.
   */
  stale_before?: number
  /**
   * UNIX timestamp at which this entry trigger was last checked. (read-only)
   */
  trigger_check_at?: number
  /**
   * The message returned with the error of the last trigger check. (read-only)
   */
  trigger_error?: string
  /**
   * The value of the trigger when last checked. (read-only)
   */
  trigger_value?: string
  /**
   * UNIX timestamp at which this entry became triggered. Cannot be in the future.
   */
  triggered_at?: number
}

export interface IDBConnection {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Name of the connection. Also used as the unique identifier
   */
  name?: string
  dialect?: IDialect
  /**
   * SQL Runner snippets for this connection (read-only)
   */
  snippets?: ISnippet[]
  /**
   * Host name/address of server
   */
  host?: string
  /**
   * Port number on server
   */
  port?: number
  /**
   * Username for server authentication
   */
  username?: string
  /**
   * (Write-Only) Password for server authentication
   */
  password?: string
  /**
   * Whether the connection uses OAuth for authentication. (read-only)
   */
  uses_oauth?: boolean
  /**
   * (Write-Only) Base64 encoded Certificate body for server authentication (when appropriate for dialect).
   */
  certificate?: string
  /**
   * (Write-Only) Certificate keyfile type - .json or .p12
   */
  file_type?: string
  /**
   * Database name
   */
  database?: string
  /**
   * Time zone of database
   */
  db_timezone?: string
  /**
   * Timezone to use in queries
   */
  query_timezone?: string
  /**
   * Scheme name
   */
  schema?: string
  /**
   * Maximum number of concurrent connection to use
   */
  max_connections?: number
  /**
   * Maximum size of query in GBs (BigQuery only, can be a user_attribute name)
   */
  max_billing_gigabytes?: string
  /**
   * Use SSL/TLS when connecting to server
   */
  ssl?: boolean
  /**
   * Verify the SSL
   */
  verify_ssl?: boolean
  /**
   * Name of temporary database (if used)
   */
  tmp_db_name?: string
  /**
   * Additional params to add to JDBC connection string
   */
  jdbc_additional_params?: string
  /**
   * Connection Pool Timeout, in seconds
   */
  pool_timeout?: number
  /**
   * (Read/Write) SQL Dialect name
   */
  dialect_name?: string
  /**
   * Creation date for this connection (read-only)
   */
  created_at?: string
  /**
   * Id of user who last modified this connection configuration (read-only)
   */
  user_id?: string
  /**
   * Is this an example connection? (read-only)
   */
  example?: boolean
  /**
   * (Limited access feature) Are per user db credentials enabled. Enabling will remove previously set username and password
   */
  user_db_credentials?: boolean
  /**
   * Fields whose values map to user attribute names
   */
  user_attribute_fields?: string[]
  /**
   * Cron string specifying when maintenance such as PDT trigger checks and drops should be performed
   */
  maintenance_cron?: string
  /**
   * Unix timestamp at start of last completed PDT trigger check process (read-only)
   */
  last_regen_at?: string
  /**
   * Unix timestamp at start of last completed PDT reap process (read-only)
   */
  last_reap_at?: string
  /**
   * Precache tables in the SQL Runner
   */
  sql_runner_precache_tables?: boolean
  /**
   * SQL statements (semicolon separated) to issue after connecting to the database. Requires `custom_after_connect_statements` license feature
   */
  after_connect_statements?: string
  pdt_context_override?: IDBConnectionOverride
  /**
   * Is this connection created and managed by Looker (read-only)
   */
  managed?: boolean
}

export interface IDBConnectionBase {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Name of the connection. Also used as the unique identifier (read-only)
   */
  name?: string
  dialect?: IDialect
  /**
   * SQL Runner snippets for this connection (read-only)
   */
  snippets?: ISnippet[]
}

export interface IDBConnectionOverride {
  /**
   * Context in which to override (`pdt` is the only allowed value)
   */
  context?: string
  /**
   * Host name/address of server
   */
  host?: string
  /**
   * Port number on server
   */
  port?: string
  /**
   * Username for server authentication
   */
  username?: string
  /**
   * (Write-Only) Password for server authentication
   */
  password?: string
  /**
   * Whether or not the password is overridden in this context (read-only)
   */
  has_password?: boolean
  /**
   * (Write-Only) Base64 encoded Certificate body for server authentication (when appropriate for dialect).
   */
  certificate?: string
  /**
   * (Write-Only) Certificate keyfile type - .json or .p12
   */
  file_type?: string
  /**
   * Database name
   */
  database?: string
  /**
   * Scheme name
   */
  schema?: string
  /**
   * Additional params to add to JDBC connection string
   */
  jdbc_additional_params?: string
  /**
   * SQL statements (semicolon separated) to issue after connecting to the database. Requires `custom_after_connect_statements` license feature
   */
  after_connect_statements?: string
}

export interface IDBConnectionTestResult {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * JDBC connection string. (only populated in the 'connect' test) (read-only)
   */
  connection_string?: string
  /**
   * Result message of test (read-only)
   */
  message?: string
  /**
   * Name of test (read-only)
   */
  name?: string
  /**
   * Result code of test (read-only)
   */
  status?: string
}

export interface IDelegateOauthTest {
  /**
   * Delegate Oauth Connection Name (read-only)
   */
  name?: string
  /**
   * The ID of the installation target. For Slack, this would be workspace id. (read-only)
   */
  installation_target_id?: string
  /**
   * Installation ID (read-only)
   */
  installation_id?: number
  /**
   * Whether or not the test was successful (read-only)
   */
  success?: boolean
}

export interface IDialect {
  /**
   * The name of the dialect (read-only)
   */
  name?: string
  /**
   * The human-readable label of the connection (read-only)
   */
  label?: string
  /**
   * Whether the dialect supports query cost estimates (read-only)
   */
  supports_cost_estimate?: boolean
  /**
   * PDT index columns (read-only)
   */
  persistent_table_indexes?: string
  /**
   * PDT sortkey columns (read-only)
   */
  persistent_table_sortkeys?: string
  /**
   * PDT distkey column (read-only)
   */
  persistent_table_distkey?: string
  /**
   * Suports streaming results (read-only)
   */
  supports_streaming?: boolean
  /**
   * Should SQL Runner snippets automatically be run (read-only)
   */
  automatically_run_sql_runner_snippets?: boolean
  /**
   * Array of names of the tests that can be run on a connection using this dialect (read-only)
   */
  connection_tests?: string[]
  /**
   * Is supported with the inducer (i.e. generate from sql) (read-only)
   */
  supports_inducer?: boolean
  /**
   * Can multiple databases be accessed from a connection using this dialect (read-only)
   */
  supports_multiple_databases?: boolean
  /**
   * Whether the dialect supports allowing Looker to build persistent derived tables (read-only)
   */
  supports_persistent_derived_tables?: boolean
  /**
   * Does the database have client SSL support settable through the JDBC string explicitly? (read-only)
   */
  has_ssl_support?: boolean
}

export interface IDialectInfo {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Default number max connections (read-only)
   */
  default_max_connections?: string
  /**
   * Default port number (read-only)
   */
  default_port?: string
  /**
   * Is the supporting driver installed (read-only)
   */
  installed?: boolean
  /**
   * The human-readable label of the connection (read-only)
   */
  label?: string
  /**
   * What the dialect calls the equivalent of a normal SQL table (read-only)
   */
  label_for_database_equivalent?: string
  /**
   * The name of the dialect (read-only)
   */
  name?: string
  supported_options?: IDialectInfoOptions
}

export interface IDialectInfoOptions {
  /**
   * Has additional params support (read-only)
   */
  additional_params?: boolean
  /**
   * Has auth support (read-only)
   */
  auth?: boolean
  /**
   * Has host support (read-only)
   */
  host?: boolean
  /**
   * Has support for a service account (read-only)
   */
  oauth_credentials?: boolean
  /**
   * Has project name support (read-only)
   */
  project_name?: boolean
  /**
   * Has schema support (read-only)
   */
  schema?: boolean
  /**
   * Has SSL support (read-only)
   */
  ssl?: boolean
  /**
   * Has timezone support (read-only)
   */
  timezone?: boolean
  /**
   * Has tmp table support (read-only)
   */
  tmp_table?: boolean
  /**
   * Username is required (read-only)
   */
  username_required?: boolean
}

export interface IDigestEmails {
  /**
   * Whether or not digest emails are enabled
   */
  is_enabled?: boolean
}

export interface IDigestEmailSend {
  /**
   * True if content was successfully generated and delivered
   */
  configuration_delivered?: boolean
}

export interface IDiscretePalette {
  /**
   * Unique identity string (read-only)
   */
  id?: string
  /**
   * Label for palette
   */
  label?: string
  /**
   * Type of palette
   */
  type?: string
  /**
   * Array of colors in the palette
   */
  colors?: string[]
}

export interface IEmbedParams {
  /**
   * The complete URL of the Looker UI page to display in the embed context. For example, to display the dashboard with id 34, `target_url` would look like: `https://mycompany.looker.com:9999/dashboards/34`. `target_uri` MUST contain a scheme (HTTPS), domain name, and URL path. Port must be included if it is required to reach the Looker server from browser clients. If the Looker instance is behind a load balancer or other proxy, `target_uri` must be the public-facing domain name and port required to reach the Looker instance, not the actual internal network machine name of the Looker instance.
   */
  target_url: Url
  /**
   * Number of seconds the SSO embed session will be valid after the embed session is started. Defaults to 300 seconds. Maximum session length accepted is 2592000 seconds (30 days).
   */
  session_length?: number
  /**
   * When true, the embed session will purge any residual Looker login state (such as in browser cookies) before creating a new login state with the given embed user info. Defaults to true.
   */
  force_logout_login?: boolean
}

export interface IEmbedSsoParams {
  /**
   * The complete URL of the Looker UI page to display in the embed context. For example, to display the dashboard with id 34, `target_url` would look like: `https://mycompany.looker.com:9999/dashboards/34`. `target_uri` MUST contain a scheme (HTTPS), domain name, and URL path. Port must be included if it is required to reach the Looker server from browser clients. If the Looker instance is behind a load balancer or other proxy, `target_uri` must be the public-facing domain name and port required to reach the Looker instance, not the actual internal network machine name of the Looker instance.
   */
  target_url: Url
  /**
   * Number of seconds the SSO embed session will be valid after the embed session is started. Defaults to 300 seconds. Maximum session length accepted is 2592000 seconds (30 days).
   */
  session_length?: number
  /**
   * When true, the embed session will purge any residual Looker login state (such as in browser cookies) before creating a new login state with the given embed user info. Defaults to true.
   */
  force_logout_login?: boolean
  /**
   * A value from an external system that uniquely identifies the embed user. Since the user_ids of Looker embed users may change with every embed session, external_user_id provides a way to assign a known, stable user identifier across multiple embed sessions.
   */
  external_user_id?: string
  /**
   * First name of the embed user. Defaults to 'Embed' if not specified
   */
  first_name?: string
  /**
   * Last name of the embed user. Defaults to 'User' if not specified
   */
  last_name?: string
  /**
   * Sets the user timezone for the embed user session, if the User Specific Timezones setting is enabled in the Looker admin settings. A value of `null` forces the embed user to use the Looker Application Default Timezone. You MUST omit this property from the request if the User Specific Timezones setting is disabled. Timezone values are validated against the IANA Timezone standard and can be seen in the Application Time Zone dropdown list on the Looker General Settings admin page.
   */
  user_timezone?: string
  /**
   * List of Looker permission names to grant to the embed user. Requested permissions will be filtered to permissions allowed for embed sessions.
   */
  permissions?: string[]
  /**
   * List of model names that the embed user may access
   */
  models?: string[]
  /**
   * List of Looker group ids in which to enroll the embed user
   */
  group_ids?: number[]
  /**
   * A unique value identifying an embed-exclusive group. Multiple embed users using the same `external_group_id` value will be able to share Looker content with each other. Content and embed users associated with the `external_group_id` will not be accessible to normal Looker users or embed users not associated with this `external_group_id`.
   */
  external_group_id?: number
  /**
   * A dictionary of name-value pairs associating a Looker user attribute name with a value.
   */
  user_attributes?: IDictionary<string>
  /**
   * Id of the embed secret to use to sign this SSO url. If specified, the value must be an id of a valid (active) secret defined in the Looker instance. If not specified, the URL will be signed with the newest active embed secret defined in the Looker instance.
   */
  secret_id?: number
}

export interface IEmbedUrlResponse {
  /**
   * The embed URL. Any modification to this string will make the URL unusable. (read-only)
   */
  url?: string
}

export interface IError {
  /**
   * Error details (read-only)
   */
  message: string
  /**
   * Documentation link (read-only)
   */
  documentation_url: Url
}

export interface IFolder {
  /**
   * Unique Name
   */
  name: string
  /**
   * Id of Parent. If the parent id is null, this is a root-level entry
   */
  parent_id?: string
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Id of content metadata (read-only)
   */
  content_metadata_id?: number
  /**
   * Time the space was created (read-only)
   */
  created_at?: Date
  /**
   * User Id of Creator (read-only)
   */
  creator_id?: number
  /**
   * Children Count (read-only)
   */
  child_count?: number
  /**
   * Embedder's Id if this folder was autogenerated as an embedding shared folder via 'external_group_id' in an SSO embed login (read-only)
   */
  external_id?: string
  /**
   * Folder is an embed folder (read-only)
   */
  is_embed?: boolean
  /**
   * Folder is the root embed shared folder (read-only)
   */
  is_embed_shared_root?: boolean
  /**
   * Folder is the root embed users folder (read-only)
   */
  is_embed_users_root?: boolean
  /**
   * Folder is a user's personal folder (read-only)
   */
  is_personal?: boolean
  /**
   * Folder is descendant of a user's personal folder (read-only)
   */
  is_personal_descendant?: boolean
  /**
   * Folder is the root shared folder (read-only)
   */
  is_shared_root?: boolean
  /**
   * Folder is the root user folder (read-only)
   */
  is_users_root?: boolean
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Dashboards (read-only)
   */
  dashboards?: IDashboardBase[]
  /**
   * Looks (read-only)
   */
  looks?: ILookWithDashboards[]
}

export interface IFolderBase {
  /**
   * Unique Name
   */
  name: string
  /**
   * Id of Parent. If the parent id is null, this is a root-level entry
   */
  parent_id?: string
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Id of content metadata (read-only)
   */
  content_metadata_id?: number
  /**
   * Time the folder was created (read-only)
   */
  created_at?: Date
  /**
   * User Id of Creator (read-only)
   */
  creator_id?: number
  /**
   * Children Count (read-only)
   */
  child_count?: number
  /**
   * Embedder's Id if this folder was autogenerated as an embedding shared folder via 'external_group_id' in an SSO embed login (read-only)
   */
  external_id?: string
  /**
   * Folder is an embed folder (read-only)
   */
  is_embed?: boolean
  /**
   * Folder is the root embed shared folder (read-only)
   */
  is_embed_shared_root?: boolean
  /**
   * Folder is the root embed users folder (read-only)
   */
  is_embed_users_root?: boolean
  /**
   * Folder is a user's personal folder (read-only)
   */
  is_personal?: boolean
  /**
   * Folder is descendant of a user's personal folder (read-only)
   */
  is_personal_descendant?: boolean
  /**
   * Folder is the root shared folder (read-only)
   */
  is_shared_root?: boolean
  /**
   * Folder is the root user folder (read-only)
   */
  is_users_root?: boolean
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
}

export interface IGitBranch {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * The short name on the local. Updating `name` results in `git checkout <new_name>`
   */
  name?: string
  /**
   * The name of the remote (read-only)
   */
  remote?: string
  /**
   * The short name on the remote (read-only)
   */
  remote_name?: string
  /**
   * Name of error (read-only)
   */
  error?: string
  /**
   * Message describing an error if present (read-only)
   */
  message?: string
  /**
   * Name of the owner of a personal branch (read-only)
   */
  owner_name?: string
  /**
   * Whether or not this branch is readonly (read-only)
   */
  readonly?: boolean
  /**
   * Whether or not this branch is a personal branch - readonly for all developers except the owner (read-only)
   */
  personal?: boolean
  /**
   * Whether or not a local ref exists for the branch (read-only)
   */
  is_local?: boolean
  /**
   * Whether or not a remote ref exists for the branch (read-only)
   */
  is_remote?: boolean
  /**
   * Whether or not this is the production branch (read-only)
   */
  is_production?: boolean
  /**
   * Number of commits the local branch is ahead of the remote (read-only)
   */
  ahead_count?: number
  /**
   * Number of commits the local branch is behind the remote (read-only)
   */
  behind_count?: number
  /**
   * UNIX timestamp at which this branch was last committed. (read-only)
   */
  commit_at?: number
  /**
   * The resolved ref of this branch. Updating `ref` results in `git reset --hard <new_ref>``.
   */
  ref?: string
  /**
   * The resolved ref of this branch remote. (read-only)
   */
  remote_ref?: string
}

export interface IGitConnectionTest {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Human readable string describing the test (read-only)
   */
  description?: string
  /**
   * A short string, uniquely naming this test (read-only)
   */
  id?: string
}

export interface IGitConnectionTestResult {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * A short string, uniquely naming this test (read-only)
   */
  id?: string
  /**
   * Additional data from the test (read-only)
   */
  message?: string
  /**
   * Either 'pass' or 'fail' (read-only)
   */
  status?: string
}

export interface IGitStatus {
  /**
   * Git action: add, delete, etc (read-only)
   */
  action?: string
  /**
   * When true, changes to the local file conflict with the remote repository (read-only)
   */
  conflict?: boolean
  /**
   * When true, the file can be reverted to an earlier state (read-only)
   */
  revertable?: boolean
  /**
   * Git description of the action (read-only)
   */
  text?: string
}

export interface IGroup {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Group can be used in content access controls
   */
  can_add_to_content_metadata?: boolean
  /**
   * Currently logged in user is group member (read-only)
   */
  contains_current_user?: boolean
  /**
   * External Id group if embed group (read-only)
   */
  external_group_id?: string
  /**
   * Group membership controlled outside of Looker (read-only)
   */
  externally_managed?: boolean
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * New users are added to this group by default (read-only)
   */
  include_by_default?: boolean
  /**
   * Name of group
   */
  name?: string
  /**
   * Number of users included in this group (read-only)
   */
  user_count?: number
}

export interface IGroupIdForGroupInclusion {
  /**
   * Id of group (read-only)
   */
  group_id?: number
}

export interface IGroupIdForGroupUserInclusion {
  /**
   * Id of user (read-only)
   */
  user_id?: number
}

export interface IImportedProject {
  /**
   * Dependency name (read-only)
   */
  name?: string
  /**
   * Url for a remote dependency (read-only)
   */
  url?: string
  /**
   * Ref for a remote dependency (read-only)
   */
  ref?: string
  /**
   * Flag signifying if a dependency is remote or local (read-only)
   */
  is_remote?: boolean
}

export interface IIntegration {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * ID of the integration. (read-only)
   */
  id?: string
  /**
   * ID of the integration hub. (read-only)
   */
  integration_hub_id?: number
  /**
   * Label for the integration. (read-only)
   */
  label?: string
  /**
   * Description of the integration. (read-only)
   */
  description?: string
  /**
   * Whether the integration is available to users.
   */
  enabled?: boolean
  /**
   * Array of params for the integration.
   */
  params?: IIntegrationParam[]
  /**
   * A list of data formats the integration supports. If unspecified, the default is all data formats. Valid values are: "txt", "csv", "inline_json", "json", "json_label", "json_detail", "json_detail_lite_stream", "xlsx", "html", "wysiwyg_pdf", "assembled_pdf", "wysiwyg_png", "csv_zip". (read-only)
   */
  supported_formats?: string[]
  /**
   * A list of action types the integration supports. Valid values are: "cell", "query", "dashboard". (read-only)
   */
  supported_action_types?: string[]
  /**
   * A list of formatting options the integration supports. If unspecified, defaults to all formats. Valid values are: "formatted", "unformatted". (read-only)
   */
  supported_formattings?: string[]
  /**
   * A list of visualization formatting options the integration supports. If unspecified, defaults to all formats. Valid values are: "apply", "noapply". (read-only)
   */
  supported_visualization_formattings?: string[]
  /**
   * A list of all the download mechanisms the integration supports. The order of values is not significant: Looker will select the most appropriate supported download mechanism for a given query. The integration must ensure it can handle any of the mechanisms it claims to support. If unspecified, this defaults to all download setting values. Valid values are: "push", "url". (read-only)
   */
  supported_download_settings?: string[]
  /**
   * URL to an icon for the integration. (read-only)
   */
  icon_url?: string
  /**
   * Whether the integration uses oauth. (read-only)
   */
  uses_oauth?: boolean
  /**
   * A list of descriptions of required fields that this integration is compatible with. If there are multiple entries in this list, the integration requires more than one field. If unspecified, no fields will be required. (read-only)
   */
  required_fields?: IIntegrationRequiredField[]
  /**
   * Whether the integration uses delegate oauth, which allows federation between an integration installation scope specific entity (like org, group, and team, etc.) and Looker. (read-only)
   */
  delegate_oauth?: boolean
  /**
   * Whether the integration is available to users.
   */
  installed_delegate_oauth_targets?: number[]
}

export interface IIntegrationHub {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * ID of the hub. (read-only)
   */
  id?: number
  /**
   * URL of the hub.
   */
  url?: string
  /**
   * Label of the hub. (read-only)
   */
  label?: string
  /**
   * Whether this hub is a first-party integration hub operated by Looker. (read-only)
   */
  official?: boolean
  /**
   * An error message, present if the integration hub metadata could not be fetched. If this is present, the integration hub is unusable. (read-only)
   */
  fetch_error_message?: string
  /**
   * (Write-Only) An authorization key that will be sent to the integration hub on every request.
   */
  authorization_token?: string
  /**
   * Whether the authorization_token is set for the hub. (read-only)
   */
  has_authorization_token?: boolean
  /**
   * Whether the legal agreement message has been signed by the user. This only matters if legal_agreement_required is true. (read-only)
   */
  legal_agreement_signed?: boolean
  /**
   * Whether the legal terms for the integration hub are required before use. (read-only)
   */
  legal_agreement_required?: boolean
  /**
   * The legal agreement text for this integration hub. (read-only)
   */
  legal_agreement_text?: string
}

export interface IIntegrationParam {
  /**
   * Name of the parameter.
   */
  name?: string
  /**
   * Label of the parameter. (read-only)
   */
  label?: string
  /**
   * Short description of the parameter. (read-only)
   */
  description?: string
  /**
   * Whether the parameter is required to be set to use the destination. If unspecified, this defaults to false. (read-only)
   */
  required?: boolean
  /**
   * Whether the parameter has a value set. (read-only)
   */
  has_value?: boolean
  /**
   * The current value of the parameter. Always null if the value is sensitive. When writing, null values will be ignored. Set the value to an empty string to clear it.
   */
  value?: string
  /**
   * When present, the param's value comes from this user attribute instead of the 'value' parameter. Set to null to use the 'value'.
   */
  user_attribute_name?: string
  /**
   * Whether the parameter contains sensitive data like API credentials. If unspecified, this defaults to true. (read-only)
   */
  sensitive?: boolean
  /**
   * When true, this parameter must be assigned to a user attribute in the admin panel (instead of a constant value), and that value may be updated by the user as part of the integration flow. (read-only)
   */
  per_user?: boolean
  /**
   * When present, the param represents the oauth url the user will be taken to. (read-only)
   */
  delegate_oauth_url?: string
}

export interface IIntegrationRequiredField {
  /**
   * Matches a field that has this tag. (read-only)
   */
  tag?: string
  /**
   * If present, supercedes 'tag' and matches a field that has any of the provided tags. (read-only)
   */
  any_tag?: string[]
  /**
   * If present, supercedes 'tag' and matches a field that has all of the provided tags. (read-only)
   */
  all_tags?: string[]
}

export interface IIntegrationTestResult {
  /**
   * Whether or not the test was successful (read-only)
   */
  success?: boolean
  /**
   * A message representing the results of the test. (read-only)
   */
  message?: string
  /**
   * An array of connection test result for delegate oauth actions. (read-only)
   */
  delegate_oauth_result?: IDelegateOauthTest[]
}

export interface IInternalHelpResources {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * If true and internal help resources content is not blank then the link for internal help resources will be shown in the help menu and the content displayed within Looker
   */
  enabled?: boolean
}

export interface IInternalHelpResourcesContent {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Text to display in the help menu item which will display the internal help resources
   */
  organization_name?: string
  /**
   * Content to be displayed in the internal help resources page/modal
   */
  markdown_content?: string
}

export interface ILDAPConfig {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Allow alternate email-based login via '/login/email' for admins and for specified users with the 'login_special_email' permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled.
   */
  alternate_email_login_allowed?: boolean
  /**
   * (Write-Only)  Password for the LDAP account used to access the LDAP server
   */
  auth_password?: string
  /**
   * Users will not be allowed to login at all unless a role for them is found in LDAP if set to true
   */
  auth_requires_role?: boolean
  /**
   * Distinguished name of LDAP account used to access the LDAP server
   */
  auth_username?: string
  /**
   * LDAP server hostname
   */
  connection_host?: string
  /**
   * LDAP host port
   */
  connection_port?: string
  /**
   * Use Transport Layer Security
   */
  connection_tls?: boolean
  /**
   * Do not verify peer when using TLS
   */
  connection_tls_no_verify?: boolean
  /**
   * (Write-Only)  Array of ids of groups that will be applied to new users the first time they login via LDAP
   */
  default_new_user_group_ids?: number[]
  /**
   * (Read-only) Groups that will be applied to new users the first time they login via LDAP (read-only)
   */
  default_new_user_groups?: IGroup[]
  /**
   * (Write-Only)  Array of ids of roles that will be applied to new users the first time they login via LDAP
   */
  default_new_user_role_ids?: number[]
  /**
   * (Read-only) Roles that will be applied to new users the first time they login via LDAP (read-only)
   */
  default_new_user_roles?: IRole[]
  /**
   * Enable/Disable LDAP authentication for the server
   */
  enabled?: boolean
  /**
   * Don't attempt to do LDAP search result paging (RFC 2696) even if the LDAP server claims to support it.
   */
  force_no_page?: boolean
  /**
   * (Read-only) Array of mappings between LDAP Groups and Looker Roles (read-only)
   */
  groups?: ILDAPGroupRead[]
  /**
   * Base dn for finding groups in LDAP searches
   */
  groups_base_dn?: string
  /**
   * Identifier for a strategy for how Looker will search for groups in the LDAP server
   */
  groups_finder_type?: string
  /**
   * LDAP Group attribute that signifies the members of the groups. Most commonly 'member'
   */
  groups_member_attribute?: string
  /**
   * Optional comma-separated list of supported LDAP objectclass for groups when doing groups searches
   */
  groups_objectclasses?: string
  /**
   * LDAP Group attribute that signifies the user in a group. Most commonly 'dn'
   */
  groups_user_attribute?: string
  /**
   * (Read/Write) Array of mappings between LDAP Groups and arrays of Looker Role ids
   */
  groups_with_role_ids?: ILDAPGroupWrite[]
  /**
   * (Read-only) Has the password been set for the LDAP account used to access the LDAP server (read-only)
   */
  has_auth_password?: boolean
  /**
   * Merge first-time ldap login to existing user account by email addresses. When a user logs in for the first time via ldap this option will connect this user into their existing account by finding the account with a matching email address. Otherwise a new user account will be created for the user.
   */
  merge_new_users_by_email?: boolean
  /**
   * When this config was last modified (read-only)
   */
  modified_at?: string
  /**
   * User id of user who last modified this config (read-only)
   */
  modified_by?: string
  /**
   * Set user roles in Looker based on groups from LDAP
   */
  set_roles_from_groups?: boolean
  /**
   * (Write-Only)  Test LDAP user password. For ldap tests only.
   */
  test_ldap_password?: string
  /**
   * (Write-Only)  Test LDAP user login id. For ldap tests only.
   */
  test_ldap_user?: string
  /**
   * Name of user record attributes used to indicate email address field
   */
  user_attribute_map_email?: string
  /**
   * Name of user record attributes used to indicate first name
   */
  user_attribute_map_first_name?: string
  /**
   * Name of user record attributes used to indicate last name
   */
  user_attribute_map_last_name?: string
  /**
   * Name of user record attributes used to indicate unique record id
   */
  user_attribute_map_ldap_id?: string
  /**
   * (Read-only) Array of mappings between LDAP User Attributes and Looker User Attributes (read-only)
   */
  user_attributes?: ILDAPUserAttributeRead[]
  /**
   * (Read/Write) Array of mappings between LDAP User Attributes and arrays of Looker User Attribute ids
   */
  user_attributes_with_ids?: ILDAPUserAttributeWrite[]
  /**
   * Distinguished name of LDAP node used as the base for user searches
   */
  user_bind_base_dn?: string
  /**
   * (Optional) Custom RFC-2254 filter clause for use in finding user during login. Combined via 'and' with the other generated filter clauses.
   */
  user_custom_filter?: string
  /**
   * Name(s) of user record attributes used for matching user login id (comma separated list)
   */
  user_id_attribute_names?: string
  /**
   * (Optional) Name of user record objectclass used for finding user during login id
   */
  user_objectclass?: string
  /**
   * Allow LDAP auth'd users to be members of non-reflected Looker groups. If 'false', user will be removed from non-reflected groups on login.
   */
  allow_normal_group_membership?: boolean
  /**
   * LDAP auth'd users will be able to inherit roles from non-reflected Looker groups.
   */
  allow_roles_from_normal_groups?: boolean
  /**
   * Allows roles to be directly assigned to LDAP auth'd users.
   */
  allow_direct_roles?: boolean
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface ILDAPConfigTestIssue {
  /**
   * Severity of the issue. Error or Warning (read-only)
   */
  severity?: string
  /**
   * Message describing the issue (read-only)
   */
  message?: string
}

export interface ILDAPConfigTestResult {
  /**
   * Additional details for error cases (read-only)
   */
  details?: string
  /**
   * Array of issues/considerations about the result (read-only)
   */
  issues?: ILDAPConfigTestIssue[]
  /**
   * Short human readable test about the result (read-only)
   */
  message?: string
  /**
   * Test status code: always 'success' or 'error' (read-only)
   */
  status?: string
  /**
   * A more detailed trace of incremental results during auth tests (read-only)
   */
  trace?: string
  user?: ILDAPUser
  /**
   * Link to ldap config (read-only)
   */
  url?: Url
}

export interface ILDAPGroupRead {
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Unique Id of group in Looker (read-only)
   */
  looker_group_id?: number
  /**
   * Name of group in Looker (read-only)
   */
  looker_group_name?: string
  /**
   * Name of group in LDAP (read-only)
   */
  name?: string
  /**
   * Looker Roles (read-only)
   */
  roles?: IRole[]
  /**
   * Link to ldap config (read-only)
   */
  url?: Url
}

export interface ILDAPGroupWrite {
  /**
   * Unique Id
   */
  id?: number
  /**
   * Unique Id of group in Looker (read-only)
   */
  looker_group_id?: number
  /**
   * Name of group in Looker
   */
  looker_group_name?: string
  /**
   * Name of group in LDAP
   */
  name?: string
  /**
   * Looker Role Ids
   */
  role_ids?: number[]
  /**
   * Link to ldap config (read-only)
   */
  url?: Url
}

export interface ILDAPUser {
  /**
   * Array of user's email addresses and aliases for use in migration (read-only)
   */
  all_emails?: string[]
  /**
   * Dictionary of user's attributes (name/value) (read-only)
   */
  attributes?: IDictionary<string>
  /**
   * Primary email address (read-only)
   */
  email?: string
  /**
   * First name (read-only)
   */
  first_name?: string
  /**
   * Array of user's groups (group names only) (read-only)
   */
  groups?: string[]
  /**
   * Last Name (read-only)
   */
  last_name?: string
  /**
   * LDAP's distinguished name for the user record (read-only)
   */
  ldap_dn?: string
  /**
   * LDAP's Unique ID for the user (read-only)
   */
  ldap_id?: string
  /**
   * Array of user's roles (role names only) (read-only)
   */
  roles?: string[]
  /**
   * Link to ldap config (read-only)
   */
  url?: Url
}

export interface ILDAPUserAttributeRead {
  /**
   * Name of User Attribute in LDAP (read-only)
   */
  name?: string
  /**
   * Required to be in LDAP assertion for login to be allowed to succeed (read-only)
   */
  required?: boolean
  /**
   * Looker User Attributes (read-only)
   */
  user_attributes?: IUserAttribute[]
  /**
   * Link to ldap config (read-only)
   */
  url?: Url
}

export interface ILDAPUserAttributeWrite {
  /**
   * Name of User Attribute in LDAP
   */
  name?: string
  /**
   * Required to be in LDAP assertion for login to be allowed to succeed
   */
  required?: boolean
  /**
   * Looker User Attribute Ids
   */
  user_attribute_ids?: number[]
  /**
   * Link to ldap config (read-only)
   */
  url?: Url
}

export interface ILegacyFeature {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Name (read-only)
   */
  name?: string
  /**
   * Description (read-only)
   */
  description?: string
  /**
   * Whether this feature has been enabled by a user
   */
  enabled_locally?: boolean
  /**
   * Whether this feature is currently enabled (read-only)
   */
  enabled?: boolean
  /**
   * Looker version where this feature became a legacy feature (read-only)
   */
  disallowed_as_of_version?: string
  /**
   * Looker version where this feature will be automatically disabled (read-only)
   */
  disable_on_upgrade_to_version?: string
  /**
   * Future Looker version where this feature will be removed (read-only)
   */
  end_of_life_version?: string
  /**
   * URL for documentation about this feature (read-only)
   */
  documentation_url?: string
  /**
   * Approximate date that this feature will be automatically disabled. (read-only)
   */
  approximate_disable_date?: Date
  /**
   * Approximate date that this feature will be removed. (read-only)
   */
  approximate_end_of_life_date?: Date
  /**
   * Whether this legacy feature may have been automatically disabled when upgrading to the current version. (read-only)
   */
  has_disabled_on_upgrade?: boolean
}

export interface ILocale {
  /**
   * Code for Locale (read-only)
   */
  code?: string
  /**
   * Name of Locale in its own language (read-only)
   */
  native_name?: string
  /**
   * Name of Locale in English (read-only)
   */
  english_name?: string
}

export interface ILocalizationSettings {
  /**
   * Default locale for localization (read-only)
   */
  default_locale?: string
  /**
   * Localization level - strict or permissive (read-only)
   */
  localization_level?: string
}

export interface ILook {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Id of content metadata (read-only)
   */
  content_metadata_id?: number
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Look Title
   */
  title?: string
  /**
   * Content Favorite Id (read-only)
   */
  content_favorite_id?: number
  /**
   * Time that the Look was created. (read-only)
   */
  created_at?: Date
  /**
   * Whether or not a look is 'soft' deleted.
   */
  deleted?: boolean
  /**
   * Time that the Look was deleted. (read-only)
   */
  deleted_at?: Date
  /**
   * Id of User that deleted the look. (read-only)
   */
  deleter_id?: number
  /**
   * Description
   */
  description?: string
  /**
   * Embed Url (read-only)
   */
  embed_url?: string
  /**
   * Excel File Url (read-only)
   */
  excel_file_url?: string
  /**
   * Number of times favorited (read-only)
   */
  favorite_count?: number
  /**
   * Google Spreadsheet Formula (read-only)
   */
  google_spreadsheet_formula?: string
  /**
   * Image Embed Url (read-only)
   */
  image_embed_url?: string
  /**
   * auto-run query when Look viewed
   */
  is_run_on_load?: boolean
  /**
   * Time that the Look was last accessed by any user (read-only)
   */
  last_accessed_at?: Date
  /**
   * Id of User that last updated the look. (read-only)
   */
  last_updater_id?: number
  /**
   * Time last viewed in the Looker web UI (read-only)
   */
  last_viewed_at?: Date
  model?: ILookModel
  /**
   * Is Public
   */
  public?: boolean
  /**
   * Public Slug (read-only)
   */
  public_slug?: string
  /**
   * Public Url (read-only)
   */
  public_url?: string
  /**
   * Query Id
   */
  query_id?: number
  /**
   * Short Url (read-only)
   */
  short_url?: string
  folder?: IFolderBase
  /**
   * Folder Id
   */
  folder_id?: string
  /**
   * Time that the Look was updated. (read-only)
   */
  updated_at?: Date
  /**
   * User Id
   */
  user_id?: number
  /**
   * Number of times viewed in the Looker web UI (read-only)
   */
  view_count?: number
}

export interface ILookBasic {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Id of content metadata (read-only)
   */
  content_metadata_id?: number
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Look Title (read-only)
   */
  title?: string
}

export interface ILookmlModel {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Array of names of connections this model is allowed to use
   */
  allowed_db_connection_names?: string[]
  /**
   * Array of explores (if has_content) (read-only)
   */
  explores?: ILookmlModelNavExplore[]
  /**
   * Does this model declaration have have lookml content? (read-only)
   */
  has_content?: boolean
  /**
   * UI-friendly name for this model (read-only)
   */
  label?: string
  /**
   * Name of the model. Also used as the unique identifier
   */
  name?: string
  /**
   * Name of project containing the model
   */
  project_name?: string
  /**
   * Is this model allowed to use all current and future connections
   */
  unlimited_db_connections?: boolean
}

export interface ILookmlModelExplore {
  /**
   * Fully qualified name model plus explore name (read-only)
   */
  id?: string
  /**
   * Explore name (read-only)
   */
  name?: string
  /**
   * Description (read-only)
   */
  description?: string
  /**
   * Label (read-only)
   */
  label?: string
  /**
   * Scopes (read-only)
   */
  scopes?: string[]
  /**
   * Can Total (read-only)
   */
  can_total?: boolean
  /**
   * Can Save (read-only)
   */
  can_save?: boolean
  /**
   * Can Explain (read-only)
   */
  can_explain?: boolean
  /**
   * Can pivot in the DB (read-only)
   */
  can_pivot_in_db?: boolean
  /**
   * Can use subtotals (read-only)
   */
  can_subtotal?: boolean
  /**
   * Has timezone support (read-only)
   */
  has_timezone_support?: boolean
  /**
   * Cost estimates supported (read-only)
   */
  supports_cost_estimate?: boolean
  /**
   * Connection name (read-only)
   */
  connection_name?: string
  /**
   * How nulls are sorted, possible values are "low", "high", "first" and "last" (read-only)
   */
  null_sort_treatment?: string
  /**
   * List of model source files (read-only)
   */
  files?: string[]
  /**
   * Primary source_file file (read-only)
   */
  source_file?: string
  /**
   * Name of project (read-only)
   */
  project_name?: string
  /**
   * Name of model (read-only)
   */
  model_name?: string
  /**
   * Name of view (read-only)
   */
  view_name?: string
  /**
   * Is hidden (read-only)
   */
  hidden?: boolean
  /**
   * A sql_table_name expression that defines what sql table the view/explore maps onto. Example: "prod_orders2 AS orders" in a view named orders. (read-only)
   */
  sql_table_name?: string
  /**
   * (DEPRECATED) Array of access filter field names (read-only)
   */
  access_filter_fields?: string[]
  /**
   * Access filters (read-only)
   */
  access_filters?: ILookmlModelExploreAccessFilter[]
  /**
   * Aliases (read-only)
   */
  aliases?: ILookmlModelExploreAlias[]
  /**
   * Always filter (read-only)
   */
  always_filter?: ILookmlModelExploreAlwaysFilter[]
  /**
   * Conditionally filter (read-only)
   */
  conditionally_filter?: ILookmlModelExploreConditionallyFilter[]
  /**
   * Array of index fields (read-only)
   */
  index_fields?: string[]
  /**
   * Sets (read-only)
   */
  sets?: ILookmlModelExploreSet[]
  /**
   * An array of arbitrary string tags provided in the model for this explore. (read-only)
   */
  tags?: string[]
  /**
   * Errors (read-only)
   */
  errors?: ILookmlModelExploreError[]
  fields?: ILookmlModelExploreFieldset
  /**
   * Views joined into this explore (read-only)
   */
  joins?: ILookmlModelExploreJoins[]
  /**
   * Label used to group explores in the navigation menus (read-only)
   */
  group_label?: string
  /**
   * An array of items describing which custom measure types are supported for creating a custom measure 'baed_on' each possible dimension type. (read-only)
   */
  supported_measure_types?: ILookmlModelExploreSupportedMeasureType[]
}

export interface ILookmlModelExploreAccessFilter {
  /**
   * Field to be filtered (read-only)
   */
  field?: string
  /**
   * User attribute name (read-only)
   */
  user_attribute?: string
}

export interface ILookmlModelExploreAlias {
  /**
   * Name (read-only)
   */
  name?: string
  /**
   * Value (read-only)
   */
  value?: string
}

export interface ILookmlModelExploreAlwaysFilter {
  /**
   * Name (read-only)
   */
  name?: string
  /**
   * Value (read-only)
   */
  value?: string
}

export interface ILookmlModelExploreConditionallyFilter {
  /**
   * Name (read-only)
   */
  name?: string
  /**
   * Value (read-only)
   */
  value?: string
}

export interface ILookmlModelExploreError {
  /**
   * Error Message (read-only)
   */
  message?: string
  /**
   * Details (read-only)
   */
  details?: string
  /**
   * Error source location (read-only)
   */
  error_pos?: string
  /**
   * Is this a field error (read-only)
   */
  field_error?: boolean
}

export interface ILookmlModelExploreField {
  /**
   * The appropriate horizontal text alignment the values of this field shoud be displayed in. Valid values are: "left", "right". (read-only)
   */
  align?: string
  /**
   * Whether it's possible to filter on this field. (read-only)
   */
  can_filter?: boolean
  /**
   * Field category Valid values are: "parameter", "filter", "measure", "dimension". (read-only)
   */
  category?: string
  /**
   * The default value that this field uses when filtering. Null if there is no default value. (read-only)
   */
  default_filter_value?: string
  /**
   * Description (read-only)
   */
  description?: string
  /**
   * An array enumerating all the possible values that this field can contain. When null, there is no limit to the set of possible values this field can contain. (read-only)
   */
  enumerations?: ILookmlModelExploreFieldEnumeration[]
  /**
   * An error message indicating a problem with the definition of this field. If there are no errors, this will be null. (read-only)
   */
  error?: string
  /**
   * A label creating a grouping of fields. All fields with this label should be presented together when displayed in a UI. (read-only)
   */
  field_group_label?: string
  /**
   * When presented in a field group via field_group_label, a shorter name of the field to be displayed in that context. (read-only)
   */
  field_group_variant?: string
  /**
   * The style of dimension fill that is possible for this field. Null if no dimension fill is possible. Valid values are: "enumeration", "range". (read-only)
   */
  fill_style?: string
  /**
   * An offset (in months) from the calendar start month to the fiscal start month defined in the LookML model this field belongs to. (read-only)
   */
  fiscal_month_offset?: number
  /**
   * Whether this field has a set of allowed_values specified in LookML. (read-only)
   */
  has_allowed_values?: boolean
  /**
   * Whether this field should be hidden from the user interface. (read-only)
   */
  hidden?: boolean
  /**
   * Whether this field is a filter. (read-only)
   */
  is_filter?: boolean
  /**
   * Whether this field represents a fiscal time value. (read-only)
   */
  is_fiscal?: boolean
  /**
   * Whether this field is of a type that represents a numeric value. (read-only)
   */
  is_numeric?: boolean
  /**
   * Whether this field is of a type that represents a time value. (read-only)
   */
  is_timeframe?: boolean
  /**
   * Whether this field can be time filtered. (read-only)
   */
  can_time_filter?: boolean
  time_interval?: ILookmlModelExploreFieldTimeInterval
  /**
   * Fully-qualified human-readable label of the field. (read-only)
   */
  label?: string
  /**
   * The name of the parameter that will provide a parameterized label for this field, if available in the current context. (read-only)
   */
  label_from_parameter?: string
  /**
   * The human-readable label of the field, without the view label. (read-only)
   */
  label_short?: string
  /**
   * A URL linking to the definition of this field in the LookML IDE. (read-only)
   */
  lookml_link?: string
  map_layer?: ILookmlModelExploreFieldMapLayer
  /**
   * Whether this field is a measure. (read-only)
   */
  measure?: boolean
  /**
   * Fully-qualified name of the field. (read-only)
   */
  name?: string
  /**
   * If yes, the field will not be localized with the user attribute number_format. Defaults to no (read-only)
   */
  strict_value_format?: boolean
  /**
   * Whether this field is a parameter. (read-only)
   */
  parameter?: boolean
  /**
   * Whether this field can be removed from a query. (read-only)
   */
  permanent?: boolean
  /**
   * Whether or not the field represents a primary key. (read-only)
   */
  primary_key?: boolean
  /**
   * The name of the project this field is defined in. (read-only)
   */
  project_name?: string
  /**
   * When true, it's not possible to re-sort this field's values without re-running the SQL query, due to database logic that affects the sort. (read-only)
   */
  requires_refresh_on_sort?: boolean
  /**
   * The LookML scope this field belongs to. The scope is typically the field's view. (read-only)
   */
  scope?: string
  /**
   * Whether this field can be sorted. (read-only)
   */
  sortable?: boolean
  /**
   * The path portion of source_file_path. (read-only)
   */
  source_file?: string
  /**
   * The fully-qualified path of the project file this field is defined in. (read-only)
   */
  source_file_path?: string
  /**
   * SQL expression as defined in the LookML model. The SQL syntax shown here is a representation intended for auditability, and is not neccessarily an exact match for what will ultimately be run in the database. It may contain special LookML syntax or annotations that are not valid SQL. This will be null if the current user does not have the see_lookml permission for the field's model. (read-only)
   */
  sql?: string
  /**
   * An array of conditions and values that make up a SQL Case expression, as defined in the LookML model. The SQL syntax shown here is a representation intended for auditability, and is not neccessarily an exact match for what will ultimately be run in the database. It may contain special LookML syntax or annotations that are not valid SQL. This will be null if the current user does not have the see_lookml permission for the field's model. (read-only)
   */
  sql_case?: ILookmlModelExploreFieldSqlCase[]
  /**
   * The name of the dimension to base suggest queries from. (read-only)
   */
  suggest_dimension?: string
  /**
   * The name of the explore to base suggest queries from. (read-only)
   */
  suggest_explore?: string
  /**
   * Whether or not suggestions are possible for this field. (read-only)
   */
  suggestable?: boolean
  /**
   * If available, a list of suggestions for this field. For most fields, a suggest query is a more appropriate way to get an up-to-date list of suggestions. Or use enumerations to list all the possible values. (read-only)
   */
  suggestions?: string[]
  /**
   * An array of arbitrary string tags provided in the model for this field. (read-only)
   */
  tags?: string[]
  /**
   * The LookML type of the field. (read-only)
   */
  type?: string
  /**
   * An array of user attribute types that are allowed to be used in filters on this field. Valid values are: "advanced_filter_string", "advanced_filter_number", "advanced_filter_datetime", "string", "number", "datetime", "relative_url", "yesno", "zipcode". (read-only)
   */
  user_attribute_filter_types?: string[]
  /**
   * If specified, the LookML value format string for formatting values of this field. (read-only)
   */
  value_format?: string
  /**
   * The name of the view this field belongs to. (read-only)
   */
  view?: string
  /**
   * The human-readable label of the view the field belongs to. (read-only)
   */
  view_label?: string
  /**
   * Whether this field was specified in "dynamic_fields" and is not part of the model. (read-only)
   */
  dynamic?: boolean
  /**
   * The name of the starting day of the week. Valid values are: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". (read-only)
   */
  week_start_day?: string
  /**
   * The number of times this field has been used in queries (read-only)
   */
  times_used?: number
}

export interface ILookmlModelExploreFieldEnumeration {
  /**
   * Label (read-only)
   */
  label?: string
  /**
   * Value (read-only)
   */
  value?: string
}

export interface ILookmlModelExploreFieldMapLayer {
  /**
   * URL to the map layer resource. (read-only)
   */
  url?: string
  /**
   * Name of the map layer, as defined in LookML. (read-only)
   */
  name?: string
  /**
   * Specifies the name of the TopoJSON object that the map layer references. If not specified, use the first object.. (read-only)
   */
  feature_key?: string
  /**
   * Selects which property from the TopoJSON data to plot against. TopoJSON supports arbitrary metadata for each region. When null, the first matching property should be used. (read-only)
   */
  property_key?: string
  /**
   * Which property from the TopoJSON data to use to label the region. When null, property_key should be used. (read-only)
   */
  property_label_key?: string
  /**
   * The preferred geographic projection of the map layer when displayed in a visualization that supports multiple geographic projections. (read-only)
   */
  projection?: string
  /**
   * Specifies the data format of the region information. Valid values are: "topojson", "vector_tile_region". (read-only)
   */
  format?: string
  /**
   * Specifies the URL to a JSON file that defines the geographic extents of each region available in the map layer. This data is used to automatically center the map on the available data for visualization purposes. The JSON file must be a JSON object where the keys are the mapping value of the feature (as specified by property_key) and the values are arrays of four numbers representing the west longitude, south latitude, east longitude, and north latitude extents of the region. The object must include a key for every possible value of property_key. (read-only)
   */
  extents_json_url?: string
  /**
   * The minimum zoom level that the map layer may be displayed at, for visualizations that support zooming. (read-only)
   */
  max_zoom_level?: number
  /**
   * The maximum zoom level that the map layer may be displayed at, for visualizations that support zooming. (read-only)
   */
  min_zoom_level?: number
}

export interface ILookmlModelExploreFieldset {
  /**
   * Array of dimensions (read-only)
   */
  dimensions?: ILookmlModelExploreField[]
  /**
   * Array of measures (read-only)
   */
  measures?: ILookmlModelExploreField[]
  /**
   * Array of filters (read-only)
   */
  filters?: ILookmlModelExploreField[]
  /**
   * Array of parameters (read-only)
   */
  parameters?: ILookmlModelExploreField[]
}

export interface ILookmlModelExploreFieldSqlCase {
  /**
   * SQL Case label value (read-only)
   */
  value?: string
  /**
   * SQL Case condition expression (read-only)
   */
  condition?: string
}

export interface ILookmlModelExploreFieldTimeInterval {
  /**
   * The type of time interval this field represents a grouping of. Valid values are: "day", "hour", "minute", "second", "millisecond", "microsecond", "month", "year". (read-only)
   */
  name?: string
  /**
   * The number of intervals this field represents a grouping of. (read-only)
   */
  count?: number
}

export interface ILookmlModelExploreJoins {
  /**
   * Name of this join (and name of the view to join) (read-only)
   */
  name?: string
  /**
   * Fields referenced by the join (read-only)
   */
  dependent_fields?: string[]
  /**
   * Fields of the joined view to pull into this explore (read-only)
   */
  fields?: string[]
  /**
   * Name of the dimension in this explore whose value is in the primary key of the joined view (read-only)
   */
  foreign_key?: string
  /**
   * Name of view to join (read-only)
   */
  from?: string
  /**
   * Specifies whether all queries must use an outer join (read-only)
   */
  outer_only?: boolean
  /**
   * many_to_one, one_to_one, one_to_many, many_to_many (read-only)
   */
  relationship?: string
  /**
   * Names of joins that must always be included in SQL queries (read-only)
   */
  required_joins?: string[]
  /**
   * SQL expression that produces a foreign key (read-only)
   */
  sql_foreign_key?: string
  /**
   * SQL ON expression describing the join condition (read-only)
   */
  sql_on?: string
  /**
   * SQL table name to join (read-only)
   */
  sql_table_name?: string
  /**
   * The join type: left_outer, full_outer, inner, or cross (read-only)
   */
  type?: string
  /**
   * Label to display in UI selectors (read-only)
   */
  view_label?: string
}

export interface ILookmlModelExploreSet {
  /**
   * Name (read-only)
   */
  name?: string
  /**
   * Value set (read-only)
   */
  value?: string[]
}

export interface ILookmlModelExploreSupportedMeasureType {
  /**
   * (read-only)
   */
  dimension_type?: string
  /**
   * (read-only)
   */
  measure_types?: string[]
}

export interface ILookmlModelNavExplore {
  /**
   * Name of the explore (read-only)
   */
  name?: string
  /**
   * Description for the explore (read-only)
   */
  description?: string
  /**
   * Label for the explore (read-only)
   */
  label?: string
  /**
   * Is this explore marked as hidden (read-only)
   */
  hidden?: boolean
  /**
   * Label used to group explores in the navigation menus (read-only)
   */
  group_label?: string
}

export interface ILookmlTest {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Name of model containing this test. (read-only)
   */
  model_name?: string
  /**
   * Name of this test. (read-only)
   */
  name?: string
  /**
   * Name of the explore this test runs a query against (read-only)
   */
  explore_name?: string
  /**
   * The url parameters that can be used to reproduce this test's query on an explore. (read-only)
   */
  query_url_params?: string
  /**
   * Name of the LookML file containing this test. (read-only)
   */
  file?: string
  /**
   * Line number of this test in LookML. (read-only)
   */
  line?: number
}

export interface ILookmlTestResult {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Name of model containing this test. (read-only)
   */
  model_name?: string
  /**
   * Name of this test. (read-only)
   */
  test_name?: string
  /**
   * Number of assertions in this test (read-only)
   */
  assertions_count?: number
  /**
   * Number of assertions passed in this test (read-only)
   */
  assertions_failed?: number
  /**
   * A list of any errors encountered by the test. (read-only)
   */
  errors?: IProjectError[]
  /**
   * A list of any warnings encountered by the test. (read-only)
   */
  warnings?: IProjectError[]
  /**
   * True if this test passsed without errors. (read-only)
   */
  success?: boolean
}

export interface ILookModel {
  /**
   * Model Id (read-only)
   */
  id?: string
  /**
   * Model Label (read-only)
   */
  label?: string
}

export interface ILookWithDashboards {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Id of content metadata (read-only)
   */
  content_metadata_id?: number
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Look Title
   */
  title?: string
  /**
   * Content Favorite Id (read-only)
   */
  content_favorite_id?: number
  /**
   * Time that the Look was created. (read-only)
   */
  created_at?: Date
  /**
   * Whether or not a look is 'soft' deleted.
   */
  deleted?: boolean
  /**
   * Time that the Look was deleted. (read-only)
   */
  deleted_at?: Date
  /**
   * Id of User that deleted the look. (read-only)
   */
  deleter_id?: number
  /**
   * Description
   */
  description?: string
  /**
   * Embed Url (read-only)
   */
  embed_url?: string
  /**
   * Excel File Url (read-only)
   */
  excel_file_url?: string
  /**
   * Number of times favorited (read-only)
   */
  favorite_count?: number
  /**
   * Google Spreadsheet Formula (read-only)
   */
  google_spreadsheet_formula?: string
  /**
   * Image Embed Url (read-only)
   */
  image_embed_url?: string
  /**
   * auto-run query when Look viewed
   */
  is_run_on_load?: boolean
  /**
   * Time that the Look was last accessed by any user (read-only)
   */
  last_accessed_at?: Date
  /**
   * Id of User that last updated the look. (read-only)
   */
  last_updater_id?: number
  /**
   * Time last viewed in the Looker web UI (read-only)
   */
  last_viewed_at?: Date
  model?: ILookModel
  /**
   * Is Public
   */
  public?: boolean
  /**
   * Public Slug (read-only)
   */
  public_slug?: string
  /**
   * Public Url (read-only)
   */
  public_url?: string
  /**
   * Query Id
   */
  query_id?: number
  /**
   * Short Url (read-only)
   */
  short_url?: string
  folder?: IFolderBase
  /**
   * Folder Id
   */
  folder_id?: string
  /**
   * Time that the Look was updated. (read-only)
   */
  updated_at?: Date
  /**
   * User Id
   */
  user_id?: number
  /**
   * Number of times viewed in the Looker web UI (read-only)
   */
  view_count?: number
  /**
   * Dashboards (read-only)
   */
  dashboards?: IDashboardBase[]
}

export interface ILookWithQuery {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Id of content metadata (read-only)
   */
  content_metadata_id?: number
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Look Title
   */
  title?: string
  /**
   * Content Favorite Id (read-only)
   */
  content_favorite_id?: number
  /**
   * Time that the Look was created. (read-only)
   */
  created_at?: Date
  /**
   * Whether or not a look is 'soft' deleted.
   */
  deleted?: boolean
  /**
   * Time that the Look was deleted. (read-only)
   */
  deleted_at?: Date
  /**
   * Id of User that deleted the look. (read-only)
   */
  deleter_id?: number
  /**
   * Description
   */
  description?: string
  /**
   * Embed Url (read-only)
   */
  embed_url?: string
  /**
   * Excel File Url (read-only)
   */
  excel_file_url?: string
  /**
   * Number of times favorited (read-only)
   */
  favorite_count?: number
  /**
   * Google Spreadsheet Formula (read-only)
   */
  google_spreadsheet_formula?: string
  /**
   * Image Embed Url (read-only)
   */
  image_embed_url?: string
  /**
   * auto-run query when Look viewed
   */
  is_run_on_load?: boolean
  /**
   * Time that the Look was last accessed by any user (read-only)
   */
  last_accessed_at?: Date
  /**
   * Id of User that last updated the look. (read-only)
   */
  last_updater_id?: number
  /**
   * Time last viewed in the Looker web UI (read-only)
   */
  last_viewed_at?: Date
  model?: ILookModel
  /**
   * Is Public
   */
  public?: boolean
  /**
   * Public Slug (read-only)
   */
  public_slug?: string
  /**
   * Public Url (read-only)
   */
  public_url?: string
  /**
   * Query Id
   */
  query_id?: number
  /**
   * Short Url (read-only)
   */
  short_url?: string
  folder?: IFolderBase
  /**
   * Folder Id
   */
  folder_id?: string
  /**
   * Time that the Look was updated. (read-only)
   */
  updated_at?: Date
  /**
   * User Id
   */
  user_id?: number
  /**
   * Number of times viewed in the Looker web UI (read-only)
   */
  view_count?: number
  query?: IQuery
  /**
   * Url (read-only)
   */
  url?: string
}

export interface IManifest {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Manifest project name (read-only)
   */
  name?: string
  /**
   * Imports for a project (read-only)
   */
  imports?: IImportedProject[]
  localization_settings?: ILocalizationSettings
}

export interface IMergeFields {
  /**
   * Field name to map onto in the merged results
   */
  field_name?: string
  /**
   * Field name from the source query
   */
  source_field_name?: string
}

export interface IMergeQuery {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Column Limit
   */
  column_limit?: string
  /**
   * Dynamic Fields
   */
  dynamic_fields?: string
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Pivots
   */
  pivots?: string[]
  /**
   * Unique to get results (read-only)
   */
  result_maker_id?: number
  /**
   * Sorts
   */
  sorts?: string[]
  /**
   * Source Queries defining the results to be merged.
   */
  source_queries?: IMergeQuerySourceQuery[]
  /**
   * Total
   */
  total?: boolean
  /**
   * Visualization Config
   */
  vis_config?: IDictionary<string>
}

export interface IMergeQuerySourceQuery {
  /**
   * An array defining which fields of the source query are mapped onto fields of the merge query
   */
  merge_fields?: IMergeFields[]
  /**
   * Display name
   */
  name?: string
  /**
   * Id of the query to merge
   */
  query_id?: number
}

export interface IModelSet {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * (read-only)
   */
  all_access?: boolean
  /**
   * (read-only)
   */
  built_in?: boolean
  /**
   * Unique Id (read-only)
   */
  id?: number
  models?: string[]
  /**
   * Name of ModelSet
   */
  name?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface IModelsNotValidated {
  /**
   * Model name (read-only)
   */
  name?: string
  /**
   * Project file (read-only)
   */
  project_file_id?: string
}

export interface IOIDCConfig {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Allow alternate email-based login via '/login/email' for admins and for specified users with the 'login_special_email' permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled.
   */
  alternate_email_login_allowed?: boolean
  /**
   * OpenID Provider Audience
   */
  audience?: string
  /**
   * Users will not be allowed to login at all unless a role for them is found in OIDC if set to true
   */
  auth_requires_role?: boolean
  /**
   * OpenID Provider Authorization Url
   */
  authorization_endpoint?: Url
  /**
   * (Write-Only) Array of ids of groups that will be applied to new users the first time they login via OIDC
   */
  default_new_user_group_ids?: number[]
  /**
   * (Read-only) Groups that will be applied to new users the first time they login via OIDC (read-only)
   */
  default_new_user_groups?: IGroup[]
  /**
   * (Write-Only) Array of ids of roles that will be applied to new users the first time they login via OIDC
   */
  default_new_user_role_ids?: number[]
  /**
   * (Read-only) Roles that will be applied to new users the first time they login via OIDC (read-only)
   */
  default_new_user_roles?: IRole[]
  /**
   * Enable/Disable OIDC authentication for the server
   */
  enabled?: boolean
  /**
   * (Read-only) Array of mappings between OIDC Groups and Looker Roles (read-only)
   */
  groups?: IOIDCGroupRead[]
  /**
   * Name of user record attributes used to indicate groups. Used when 'groups_finder_type' is set to 'grouped_attribute_values'
   */
  groups_attribute?: string
  /**
   * (Read/Write) Array of mappings between OIDC Groups and arrays of Looker Role ids
   */
  groups_with_role_ids?: IOIDCGroupWrite[]
  /**
   * Relying Party Identifier (provided by OpenID Provider)
   */
  identifier?: string
  /**
   * OpenID Provider Issuer
   */
  issuer?: string
  /**
   * When this config was last modified (read-only)
   */
  modified_at?: Date
  /**
   * User id of user who last modified this config (read-only)
   */
  modified_by?: number
  /**
   * Merge first-time oidc login to existing user account by email addresses. When a user logs in for the first time via oidc this option will connect this user into their existing account by finding the account with a matching email address by testing the given types of credentials for existing users. Otherwise a new user account will be created for the user. This list (if provided) must be a comma separated list of string like 'email,ldap,google'
   */
  new_user_migration_types?: string
  /**
   * Array of scopes to request.
   */
  scopes?: string[]
  /**
   * (Write-Only) Relying Party Secret (provided by OpenID Provider)
   */
  secret?: string
  /**
   * Set user roles in Looker based on groups from OIDC
   */
  set_roles_from_groups?: boolean
  /**
   * Slug to identify configurations that are created in order to run a OIDC config test (read-only)
   */
  test_slug?: string
  /**
   * OpenID Provider Token Url
   */
  token_endpoint?: string
  /**
   * Name of user record attributes used to indicate email address field
   */
  user_attribute_map_email?: string
  /**
   * Name of user record attributes used to indicate first name
   */
  user_attribute_map_first_name?: string
  /**
   * Name of user record attributes used to indicate last name
   */
  user_attribute_map_last_name?: string
  /**
   * (Read-only) Array of mappings between OIDC User Attributes and Looker User Attributes (read-only)
   */
  user_attributes?: IOIDCUserAttributeRead[]
  /**
   * (Read/Write) Array of mappings between OIDC User Attributes and arrays of Looker User Attribute ids
   */
  user_attributes_with_ids?: IOIDCUserAttributeWrite[]
  /**
   * OpenID Provider User Information Url
   */
  userinfo_endpoint?: Url
  /**
   * Allow OIDC auth'd users to be members of non-reflected Looker groups. If 'false', user will be removed from non-reflected groups on login.
   */
  allow_normal_group_membership?: boolean
  /**
   * OIDC auth'd users will inherit roles from non-reflected Looker groups.
   */
  allow_roles_from_normal_groups?: boolean
  /**
   * Allows roles to be directly assigned to OIDC auth'd users.
   */
  allow_direct_roles?: boolean
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface IOIDCGroupRead {
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Unique Id of group in Looker (read-only)
   */
  looker_group_id?: number
  /**
   * Name of group in Looker (read-only)
   */
  looker_group_name?: string
  /**
   * Name of group in OIDC (read-only)
   */
  name?: string
  /**
   * Looker Roles (read-only)
   */
  roles?: IRole[]
}

export interface IOIDCGroupWrite {
  /**
   * Unique Id
   */
  id?: number
  /**
   * Unique Id of group in Looker (read-only)
   */
  looker_group_id?: number
  /**
   * Name of group in Looker
   */
  looker_group_name?: string
  /**
   * Name of group in OIDC
   */
  name?: string
  /**
   * Looker Role Ids
   */
  role_ids?: number[]
}

export interface IOIDCUserAttributeRead {
  /**
   * Name of User Attribute in OIDC (read-only)
   */
  name?: string
  /**
   * Required to be in OIDC assertion for login to be allowed to succeed (read-only)
   */
  required?: boolean
  /**
   * Looker User Attributes (read-only)
   */
  user_attributes?: IUserAttribute[]
}

export interface IOIDCUserAttributeWrite {
  /**
   * Name of User Attribute in OIDC
   */
  name?: string
  /**
   * Required to be in OIDC assertion for login to be allowed to succeed
   */
  required?: boolean
  /**
   * Looker User Attribute Ids
   */
  user_attribute_ids?: number[]
}

export interface IPasswordConfig {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Minimum number of characters required for a new password.  Must be between 7 and 100
   */
  min_length?: number
  /**
   * Require at least one numeric character
   */
  require_numeric?: boolean
  /**
   * Require at least one uppercase and one lowercase letter
   */
  require_upperlower?: boolean
  /**
   * Require at least one special character
   */
  require_special?: boolean
}

export interface IPermission {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Permission symbol (read-only)
   */
  permission?: string
  /**
   * Dependency parent symbol (read-only)
   */
  parent?: string
  /**
   * Description (read-only)
   */
  description?: string
}

export interface IPermissionSet {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * (read-only)
   */
  all_access?: boolean
  /**
   * (read-only)
   */
  built_in?: boolean
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Name of PermissionSet
   */
  name?: string
  permissions?: string[]
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface IProject {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Project Id (read-only)
   */
  id?: string
  /**
   * Project display name
   */
  name?: string
  /**
   * If true the project is configured with a git repository (read-only)
   */
  uses_git?: boolean
  /**
   * Git remote repository url
   */
  git_remote_url?: string
  /**
   * Git username for HTTPS authentication. (For production only, if using user attributes.)
   */
  git_username?: string
  /**
   * (Write-Only) Git password for HTTPS authentication. (For production only, if using user attributes.)
   */
  git_password?: string
  /**
   * User attribute name for username in per-user HTTPS authentication.
   */
  git_username_user_attribute?: string
  /**
   * User attribute name for password in per-user HTTPS authentication.
   */
  git_password_user_attribute?: string
  /**
   * Name of the git service provider
   */
  git_service_name?: string
  /**
   * Port that HTTP(S) application server is running on (for PRs, file browsing, etc.)
   */
  git_application_server_http_port?: number
  /**
   * Scheme that is running on application server (for PRs, file browsing, etc.) Valid values are: "http", "https".
   */
  git_application_server_http_scheme?: string
  /**
   * (Write-Only) Optional secret token with which to authenticate requests to the webhook deploy endpoint. If not set, endpoint is unauthenticated.
   */
  deploy_secret?: string
  /**
   * (Write-Only) When true, unsets the deploy secret to allow unauthenticated access to the webhook deploy endpoint.
   */
  unset_deploy_secret?: boolean
  /**
   * The git pull request policy for this project. Valid values are: "off", "links", "recommended", "required".
   */
  pull_request_mode?: string
  /**
   * Validation policy: If true, the project must pass validation checks before project changes can be committed to the git repository
   */
  validation_required?: boolean
  /**
   * If true, folders are enabled for this project
   */
  folders_enabled?: boolean
  /**
   * If true, advanced git release management is enabled for this project
   */
  git_release_mgmt_enabled?: boolean
  /**
   * Validation policy: If true, the project can be committed with warnings when `validation_required` is true. (`allow_warnings` does nothing if `validation_required` is false).
   */
  allow_warnings?: boolean
  /**
   * If true the project is an example project and cannot be modified (read-only)
   */
  is_example?: boolean
}

export interface IProjectError {
  /**
   * A stable token that uniquely identifies this class of error, ignoring parameter values. Error message text may vary due to parameters or localization, but error codes do not. For example, a "File not found" error will have the same error code regardless of the filename in question or the user's display language (read-only)
   */
  code?: string
  /**
   * Severity: fatal, error, warning, info, success (read-only)
   */
  severity?: string
  /**
   * Error classification: syntax, deprecation, model_configuration, etc (read-only)
   */
  kind?: string
  /**
   * Error message which may contain information such as dashboard or model names that may be considered sensitive in some use cases. Avoid storing or sending this message outside of Looker (read-only)
   */
  message?: string
  /**
   * The field associated with this error (read-only)
   */
  field_name?: string
  /**
   * Name of the file containing this error (read-only)
   */
  file_path?: string
  /**
   * Line number in the file of this error (read-only)
   */
  line_number?: number
  /**
   * The model associated with this error (read-only)
   */
  model_id?: string
  /**
   * The explore associated with this error (read-only)
   */
  explore?: string
  /**
   * A link to Looker documentation about this error (read-only)
   */
  help_url?: string
  /**
   * Error parameters (read-only)
   */
  params?: IDictionary<string>
  /**
   * A version of the error message that does not contain potentially sensitive information. Suitable for situations in which messages are stored or sent to consumers outside of Looker, such as external logs. Sanitized messages will display "(?)" where sensitive information would appear in the corresponding non-sanitized message (read-only)
   */
  sanitized_message?: string
}

export interface IProjectFile {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * An opaque token uniquely identifying a file within a project. Avoid parsing or decomposing the text of this token. This token is stable within a Looker release but may change between Looker releases (read-only)
   */
  id?: string
  /**
   * Path, file name, and extension of the file relative to the project root directory (read-only)
   */
  path?: string
  /**
   * Display name (read-only)
   */
  title?: string
  /**
   * File type: model, view, etc (read-only)
   */
  type?: string
  /**
   * The extension of the file: .view.lkml, .model.lkml, etc (read-only)
   */
  extension?: string
  /**
   * File mime type (read-only)
   */
  mime_type?: string
  /**
   * State of editability for the file. (read-only)
   */
  editable?: boolean
  git_status?: IGitStatus
}

export interface IProjectValidation {
  /**
   * A list of project errors (read-only)
   */
  errors?: IProjectError[]
  /**
   * A hash value computed from the project's current state (read-only)
   */
  project_digest?: string
  /**
   * A list of models which were not fully validated (read-only)
   */
  models_not_validated?: IModelsNotValidated[]
  /**
   * Duration of project validation in seconds (read-only)
   */
  computation_time?: number
}

export interface IProjectValidationCache {
  /**
   * A list of project errors (read-only)
   */
  errors?: IProjectError[]
  /**
   * A hash value computed from the project's current state (read-only)
   */
  project_digest?: string
  /**
   * A list of models which were not fully validated (read-only)
   */
  models_not_validated?: IModelsNotValidated[]
  /**
   * Duration of project validation in seconds (read-only)
   */
  computation_time?: number
  /**
   * If true, the cached project validation results are no longer accurate because the project has changed since the cached results were calculated (read-only)
   */
  stale?: boolean
}

export interface IProjectWorkspace {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * The id of the project (read-only)
   */
  project_id?: string
  /**
   * The id of the local workspace containing the project files (read-only)
   */
  workspace_id?: string
  /**
   * The status of the local git directory (read-only)
   */
  git_status?: string
  /**
   * Git head revision name (read-only)
   */
  git_head?: string
  git_branch?: IGitBranch
  /**
   * The lookml syntax used by all files in this project (read-only)
   */
  lookml_type?: string
}

export interface IQuery {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Model
   */
  model: string
  /**
   * Explore Name
   */
  view: string
  /**
   * Fields
   */
  fields?: string[]
  /**
   * Pivots
   */
  pivots?: string[]
  /**
   * Fill Fields
   */
  fill_fields?: string[]
  /**
   * Filters
   */
  filters?: IDictionary<string>
  /**
   * Filter Expression
   */
  filter_expression?: string
  /**
   * Sorting for the query results. Use the format `["view.field", ...]` to sort on fields in ascending order. Use the format `["view.field desc", ...]` to sort on fields in descending order. Use `["__UNSORTED__"]` (2 underscores before and after) to disable sorting entirely. Empty sorts `[]` will trigger a default sort.
   */
  sorts?: string[]
  /**
   * Limit
   */
  limit?: string
  /**
   * Column Limit
   */
  column_limit?: string
  /**
   * Total
   */
  total?: boolean
  /**
   * Raw Total
   */
  row_total?: string
  /**
   * Fields on which to run subtotals
   */
  subtotals?: string[]
  /**
   * Visualization configuration properties. These properties are typically opaque and differ based on the type of visualization used. There is no specified set of allowed keys. The values can be any type supported by JSON. A "type" key with a string value is often present, and is used by Looker to determine which visualization to present. Visualizations ignore unknown vis_config properties.
   */
  vis_config?: IDictionary<string>
  /**
   * The filter_config represents the state of the filter UI on the explore page for a given query. When running a query via the Looker UI, this parameter takes precedence over "filters". When creating a query or modifying an existing query, "filter_config" should be set to null. Setting it to any other value could cause unexpected filtering behavior. The format should be considered opaque.
   */
  filter_config?: IDictionary<string>
  /**
   * Visible UI Sections
   */
  visible_ui_sections?: string
  /**
   * Slug (read-only)
   */
  slug?: string
  /**
   * Dynamic Fields
   */
  dynamic_fields?: string
  /**
   * Client Id: used to generate shortened explore URLs. If set by client, must be a unique 22 character alphanumeric string. Otherwise one will be generated.
   */
  client_id?: string
  /**
   * Share Url (read-only)
   */
  share_url?: string
  /**
   * Expanded Share Url (read-only)
   */
  expanded_share_url?: string
  /**
   * Expanded Url (read-only)
   */
  url?: string
  /**
   * Query Timezone
   */
  query_timezone?: string
  /**
   * Has Table Calculations (read-only)
   */
  has_table_calculations?: boolean
}

export interface IQueryTask {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Id of query
   */
  query_id?: number
  query?: IQuery
  /**
   * whether or not to generate links in the query response.
   */
  generate_links?: boolean
  /**
   * Use production models to run query (even is user is in dev mode).
   */
  force_production?: boolean
  /**
   * Prefix to use for drill links.
   */
  path_prefix?: string
  /**
   * Whether or not to use the cache
   */
  cache?: boolean
  /**
   * Whether or not to run table calculations on the server
   */
  server_table_calcs?: boolean
  /**
   * Retrieve any results from cache even if the results have expired.
   */
  cache_only?: boolean
  /**
   * cache key used to cache query. (read-only)
   */
  cache_key?: string
  /**
   * Status of query task.
   */
  status?: string
  /**
   * Source of query task.
   */
  source?: string
  /**
   * Runtime of prior queries. (read-only)
   */
  runtime?: number
  /**
   * Rebuild PDTS used in query.
   */
  rebuild_pdts?: boolean
  /**
   * Source of the results of the query. (read-only)
   */
  result_source?: string
  /**
   * Id of look associated with query.
   */
  look_id?: number
  /**
   * Id of dashboard associated with query.
   */
  dashboard_id?: string
  /**
   * The data format of the query results. (read-only)
   */
  result_format?: string
}

export interface IRenderTask {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Date/Time render task was created (read-only)
   */
  created_at?: string
  /**
   * Filter values to apply to the dashboard queries, in URL query format (read-only)
   */
  dashboard_filters?: string
  /**
   * Id of dashboard to render (read-only)
   */
  dashboard_id?: number
  /**
   * Dashboard layout style: single_column or tiled (read-only)
   */
  dashboard_style?: string
  /**
   * Date/Time render task was completed (read-only)
   */
  finalized_at?: string
  /**
   * Output height in pixels. Flowed layouts may ignore this value. (read-only)
   */
  height?: number
  /**
   * Id of this render task (read-only)
   */
  id?: string
  /**
   * Id of look to render (read-only)
   */
  look_id?: number
  /**
   * Id of lookml dashboard to render (read-only)
   */
  lookml_dashboard_id?: string
  /**
   * Id of query to render (read-only)
   */
  query_id?: number
  /**
   * Number of seconds elapsed running queries (read-only)
   */
  query_runtime?: number
  /**
   * Number of seconds elapsed rendering data (read-only)
   */
  render_runtime?: number
  /**
   * Output format: pdf, png, or jpg (read-only)
   */
  result_format?: string
  /**
   * Total seconds elapsed for render task (read-only)
   */
  runtime?: number
  /**
   * Render task status: enqueued_for_query, querying, enqueued_for_render, rendering, success, failure (read-only)
   */
  status?: string
  /**
   * Additional information about the current status (read-only)
   */
  status_detail?: string
  /**
   * The user account permissions in which the render task will execute (read-only)
   */
  user_id?: number
  /**
   * Output width in pixels (read-only)
   */
  width?: number
}

export interface IRepositoryCredential {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: string
  /**
   * Root project Id (read-only)
   */
  root_project_id?: string
  /**
   * Git remote repository url (read-only)
   */
  remote_url?: string
  /**
   * Git username for HTTPS authentication.
   */
  git_username?: string
  /**
   * (Write-Only) Git password for HTTPS authentication.
   */
  git_password?: string
  /**
   * Public deploy key for SSH authentication.
   */
  ssh_public_key?: string
  /**
   * Whether the credentials have been configured for the Git Repository. (read-only)
   */
  is_configured?: boolean
}

/**
 * Dynamically generated request type for active_themes
 */
export interface IRequestActiveThemes {
  /**
   * Name of theme
   */
  name?: string
  /**
   * Timestamp representing the target datetime for the active period. Defaults to 'now'
   */
  ts?: Date
  /**
   * Requested fields.
   */
  fields?: string
}

/**
 * Dynamically generated request type for all_board_items
 */
export interface IRequestAllBoardItems {
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Filter to a specific board section
   */
  board_section_id?: string
}

/**
 * Dynamically generated request type for all_board_sections
 */
export interface IRequestAllBoardSections {
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Fields to sort by.
   */
  sorts?: string
}

/**
 * Dynamically generated request type for all_groups
 */
export interface IRequestAllGroups {
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Requested page.
   */
  page?: number
  /**
   * Results per page.
   */
  per_page?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Optional of ids to get specific groups.
   */
  ids?: DelimArray<number>
  /**
   * Id of content metadata to which groups must have access.
   */
  content_metadata_id?: number
  /**
   * Select only groups that either can/cannot be given access to content.
   */
  can_add_to_content_metadata?: boolean
}

/**
 * Dynamically generated request type for all_group_users
 */
export interface IRequestAllGroupUsers {
  /**
   * Id of group
   */
  group_id: number
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Requested page.
   */
  page?: number
  /**
   * Results per page.
   */
  per_page?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
}

/**
 * Dynamically generated request type for all_integrations
 */
export interface IRequestAllIntegrations {
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Filter to a specific provider
   */
  integration_hub_id?: string
}

/**
 * Dynamically generated request type for all_roles
 */
export interface IRequestAllRoles {
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Optional list of ids to get specific roles.
   */
  ids?: DelimArray<number>
}

/**
 * Dynamically generated request type for all_scheduled_plans
 */
export interface IRequestAllScheduledPlans {
  /**
   * Return scheduled plans belonging to this user_id. If not provided, returns scheduled plans owned by the caller.
   */
  user_id?: number
  /**
   * Comma delimited list of field names. If provided, only the fields specified will be included in the response
   */
  fields?: string
  /**
   * Return scheduled plans belonging to all users (caller needs see_schedules permission)
   */
  all_users?: boolean
}

/**
 * Dynamically generated request type for all_users
 */
export interface IRequestAllUsers {
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Requested page.
   */
  page?: number
  /**
   * Results per page.
   */
  per_page?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Optional list of ids to get specific users.
   */
  ids?: DelimArray<number>
}

/**
 * Dynamically generated request type for create_dashboard_render_task
 */
export interface IRequestCreateDashboardRenderTask {
  /**
   * Id of dashboard to render. The ID can be a LookML dashboard also.
   */
  dashboard_id: string
  /**
   * Output type: pdf, png, or jpg
   */
  result_format: string
  /**
   * body parameter for dynamically created request type
   */
  body: ICreateDashboardRenderTask
  /**
   * Output width in pixels
   */
  width: number
  /**
   * Output height in pixels
   */
  height: number
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Paper size for pdf. Value can be one of: ["letter","legal","tabloid","a0","a1","a2","a3","a4","a5"]
   */
  pdf_paper_size?: string
  /**
   * Whether to render pdf in landscape paper orientation
   */
  pdf_landscape?: boolean
  /**
   * Whether or not to expand table vis to full length
   */
  long_tables?: boolean
}

/**
 * Dynamically generated request type for create_query_task
 */
export interface IRequestCreateQueryTask {
  /**
   * body parameter for dynamically created request type
   */
  body: IWriteCreateQueryTask
  /**
   * Row limit (may override the limit in the saved query).
   */
  limit?: number
  /**
   * Apply model-specified formatting to each result.
   */
  apply_formatting?: boolean
  /**
   * Apply visualization options to results.
   */
  apply_vis?: boolean
  /**
   * Get results from cache if available.
   */
  cache?: boolean
  /**
   * Render width for image formats.
   */
  image_width?: number
  /**
   * Render height for image formats.
   */
  image_height?: number
  /**
   * Generate drill links (only applicable to 'json_detail' format.
   */
  generate_drill_links?: boolean
  /**
   * Force use of production models even if the user is in development mode.
   */
  force_production?: boolean
  /**
   * Retrieve any results from cache even if the results have expired.
   */
  cache_only?: boolean
  /**
   * Prefix to use for drill links (url encoded).
   */
  path_prefix?: string
  /**
   * Rebuild PDTS used in query.
   */
  rebuild_pdts?: boolean
  /**
   * Perform table calculations on query results
   */
  server_table_calcs?: boolean
  /**
   * Requested fields
   */
  fields?: string
}

/**
 * Dynamically generated request type for create_user_credentials_email_password_reset
 */
export interface IRequestCreateUserCredentialsEmailPasswordReset {
  /**
   * Id of user
   */
  user_id: number
  /**
   * Expiring token.
   */
  expires?: boolean
  /**
   * Requested fields.
   */
  fields?: string
}

/**
 * Dynamically generated request type for folder_children
 */
export interface IRequestFolderChildren {
  /**
   * Id of folder
   */
  folder_id: string
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Requested page.
   */
  page?: number
  /**
   * Results per page.
   */
  per_page?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
}

/**
 * Dynamically generated request type for folder_children_search
 */
export interface IRequestFolderChildrenSearch {
  /**
   * Id of folder
   */
  folder_id: string
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Match folder name.
   */
  name?: string
}

/**
 * Dynamically generated request type for login
 */
export interface IRequestLogin {
  /**
   * client_id part of API3 Key.
   */
  client_id?: string
  /**
   * client_secret part of API3 Key.
   */
  client_secret?: string
}

/**
 * Dynamically generated request type for role_users
 */
export interface IRequestRoleUsers {
  /**
   * id of user
   */
  role_id: number
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Get only users associated directly with the role: exclude those only associated through groups.
   */
  direct_association_only?: boolean
}

/**
 * Dynamically generated request type for run_inline_query
 */
export interface IRequestRunInlineQuery {
  /**
   * Format of result
   */
  result_format: string
  /**
   * body parameter for dynamically created request type
   */
  body: IWriteQuery
  /**
   * Row limit (may override the limit in the saved query).
   */
  limit?: number
  /**
   * Apply model-specified formatting to each result.
   */
  apply_formatting?: boolean
  /**
   * Apply visualization options to results.
   */
  apply_vis?: boolean
  /**
   * Get results from cache if available.
   */
  cache?: boolean
  /**
   * Render width for image formats.
   */
  image_width?: number
  /**
   * Render height for image formats.
   */
  image_height?: number
  /**
   * Generate drill links (only applicable to 'json_detail' format.
   */
  generate_drill_links?: boolean
  /**
   * Force use of production models even if the user is in development mode.
   */
  force_production?: boolean
  /**
   * Retrieve any results from cache even if the results have expired.
   */
  cache_only?: boolean
  /**
   * Prefix to use for drill links (url encoded).
   */
  path_prefix?: string
  /**
   * Rebuild PDTS used in query.
   */
  rebuild_pdts?: boolean
  /**
   * Perform table calculations on query results
   */
  server_table_calcs?: boolean
}

/**
 * Dynamically generated request type for run_look
 */
export interface IRequestRunLook {
  /**
   * Id of look
   */
  look_id: number
  /**
   * Format of result
   */
  result_format: string
  /**
   * Row limit (may override the limit in the saved query).
   */
  limit?: number
  /**
   * Apply model-specified formatting to each result.
   */
  apply_formatting?: boolean
  /**
   * Apply visualization options to results.
   */
  apply_vis?: boolean
  /**
   * Get results from cache if available.
   */
  cache?: boolean
  /**
   * Render width for image formats.
   */
  image_width?: number
  /**
   * Render height for image formats.
   */
  image_height?: number
  /**
   * Generate drill links (only applicable to 'json_detail' format.
   */
  generate_drill_links?: boolean
  /**
   * Force use of production models even if the user is in development mode.
   */
  force_production?: boolean
  /**
   * Retrieve any results from cache even if the results have expired.
   */
  cache_only?: boolean
  /**
   * Prefix to use for drill links (url encoded).
   */
  path_prefix?: string
  /**
   * Rebuild PDTS used in query.
   */
  rebuild_pdts?: boolean
  /**
   * Perform table calculations on query results
   */
  server_table_calcs?: boolean
}

/**
 * Dynamically generated request type for run_lookml_test
 */
export interface IRequestRunLookmlTest {
  /**
   * Project Id
   */
  project_id: string
  /**
   * File Name
   */
  file_id?: string
  /**
   * Test Name
   */
  test?: string
  /**
   * Model Name
   */
  model?: string
}

/**
 * Dynamically generated request type for run_query
 */
export interface IRequestRunQuery {
  /**
   * Id of query
   */
  query_id: number
  /**
   * Format of result
   */
  result_format: string
  /**
   * Row limit (may override the limit in the saved query).
   */
  limit?: number
  /**
   * Apply model-specified formatting to each result.
   */
  apply_formatting?: boolean
  /**
   * Apply visualization options to results.
   */
  apply_vis?: boolean
  /**
   * Get results from cache if available.
   */
  cache?: boolean
  /**
   * Render width for image formats.
   */
  image_width?: number
  /**
   * Render height for image formats.
   */
  image_height?: number
  /**
   * Generate drill links (only applicable to 'json_detail' format.
   */
  generate_drill_links?: boolean
  /**
   * Force use of production models even if the user is in development mode.
   */
  force_production?: boolean
  /**
   * Retrieve any results from cache even if the results have expired.
   */
  cache_only?: boolean
  /**
   * Prefix to use for drill links (url encoded).
   */
  path_prefix?: string
  /**
   * Rebuild PDTS used in query.
   */
  rebuild_pdts?: boolean
  /**
   * Perform table calculations on query results
   */
  server_table_calcs?: boolean
}

/**
 * Dynamically generated request type for scheduled_plans_for_dashboard
 */
export interface IRequestScheduledPlansForDashboard {
  /**
   * Dashboard Id
   */
  dashboard_id: number
  /**
   * User Id (default is requesting user if not specified)
   */
  user_id?: number
  /**
   * Return scheduled plans belonging to all users for the dashboard
   */
  all_users?: boolean
  /**
   * Requested fields.
   */
  fields?: string
}

/**
 * Dynamically generated request type for scheduled_plans_for_look
 */
export interface IRequestScheduledPlansForLook {
  /**
   * Look Id
   */
  look_id: number
  /**
   * User Id (default is requesting user if not specified)
   */
  user_id?: number
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Return scheduled plans belonging to all users for the look
   */
  all_users?: boolean
}

/**
 * Dynamically generated request type for scheduled_plans_for_lookml_dashboard
 */
export interface IRequestScheduledPlansForLookmlDashboard {
  /**
   * LookML Dashboard Id
   */
  lookml_dashboard_id: number
  /**
   * User Id (default is requesting user if not specified)
   */
  user_id?: number
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Return scheduled plans belonging to all users for the dashboard
   */
  all_users?: boolean
}

/**
 * Dynamically generated request type for search_boards
 */
export interface IRequestSearchBoards {
  /**
   * Matches board title.
   */
  title?: string
  /**
   * Matches the timestamp for when the board was created.
   */
  created_at?: string
  /**
   * The first name of the user who created this board.
   */
  first_name?: string
  /**
   * The last name of the user who created this board.
   */
  last_name?: string
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Return favorited boards when true.
   */
  favorited?: boolean
  /**
   * Filter on boards created by a particular user.
   */
  creator_id?: string
  /**
   * The fields to sort the results by
   */
  sorts?: string
  /**
   * The page to return.
   */
  page?: number
  /**
   * The number of items in the returned page.
   */
  per_page?: number
  /**
   * The number of items to skip before returning any. (used with limit and takes priority over page and per_page)
   */
  offset?: number
  /**
   * The maximum number of items to return. (used with offset and takes priority over page and per_page)
   */
  limit?: number
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
}

/**
 * Dynamically generated request type for search_content_favorites
 */
export interface IRequestSearchContentFavorites {
  /**
   * Match content favorite id(s)
   */
  id?: number
  /**
   * Match user id(s).To create a list of multiple ids, use commas as separators
   */
  user_id?: string
  /**
   * Match content metadata id(s).To create a list of multiple ids, use commas as separators
   */
  content_metadata_id?: string
  /**
   * Match dashboard id(s).To create a list of multiple ids, use commas as separators
   */
  dashboard_id?: string
  /**
   * Match look id(s).To create a list of multiple ids, use commas as separators
   */
  look_id?: string
  /**
   * Match board id(s).To create a list of multiple ids, use commas as separators
   */
  board_id?: string
  /**
   * Number of results to return. (used with offset)
   */
  limit?: number
  /**
   * Number of results to skip before returning any. (used with limit)
   */
  offset?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
}

/**
 * Dynamically generated request type for search_content_views
 */
export interface IRequestSearchContentViews {
  /**
   * Match view count
   */
  view_count?: string
  /**
   * Match Group Id
   */
  group_id?: string
  /**
   * Match look_id
   */
  look_id?: string
  /**
   * Match dashboard_id
   */
  dashboard_id?: string
  /**
   * Match content metadata id
   */
  content_metadata_id?: string
  /**
   * Match start of week date
   */
  start_of_week_date?: string
  /**
   * True if only all time view records should be returned
   */
  all_time?: boolean
  /**
   * Match user id
   */
  user_id?: string
  /**
   * Requested fields
   */
  fields?: string
  /**
   * Number of results to return. Use with `offset` to manage pagination of results
   */
  limit?: number
  /**
   * Number of results to skip before returning data
   */
  offset?: number
  /**
   * Fields to sort by
   */
  sorts?: string
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
}

/**
 * Dynamically generated request type for search_dashboard_elements
 */
export interface IRequestSearchDashboardElements {
  /**
   * Select elements that refer to a given dashboard id
   */
  dashboard_id?: number
  /**
   * Select elements that refer to a given look id
   */
  look_id?: number
  /**
   * Match the title of element
   */
  title?: string
  /**
   * Select soft-deleted dashboard elements
   */
  deleted?: boolean
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
  /**
   * Fields to sort by. Sortable fields: [:look_id, :dashboard_id, :deleted, :title]
   */
  sorts?: string
}

/**
 * Dynamically generated request type for search_dashboards
 */
export interface IRequestSearchDashboards {
  /**
   * Match dashboard id.
   */
  id?: string
  /**
   * Match dashboard slug.
   */
  slug?: string
  /**
   * Match Dashboard title.
   */
  title?: string
  /**
   * Match Dashboard description.
   */
  description?: string
  /**
   * Filter on a content favorite id.
   */
  content_favorite_id?: string
  /**
   * Filter on a particular space.
   */
  folder_id?: string
  /**
   * Filter on dashboards deleted status.
   */
  deleted?: string
  /**
   * Filter on dashboards created by a particular user.
   */
  user_id?: string
  /**
   * Filter on a particular value of view_count
   */
  view_count?: string
  /**
   * Filter on a content favorite id.
   */
  content_metadata_id?: string
  /**
   * Exclude items that exist only in personal spaces other than the users
   */
  curate?: boolean
  /**
   * Select dashboards based on when they were last viewed
   */
  last_viewed_at?: string
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Requested page.
   */
  page?: number
  /**
   * Results per page.
   */
  per_page?: number
  /**
   * Number of results to return. (used with offset and takes priority over page and per_page)
   */
  limit?: number
  /**
   * Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
   */
  offset?: number
  /**
   * One or more fields to sort by. Sortable fields: [:title, :user_id, :id, :created_at, :space_id, :folder_id, :description, :view_count, :favorite_count, :slug, :content_favorite_id, :content_metadata_id, :deleted, :deleted_at, :last_viewed_at, :last_accessed_at]
   */
  sorts?: string
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
}

/**
 * Dynamically generated request type for search_folders
 */
export interface IRequestSearchFolders {
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Requested page.
   */
  page?: number
  /**
   * Results per page.
   */
  per_page?: number
  /**
   * Number of results to return. (used with offset and takes priority over page and per_page)
   */
  limit?: number
  /**
   * Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
   */
  offset?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Match Space title.
   */
  name?: string
  /**
   * Match Space id
   */
  id?: number
  /**
   * Filter on a children of a particular folder.
   */
  parent_id?: string
  /**
   * Filter on folder created by a particular user.
   */
  creator_id?: string
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
}

/**
 * Dynamically generated request type for search_groups
 */
export interface IRequestSearchGroups {
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Number of results to return (used with `offset`).
   */
  limit?: number
  /**
   * Number of results to skip before returning any (used with `limit`).
   */
  offset?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
  /**
   * Match group id.
   */
  id?: number
  /**
   * Match group name.
   */
  name?: string
  /**
   * Match group external_group_id.
   */
  external_group_id?: boolean
  /**
   * Match group externally_managed.
   */
  externally_managed?: boolean
  /**
   * Match group externally_orphaned.
   */
  externally_orphaned?: boolean
}

/**
 * Dynamically generated request type for search_looks
 */
export interface IRequestSearchLooks {
  /**
   * Match look id.
   */
  id?: string
  /**
   * Match Look title.
   */
  title?: string
  /**
   * Match Look description.
   */
  description?: string
  /**
   * Select looks with a particular content favorite id
   */
  content_favorite_id?: string
  /**
   * Select looks in a particular folder.
   */
  folder_id?: string
  /**
   * Select looks created by a particular user.
   */
  user_id?: string
  /**
   * Select looks with particular view_count value
   */
  view_count?: string
  /**
   * Select soft-deleted looks
   */
  deleted?: boolean
  /**
   * Select looks that reference a particular query by query_id
   */
  query_id?: number
  /**
   * Exclude items that exist only in personal spaces other than the users
   */
  curate?: boolean
  /**
   * Select looks based on when they were last viewed
   */
  last_viewed_at?: string
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Requested page.
   */
  page?: number
  /**
   * Results per page.
   */
  per_page?: number
  /**
   * Number of results to return. (used with offset and takes priority over page and per_page)
   */
  limit?: number
  /**
   * Number of results to skip before returning any. (used with limit and takes priority over page and per_page)
   */
  offset?: number
  /**
   * One or more fields to sort results by. Sortable fields: [:title, :user_id, :id, :created_at, :space_id, :folder_id, :description, :updated_at, :last_updater_id, :view_count, :favorite_count, :content_favorite_id, :deleted, :deleted_at, :last_viewed_at, :last_accessed_at, :query_id]
   */
  sorts?: string
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
}

/**
 * Dynamically generated request type for search_model_sets
 */
export interface IRequestSearchModelSets {
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Number of results to return (used with `offset`).
   */
  limit?: number
  /**
   * Number of results to skip before returning any (used with `limit`).
   */
  offset?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Match model set id.
   */
  id?: number
  /**
   * Match model set name.
   */
  name?: string
  /**
   * Match model sets by all_access status.
   */
  all_access?: boolean
  /**
   * Match model sets by built_in status.
   */
  built_in?: boolean
  /**
   * Combine given search criteria in a boolean OR expression.
   */
  filter_or?: boolean
}

/**
 * Dynamically generated request type for search_roles
 */
export interface IRequestSearchRoles {
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Number of results to return (used with `offset`).
   */
  limit?: number
  /**
   * Number of results to skip before returning any (used with `limit`).
   */
  offset?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Match role id.
   */
  id?: number
  /**
   * Match role name.
   */
  name?: string
  /**
   * Match roles by built_in status.
   */
  built_in?: boolean
  /**
   * Combine given search criteria in a boolean OR expression.
   */
  filter_or?: boolean
}

/**
 * Dynamically generated request type for search_themes
 */
export interface IRequestSearchThemes {
  /**
   * Match theme id.
   */
  id?: number
  /**
   * Match theme name.
   */
  name?: string
  /**
   * Timestamp for activation.
   */
  begin_at?: Date
  /**
   * Timestamp for expiration.
   */
  end_at?: Date
  /**
   * Number of results to return (used with `offset`).
   */
  limit?: number
  /**
   * Number of results to skip before returning any (used with `limit`).
   */
  offset?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
}

/**
 * Dynamically generated request type for search_user_login_lockouts
 */
export interface IRequestSearchUserLoginLockouts {
  /**
   * Include only these fields in the response
   */
  fields?: string
  /**
   * Return only page N of paginated results
   */
  page?: number
  /**
   * Return N rows of data per page
   */
  per_page?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Auth type user is locked out for (email, ldap, totp, api)
   */
  auth_type?: string
  /**
   * Match name
   */
  full_name?: string
  /**
   * Match email
   */
  email?: string
  /**
   * Match remote LDAP ID
   */
  remote_id?: string
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
}

/**
 * Dynamically generated request type for search_users
 */
export interface IRequestSearchUsers {
  /**
   * Include only these fields in the response
   */
  fields?: string
  /**
   * Return only page N of paginated results
   */
  page?: number
  /**
   * Return N rows of data per page
   */
  per_page?: number
  /**
   * Fields to sort by.
   */
  sorts?: string
  /**
   * Match User Id.
   */
  id?: string
  /**
   * Match First name.
   */
  first_name?: string
  /**
   * Match Last name.
   */
  last_name?: string
  /**
   * Search for user accounts associated with Looker employees
   */
  verified_looker_employee?: boolean
  /**
   * Search for the user with this email address
   */
  email?: string
  /**
   * Search for disabled user accounts
   */
  is_disabled?: boolean
  /**
   * Combine given search criteria in a boolean OR expression
   */
  filter_or?: boolean
  /**
   * Search for users who have access to this content_metadata item
   */
  content_metadata_id?: string
  /**
   * Search for users who are direct members of this group
   */
  group_id?: string
}

/**
 * Dynamically generated request type for search_users_names
 */
export interface IRequestSearchUsersNames {
  /**
   * Pattern to match
   */
  pattern: string
  /**
   * Include only these fields in the response
   */
  fields?: string
  /**
   * Return only page N of paginated results
   */
  page?: number
  /**
   * Return N rows of data per page
   */
  per_page?: number
  /**
   * Fields to sort by
   */
  sorts?: string
  /**
   * Match User Id
   */
  id?: number
  /**
   * Match First name
   */
  first_name?: string
  /**
   * Match Last name
   */
  last_name?: string
  /**
   * Match Verified Looker employee
   */
  verified_looker_employee?: boolean
  /**
   * Match Email Address
   */
  email?: string
  /**
   * Include or exclude disabled accounts in the results
   */
  is_disabled?: boolean
}

/**
 * Dynamically generated request type for user_attribute_user_values
 */
export interface IRequestUserAttributeUserValues {
  /**
   * Id of user
   */
  user_id: number
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Specific user attributes to request. Omit or leave blank to request all user attributes.
   */
  user_attribute_ids?: DelimArray<number>
  /**
   * If true, returns all values in the search path instead of just the first value found. Useful for debugging group precedence.
   */
  all_values?: boolean
  /**
   * If true, returns an empty record for each requested attribute that has no user, group, or default value.
   */
  include_unset?: boolean
}

/**
 * Dynamically generated request type for user_roles
 */
export interface IRequestUserRoles {
  /**
   * id of user
   */
  user_id: number
  /**
   * Requested fields.
   */
  fields?: string
  /**
   * Get only roles associated directly with the user: exclude those only associated through groups.
   */
  direct_association_only?: boolean
}

export interface IResultMakerFilterables {
  /**
   * The model this filterable comes from (used for field suggestions). (read-only)
   */
  model?: string
  /**
   * The view this filterable comes from (used for field suggestions). (read-only)
   */
  view?: string
  /**
   * The name of the filterable thing (Query or Merged Results). (read-only)
   */
  name?: string
  /**
   * array of dashboard_filter_name: and field: objects. (read-only)
   */
  listen?: IResultMakerFilterablesListen[]
}

export interface IResultMakerFilterablesListen {
  /**
   * The name of a dashboard filter to listen to.
   */
  dashboard_filter_name?: string
  /**
   * The name of the field in the filterable to filter with the value of the dashboard filter.
   */
  field?: string
}

export interface IResultMakerWithIdVisConfigAndDynamicFields {
  /**
   * Unique Id. (read-only)
   */
  id?: number
  /**
   * JSON string of dynamic field information. (read-only)
   */
  dynamic_fields?: string
  /**
   * array of items that can be filtered and information about them. (read-only)
   */
  filterables?: IResultMakerFilterables[]
  /**
   * Sorts of the constituent Look, Query, or Merge Query (read-only)
   */
  sorts?: string[]
  /**
   * ID of merge result if this is a merge_result. (read-only)
   */
  merge_result_id?: string
  /**
   * Total of the constituent Look, Query, or Merge Query (read-only)
   */
  total?: boolean
  /**
   * ID of query if this is a query. (read-only)
   */
  query_id?: number
  /**
   * ID of SQL Query if this is a SQL Runner Query (read-only)
   */
  sql_query_id?: string
  query?: IQuery
  /**
   * Vis config of the constituent Query, or Merge Query. (read-only)
   */
  vis_config?: IDictionary<string>
}

export interface IRole {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Name of Role
   */
  name?: string
  permission_set?: IPermissionSet
  /**
   * (Write-Only) Id of permission set
   */
  permission_set_id?: number
  model_set?: IModelSet
  /**
   * (Write-Only) Id of model set
   */
  model_set_id?: number
  /**
   * Link to get this item (read-only)
   */
  url?: Url
  /**
   * Link to get list of users with this role (read-only)
   */
  users_url?: Url
}

export interface IRunningQueries {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: number
  user?: IUserPublic
  query?: IQuery
  sql_query?: ISqlQuery
  look?: ILookBasic
  /**
   * Date/Time Query was initiated (read-only)
   */
  created_at?: string
  /**
   * Date/Time Query was completed (read-only)
   */
  completed_at?: string
  /**
   * Query Id (read-only)
   */
  query_id?: string
  /**
   * Source (look, dashboard, queryrunner, explore, etc.) (read-only)
   */
  source?: string
  /**
   * Node Id (read-only)
   */
  node_id?: string
  /**
   * Slug (read-only)
   */
  slug?: string
  /**
   * ID of a Query Task (read-only)
   */
  query_task_id?: string
  /**
   * Cache Key (read-only)
   */
  cache_key?: string
  /**
   * Connection (read-only)
   */
  connection_name?: string
  /**
   * Dialect (read-only)
   */
  dialect?: string
  /**
   * Connection ID (read-only)
   */
  connection_id?: string
  /**
   * Additional Information(Error message or verbose status) (read-only)
   */
  message?: string
  /**
   * Status description (read-only)
   */
  status?: string
  /**
   * Number of seconds elapsed running the Query (read-only)
   */
  runtime?: number
  /**
   * SQL text of the query as run (read-only)
   */
  sql?: string
}

export interface ISamlConfig {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Enable/Disable Saml authentication for the server
   */
  enabled?: boolean
  /**
   * Identity Provider Certificate (provided by IdP)
   */
  idp_cert?: string
  /**
   * Identity Provider Url (provided by IdP)
   */
  idp_url?: string
  /**
   * Identity Provider Issuer (provided by IdP)
   */
  idp_issuer?: string
  /**
   * Identity Provider Audience (set in IdP config). Optional in Looker. Set this only if you want Looker to validate the audience value returned by the IdP.
   */
  idp_audience?: string
  /**
   * Count of seconds of clock drift to allow when validating timestamps of assertions.
   */
  allowed_clock_drift?: number
  /**
   * Name of user record attributes used to indicate email address field
   */
  user_attribute_map_email?: string
  /**
   * Name of user record attributes used to indicate first name
   */
  user_attribute_map_first_name?: string
  /**
   * Name of user record attributes used to indicate last name
   */
  user_attribute_map_last_name?: string
  /**
   * Merge first-time saml login to existing user account by email addresses. When a user logs in for the first time via saml this option will connect this user into their existing account by finding the account with a matching email address by testing the given types of credentials for existing users. Otherwise a new user account will be created for the user. This list (if provided) must be a comma separated list of string like 'email,ldap,google'
   */
  new_user_migration_types?: string
  /**
   * Allow alternate email-based login via '/login/email' for admins and for specified users with the 'login_special_email' permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled.
   */
  alternate_email_login_allowed?: boolean
  /**
   * Slug to identify configurations that are created in order to run a Saml config test (read-only)
   */
  test_slug?: string
  /**
   * When this config was last modified (read-only)
   */
  modified_at?: string
  /**
   * User id of user who last modified this config (read-only)
   */
  modified_by?: string
  /**
   * (Read-only) Roles that will be applied to new users the first time they login via Saml (read-only)
   */
  default_new_user_roles?: IRole[]
  /**
   * (Read-only) Groups that will be applied to new users the first time they login via Saml (read-only)
   */
  default_new_user_groups?: IGroup[]
  /**
   * (Write-Only) Array of ids of roles that will be applied to new users the first time they login via Saml
   */
  default_new_user_role_ids?: number[]
  /**
   * (Write-Only) Array of ids of groups that will be applied to new users the first time they login via Saml
   */
  default_new_user_group_ids?: number[]
  /**
   * Set user roles in Looker based on groups from Saml
   */
  set_roles_from_groups?: boolean
  /**
   * Name of user record attributes used to indicate groups. Used when 'groups_finder_type' is set to 'grouped_attribute_values'
   */
  groups_attribute?: string
  /**
   * (Read-only) Array of mappings between Saml Groups and Looker Roles (read-only)
   */
  groups?: ISamlGroupRead[]
  /**
   * (Read/Write) Array of mappings between Saml Groups and arrays of Looker Role ids
   */
  groups_with_role_ids?: ISamlGroupWrite[]
  /**
   * Users will not be allowed to login at all unless a role for them is found in Saml if set to true
   */
  auth_requires_role?: boolean
  /**
   * (Read-only) Array of mappings between Saml User Attributes and Looker User Attributes (read-only)
   */
  user_attributes?: ISamlUserAttributeRead[]
  /**
   * (Read/Write) Array of mappings between Saml User Attributes and arrays of Looker User Attribute ids
   */
  user_attributes_with_ids?: ISamlUserAttributeWrite[]
  /**
   * Identifier for a strategy for how Looker will find groups in the SAML response. One of ['grouped_attribute_values', 'individual_attributes']
   */
  groups_finder_type?: string
  /**
   * Value for group attribute used to indicate membership. Used when 'groups_finder_type' is set to 'individual_attributes'
   */
  groups_member_value?: string
  /**
   * Bypass the login page when user authentication is required. Redirect to IdP immediately instead.
   */
  bypass_login_page?: boolean
  /**
   * Allow SAML auth'd users to be members of non-reflected Looker groups. If 'false', user will be removed from non-reflected groups on login.
   */
  allow_normal_group_membership?: boolean
  /**
   * SAML auth'd users will inherit roles from non-reflected Looker groups.
   */
  allow_roles_from_normal_groups?: boolean
  /**
   * Allows roles to be directly assigned to SAML auth'd users.
   */
  allow_direct_roles?: boolean
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface ISamlGroupRead {
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Unique Id of group in Looker (read-only)
   */
  looker_group_id?: number
  /**
   * Name of group in Looker (read-only)
   */
  looker_group_name?: string
  /**
   * Name of group in Saml (read-only)
   */
  name?: string
  /**
   * Looker Roles (read-only)
   */
  roles?: IRole[]
  /**
   * Link to saml config (read-only)
   */
  url?: Url
}

export interface ISamlGroupWrite {
  /**
   * Unique Id
   */
  id?: number
  /**
   * Unique Id of group in Looker (read-only)
   */
  looker_group_id?: number
  /**
   * Name of group in Looker
   */
  looker_group_name?: string
  /**
   * Name of group in Saml
   */
  name?: string
  /**
   * Looker Role Ids
   */
  role_ids?: number[]
  /**
   * Link to saml config (read-only)
   */
  url?: Url
}

export interface ISamlMetadataParseResult {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Identify Provider Issuer (read-only)
   */
  idp_issuer?: string
  /**
   * Identify Provider Url (read-only)
   */
  idp_url?: string
  /**
   * Identify Provider Certificate (read-only)
   */
  idp_cert?: string
}

export interface ISamlUserAttributeRead {
  /**
   * Name of User Attribute in Saml (read-only)
   */
  name?: string
  /**
   * Required to be in Saml assertion for login to be allowed to succeed (read-only)
   */
  required?: boolean
  /**
   * Looker User Attributes (read-only)
   */
  user_attributes?: IUserAttribute[]
  /**
   * Link to saml config (read-only)
   */
  url?: Url
}

export interface ISamlUserAttributeWrite {
  /**
   * Name of User Attribute in Saml
   */
  name?: string
  /**
   * Required to be in Saml assertion for login to be allowed to succeed
   */
  required?: boolean
  /**
   * Looker User Attribute Ids
   */
  user_attribute_ids?: number[]
  /**
   * Link to saml config (read-only)
   */
  url?: Url
}

export interface IScheduledPlan {
  /**
   * Name of this scheduled plan
   */
  name?: string
  /**
   * User Id which owns this scheduled plan
   */
  user_id?: number
  /**
   * Whether schedule is run as recipient (only applicable for email recipients)
   */
  run_as_recipient?: boolean
  /**
   * Whether the ScheduledPlan is enabled
   */
  enabled?: boolean
  /**
   * Id of a look
   */
  look_id?: number
  /**
   * Id of a dashboard
   */
  dashboard_id?: number
  /**
   * Id of a LookML dashboard
   */
  lookml_dashboard_id?: string
  /**
   * Query string to run look or dashboard with
   */
  filters_string?: string
  /**
   * (DEPRECATED) Alias for filters_string field
   */
  dashboard_filters?: string
  /**
   * Delivery should occur if running the dashboard or look returns results
   */
  require_results?: boolean
  /**
   * Delivery should occur if the dashboard look does not return results
   */
  require_no_results?: boolean
  /**
   * Delivery should occur if data have changed since the last run
   */
  require_change?: boolean
  /**
   * Will run an unlimited query and send all results.
   */
  send_all_results?: boolean
  /**
   * Vixie-Style crontab specification when to run
   */
  crontab?: string
  /**
   * Name of a datagroup; if specified will run when datagroup triggered (can't be used with cron string)
   */
  datagroup?: string
  /**
   * Timezone for interpreting the specified crontab (default is Looker instance timezone)
   */
  timezone?: string
  /**
   * Query id
   */
  query_id?: string
  /**
   * Scheduled plan destinations
   */
  scheduled_plan_destination?: IScheduledPlanDestination[]
  /**
   * Whether the plan in question should only be run once (usually for testing)
   */
  run_once?: boolean
  /**
   * Whether links back to Looker should be included in this ScheduledPlan
   */
  include_links?: boolean
  /**
   * The size of paper a PDF should be rendered for
   */
  pdf_paper_size?: string
  /**
   * Whether the paper should be landscape
   */
  pdf_landscape?: boolean
  /**
   * Whether this schedule is in an embed context or not
   */
  embed?: boolean
  /**
   * Color scheme of the dashboard if applicable
   */
  color_theme?: string
  /**
   * Whether or not to expand table vis to full length
   */
  long_tables?: boolean
  /**
   * The pixel width at which we render the inline table visualizations
   */
  inline_table_width?: number
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Date and time when ScheduledPlan was created (read-only)
   */
  created_at?: Date
  /**
   * Date and time when ScheduledPlan was last updated (read-only)
   */
  updated_at?: Date
  /**
   * Title (read-only)
   */
  title?: string
  user?: IUserPublic
  /**
   * When the ScheduledPlan will next run (null if running once) (read-only)
   */
  next_run_at?: Date
  /**
   * When the ScheduledPlan was last run (read-only)
   */
  last_run_at?: Date
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
}

export interface IScheduledPlanDestination {
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Id of a scheduled plan you own
   */
  scheduled_plan_id?: number
  /**
   * The data format to send to the given destination. Supported formats vary by destination, but include: "txt", "csv", "inline_json", "json", "json_detail", "xlsx", "html", "wysiwyg_pdf", "assembled_pdf", "wysiwyg_png"
   */
  format?: string
  /**
   * Are values formatted? (containing currency symbols, digit separators, etc.
   */
  apply_formatting?: boolean
  /**
   * Whether visualization options are applied to the results.
   */
  apply_vis?: boolean
  /**
   * Address for recipient. For email e.g. 'user@example.com'. For webhooks e.g. 'https://domain/path'. For Amazon S3 e.g. 's3://bucket-name/path/'. For SFTP e.g. 'sftp://host-name/path/'.
   */
  address?: string
  /**
   * Whether the recipient is a Looker user on the current instance (only applicable for email recipients) (read-only)
   */
  looker_recipient?: boolean
  /**
   * Type of the address ('email', 'webhook', 's3', or 'sftp')
   */
  type?: string
  /**
   * JSON object containing parameters for external scheduling. For Amazon S3, this requires keys and values for access_key_id and region. For SFTP, this requires a key and value for username.
   */
  parameters?: string
  /**
   * (Write-Only) JSON object containing secret parameters for external scheduling. For Amazon S3, this requires a key and value for secret_access_key. For SFTP, this requires a key and value for password.
   */
  secret_parameters?: string
  /**
   * Optional message to be included in scheduled emails
   */
  message?: string
}

export interface ISession {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * IP address of user when this session was initiated (read-only)
   */
  ip_address?: string
  /**
   * User's browser type (read-only)
   */
  browser?: string
  /**
   * User's Operating System (read-only)
   */
  operating_system?: string
  /**
   * City component of user location (derived from IP address) (read-only)
   */
  city?: string
  /**
   * State component of user location (derived from IP address) (read-only)
   */
  state?: string
  /**
   * Country component of user location (derived from IP address) (read-only)
   */
  country?: string
  /**
   * Type of credentials used for logging in this session (read-only)
   */
  credentials_type?: string
  /**
   * Time when this session was last extended by the user (read-only)
   */
  extended_at?: string
  /**
   * Number of times this session was extended (read-only)
   */
  extended_count?: number
  /**
   * Actual user in the case when this session represents one user sudo'ing as another (read-only)
   */
  sudo_user_id?: number
  /**
   * Time when this session was initiated (read-only)
   */
  created_at?: string
  /**
   * Time when this session will expire (read-only)
   */
  expires_at?: string
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface ISessionConfig {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Allow users to have persistent sessions when they login
   */
  allow_persistent_sessions?: boolean
  /**
   * Number of minutes for user sessions.  Must be between 5 and 43200
   */
  session_minutes?: number
  /**
   * Allow users to have an unbounded number of concurrent sessions (otherwise, users will be limited to only one session at a time).
   */
  unlimited_sessions_per_user?: boolean
  /**
   * Enforce session logout for sessions that are inactive for 15 minutes.
   */
  use_inactivity_based_logout?: boolean
  /**
   * Track location of session when user logs in.
   */
  track_session_location?: boolean
}

export interface ISnippet {
  /**
   * Name of the snippet (read-only)
   */
  name?: string
  /**
   * Label of the snippet (read-only)
   */
  label?: string
  /**
   * SQL text of the snippet (read-only)
   */
  sql?: string
}

export interface ISqlQuery {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * The identifier of the SQL query (read-only)
   */
  slug?: string
  /**
   * Number of seconds this query took to run the most recent time it was run (read-only)
   */
  last_runtime?: number
  /**
   * Number of times this query has been run (read-only)
   */
  run_count?: number
  /**
   * Maximum number of rows this query will display on the SQL Runner page (read-only)
   */
  browser_limit?: number
  /**
   * SQL query text (read-only)
   */
  sql?: string
  /**
   * The most recent time this query was run (read-only)
   */
  last_run_at?: string
  connection?: IDBConnectionBase
  /**
   * Model name this query uses (read-only)
   */
  model_name?: string
  creator?: IUserPublic
  /**
   * Explore page URL for this SQL query (read-only)
   */
  explore_url?: string
  /**
   * Should this query be rendered as plain text (read-only)
   */
  plaintext?: boolean
  /**
   * Visualization configuration properties. These properties are typically opaque and differ based on the type of visualization used. There is no specified set of allowed keys. The values can be any type supported by JSON. A "type" key with a string value is often present, and is used by Looker to determine which visualization to present. Visualizations ignore unknown vis_config properties.
   */
  vis_config?: IDictionary<string>
  /**
   * ID of the ResultMakerLookup entry.
   */
  result_maker_id?: number
}

export interface ISqlQueryCreate {
  /**
   * Name of the db connection on which to run this query
   */
  connection_name?: string
  /**
   * (DEPRECATED) Use `connection_name` instead
   */
  connection_id?: string
  /**
   * Name of LookML Model (this or `connection_id` required)
   */
  model_name?: string
  /**
   * SQL query
   */
  sql?: string
  /**
   * Visualization configuration properties. These properties are typically opaque and differ based on the type of visualization used. There is no specified set of allowed keys. The values can be any type supported by JSON. A "type" key with a string value is often present, and is used by Looker to determine which visualization to present. Visualizations ignore unknown vis_config properties.
   */
  vis_config?: IDictionary<string>
}

export interface ITheme {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Timestamp for when this theme becomes active. Null=always
   */
  begin_at?: Date
  /**
   * Timestamp for when this theme expires. Null=never
   */
  end_at?: Date
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Name of theme. Can only be alphanumeric and underscores.
   */
  name?: string
  settings?: IThemeSettings
}

export interface IThemeSettings {
  /**
   * Default background color
   */
  background_color?: string
  /**
   * Base font size for scaling fonts
   */
  base_font_size?: string
  /**
   * Optional. ID of color collection to use with the theme. Use an empty string for none.
   */
  color_collection_id?: string
  /**
   * Default font color
   */
  font_color?: string
  /**
   * Primary font family
   */
  font_family?: string
  /**
   * Source specification for font
   */
  font_source?: string
  /**
   * Info button color
   */
  info_button_color?: string
  /**
   * Primary button color
   */
  primary_button_color?: string
  /**
   * Toggle to show filters. Defaults to true.
   */
  show_filters_bar?: boolean
  /**
   * Toggle to show the title. Defaults to true.
   */
  show_title?: boolean
  /**
   * Text color for text tiles
   */
  text_tile_text_color?: string
  /**
   * Background color for tiles
   */
  tile_background_color?: string
  /**
   * Text color for tiles
   */
  tile_text_color?: string
  /**
   * Color for titles
   */
  title_color?: string
  /**
   * Warning button color
   */
  warn_button_color?: string
  /**
   * The text alignment of tile titles (New Dashboards)
   */
  tile_title_alignment?: string
  /**
   * Toggles the tile shadow (New Dashboards)
   */
  tile_shadow?: boolean
}

export interface ITimezone {
  /**
   * Timezone (read-only)
   */
  value?: string
  /**
   * Description of timezone (read-only)
   */
  label?: string
  /**
   * Timezone group (e.g Common, Other, etc.) (read-only)
   */
  group?: string
}

export interface IUpdateFolder {
  /**
   * Unique Name
   */
  name?: string
  /**
   * Id of Parent. If the parent id is null, this is a root-level entry
   */
  parent_id?: string
}

export interface IUser {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * URL for the avatar image (may be generic) (read-only)
   */
  avatar_url?: Url
  /**
   * URL for the avatar image (may be generic), does not specify size (read-only)
   */
  avatar_url_without_sizing?: Url
  /**
   * API 3 credentials (read-only)
   */
  credentials_api3?: ICredentialsApi3[]
  credentials_email?: ICredentialsEmail
  /**
   * Embed credentials (read-only)
   */
  credentials_embed?: ICredentialsEmbed[]
  credentials_google?: ICredentialsGoogle
  credentials_ldap?: ICredentialsLDAP
  credentials_looker_openid?: ICredentialsLookerOpenid
  credentials_oidc?: ICredentialsOIDC
  credentials_saml?: ICredentialsSaml
  credentials_totp?: ICredentialsTotp
  /**
   * Full name for display (available only if both first_name and last_name are set) (read-only)
   */
  display_name?: string
  /**
   * EMail address (read-only)
   */
  email?: string
  /**
   * (Embed only) ID of user's group space based on the external_group_id optionally specified during embed user login (read-only)
   */
  embed_group_space_id?: number
  /**
   * First name
   */
  first_name?: string
  /**
   * Array of ids of the groups for this user (read-only)
   */
  group_ids?: number[]
  /**
   * ID string for user's home folder
   */
  home_folder_id?: string
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Account has been disabled
   */
  is_disabled?: boolean
  /**
   * Last name
   */
  last_name?: string
  /**
   * User's preferred locale. User locale takes precedence over Looker's system-wide default locale. Locale determines language of display strings and date and numeric formatting in API responses. Locale string must be a 2 letter language code or a combination of language code and region code: 'en' or 'en-US', for example.
   */
  locale?: string
  /**
   * Array of strings representing the Looker versions that this user has used (this only goes back as far as '3.54.0') (read-only)
   */
  looker_versions?: string[]
  /**
   * User's dev workspace has been checked for presence of applicable production projects
   */
  models_dir_validated?: boolean
  /**
   * ID of user's personal folder (read-only)
   */
  personal_folder_id?: number
  /**
   * User is identified as an employee of Looker (read-only)
   */
  presumed_looker_employee?: boolean
  /**
   * Array of ids of the roles for this user (read-only)
   */
  role_ids?: number[]
  /**
   * Active sessions (read-only)
   */
  sessions?: ISession[]
  /**
   * Per user dictionary of undocumented state information owned by the Looker UI.
   */
  ui_state?: IDictionary<string>
  /**
   * User is identified as an employee of Looker who has been verified via Looker corporate authentication (read-only)
   */
  verified_looker_employee?: boolean
  /**
   * User's roles are managed by an external directory like SAML or LDAP and can not be changed directly. (read-only)
   */
  roles_externally_managed?: boolean
  /**
   * User can be directly assigned a role. (read-only)
   */
  allow_direct_roles?: boolean
  /**
   * User can be a direct member of a normal Looker group. (read-only)
   */
  allow_normal_group_membership?: boolean
  /**
   * User can inherit roles from a normal Looker group. (read-only)
   */
  allow_roles_from_normal_groups?: boolean
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface IUserAttribute {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Name of user attribute
   */
  name?: string
  /**
   * Human-friendly label for user attribute
   */
  label?: string
  /**
   * Type of user attribute ("string", "number", "datetime", "yesno", "zipcode")
   */
  type?: string
  /**
   * Default value for when no value is set on the user
   */
  default_value?: string
  /**
   * Attribute is a system default (read-only)
   */
  is_system?: boolean
  /**
   * Attribute is permanent and cannot be deleted (read-only)
   */
  is_permanent?: boolean
  /**
   * If true, users will not be able to view values of this attribute
   */
  value_is_hidden?: boolean
  /**
   * Non-admin users can see the values of their attributes and use them in filters
   */
  user_can_view?: boolean
  /**
   * Users can change the value of this attribute for themselves
   */
  user_can_edit?: boolean
  /**
   * Destinations to which a hidden attribute may be sent. Once set, cannot be edited.
   */
  hidden_value_domain_whitelist?: string
}

export interface IUserAttributeGroupValue {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id of this group-attribute relation (read-only)
   */
  id?: number
  /**
   * Id of group (read-only)
   */
  group_id?: number
  /**
   * Id of user attribute (read-only)
   */
  user_attribute_id?: number
  /**
   * If true, the "value" field will be null, because the attribute settings block access to this value (read-only)
   */
  value_is_hidden?: boolean
  /**
   * Precedence for resolving value for user (read-only)
   */
  rank?: number
  /**
   * Value of user attribute for group (read-only)
   */
  value?: string
}

export interface IUserAttributeWithValue {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Name of user attribute (read-only)
   */
  name?: string
  /**
   * Human-friendly label for user attribute (read-only)
   */
  label?: string
  /**
   * Precedence for setting value on user (lowest wins) (read-only)
   */
  rank?: number
  /**
   * Value of attribute for user
   */
  value?: string
  /**
   * Id of User (read-only)
   */
  user_id?: number
  /**
   * Can the user set this value (read-only)
   */
  user_can_edit?: boolean
  /**
   * If true, the "value" field will be null, because the attribute settings block access to this value (read-only)
   */
  value_is_hidden?: boolean
  /**
   * Id of User Attribute (read-only)
   */
  user_attribute_id?: number
  /**
   * How user got this value for this attribute (read-only)
   */
  source?: string
  /**
   * If this user attribute is hidden, whitelist of destinations to which it may be sent. (read-only)
   */
  hidden_value_domain_whitelist?: string
}

export interface IUserLoginLockout {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Hash of user's client id (read-only)
   */
  key?: string
  /**
   * Authentication method for login failures (read-only)
   */
  auth_type?: string
  /**
   * IP address of most recent failed attempt (read-only)
   */
  ip?: string
  /**
   * User ID (read-only)
   */
  user_id?: number
  /**
   * Remote ID of user if using LDAP (read-only)
   */
  remote_id?: string
  /**
   * User's name (read-only)
   */
  full_name?: string
  /**
   * Email address associated with the user's account (read-only)
   */
  email?: string
  /**
   * Number of failures that triggered the lockout (read-only)
   */
  fail_count?: number
  /**
   * Time when lockout was triggered (read-only)
   */
  lockout_at?: Date
}

export interface IUserPublic {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * First Name (read-only)
   */
  first_name?: string
  /**
   * Last Name (read-only)
   */
  last_name?: string
  /**
   * Full name for display (available only if both first_name and last_name are set) (read-only)
   */
  display_name?: string
  /**
   * URL for the avatar image (may be generic) (read-only)
   */
  avatar_url?: Url
  /**
   * Link to get this item (read-only)
   */
  url?: Url
}

export interface IValidationError {
  /**
   * Error details (read-only)
   */
  message: string
  /**
   * Error detail array (read-only)
   */
  errors?: IValidationErrorDetail[]
  /**
   * Documentation link (read-only)
   */
  documentation_url: Url
}

export interface IValidationErrorDetail {
  /**
   * Field with error (read-only)
   */
  field?: string
  /**
   * Error code (read-only)
   */
  code?: string
  /**
   * Error info message (read-only)
   */
  message?: string
  /**
   * Documentation link (read-only)
   */
  documentation_url: Url
}

export interface IWelcomeEmailTest {
  /**
   * The content that would be sent in the body of a custom welcome email
   */
  content?: string
  /**
   * The subject that would be sent for the custom welcome email
   */
  subject?: string
  /**
   * The header that would be sent in the body of a custom welcome email
   */
  header?: string
}

export interface IWhitelabelConfiguration {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * Unique Id (read-only)
   */
  id?: number
  /**
   * Customer logo image. Expected base64 encoded data (write-only)
   */
  logo_file?: string
  /**
   * Logo image url (read-only) (read-only)
   */
  logo_url?: string
  /**
   * Custom favicon image. Expected base64 encoded data (write-only)
   */
  favicon_file?: string
  /**
   * Favicon image url (read-only) (read-only)
   */
  favicon_url?: string
  /**
   * Default page title
   */
  default_title?: string
  /**
   * Boolean to toggle showing help menus
   */
  show_help_menu?: boolean
  /**
   * Boolean to toggle showing docs
   */
  show_docs?: boolean
  /**
   * Boolean to toggle showing email subscription options.
   */
  show_email_sub_options?: boolean
  /**
   * Boolean to toggle mentions of Looker in emails
   */
  allow_looker_mentions?: boolean
  /**
   * Boolean to toggle links to Looker in emails
   */
  allow_looker_links?: boolean
  /**
   * Allow subject line and email heading customization in customized emails”
   */
  custom_welcome_email_advanced?: boolean
}

export interface IWorkspace {
  /**
   * Operations the current user is able to perform on this object (read-only)
   */
  can?: IDictionary<boolean>
  /**
   * The unique id of this user workspace. Predefined workspace ids include "production" and "dev" (read-only)
   */
  id?: string
  /**
   * The local state of each project in the workspace (read-only)
   */
  projects?: IProject[]
}

/**
 * Dynamically generated writeable type for ApiSession removes properties:
 * can, sudo_user_id
 */
export interface IWriteApiSession {
  /**
   * The id of active workspace for this session
   */
  workspace_id?: string
}

/**
 * Dynamically generated writeable type for BackupConfiguration removes properties:
 * can, url
 */
export interface IWriteBackupConfiguration {
  /**
   * Type of backup: looker-s3 or custom-s3
   */
  type?: string
  /**
   * Name of bucket for custom-s3 backups
   */
  custom_s3_bucket?: string
  /**
   * Name of region where the bucket is located
   */
  custom_s3_bucket_region?: string
  /**
   * (Write-Only) AWS S3 key used for custom-s3 backups
   */
  custom_s3_key?: string
  /**
   * (Write-Only) AWS S3 secret used for custom-s3 backups
   */
  custom_s3_secret?: string
}

/**
 * Dynamically generated writeable type for Board removes properties:
 * can, content_metadata_id, created_at, board_sections, id, updated_at, user_id, primary_homepage
 */
export interface IWriteBoard {
  /**
   * Date of board deletion
   */
  deleted_at?: Date
  /**
   * Description of the board
   */
  description?: string
  /**
   * ids of the board sections in the order they should be displayed
   */
  section_order?: number[]
  /**
   * Title of the board
   */
  title?: string
}

/**
 * Dynamically generated writeable type for BoardItem removes properties:
 * can, content_created_by, content_favorite_id, content_metadata_id, content_updated_at, description, favorite_count, id, location, title, view_count
 */
export interface IWriteBoardItem {
  /**
   * Dashboard to base this item on
   */
  dashboard_id?: number
  /**
   * Associated Board Section
   */
  board_section_id?: number
  /**
   * Look to base this item on
   */
  look_id?: number
  /**
   * LookML Dashboard to base this item on
   */
  lookml_dashboard_id?: string
  /**
   * An arbitrary integer representing the sort order within the section
   */
  order?: number
}

/**
 * Dynamically generated writeable type for BoardSection removes properties:
 * can, created_at, board_items, id, updated_at
 */
export interface IWriteBoardSection {
  /**
   * Time at which this section was deleted.
   */
  deleted_at?: Date
  /**
   * Description of the content found in this section.
   */
  description?: string
  /**
   * Id reference to parent board
   */
  board_id?: number
  /**
   * ids of the board items in the order they should be displayed
   */
  item_order?: number[]
  /**
   * Name of row
   */
  title?: string
}

/**
 * Dynamically generated writeable type for ColorCollection removes properties:
 * id
 */
export interface IWriteColorCollection {
  /**
   * Label of color collection
   */
  label?: string
  /**
   * Array of categorical palette definitions
   */
  categoricalPalettes?: IDiscretePalette[]
  /**
   * Array of discrete palette definitions
   */
  sequentialPalettes?: IContinuousPalette[]
  /**
   * Array of diverging palette definitions
   */
  divergingPalettes?: IContinuousPalette[]
}

/**
 * Dynamically generated writeable type for ContentFavorite removes properties:
 * id, look_id, dashboard_id, look, board_id
 */
export interface IWriteContentFavorite {
  /**
   * User Id which owns this ContentFavorite
   */
  user_id?: number
  /**
   * Content Metadata Id associated with this ContentFavorite
   */
  content_metadata_id?: number
  dashboard?: IWriteDashboardBase
}

/**
 * Dynamically generated writeable type for ContentMeta removes properties:
 * can, id, name, parent_id, dashboard_id, look_id, folder_id, content_type, inheriting_id, slug
 */
export interface IWriteContentMeta {
  /**
   * Whether content inherits its access levels from parent
   */
  inherits?: boolean
}

/**
 * Dynamically generated writeable type for CreateDashboardFilter removes properties:
 * id, field
 */
export interface IWriteCreateDashboardFilter {
  /**
   * Id of Dashboard
   */
  dashboard_id: string
  /**
   * Name of filter
   */
  name: string
  /**
   * Title of filter
   */
  title: string
  /**
   * Type of filter: one of date, number, string, or field
   */
  type: string
  /**
   * Default value of filter
   */
  default_value?: string
  /**
   * Model of filter (required if type = field)
   */
  model?: string
  /**
   * Explore of filter (required if type = field)
   */
  explore?: string
  /**
   * Dimension of filter (required if type = field)
   */
  dimension?: string
  /**
   * Display order of this filter relative to other filters
   */
  row?: number
  /**
   * Array of listeners for faceted filters
   */
  listens_to_filters?: string[]
  /**
   * Whether the filter allows multiple filter values
   */
  allow_multiple_values?: boolean
  /**
   * Whether the filter requires a value to run the dashboard
   */
  required?: boolean
  /**
   * The visual configuration for this filter. Used to set up how the UI for this filter should appear.
   */
  ui_config?: IDictionary<string>
}

/**
 * Dynamically generated writeable type for CreateQueryTask removes properties:
 * can
 */
export interface IWriteCreateQueryTask {
  /**
   * Id of query to run
   */
  query_id: number
  /**
   * Desired async query result format. Valid values are: "json", "json_detail", "json_fe", "csv", "html", "md", "txt", "xlsx", "gsxml".
   */
  result_format: string
  /**
   * Source of query task
   */
  source?: string
  /**
   * Create the task but defer execution
   */
  deferred?: boolean
  /**
   * Id of look associated with query.
   */
  look_id?: number
  /**
   * Id of dashboard associated with query.
   */
  dashboard_id?: string
}

/**
 * Dynamically generated writeable type for CredentialsEmail removes properties:
 * can, created_at, is_disabled, logged_in_at, password_reset_url, type, url, user_url
 */
export interface IWriteCredentialsEmail {
  /**
   * EMail address used for user login
   */
  email?: string
  /**
   * Force the user to change their password upon their next login
   */
  forced_password_reset_at_next_login?: boolean
}

/**
 * Dynamically generated writeable type for CustomWelcomeEmail removes properties:
 * can
 */
export interface IWriteCustomWelcomeEmail {
  /**
   * If true, custom email content will replace the default body of welcome emails
   */
  enabled?: boolean
  /**
   * The HTML to use as custom content for welcome emails. Script elements and other potentially dangerous markup will be removed.
   */
  content?: string
  /**
   * The text to appear in the email subject line.
   */
  subject?: string
  /**
   * The text to appear in the header line of the email body.
   */
  header?: string
}

/**
 * Dynamically generated writeable type for Dashboard removes properties:
 * can, content_favorite_id, content_metadata_id, id, model, readonly, refresh_interval_to_i, user_id, created_at, dashboard_elements, dashboard_filters, dashboard_layouts, deleted_at, deleter_id, edit_uri, favorite_count, last_accessed_at, last_viewed_at, view_count
 */
export interface IWriteDashboard {
  /**
   * Description
   */
  description?: string
  /**
   * Is Hidden
   */
  hidden?: boolean
  /**
   * Timezone in which the Dashboard will run by default.
   */
  query_timezone?: string
  /**
   * Refresh Interval, as a time duration phrase like "2 hours 30 minutes". A number with no time units will be interpreted as whole seconds.
   */
  refresh_interval?: string
  folder?: IWriteFolderBase
  /**
   * Dashboard Title
   */
  title?: string
  /**
   * Background color
   */
  background_color?: string
  /**
   * Enables crossfiltering in dashboards - only available in dashboards-next (beta)
   */
  crossfilter_enabled?: boolean
  /**
   * Whether or not a dashboard is 'soft' deleted.
   */
  deleted?: boolean
  /**
   * configuration option that governs how dashboard loading will happen.
   */
  load_configuration?: string
  /**
   * Links this dashboard to a particular LookML dashboard such that calling a **sync** operation on that LookML dashboard will update this dashboard to match.
   */
  lookml_link_id?: string
  /**
   * Show filters bar.  **Security Note:** This property only affects the *cosmetic* appearance of the dashboard, not a user's ability to access data. Hiding the filters bar does **NOT** prevent users from changing filters by other means. For information on how to set up secure data access control policies, see [Control User Access to Data](https://looker.com/docs/r/api/control-access)
   */
  show_filters_bar?: boolean
  /**
   * Show title
   */
  show_title?: boolean
  /**
   * Content Metadata Slug
   */
  slug?: string
  /**
   * Id of folder
   */
  folder_id?: string
  /**
   * Color of text on text tiles
   */
  text_tile_text_color?: string
  /**
   * Tile background color
   */
  tile_background_color?: string
  /**
   * Tile text color
   */
  tile_text_color?: string
  /**
   * Title color
   */
  title_color?: string
  appearance?: IDashboardAppearance
  /**
   * The preferred route for viewing this dashboard (ie: dashboards or dashboards-next)
   */
  preferred_viewer?: string
}

/**
 * Dynamically generated writeable type for DashboardBase removes properties:
 * can, content_favorite_id, content_metadata_id, description, hidden, id, model, query_timezone, readonly, refresh_interval, refresh_interval_to_i, title, user_id
 */
export interface IWriteDashboardBase {
  folder?: IWriteFolderBase
}

/**
 * Dynamically generated writeable type for DashboardElement removes properties:
 * can, body_text_as_html, edit_uri, id, lookml_link_id, note_text_as_html, refresh_interval_to_i, alert_count, title_text_as_html, subtitle_text_as_html
 */
export interface IWriteDashboardElement {
  /**
   * Text tile body text
   */
  body_text?: string
  /**
   * Id of Dashboard
   */
  dashboard_id?: string
  look?: IWriteLookWithQuery
  /**
   * Id Of Look
   */
  look_id?: string
  /**
   * ID of merge result
   */
  merge_result_id?: string
  /**
   * Note Display
   */
  note_display?: string
  /**
   * Note State
   */
  note_state?: string
  /**
   * Note Text
   */
  note_text?: string
  query?: IWriteQuery
  /**
   * Id Of Query
   */
  query_id?: number
  /**
   * Refresh Interval
   */
  refresh_interval?: string
  result_maker?: IWriteResultMakerWithIdVisConfigAndDynamicFields
  /**
   * ID of the ResultMakerLookup entry.
   */
  result_maker_id?: number
  /**
   * Text tile subtitle text
   */
  subtitle_text?: string
  /**
   * Title of dashboard element
   */
  title?: string
  /**
   * Whether title is hidden
   */
  title_hidden?: boolean
  /**
   * Text tile title
   */
  title_text?: string
  /**
   * Type
   */
  type?: string
}

/**
 * Dynamically generated writeable type for DashboardFilter removes properties:
 * can, id, dashboard_id, field
 */
export interface IWriteDashboardFilter {
  /**
   * Name of filter
   */
  name?: string
  /**
   * Title of filter
   */
  title?: string
  /**
   * Type of filter: one of date, number, string, or field
   */
  type?: string
  /**
   * Default value of filter
   */
  default_value?: string
  /**
   * Model of filter (required if type = field)
   */
  model?: string
  /**
   * Explore of filter (required if type = field)
   */
  explore?: string
  /**
   * Dimension of filter (required if type = field)
   */
  dimension?: string
  /**
   * Display order of this filter relative to other filters
   */
  row?: number
  /**
   * Array of listeners for faceted filters
   */
  listens_to_filters?: string[]
  /**
   * Whether the filter allows multiple filter values
   */
  allow_multiple_values?: boolean
  /**
   * Whether the filter requires a value to run the dashboard
   */
  required?: boolean
  /**
   * The visual configuration for this filter. Used to set up how the UI for this filter should appear.
   */
  ui_config?: IDictionary<string>
}

/**
 * Dynamically generated writeable type for DashboardLayout removes properties:
 * can, id, deleted, dashboard_title, dashboard_layout_components
 */
export interface IWriteDashboardLayout {
  /**
   * Id of Dashboard
   */
  dashboard_id?: string
  /**
   * Type
   */
  type?: string
  /**
   * Is Active
   */
  active?: boolean
  /**
   * Column Width
   */
  column_width?: number
  /**
   * Width
   */
  width?: number
}

/**
 * Dynamically generated writeable type for DashboardLayoutComponent removes properties:
 * can, id, deleted, element_title, element_title_hidden, vis_type
 */
export interface IWriteDashboardLayoutComponent {
  /**
   * Id of Dashboard Layout
   */
  dashboard_layout_id?: string
  /**
   * Id Of Dashboard Element
   */
  dashboard_element_id?: string
  /**
   * Row
   */
  row?: number
  /**
   * Column
   */
  column?: number
  /**
   * Width
   */
  width?: number
  /**
   * Height
   */
  height?: number
}

/**
 * Dynamically generated writeable type for Datagroup removes properties:
 * can, created_at, id, model_name, name, trigger_check_at, trigger_error, trigger_value
 */
export interface IWriteDatagroup {
  /**
   * UNIX timestamp before which cache entries are considered stale. Cannot be in the future.
   */
  stale_before?: number
  /**
   * UNIX timestamp at which this entry became triggered. Cannot be in the future.
   */
  triggered_at?: number
}

/**
 * Dynamically generated writeable type for DBConnection removes properties:
 * can, dialect, snippets, uses_oauth, created_at, user_id, example, last_regen_at, last_reap_at, managed
 */
export interface IWriteDBConnection {
  /**
   * Name of the connection. Also used as the unique identifier
   */
  name?: string
  /**
   * Host name/address of server
   */
  host?: string
  /**
   * Port number on server
   */
  port?: number
  /**
   * Username for server authentication
   */
  username?: string
  /**
   * (Write-Only) Password for server authentication
   */
  password?: string
  /**
   * (Write-Only) Base64 encoded Certificate body for server authentication (when appropriate for dialect).
   */
  certificate?: string
  /**
   * (Write-Only) Certificate keyfile type - .json or .p12
   */
  file_type?: string
  /**
   * Database name
   */
  database?: string
  /**
   * Time zone of database
   */
  db_timezone?: string
  /**
   * Timezone to use in queries
   */
  query_timezone?: string
  /**
   * Scheme name
   */
  schema?: string
  /**
   * Maximum number of concurrent connection to use
   */
  max_connections?: number
  /**
   * Maximum size of query in GBs (BigQuery only, can be a user_attribute name)
   */
  max_billing_gigabytes?: string
  /**
   * Use SSL/TLS when connecting to server
   */
  ssl?: boolean
  /**
   * Verify the SSL
   */
  verify_ssl?: boolean
  /**
   * Name of temporary database (if used)
   */
  tmp_db_name?: string
  /**
   * Additional params to add to JDBC connection string
   */
  jdbc_additional_params?: string
  /**
   * Connection Pool Timeout, in seconds
   */
  pool_timeout?: number
  /**
   * (Read/Write) SQL Dialect name
   */
  dialect_name?: string
  /**
   * (Limited access feature) Are per user db credentials enabled. Enabling will remove previously set username and password
   */
  user_db_credentials?: boolean
  /**
   * Fields whose values map to user attribute names
   */
  user_attribute_fields?: string[]
  /**
   * Cron string specifying when maintenance such as PDT trigger checks and drops should be performed
   */
  maintenance_cron?: string
  /**
   * Precache tables in the SQL Runner
   */
  sql_runner_precache_tables?: boolean
  /**
   * SQL statements (semicolon separated) to issue after connecting to the database. Requires `custom_after_connect_statements` license feature
   */
  after_connect_statements?: string
  pdt_context_override?: IWriteDBConnectionOverride
}

/**
 * Dynamically generated writeable type for DBConnectionOverride removes properties:
 * has_password
 */
export interface IWriteDBConnectionOverride {
  /**
   * Context in which to override (`pdt` is the only allowed value)
   */
  context?: string
  /**
   * Host name/address of server
   */
  host?: string
  /**
   * Port number on server
   */
  port?: string
  /**
   * Username for server authentication
   */
  username?: string
  /**
   * (Write-Only) Password for server authentication
   */
  password?: string
  /**
   * (Write-Only) Base64 encoded Certificate body for server authentication (when appropriate for dialect).
   */
  certificate?: string
  /**
   * (Write-Only) Certificate keyfile type - .json or .p12
   */
  file_type?: string
  /**
   * Database name
   */
  database?: string
  /**
   * Scheme name
   */
  schema?: string
  /**
   * Additional params to add to JDBC connection string
   */
  jdbc_additional_params?: string
  /**
   * SQL statements (semicolon separated) to issue after connecting to the database. Requires `custom_after_connect_statements` license feature
   */
  after_connect_statements?: string
}

/**
 * Dynamically generated writeable type for FolderBase removes properties:
 * id, content_metadata_id, created_at, creator_id, child_count, external_id, is_embed, is_embed_shared_root, is_embed_users_root, is_personal, is_personal_descendant, is_shared_root, is_users_root, can
 */
export interface IWriteFolderBase {
  /**
   * Unique Name
   */
  name: string
  /**
   * Id of Parent. If the parent id is null, this is a root-level entry
   */
  parent_id?: string
}

/**
 * Dynamically generated writeable type for GitBranch removes properties:
 * can, remote, remote_name, error, message, owner_name, readonly, personal, is_local, is_remote, is_production, ahead_count, behind_count, commit_at, remote_ref
 */
export interface IWriteGitBranch {
  /**
   * The short name on the local. Updating `name` results in `git checkout <new_name>`
   */
  name?: string
  /**
   * The resolved ref of this branch. Updating `ref` results in `git reset --hard <new_ref>``.
   */
  ref?: string
}

/**
 * Dynamically generated writeable type for Group removes properties:
 * can, contains_current_user, external_group_id, externally_managed, id, include_by_default, user_count
 */
export interface IWriteGroup {
  /**
   * Group can be used in content access controls
   */
  can_add_to_content_metadata?: boolean
  /**
   * Name of group
   */
  name?: string
}

/**
 * Dynamically generated writeable type for Integration removes properties:
 * can, id, integration_hub_id, label, description, supported_formats, supported_action_types, supported_formattings, supported_visualization_formattings, supported_download_settings, icon_url, uses_oauth, required_fields, delegate_oauth
 */
export interface IWriteIntegration {
  /**
   * Whether the integration is available to users.
   */
  enabled?: boolean
  /**
   * Array of params for the integration.
   */
  params?: IIntegrationParam[]
  /**
   * Whether the integration is available to users.
   */
  installed_delegate_oauth_targets?: number[]
}

/**
 * Dynamically generated writeable type for IntegrationHub removes properties:
 * can, id, label, official, fetch_error_message, has_authorization_token, legal_agreement_signed, legal_agreement_required, legal_agreement_text
 */
export interface IWriteIntegrationHub {
  /**
   * URL of the hub.
   */
  url?: string
  /**
   * (Write-Only) An authorization key that will be sent to the integration hub on every request.
   */
  authorization_token?: string
}

/**
 * Dynamically generated writeable type for InternalHelpResources removes properties:
 * can
 */
export interface IWriteInternalHelpResources {
  /**
   * If true and internal help resources content is not blank then the link for internal help resources will be shown in the help menu and the content displayed within Looker
   */
  enabled?: boolean
}

/**
 * Dynamically generated writeable type for InternalHelpResourcesContent removes properties:
 * can
 */
export interface IWriteInternalHelpResourcesContent {
  /**
   * Text to display in the help menu item which will display the internal help resources
   */
  organization_name?: string
  /**
   * Content to be displayed in the internal help resources page/modal
   */
  markdown_content?: string
}

/**
 * Dynamically generated writeable type for LDAPConfig removes properties:
 * can, default_new_user_groups, default_new_user_roles, groups, has_auth_password, modified_at, modified_by, user_attributes, url
 */
export interface IWriteLDAPConfig {
  /**
   * Allow alternate email-based login via '/login/email' for admins and for specified users with the 'login_special_email' permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled.
   */
  alternate_email_login_allowed?: boolean
  /**
   * (Write-Only)  Password for the LDAP account used to access the LDAP server
   */
  auth_password?: string
  /**
   * Users will not be allowed to login at all unless a role for them is found in LDAP if set to true
   */
  auth_requires_role?: boolean
  /**
   * Distinguished name of LDAP account used to access the LDAP server
   */
  auth_username?: string
  /**
   * LDAP server hostname
   */
  connection_host?: string
  /**
   * LDAP host port
   */
  connection_port?: string
  /**
   * Use Transport Layer Security
   */
  connection_tls?: boolean
  /**
   * Do not verify peer when using TLS
   */
  connection_tls_no_verify?: boolean
  /**
   * (Write-Only)  Array of ids of groups that will be applied to new users the first time they login via LDAP
   */
  default_new_user_group_ids?: number[]
  /**
   * (Write-Only)  Array of ids of roles that will be applied to new users the first time they login via LDAP
   */
  default_new_user_role_ids?: number[]
  /**
   * Enable/Disable LDAP authentication for the server
   */
  enabled?: boolean
  /**
   * Don't attempt to do LDAP search result paging (RFC 2696) even if the LDAP server claims to support it.
   */
  force_no_page?: boolean
  /**
   * Base dn for finding groups in LDAP searches
   */
  groups_base_dn?: string
  /**
   * Identifier for a strategy for how Looker will search for groups in the LDAP server
   */
  groups_finder_type?: string
  /**
   * LDAP Group attribute that signifies the members of the groups. Most commonly 'member'
   */
  groups_member_attribute?: string
  /**
   * Optional comma-separated list of supported LDAP objectclass for groups when doing groups searches
   */
  groups_objectclasses?: string
  /**
   * LDAP Group attribute that signifies the user in a group. Most commonly 'dn'
   */
  groups_user_attribute?: string
  /**
   * (Read/Write) Array of mappings between LDAP Groups and arrays of Looker Role ids
   */
  groups_with_role_ids?: ILDAPGroupWrite[]
  /**
   * Merge first-time ldap login to existing user account by email addresses. When a user logs in for the first time via ldap this option will connect this user into their existing account by finding the account with a matching email address. Otherwise a new user account will be created for the user.
   */
  merge_new_users_by_email?: boolean
  /**
   * Set user roles in Looker based on groups from LDAP
   */
  set_roles_from_groups?: boolean
  /**
   * (Write-Only)  Test LDAP user password. For ldap tests only.
   */
  test_ldap_password?: string
  /**
   * (Write-Only)  Test LDAP user login id. For ldap tests only.
   */
  test_ldap_user?: string
  /**
   * Name of user record attributes used to indicate email address field
   */
  user_attribute_map_email?: string
  /**
   * Name of user record attributes used to indicate first name
   */
  user_attribute_map_first_name?: string
  /**
   * Name of user record attributes used to indicate last name
   */
  user_attribute_map_last_name?: string
  /**
   * Name of user record attributes used to indicate unique record id
   */
  user_attribute_map_ldap_id?: string
  /**
   * (Read/Write) Array of mappings between LDAP User Attributes and arrays of Looker User Attribute ids
   */
  user_attributes_with_ids?: ILDAPUserAttributeWrite[]
  /**
   * Distinguished name of LDAP node used as the base for user searches
   */
  user_bind_base_dn?: string
  /**
   * (Optional) Custom RFC-2254 filter clause for use in finding user during login. Combined via 'and' with the other generated filter clauses.
   */
  user_custom_filter?: string
  /**
   * Name(s) of user record attributes used for matching user login id (comma separated list)
   */
  user_id_attribute_names?: string
  /**
   * (Optional) Name of user record objectclass used for finding user during login id
   */
  user_objectclass?: string
  /**
   * Allow LDAP auth'd users to be members of non-reflected Looker groups. If 'false', user will be removed from non-reflected groups on login.
   */
  allow_normal_group_membership?: boolean
  /**
   * LDAP auth'd users will be able to inherit roles from non-reflected Looker groups.
   */
  allow_roles_from_normal_groups?: boolean
  /**
   * Allows roles to be directly assigned to LDAP auth'd users.
   */
  allow_direct_roles?: boolean
}

/**
 * Dynamically generated writeable type for LegacyFeature removes properties:
 * can, id, name, description, enabled, disallowed_as_of_version, disable_on_upgrade_to_version, end_of_life_version, documentation_url, approximate_disable_date, approximate_end_of_life_date, has_disabled_on_upgrade
 */
export interface IWriteLegacyFeature {
  /**
   * Whether this feature has been enabled by a user
   */
  enabled_locally?: boolean
}

/**
 * Dynamically generated writeable type for LookmlModel removes properties:
 * can, explores, has_content, label
 */
export interface IWriteLookmlModel {
  /**
   * Array of names of connections this model is allowed to use
   */
  allowed_db_connection_names?: string[]
  /**
   * Name of the model. Also used as the unique identifier
   */
  name?: string
  /**
   * Name of project containing the model
   */
  project_name?: string
  /**
   * Is this model allowed to use all current and future connections
   */
  unlimited_db_connections?: boolean
}

/**
 * Dynamically generated writeable type for LookWithQuery removes properties:
 * can, content_metadata_id, id, content_favorite_id, created_at, deleted_at, deleter_id, embed_url, excel_file_url, favorite_count, google_spreadsheet_formula, image_embed_url, last_accessed_at, last_updater_id, last_viewed_at, model, public_slug, public_url, short_url, updated_at, view_count, url
 */
export interface IWriteLookWithQuery {
  /**
   * Look Title
   */
  title?: string
  /**
   * Whether or not a look is 'soft' deleted.
   */
  deleted?: boolean
  /**
   * Description
   */
  description?: string
  /**
   * auto-run query when Look viewed
   */
  is_run_on_load?: boolean
  /**
   * Is Public
   */
  public?: boolean
  /**
   * Query Id
   */
  query_id?: number
  folder?: IWriteFolderBase
  /**
   * Folder Id
   */
  folder_id?: string
  /**
   * User Id
   */
  user_id?: number
  query?: IWriteQuery
}

/**
 * Dynamically generated writeable type for MergeQuery removes properties:
 * can, id, result_maker_id
 */
export interface IWriteMergeQuery {
  /**
   * Column Limit
   */
  column_limit?: string
  /**
   * Dynamic Fields
   */
  dynamic_fields?: string
  /**
   * Pivots
   */
  pivots?: string[]
  /**
   * Sorts
   */
  sorts?: string[]
  /**
   * Source Queries defining the results to be merged.
   */
  source_queries?: IMergeQuerySourceQuery[]
  /**
   * Total
   */
  total?: boolean
  /**
   * Visualization Config
   */
  vis_config?: IDictionary<string>
}

/**
 * Dynamically generated writeable type for ModelSet removes properties:
 * can, all_access, built_in, id, url
 */
export interface IWriteModelSet {
  models?: string[]
  /**
   * Name of ModelSet
   */
  name?: string
}

/**
 * Dynamically generated writeable type for OIDCConfig removes properties:
 * can, default_new_user_groups, default_new_user_roles, groups, modified_at, modified_by, test_slug, user_attributes, url
 */
export interface IWriteOIDCConfig {
  /**
   * Allow alternate email-based login via '/login/email' for admins and for specified users with the 'login_special_email' permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled.
   */
  alternate_email_login_allowed?: boolean
  /**
   * OpenID Provider Audience
   */
  audience?: string
  /**
   * Users will not be allowed to login at all unless a role for them is found in OIDC if set to true
   */
  auth_requires_role?: boolean
  /**
   * OpenID Provider Authorization Url
   */
  authorization_endpoint?: Url
  /**
   * (Write-Only) Array of ids of groups that will be applied to new users the first time they login via OIDC
   */
  default_new_user_group_ids?: number[]
  /**
   * (Write-Only) Array of ids of roles that will be applied to new users the first time they login via OIDC
   */
  default_new_user_role_ids?: number[]
  /**
   * Enable/Disable OIDC authentication for the server
   */
  enabled?: boolean
  /**
   * Name of user record attributes used to indicate groups. Used when 'groups_finder_type' is set to 'grouped_attribute_values'
   */
  groups_attribute?: string
  /**
   * (Read/Write) Array of mappings between OIDC Groups and arrays of Looker Role ids
   */
  groups_with_role_ids?: IOIDCGroupWrite[]
  /**
   * Relying Party Identifier (provided by OpenID Provider)
   */
  identifier?: string
  /**
   * OpenID Provider Issuer
   */
  issuer?: string
  /**
   * Merge first-time oidc login to existing user account by email addresses. When a user logs in for the first time via oidc this option will connect this user into their existing account by finding the account with a matching email address by testing the given types of credentials for existing users. Otherwise a new user account will be created for the user. This list (if provided) must be a comma separated list of string like 'email,ldap,google'
   */
  new_user_migration_types?: string
  /**
   * Array of scopes to request.
   */
  scopes?: string[]
  /**
   * (Write-Only) Relying Party Secret (provided by OpenID Provider)
   */
  secret?: string
  /**
   * Set user roles in Looker based on groups from OIDC
   */
  set_roles_from_groups?: boolean
  /**
   * OpenID Provider Token Url
   */
  token_endpoint?: string
  /**
   * Name of user record attributes used to indicate email address field
   */
  user_attribute_map_email?: string
  /**
   * Name of user record attributes used to indicate first name
   */
  user_attribute_map_first_name?: string
  /**
   * Name of user record attributes used to indicate last name
   */
  user_attribute_map_last_name?: string
  /**
   * (Read/Write) Array of mappings between OIDC User Attributes and arrays of Looker User Attribute ids
   */
  user_attributes_with_ids?: IOIDCUserAttributeWrite[]
  /**
   * OpenID Provider User Information Url
   */
  userinfo_endpoint?: Url
  /**
   * Allow OIDC auth'd users to be members of non-reflected Looker groups. If 'false', user will be removed from non-reflected groups on login.
   */
  allow_normal_group_membership?: boolean
  /**
   * OIDC auth'd users will inherit roles from non-reflected Looker groups.
   */
  allow_roles_from_normal_groups?: boolean
  /**
   * Allows roles to be directly assigned to OIDC auth'd users.
   */
  allow_direct_roles?: boolean
}

/**
 * Dynamically generated writeable type for PasswordConfig removes properties:
 * can
 */
export interface IWritePasswordConfig {
  /**
   * Minimum number of characters required for a new password.  Must be between 7 and 100
   */
  min_length?: number
  /**
   * Require at least one numeric character
   */
  require_numeric?: boolean
  /**
   * Require at least one uppercase and one lowercase letter
   */
  require_upperlower?: boolean
  /**
   * Require at least one special character
   */
  require_special?: boolean
}

/**
 * Dynamically generated writeable type for PermissionSet removes properties:
 * can, all_access, built_in, id, url
 */
export interface IWritePermissionSet {
  /**
   * Name of PermissionSet
   */
  name?: string
  permissions?: string[]
}

/**
 * Dynamically generated writeable type for Project removes properties:
 * can, id, uses_git, is_example
 */
export interface IWriteProject {
  /**
   * Project display name
   */
  name?: string
  /**
   * Git remote repository url
   */
  git_remote_url?: string
  /**
   * Git username for HTTPS authentication. (For production only, if using user attributes.)
   */
  git_username?: string
  /**
   * (Write-Only) Git password for HTTPS authentication. (For production only, if using user attributes.)
   */
  git_password?: string
  /**
   * User attribute name for username in per-user HTTPS authentication.
   */
  git_username_user_attribute?: string
  /**
   * User attribute name for password in per-user HTTPS authentication.
   */
  git_password_user_attribute?: string
  /**
   * Name of the git service provider
   */
  git_service_name?: string
  /**
   * Port that HTTP(S) application server is running on (for PRs, file browsing, etc.)
   */
  git_application_server_http_port?: number
  /**
   * Scheme that is running on application server (for PRs, file browsing, etc.) Valid values are: "http", "https".
   */
  git_application_server_http_scheme?: string
  /**
   * (Write-Only) Optional secret token with which to authenticate requests to the webhook deploy endpoint. If not set, endpoint is unauthenticated.
   */
  deploy_secret?: string
  /**
   * (Write-Only) When true, unsets the deploy secret to allow unauthenticated access to the webhook deploy endpoint.
   */
  unset_deploy_secret?: boolean
  /**
   * The git pull request policy for this project. Valid values are: "off", "links", "recommended", "required".
   */
  pull_request_mode?: string
  /**
   * Validation policy: If true, the project must pass validation checks before project changes can be committed to the git repository
   */
  validation_required?: boolean
  /**
   * If true, folders are enabled for this project
   */
  folders_enabled?: boolean
  /**
   * If true, advanced git release management is enabled for this project
   */
  git_release_mgmt_enabled?: boolean
  /**
   * Validation policy: If true, the project can be committed with warnings when `validation_required` is true. (`allow_warnings` does nothing if `validation_required` is false).
   */
  allow_warnings?: boolean
}

/**
 * Dynamically generated writeable type for Query removes properties:
 * can, id, slug, share_url, expanded_share_url, url, has_table_calculations
 */
export interface IWriteQuery {
  /**
   * Model
   */
  model: string
  /**
   * Explore Name
   */
  view: string
  /**
   * Fields
   */
  fields?: string[]
  /**
   * Pivots
   */
  pivots?: string[]
  /**
   * Fill Fields
   */
  fill_fields?: string[]
  /**
   * Filters
   */
  filters?: IDictionary<string>
  /**
   * Filter Expression
   */
  filter_expression?: string
  /**
   * Sorting for the query results. Use the format `["view.field", ...]` to sort on fields in ascending order. Use the format `["view.field desc", ...]` to sort on fields in descending order. Use `["__UNSORTED__"]` (2 underscores before and after) to disable sorting entirely. Empty sorts `[]` will trigger a default sort.
   */
  sorts?: string[]
  /**
   * Limit
   */
  limit?: string
  /**
   * Column Limit
   */
  column_limit?: string
  /**
   * Total
   */
  total?: boolean
  /**
   * Raw Total
   */
  row_total?: string
  /**
   * Fields on which to run subtotals
   */
  subtotals?: string[]
  /**
   * Visualization configuration properties. These properties are typically opaque and differ based on the type of visualization used. There is no specified set of allowed keys. The values can be any type supported by JSON. A "type" key with a string value is often present, and is used by Looker to determine which visualization to present. Visualizations ignore unknown vis_config properties.
   */
  vis_config?: IDictionary<string>
  /**
   * The filter_config represents the state of the filter UI on the explore page for a given query. When running a query via the Looker UI, this parameter takes precedence over "filters". When creating a query or modifying an existing query, "filter_config" should be set to null. Setting it to any other value could cause unexpected filtering behavior. The format should be considered opaque.
   */
  filter_config?: IDictionary<string>
  /**
   * Visible UI Sections
   */
  visible_ui_sections?: string
  /**
   * Dynamic Fields
   */
  dynamic_fields?: string
  /**
   * Client Id: used to generate shortened explore URLs. If set by client, must be a unique 22 character alphanumeric string. Otherwise one will be generated.
   */
  client_id?: string
  /**
   * Query Timezone
   */
  query_timezone?: string
}

/**
 * Dynamically generated writeable type for RepositoryCredential removes properties:
 * can, id, root_project_id, remote_url, is_configured
 */
export interface IWriteRepositoryCredential {
  /**
   * Git username for HTTPS authentication.
   */
  git_username?: string
  /**
   * (Write-Only) Git password for HTTPS authentication.
   */
  git_password?: string
  /**
   * Public deploy key for SSH authentication.
   */
  ssh_public_key?: string
}

/**
 * Dynamically generated writeable type for ResultMakerWithIdVisConfigAndDynamicFields removes properties:
 * id, dynamic_fields, filterables, sorts, merge_result_id, total, query_id, sql_query_id, vis_config
 */
export interface IWriteResultMakerWithIdVisConfigAndDynamicFields {
  query?: IWriteQuery
}

/**
 * Dynamically generated writeable type for Role removes properties:
 * can, id, url, users_url
 */
export interface IWriteRole {
  /**
   * Name of Role
   */
  name?: string
  permission_set?: IWritePermissionSet
  /**
   * (Write-Only) Id of permission set
   */
  permission_set_id?: number
  model_set?: IWriteModelSet
  /**
   * (Write-Only) Id of model set
   */
  model_set_id?: number
}

/**
 * Dynamically generated writeable type for SamlConfig removes properties:
 * can, test_slug, modified_at, modified_by, default_new_user_roles, default_new_user_groups, groups, user_attributes, url
 */
export interface IWriteSamlConfig {
  /**
   * Enable/Disable Saml authentication for the server
   */
  enabled?: boolean
  /**
   * Identity Provider Certificate (provided by IdP)
   */
  idp_cert?: string
  /**
   * Identity Provider Url (provided by IdP)
   */
  idp_url?: string
  /**
   * Identity Provider Issuer (provided by IdP)
   */
  idp_issuer?: string
  /**
   * Identity Provider Audience (set in IdP config). Optional in Looker. Set this only if you want Looker to validate the audience value returned by the IdP.
   */
  idp_audience?: string
  /**
   * Count of seconds of clock drift to allow when validating timestamps of assertions.
   */
  allowed_clock_drift?: number
  /**
   * Name of user record attributes used to indicate email address field
   */
  user_attribute_map_email?: string
  /**
   * Name of user record attributes used to indicate first name
   */
  user_attribute_map_first_name?: string
  /**
   * Name of user record attributes used to indicate last name
   */
  user_attribute_map_last_name?: string
  /**
   * Merge first-time saml login to existing user account by email addresses. When a user logs in for the first time via saml this option will connect this user into their existing account by finding the account with a matching email address by testing the given types of credentials for existing users. Otherwise a new user account will be created for the user. This list (if provided) must be a comma separated list of string like 'email,ldap,google'
   */
  new_user_migration_types?: string
  /**
   * Allow alternate email-based login via '/login/email' for admins and for specified users with the 'login_special_email' permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled.
   */
  alternate_email_login_allowed?: boolean
  /**
   * (Write-Only) Array of ids of roles that will be applied to new users the first time they login via Saml
   */
  default_new_user_role_ids?: number[]
  /**
   * (Write-Only) Array of ids of groups that will be applied to new users the first time they login via Saml
   */
  default_new_user_group_ids?: number[]
  /**
   * Set user roles in Looker based on groups from Saml
   */
  set_roles_from_groups?: boolean
  /**
   * Name of user record attributes used to indicate groups. Used when 'groups_finder_type' is set to 'grouped_attribute_values'
   */
  groups_attribute?: string
  /**
   * (Read/Write) Array of mappings between Saml Groups and arrays of Looker Role ids
   */
  groups_with_role_ids?: ISamlGroupWrite[]
  /**
   * Users will not be allowed to login at all unless a role for them is found in Saml if set to true
   */
  auth_requires_role?: boolean
  /**
   * (Read/Write) Array of mappings between Saml User Attributes and arrays of Looker User Attribute ids
   */
  user_attributes_with_ids?: ISamlUserAttributeWrite[]
  /**
   * Identifier for a strategy for how Looker will find groups in the SAML response. One of ['grouped_attribute_values', 'individual_attributes']
   */
  groups_finder_type?: string
  /**
   * Value for group attribute used to indicate membership. Used when 'groups_finder_type' is set to 'individual_attributes'
   */
  groups_member_value?: string
  /**
   * Bypass the login page when user authentication is required. Redirect to IdP immediately instead.
   */
  bypass_login_page?: boolean
  /**
   * Allow SAML auth'd users to be members of non-reflected Looker groups. If 'false', user will be removed from non-reflected groups on login.
   */
  allow_normal_group_membership?: boolean
  /**
   * SAML auth'd users will inherit roles from non-reflected Looker groups.
   */
  allow_roles_from_normal_groups?: boolean
  /**
   * Allows roles to be directly assigned to SAML auth'd users.
   */
  allow_direct_roles?: boolean
}

/**
 * Dynamically generated writeable type for ScheduledPlan removes properties:
 * id, created_at, updated_at, title, user, next_run_at, last_run_at, can
 */
export interface IWriteScheduledPlan {
  /**
   * Name of this scheduled plan
   */
  name?: string
  /**
   * User Id which owns this scheduled plan
   */
  user_id?: number
  /**
   * Whether schedule is run as recipient (only applicable for email recipients)
   */
  run_as_recipient?: boolean
  /**
   * Whether the ScheduledPlan is enabled
   */
  enabled?: boolean
  /**
   * Id of a look
   */
  look_id?: number
  /**
   * Id of a dashboard
   */
  dashboard_id?: number
  /**
   * Id of a LookML dashboard
   */
  lookml_dashboard_id?: string
  /**
   * Query string to run look or dashboard with
   */
  filters_string?: string
  /**
   * (DEPRECATED) Alias for filters_string field
   */
  dashboard_filters?: string
  /**
   * Delivery should occur if running the dashboard or look returns results
   */
  require_results?: boolean
  /**
   * Delivery should occur if the dashboard look does not return results
   */
  require_no_results?: boolean
  /**
   * Delivery should occur if data have changed since the last run
   */
  require_change?: boolean
  /**
   * Will run an unlimited query and send all results.
   */
  send_all_results?: boolean
  /**
   * Vixie-Style crontab specification when to run
   */
  crontab?: string
  /**
   * Name of a datagroup; if specified will run when datagroup triggered (can't be used with cron string)
   */
  datagroup?: string
  /**
   * Timezone for interpreting the specified crontab (default is Looker instance timezone)
   */
  timezone?: string
  /**
   * Query id
   */
  query_id?: string
  /**
   * Scheduled plan destinations
   */
  scheduled_plan_destination?: IScheduledPlanDestination[]
  /**
   * Whether the plan in question should only be run once (usually for testing)
   */
  run_once?: boolean
  /**
   * Whether links back to Looker should be included in this ScheduledPlan
   */
  include_links?: boolean
  /**
   * The size of paper a PDF should be rendered for
   */
  pdf_paper_size?: string
  /**
   * Whether the paper should be landscape
   */
  pdf_landscape?: boolean
  /**
   * Whether this schedule is in an embed context or not
   */
  embed?: boolean
  /**
   * Color scheme of the dashboard if applicable
   */
  color_theme?: string
  /**
   * Whether or not to expand table vis to full length
   */
  long_tables?: boolean
  /**
   * The pixel width at which we render the inline table visualizations
   */
  inline_table_width?: number
}

/**
 * Dynamically generated writeable type for SessionConfig removes properties:
 * can
 */
export interface IWriteSessionConfig {
  /**
   * Allow users to have persistent sessions when they login
   */
  allow_persistent_sessions?: boolean
  /**
   * Number of minutes for user sessions.  Must be between 5 and 43200
   */
  session_minutes?: number
  /**
   * Allow users to have an unbounded number of concurrent sessions (otherwise, users will be limited to only one session at a time).
   */
  unlimited_sessions_per_user?: boolean
  /**
   * Enforce session logout for sessions that are inactive for 15 minutes.
   */
  use_inactivity_based_logout?: boolean
  /**
   * Track location of session when user logs in.
   */
  track_session_location?: boolean
}

/**
 * Dynamically generated writeable type for Theme removes properties:
 * can, id
 */
export interface IWriteTheme {
  /**
   * Timestamp for when this theme becomes active. Null=always
   */
  begin_at?: Date
  /**
   * Timestamp for when this theme expires. Null=never
   */
  end_at?: Date
  /**
   * Name of theme. Can only be alphanumeric and underscores.
   */
  name?: string
  settings?: IThemeSettings
}

/**
 * Dynamically generated writeable type for User removes properties:
 * can, avatar_url, avatar_url_without_sizing, credentials_api3, credentials_embed, credentials_google, credentials_ldap, credentials_looker_openid, credentials_oidc, credentials_saml, credentials_totp, display_name, email, embed_group_space_id, group_ids, id, looker_versions, personal_folder_id, presumed_looker_employee, role_ids, sessions, verified_looker_employee, roles_externally_managed, allow_direct_roles, allow_normal_group_membership, allow_roles_from_normal_groups, url
 */
export interface IWriteUser {
  credentials_email?: IWriteCredentialsEmail
  /**
   * First name
   */
  first_name?: string
  /**
   * ID string for user's home folder
   */
  home_folder_id?: string
  /**
   * Account has been disabled
   */
  is_disabled?: boolean
  /**
   * Last name
   */
  last_name?: string
  /**
   * User's preferred locale. User locale takes precedence over Looker's system-wide default locale. Locale determines language of display strings and date and numeric formatting in API responses. Locale string must be a 2 letter language code or a combination of language code and region code: 'en' or 'en-US', for example.
   */
  locale?: string
  /**
   * User's dev workspace has been checked for presence of applicable production projects
   */
  models_dir_validated?: boolean
  /**
   * Per user dictionary of undocumented state information owned by the Looker UI.
   */
  ui_state?: IDictionary<string>
}

/**
 * Dynamically generated writeable type for UserAttribute removes properties:
 * can, id, is_system, is_permanent
 */
export interface IWriteUserAttribute {
  /**
   * Name of user attribute
   */
  name?: string
  /**
   * Human-friendly label for user attribute
   */
  label?: string
  /**
   * Type of user attribute ("string", "number", "datetime", "yesno", "zipcode")
   */
  type?: string
  /**
   * Default value for when no value is set on the user
   */
  default_value?: string
  /**
   * If true, users will not be able to view values of this attribute
   */
  value_is_hidden?: boolean
  /**
   * Non-admin users can see the values of their attributes and use them in filters
   */
  user_can_view?: boolean
  /**
   * Users can change the value of this attribute for themselves
   */
  user_can_edit?: boolean
  /**
   * Destinations to which a hidden attribute may be sent. Once set, cannot be edited.
   */
  hidden_value_domain_whitelist?: string
}

/**
 * Dynamically generated writeable type for UserAttributeWithValue removes properties:
 * can, name, label, rank, user_id, user_can_edit, value_is_hidden, user_attribute_id, source, hidden_value_domain_whitelist
 */
export interface IWriteUserAttributeWithValue {
  /**
   * Value of attribute for user
   */
  value?: string
}

/**
 * Dynamically generated writeable type for WhitelabelConfiguration removes properties:
 * can, id, logo_url, favicon_url
 */
export interface IWriteWhitelabelConfiguration {
  /**
   * Customer logo image. Expected base64 encoded data (write-only)
   */
  logo_file?: string
  /**
   * Custom favicon image. Expected base64 encoded data (write-only)
   */
  favicon_file?: string
  /**
   * Default page title
   */
  default_title?: string
  /**
   * Boolean to toggle showing help menus
   */
  show_help_menu?: boolean
  /**
   * Boolean to toggle showing docs
   */
  show_docs?: boolean
  /**
   * Boolean to toggle showing email subscription options.
   */
  show_email_sub_options?: boolean
  /**
   * Boolean to toggle mentions of Looker in emails
   */
  allow_looker_mentions?: boolean
  /**
   * Boolean to toggle links to Looker in emails
   */
  allow_looker_links?: boolean
  /**
   * Allow subject line and email heading customization in customized emails”
   */
  custom_welcome_email_advanced?: boolean
}
