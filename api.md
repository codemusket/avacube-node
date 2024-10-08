# Avacube

Types:

- <code><a href="./src/resources/top-level.ts">CreateTaskResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetKeyResponse</a></code>
- <code><a href="./src/resources/top-level.ts">GetSmartAccountAddressResponse</a></code>

Methods:

- <code title="post /CancelTask">client.<a href="./src/index.ts">cancelTask</a>({ ...params }) -> BoolValue</code>
- <code title="post /CreateTask">client.<a href="./src/index.ts">createTask</a>({ ...params }) -> CreateTaskResponse</code>
- <code title="post /DeleteTask">client.<a href="./src/index.ts">deleteTask</a>({ ...params }) -> BoolValue</code>
- <code title="post /GetKey">client.<a href="./src/index.ts">getKey</a>({ ...params }) -> GetKeyResponse</code>
- <code title="post /GetSmartAccountAddress">client.<a href="./src/index.ts">getSmartAccountAddress</a>({ ...params }) -> GetSmartAccountAddressResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">BoolValue</a></code>
- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="get /ListTasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>() -> TaskListResponse</code>
