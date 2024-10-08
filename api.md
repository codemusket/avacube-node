# SmartAccountAddress

Types:

- <code><a href="./src/resources/smart-account-address.ts">AddressResp</a></code>

Methods:

- <code title="post /GetSmartAccountAddress">client.smartAccountAddress.<a href="./src/resources/smart-account-address.ts">retrieve</a>({ ...params }) -> AddressResp</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">BoolValue</a></code>
- <code><a href="./src/resources/tasks.ts">TaskCreateResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="post /CreateTask">client.tasks.<a href="./src/resources/tasks.ts">create</a>({ ...params }) -> TaskCreateResponse</code>
- <code title="get /ListTasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>() -> TaskListResponse</code>
- <code title="post /DeleteTask">client.tasks.<a href="./src/resources/tasks.ts">delete</a>({ ...params }) -> BoolValue</code>
- <code title="post /CancelTask">client.tasks.<a href="./src/resources/tasks.ts">cancel</a>({ ...params }) -> BoolValue</code>

# Key

Types:

- <code><a href="./src/resources/key.ts">KeyRetrieveResponse</a></code>

Methods:

- <code title="post /GetKey">client.key.<a href="./src/resources/key.ts">retrieve</a>({ ...params }) -> KeyRetrieveResponse</code>
