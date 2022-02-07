/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const login = {
  test: 'Test',
  userName: 'Username',
  userName_tips: 'Please enter your username',
  userPassword: 'Password',
  userPassword_tips: 'Please enter your password',
  login: 'Login'
}

const modal = {
  cancel: 'Cancel',
  confirm: 'Confirm'
}

const theme = {
  light: 'Light',
  dark: 'Dark'
}

const userDropdown = {
  profile: 'Profile',
  password: 'Password',
  logout: 'Logout'
}

const menu = {
  home: 'Home',
  project: 'Project',
  resources: 'Resources',
  datasource: 'Datasource',
  monitor: 'Monitor',
  security: 'Security',
  project_overview: 'Project Overview',
  workflow_relation: 'Workflow Relation',
  workflow: 'Workflow',
  workflow_definition: 'Workflow Definition',
  workflow_instance: 'Workflow Instance',
  task: 'Task',
  task_instance: 'Task Instance',
  task_definition: 'Task Definition',
  file_manage: 'File Manage',
  udf_manage: 'UDF Manage',
  resource_manage: 'Resource Manage',
  function_manage: 'Function Manage',
  service_manage: 'Service Manage',
  master: 'Master',
  worker: 'Worker',
  db: 'DB',
  statistical_manage: 'Statistical Manage',
  statistics: 'Statistics',
  audit_log: 'Audit Log',
  tenant_manage: 'Tenant Manage',
  user_manage: 'User Manage',
  alarm_group_manage: 'Alarm Group Manage',
  alarm_instance_manage: 'Alarm Instance Manage',
  worker_group_manage: 'Worker Group Manage',
  yarn_queue_manage: 'Yarn Queue Manage',
  environment_manage: 'Environment Manage',
  token_manage: 'Token Manage',
  task_group_manage: 'Task Group Manage',
  task_group_option: 'Task Group Option',
  task_group_queue: 'Task Group Queue',
  data_quality: 'Data Quality',
  task_result: 'Task Result'
}

const home = {
  task_state_statistics: 'Task State Statistics',
  process_state_statistics: 'Process State Statistics',
  process_definition_statistics: 'Process Definition Statistics',
  number: 'Number',
  state: 'State'
}

const password = {
  edit_password: 'Edit Password',
  password: 'Password',
  confirm_password: 'Confirm Password',
  password_tips: 'Please enter your password',
  confirm_password_tips: 'Please enter your confirm password',
  two_password_entries_are_inconsistent:
    'Two password entries are inconsistent',
  submit: 'Submit'
}

const profile = {
  profile: 'Profile',
  edit: 'Edit',
  username: 'Username',
  email: 'Email',
  phone: 'Phone',
  state: 'State',
  permission: 'Permission',
  create_time: 'Create Time',
  update_time: 'Update Time',
  administrator: 'Administrator',
  ordinary_user: 'Ordinary User',
  edit_profile: 'Edit Profile',
  username_tips: 'Please enter your username',
  email_tips: 'Please enter your email',
  email_correct_tips: 'Please enter your email in the correct format',
  phone_tips: 'Please enter your phone',
  state_tips: 'Please choose your state',
  enable: 'Enable',
  disable: 'Disable'
}

const monitor = {
  master: {
    cpu_usage: 'CPU Usage',
    memory_usage: 'Memory Usage',
    load_average: 'Load Average',
    create_time: 'Create Time',
    last_heartbeat_time: 'Last Heartbeat Time',
    directory_detail: 'Directory Detail',
    host: 'Host',
    directory: 'Directory'
  },
  worker: {
    cpu_usage: 'CPU Usage',
    memory_usage: 'Memory Usage',
    load_average: 'Load Average',
    create_time: 'Create Time',
    last_heartbeat_time: 'Last Heartbeat Time',
    directory_detail: 'Directory Detail',
    host: 'Host',
    directory: 'Directory'
  },
  db: {
    health_state: 'Health State',
    max_connections: 'Max Connections',
    threads_connections: 'Threads Connections',
    threads_running_connections: 'Threads Running Connections'
  },
  statistics: {
    command_number_of_waiting_for_running:
      'Command Number Of Waiting For Running',
    failure_command_number: 'Failure Command Number',
    tasks_number_of_waiting_running: 'Tasks Number Of Waiting Running',
    task_number_of_ready_to_kill: 'Task Number Of Ready To Kill'
  },
  audit_log: {
    user_name: 'User Name',
    resource_type: 'Resource Type',
    project_name: 'Project Name',
    operation_type: 'Operation Type',
    create_time: 'Create Time',
    start_time: 'Start Time',
    end_time: 'End Time',
    user_audit: 'User Audit',
    project_audit: 'Project Audit',
    create: 'Create',
    update: 'Update',
    delete: 'Delete',
    read: 'Read'
  }
}

const resource = {
  file: {
    file_manage: 'File Manage',
    create_folder: 'Create Folder',
    create_file: 'Create File',
    upload_files: 'Upload Files',
    enter_keyword_tips: 'Please enter keyword',
    id: '#',
    name: 'Name',
    user_name: 'Resource userName',
    whether_directory: 'Whether directory',
    file_name: 'File Name',
    description: 'Description',
    size: 'Size',
    update_time: 'Update Time',
    operation: 'Operation',
    edit: 'Edit',
    rename: 'Rename',
    download: 'Download',
    delete: 'Delete',
    yes: 'Yes',
    no: 'No',
    folder_name: 'Folder Name',
    enter_name_tips: 'Please enter name',
    enter_description_tips: 'Please enter description',
    enter_content_tips: 'Please enter the resource content',
    file_format: 'File Format',
    file_content: 'File Content',
    delete_confirm: 'Delete?',
    confirm: 'Confirm',
    cancel: 'Cancel',
    success: 'Success',
    file_details: 'File Details',
    return: 'Return',
    save: 'Save'
  },
  udf: {
    udf_resources: 'UDF resources',
    create_folder: 'Create Folder',
    upload_udf_resources: 'Upload UDF Resources',
    id: '#',
    udf_source_name: 'UDF Resource Name',
    whether_directory: 'Whether directory',
    file_name: 'File Name',
    file_size: 'File Size',
    description: 'Description',
    create_time: 'Create Time',
    update_time: 'Update Time',
    operation: 'Operation',
    yes: 'Yes',
    no: 'No',
    edit: 'Edit',
    download: 'Download',
    delete: 'Delete',
    delete_confirm: 'Delete?',
    success: 'Success',
    folder_name: 'Folder Name',
    upload: 'Upload',
    upload_files: 'Upload Files',
    file_upload: 'File Upload',
    enter_keyword_tips: 'Please enter keyword',
    enter_name_tips: 'Please enter name',
    enter_description_tips: 'Please enter description'
  },
  function: {
    udf_function: 'UDF Function',
    create_udf_function: 'Create UDF Function',
    edit_udf_function: 'Create UDF Function',
    id: '#',
    udf_function_name: 'UDF Function Name',
    class_name: 'Class Name',
    type: 'Type',
    description: 'Description',
    jar_package: 'Jar Package',
    update_time: 'Update Time',
    operation: 'Operation',
    rename: 'Rename',
    edit: 'Edit',
    delete: 'Delete',
    success: 'Success',
    package_name: 'Package Name',
    udf_resources: 'UDF Resources',
    instructions: 'Instructions',
    upload_resources: 'Upload Resources',
    udf_resources_directory: 'UDF resources directory',
    delete_confirm: 'Delete?',
    enter_keyword_tips: 'Please enter keyword',
    enter_udf_unction_name_tips: 'Please enter a UDF function name',
    enter_package_name_tips: 'Please enter a Package name',
    enter_select_udf_resources_tips: 'Please select UDF resources',
    enter_select_udf_resources_directory_tips:
      'Please select UDF resources directory',
    enter_instructions_tips: 'Please enter a instructions',
    enter_name_tips: 'Please enter name',
    enter_description_tips: 'Please enter description'
  },
  task_group_option: {
    id: 'No.',
    manage: 'Task group manage',
    option: 'Task group option',
    create: 'Create task group',
    edit: 'Edit task group',
    delete: 'Delete task group',
    view_queue: 'View the queue of the task group',
    switch_status: 'Switch status',
    code: 'Task group code',
    name: 'Task group name',
    project_name: 'Project name',
    resource_pool_size: 'Resource pool size',
    resource_pool_size_be_a_number:
      'The size of the task group resource pool should be more than 1',
    resource_used_pool_size: 'Used resource',
    desc: 'Task group desc',
    status: 'Task group status',
    enable_status: 'Enable',
    disable_status: 'Disable',
    please_enter_name: 'Please enter task group name',
    please_enter_desc: 'Please enter task group description',
    please_enter_resource_pool_size:
      'Please enter task group resource pool size',
    please_select_project: 'Please select a project',
    create_time: 'Create time',
    update_time: 'Update time',
    actions: 'Actions',
    please_enter_keywords: 'Please enter keywords'
  },
  task_group_queue: {
    id: 'No.',
    actions: 'Actions',
    task_name: 'Task name',
    task_group_name: 'Task group name',
    project_name: 'Project name',
    process_name: 'Process name',
    process_instance_name: 'Process instance',
    queue: 'Task group queue',
    priority: 'Priority',
    priority_be_a_number:
      'The priority of the task group queue should be a positive number',
    force_starting_status: 'Starting status',
    in_queue: 'In queue',
    task_status: 'Task status',
    view: 'View task group queue',
    the_status_of_waiting: 'Waiting into the queue',
    the_status_of_queuing: 'Queuing',
    the_status_of_releasing: 'Released',
    modify_priority: 'Edit the priority',
    start_task: 'Start the task',
    priority_not_empty: 'The value of priority can not be empty',
    priority_must_be_number: 'The value of priority should be number',
    please_select_task_name: 'Please select a task name',
    create_time: 'Create time',
    update_time: 'Update time',
    edit_priority: 'Edit the task priority'
  }
}

const project = {
  list: {
    create_project: 'Create Project',
    edit_project: 'Edit Project',
    project_list: 'Project List',
    project_tips: 'Please enter your project',
    description_tips: 'Please enter your description',
    username_tips: 'Please enter your username',
    project_name: 'Project Name',
    project_description: 'Project Description',
    owned_users: 'Owned Users',
    workflow_define_count: 'Workflow Define Count',
    process_instance_running_count: 'Process Instance Running Count',
    description: 'Description',
    create_time: 'Create Time',
    update_time: 'Update Time',
    operation: 'Operation',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
    delete_confirm: 'Delete?'
  },
  workflow: {
    workflow_relation: 'Workflow Relation',
    create_workflow: 'Create Workflow',
    import_workflow: 'Import Workflow',
    workflow_name: 'Workflow Name',
    current_selection: 'Current Selection',
    online: 'Online',
    offline: 'Offline',
    refresh: 'Refresh',
    show_hide_label: 'Show / Hide Label',
    workflow_offline: 'Workflow Offline',
    schedule_offline: 'Schedule Offline',
    schedule_start_time: 'Schedule Start Time',
    schedule_end_time: 'Schedule End Time',
    crontab_expression: 'Crontab',
    workflow_publish_status: 'Workflow Publish Status',
    schedule_publish_status: 'Schedule Publish Status',
    workflow_definition: 'Workflow Definition',
    id: '#',
    status: 'Status',
    create_time: 'Create Time',
    update_time: 'Update Time',
    description: 'Description',
    create_user: 'Create User',
    modify_user: 'Modify User',
    operation: 'Operation',
    edit: 'Edit',
    start: 'Start',
    timing: 'Timing',
    timezone: 'Timezone',
    upline: 'Online',
    copy_workflow: 'Copy Workflow',
    cron_manage: 'Cron manage',
    delete: 'Delete',
    tree_view: 'Tree View',
    export: 'Export',
    version_info: 'Version Info',
    version: 'Version',
    file_upload: 'File Upload',
    upload_file: 'Upload File',
    upload: 'Upload',
    file_name: 'File Name',
    success: 'Success',
    set_parameters_before_starting: 'Please set the parameters before starting',
    set_parameters_before_timing: 'Set parameters before timing',
    start_and_stop_time: 'Start and stop time',
    next_five_execution_times: 'Next five execution times',
    execute_time: 'Execute time',
    failure_strategy: 'Failure Strategy',
    notification_strategy: 'Notification Strategy',
    workflow_priority: 'Workflow Priority',
    worker_group: 'Worker Group',
    environment_name: 'Environment Name',
    alarm_group: 'Alarm Group',
    complement_data: 'Complement Data',
    startup_parameter: 'Startup Parameter',
    whether_dry_run: 'Whether Dry-Run',
    continue: 'Continue',
    end: 'End',
    none_send: 'None',
    success_send: 'Success',
    failure_send: 'Failure',
    all_send: 'All',
    whether_complement_data: 'Whether it is a complement process?',
    schedule_date: 'Schedule date',
    mode_of_execution: 'Mode of execution',
    serial_execution: 'Serial execution',
    parallel_execution: 'Parallel execution',
    parallelism: 'Parallelism',
    custom_parallelism: 'Custom Parallelism',
    please_enter_parallelism: 'Please enter Parallelism',
    please_choose: 'Please Choose',
    start_time: 'Start Time',
    end_time: 'End Time',
    crontab: 'Crontab',
    delete_confirm: 'Delete?',
    enter_name_tips: 'Please enter name',
    confirm_switch_version: 'Confirm Switch To This Version?',
    current_version: 'Current Version'
  },
  task: {
    task_name: 'Task Name',
    task_type: 'Task Type',
    create_task: 'Create Task',
    workflow_instance: 'Workflow Instance',
    workflow_name: 'Workflow Name',
    workflow_name_tips: 'Please select workflow name',
    workflow_state: 'Workflow State',
    version: 'Version',
    current_version: 'Current Version',
    switch_version: 'Switch To This Version',
    confirm_switch_version: 'Confirm Switch To This Version?',
    description: 'Description',
    move: 'Move',
    upstream_tasks: 'Upstream Tasks',
    executor: 'Executor',
    node_type: 'Node Type',
    state: 'State',
    submit_time: 'Submit Time',
    start_time: 'Start Time',
    create_time: 'Create Time',
    update_time: 'Update Time',
    end_time: 'End Time',
    duration: 'Duration',
    retry_count: 'Retry Count',
    dry_run_flag: 'Dry Run Flag',
    host: 'Host',
    operation: 'Operation',
    edit: 'Edit',
    delete: 'Delete',
    delete_confirm: 'Delete?',
    submitted_success: 'Submitted Success',
    running_execution: 'Running Execution',
    ready_pause: 'Ready Pause',
    pause: 'Pause',
    ready_stop: 'Ready Stop',
    stop: 'Stop',
    failure: 'Failure',
    success: 'Success',
    need_fault_tolerance: 'Need Fault Tolerance',
    kill: 'Kill',
    waiting_thread: 'Waiting Thread',
    waiting_depend: 'Waiting Depend',
    delay_execution: 'Delay Execution',
    forced_success: 'Forced Success',
    serial_wait: 'Serial Wait',
    view_log: 'View Log',
    download_log: 'Download Log'
  },
  dag: {
    create: 'Create Workflow',
    search: 'Search',
    download_png: 'Download PNG',
    fullscreen_open: 'Open Fullscreen',
    fullscreen_close: 'Close Fullscreen',
    save: 'Save',
    close: 'Close',
    format: 'Format',
    layout_type: 'Layout Type',
    grid_layout: 'Grid',
    dagre_layout: 'Dagre',
    rows: 'Rows',
    cols: 'Cols'
  }
}

const security = {
  tenant: {
    tenant_manage: 'Tenant Manage',
    create_tenant: 'Create Tenant',
    search_tips: 'Please enter keywords',
    num: 'Serial number',
    tenant_code: 'Operating System Tenant',
    description: 'Description',
    queue_name: 'QueueName',
    create_time: 'Create Time',
    update_time: 'Update Time',
    actions: 'Operation',
    edit_tenant: 'Edit Tenant',
    tenant_code_tips: 'Please enter the operating system tenant',
    queue_name_tips: 'Please select queue',
    description_tips: 'Please enter a description',
    delete_confirm: 'Delete?',
    edit: 'Edit',
    delete: 'Delete'
  },
  alarm_group: {
    create_alarm_group: 'Create Alarm Group',
    edit_alarm_group: 'Edit Alarm Group',
    search_tips: 'Please enter keywords',
    alert_group_name_tips: 'Please enter your alert group name',
    alarm_plugin_instance: 'Alarm Plugin Instance',
    alarm_plugin_instance_tips: 'Please select alert plugin instance',
    alarm_group_description_tips: 'Please enter your alarm group description',
    alert_group_name: 'Alert Group Name',
    alarm_group_description: 'Alarm Group Description',
    create_time: 'Create Time',
    update_time: 'Update Time',
    operation: 'Operation',
    delete_confirm: 'Delete?',
    edit: 'Edit',
    delete: 'Delete'
  },
  worker_group: {
    create_worker_group: 'Create Worker Group',
    edit_worker_group: 'Edit Worker Group',
    search_tips: 'Please enter keywords',
    operation: 'Operation',
    delete_confirm: 'Delete?',
    edit: 'Edit',
    delete: 'Delete',
    group_name: 'Group Name',
    group_name_tips: 'Please enter your group name',
    worker_addresses: 'Worker Addresses',
    worker_addresses_tips: 'Please select worker addresses',
    create_time: 'Create Time',
    update_time: 'Update Time'
  },
  yarn_queue: {
    create_queue: 'Create Queue',
    edit_queue: 'Edit Queue',
    search_tips: 'Please enter keywords',
    queue_name: 'Queue Name',
    queue_value: 'Queue Value',
    create_time: 'Create Time',
    update_time: 'Update Time',
    operation: 'Operation',
    edit: 'Edit',
    queue_name_tips: 'Please enter your queue name',
    queue_value_tips: 'Please enter your queue value'
  },
  environment: {
    create_environment: 'Create Environment',
    edit_environment: 'Edit Environment',
    search_tips: 'Please enter keywords',
    edit: 'Edit',
    delete: 'Delete',
    environment_name: 'Environment Name',
    environment_config: 'Environment Config',
    environment_desc: 'Environment Desc',
    worker_groups: 'Worker Groups',
    create_time: 'Create Time',
    update_time: 'Update Time',
    operation: 'Operation',
    delete_confirm: 'Delete?',
    environment_name_tips: 'Please enter your environment name',
    environment_config_tips: 'Please enter your environment config',
    environment_description_tips: 'Please enter your environment description',
    worker_group_tips: 'Please select worker group'
  },
  token: {
    create_token: 'Create Token',
    edit_token: 'Edit Token',
    search_tips: 'Please enter keywords',
    user: 'User',
    user_tips: 'Please select user',
    token: 'Token',
    token_tips: 'Please enter your token',
    expiration_time: 'Expiration Time',
    expiration_time_tips: 'Please select expiration time',
    create_time: 'Create Time',
    update_time: 'Update Time',
    operation: 'Operation',
    edit: 'Edit',
    delete: 'Delete',
    delete_confirm: 'Delete?'
  },
  user: {
    user_manage: 'User Manage',
    create_user: 'Create User',
    update_user: 'Update User',
    delete_user: 'Delete User',
    delete_confirm: 'Are you sure to delete?',
    delete_confirm_tip:
      'Deleting user is a dangerous operation，please be careful',
    index: 'Index',
    username: 'Username',
    username_exists: 'The username already exists',
    username_rule_msg: 'Please enter username',
    user_password: 'Please enter password',
    user_password_rule_msg:
      'Please enter a password containing letters and numbers with a length between 6 and 20',
    user_type: 'User Type',
    tenant_code: 'Tenant',
    tenant_id_rule_msg: 'Please select tenant',
    queue: 'Queue',
    email: 'Email',
    email_rule_msg: 'Please enter valid email',
    phone: 'Phone',
    phone_rule_msg: 'Please enter valid phone number',
    state: 'State',
    create_time: 'Create Time',
    update_time: 'Update Time',
    operation: 'Operation',
    edit: 'Edit',
    delete: 'Delete',
    save_error_msg: 'Failed to save, please retry',
    delete_error_msg: 'Failed to delete, please retry'
  },
  alarm_instance: {
    search_input_tips: 'Please input the keywords',
    alarm_instance_manage: 'Alarm instance manage',
    alarm_instance: 'Alarm Instance',
    serial_number: '#',
    alarm_instance_name: 'Alarm instance name',
    alarm_instance_name_tips: 'Please enter alarm plugin instance name',
    alarm_plugin_name: 'Alarm plugin name',
    create_time: 'Create Time',
    update_time: 'Update Time',
    operation: 'Operation',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
    submit: 'Submit',
    create: 'Create',
    select_plugin: 'Select plugin',
    select_plugin_tips: 'Select Alarm plugin',
    instance_parameter_exception: 'Instance parameter exception',
    WebHook: 'WebHook',
    webHook: 'WebHook',
    IsEnableProxy: 'Enable Proxy',
    Proxy: 'Proxy',
    Port: 'Port',
    User: 'User',
    corpId: 'CorpId',
    secret: 'Secret',
    Secret: 'Secret',
    users: 'Users',
    userSendMsg: 'UserSendMsg',
    agentId: 'AgentId',
    showType: 'Show Type',
    receivers: 'Receivers',
    receiverCcs: 'ReceiverCcs',
    serverHost: 'SMTP Host',
    serverPort: 'SMTP Port',
    sender: 'Sender',
    enableSmtpAuth: 'SMTP Auth',
    Password: 'Password',
    starttlsEnable: 'SMTP STARTTLS Enable',
    sslEnable: 'SMTP SSL Enable',
    smtpSslTrust: 'SMTP SSL Trust',
    url: 'URL',
    requestType: 'Request Type',
    headerParams: 'Headers',
    bodyParams: 'Body',
    contentField: 'Content Field',
    Keyword: 'Keyword',
    userParams: 'User Params',
    path: 'Script Path',
    type: 'Type',
    sendType: 'Send Type',
    username: 'Username',
    botToken: 'Bot Token',
    chatId: 'Channel Chat Id',
    parseMode: 'Parse Mode'
  }
}

const datasource = {
  datasource: 'DataSource',
  create_datasource: 'Create DataSource',
  search_input_tips: 'Please input the keywords',
  serial_number: '#',
  datasource_name: 'Datasource Name',
  datasource_name_tips: 'Please enter datasource name',
  datasource_user_name: 'Owner',
  datasource_type: 'Datasource Type',
  datasource_parameter: 'Datasource Parameter',
  description: 'Description',
  description_tips: 'Please enter description',
  create_time: 'Create Time',
  update_time: 'Update Time',
  operation: 'Operation',
  click_to_view: 'Click to view',
  delete: 'Delete',
  confirm: 'Confirm',
  cancel: 'Cancel',
  create: 'Create',
  edit: 'Edit',
  success: 'Success',
  test_connect: 'Test Connect',
  ip: 'IP',
  ip_tips: 'Please enter IP',
  port: 'Port',
  port_tips: 'Please enter port',
  database_name: 'Database Name',
  database_name_tips: 'Please enter database name',
  oracle_connect_type: 'ServiceName or SID',
  oracle_connect_type_tips: 'Please select serviceName or SID',
  oracle_service_name: 'ServiceName',
  oracle_sid: 'SID',
  jdbc_connect_parameters: 'jdbc connect parameters',
  principal_tips: 'Please enter Principal',
  krb5_conf_tips:
    'Please enter the kerberos authentication parameter java.security.krb5.conf',
  keytab_username_tips:
    'Please enter the kerberos authentication parameter login.user.keytab.username',
  keytab_path_tips:
    'Please enter the kerberos authentication parameter login.user.keytab.path',
  format_tips: 'Please enter format',
  connection_parameter: 'connection parameter',
  user_name: 'User Name',
  user_name_tips: 'Please enter your username',
  user_password: 'Password',
  user_password_tips: 'Please enter your password'
}

const data_quality = {
  task_result: {
    task_name: 'Task Name',
    workflow_instance: 'Workflow Instance',
    rule_type: 'Rule Type',
    rule_name: 'Rule Name',
    state: 'State',
    actual_value: 'Actual Value',
    excepted_value: 'Excepted Value',
    check_type: 'Check Type',
    operator: 'Operator',
    threshold: 'Threshold',
    failure_strategy: 'Failure Strategy',
    excepted_value_type: 'Excepted Value Type',
    error_output_path: 'Error Output Path',
    username: 'Username',
    create_time: 'Create Time',
    update_time: 'Update Time',
    undone: 'Undone',
    success: 'Success',
    failure: 'Failure',
    single_table: 'Single Table',
    single_table_custom_sql: 'Single Table Custom Sql',
    multi_table_accuracy: 'Multi Table Accuracy',
    multi_table_comparison: 'Multi Table Comparison',
    expected_and_actual_or_expected: '(Expected - Actual) / Expected x 100%',
    expected_and_actual: 'Expected - Actual',
    actual_and_expected: 'Actual - Expected',
    actual_or_expected: 'Actual / Expected x 100%'
  }
}

export default {
  login,
  modal,
  theme,
  userDropdown,
  menu,
  home,
  password,
  profile,
  monitor,
  resource,
  project,
  security,
  datasource,
  data_quality
}
