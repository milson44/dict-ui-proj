export const DICT = {
  id: 'ac27b94f03e74ef9b87c233973c2b722',
  name: 'тест показатель 22\\u002e12',
  fields: [
    {
      id: 'id',
      name: 'Идентификатор',
      type: 'STRING',
      dictRef: null,
      enumId: null,
      multivalued: false,
      required: false,
      minSize: null,
      maxSize: null
    },
    {
      id: 'afc86ec812cb4ac5b780c4b0dbbc8b8d',
      name: null,
      type: 'DECIMAL',
      dictRef: null,
      enumId: null,
      multivalued: false,
      required: true,
      minSize: null,
      maxSize: null
    },
    {
      id: 'userId',
      name: 'Пользователь - источник данных',
      type: 'STRING',
      dictRef: null,
      enumId: null,
      multivalued: false,
      required: true,
      minSize: null,
      maxSize: null
    },
    {
      id: 'organizationId',
      name: 'Организация - источник данных',
      type: 'STRING',
      dictRef: null,
      enumId: null,
      multivalued: false,
      required: true,
      minSize: null,
      maxSize: null
    },
    {
      id: 'created',
      name: 'Дата создания',
      type: 'TIMESTAMP',
      dictRef: null,
      enumId: null,
      multivalued: false,
      required: true,
      minSize: null,
      maxSize: null
    },
    {
      id: 'updated',
      name: 'Дата обновления',
      type: 'TIMESTAMP',
      dictRef: null,
      enumId: null,
      multivalued: false,
      required: true,
      minSize: null,
      maxSize: null
    },
    {
      id: 'deleted',
      name: 'Дата удаления',
      type: 'TIMESTAMP',
      dictRef: null,
      enumId: null,
      multivalued: false,
      required: false,
      minSize: null,
      maxSize: null
    },
    {
      id: 'deletionReason',
      name: 'Причина удаления',
      type: 'STRING',
      dictRef: null,
      enumId: null,
      multivalued: false,
      required: false,
      minSize: null,
      maxSize: null
    },
    {
      id: 'history',
      name: 'История изменений',
      type: 'JSON',
      dictRef: null,
      enumId: null,
      multivalued: true,
      required: true,
      minSize: null,
      maxSize: null
    },
    {
      id: 'version',
      name: 'Версия',
      type: 'INTEGER',
      dictRef: null,
      enumId: null,
      multivalued: false,
      required: true,
      minSize: null,
      maxSize: null
    }
  ],
  enums: [],
  viewPermission: 'REGISTRY_REPORTFORMS_GET',
  editPermission: 'REGISTRY_REPORTFORMS_ADD',
  deleted: null,
  engine: 'postgres'
};
export const TABLE_DATA = [
  {
    id: '1fe86151-74d5-45d2-9f5f-06d9a8554c3b',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 0.11,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2023-12-22T17:07:01.871626645',
        updated: '2023-12-22T17:07:01.871631779',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 0.11
      }
    ],
    version: 1,
    created: '2023-12-22T17:07:01.871',
    updated: '2023-12-22T17:07:01.871',
    deleted: null,
    deletionReason: null
  },
  {
    id: '26804889-7a5d-48bb-9180-de8e64335400',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 112,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:03:21.926097539',
        updated: '2024-03-26T22:03:21.926103218',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 112
      }
    ],
    version: 1,
    created: '2024-03-26T22:03:21.926',
    updated: '2024-03-26T22:03:21.926',
    deleted: null,
    deletionReason: null
  },
  {
    id: '3050cf86-cfaf-4a02-9ee4-717d02f3a7a4',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 3333,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:03:34.551465073',
        updated: '2024-03-26T22:03:34.551471896',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 3333
      }
    ],
    version: 1,
    created: '2024-03-26T22:03:34.551',
    updated: '2024-03-26T22:03:34.551',
    deleted: null,
    deletionReason: null
  },
  {
    id: '3117890c-c2c3-417e-b2ab-60dcaba230ec',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 3333,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:02:16.897075586',
        updated: '2024-03-26T22:02:16.897080487',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 3333
      }
    ],
    version: 1,
    created: '2024-03-26T22:02:16.897',
    updated: '2024-03-26T22:02:16.897',
    deleted: null,
    deletionReason: null
  },
  {
    id: '3bb94cf3-f4c1-4861-b940-c9592b1c2957',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 435,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:03:01.558288211',
        updated: '2024-03-26T22:03:01.558292928',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 435
      }
    ],
    version: 1,
    created: '2024-03-26T22:03:01.558',
    updated: '2024-03-26T22:03:01.558',
    deleted: null,
    deletionReason: null
  },
  {
    id: '48aa57eb-fb54-47b2-a42f-c535f70613a2',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 555,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:03:38.995467954',
        updated: '2024-03-26T22:03:38.995472299',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 555
      }
    ],
    version: 1,
    created: '2024-03-26T22:03:38.995',
    updated: '2024-03-26T22:03:38.995',
    deleted: null,
    deletionReason: null
  },
  {
    id: '5f0afb14-dcf4-4683-b3f1-bfbb9c873c02',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 12321321,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:02:32.65281943',
        updated: '2024-03-26T22:02:32.652824551',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 12321321
      }
    ],
    version: 1,
    created: '2024-03-26T22:02:32.652',
    updated: '2024-03-26T22:02:32.652',
    deleted: null,
    deletionReason: null
  },
  {
    id: '657c5534-2e92-498a-9d84-ec5d877a6f46',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 21312,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:02:21.985371527',
        updated: '2024-03-26T22:02:21.985377317',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 21312
      }
    ],
    version: 1,
    created: '2024-03-26T22:02:21.985',
    updated: '2024-03-26T22:02:21.985',
    deleted: null,
    deletionReason: null
  },
  {
    id: '74112b7e-7fae-46ce-94ca-b8fccd21e48b',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 4353,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:03:05.858278682',
        updated: '2024-03-26T22:03:05.858282675',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 4353
      }
    ],
    version: 1,
    created: '2024-03-26T22:03:05.858',
    updated: '2024-03-26T22:03:05.858',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'a2ae11e1-4906-4cd8-9f85-8f0de9bd6b19',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 534534,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:03:10.049393294',
        updated: '2024-03-26T22:03:10.049398061',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 534534
      }
    ],
    version: 1,
    created: '2024-03-26T22:03:10.049',
    updated: '2024-03-26T22:03:10.049',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'af041cd6-c02d-430a-8407-31973b1aecaf',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 543,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:02:53.201621101',
        updated: '2024-03-26T22:02:53.201626807',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 543
      }
    ],
    version: 1,
    created: '2024-03-26T22:02:53.201',
    updated: '2024-03-26T22:02:53.201',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'b65a27bc-fa6e-43bd-95c8-c88ad59ce927',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 43443,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:03:17.113014573',
        updated: '2024-03-26T22:03:17.11302004',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 43443
      }
    ],
    version: 1,
    created: '2024-03-26T22:03:17.113',
    updated: '2024-03-26T22:03:17.113',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'b7583ee9-9860-48de-b6ce-5ba9b7a4f6f5',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 0,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2023-12-22T17:07:15.942999786',
        updated: '2023-12-22T17:07:15.943003771',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 0
      }
    ],
    version: 1,
    created: '2023-12-22T17:07:15.943',
    updated: '2023-12-22T17:07:15.943',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'b85dcb91-5ca4-4436-9e0a-9d9e2ff93ec4',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 333334,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:02:38.174558798',
        updated: '2024-03-26T22:02:38.174563984',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 333334
      }
    ],
    version: 1,
    created: '2024-03-26T22:02:38.174',
    updated: '2024-03-26T22:02:38.174',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'bf1fd143-8ae4-4116-b064-470138671508',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 123213323,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:02:08.089562495',
        updated: '2024-03-26T22:02:08.089567064',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 123213323
      }
    ],
    version: 1,
    created: '2024-03-26T22:02:08.089',
    updated: '2024-03-26T22:02:08.089',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'cf03a286-0e24-44d4-9615-adb015ecb864',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 4441,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:02:42.648526729',
        updated: '2024-03-26T22:02:42.64853434',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 4441
      }
    ],
    version: 1,
    created: '2024-03-26T22:02:42.648',
    updated: '2024-03-26T22:02:42.648',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'cf510cdb-45cf-4544-b6a9-592a01161ee0',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 234234324,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:03:48.466416228',
        updated: '2024-03-26T22:03:48.466420845',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 234234324
      }
    ],
    version: 1,
    created: '2024-03-26T22:03:48.466',
    updated: '2024-03-26T22:03:48.466',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'd66656a6-eb86-425e-a58b-2ffc577fb133',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 2,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:02:12.326697081',
        updated: '2024-03-26T22:02:12.326702062',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 2
      }
    ],
    version: 1,
    created: '2024-03-26T22:02:12.326',
    updated: '2024-03-26T22:02:12.326',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'dc9abf8f-76eb-45d2-a19b-805f707aaa95',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 3,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2024-03-26T22:02:27.416627938',
        updated: '2024-03-26T22:02:27.416634005',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 3
      }
    ],
    version: 1,
    created: '2024-03-26T22:02:27.416',
    updated: '2024-03-26T22:02:27.416',
    deleted: null,
    deletionReason: null
  },
  {
    id: 'e64cff4e-7fe8-4a20-98fc-65ed3aea54df',
    data: {
      organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      afc86ec812cb4ac5b780c4b0dbbc8b8d: 999999999.99,
      userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a'
    },
    history: [
      {
        userId: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a',
        created: '2023-12-22T17:01:41.225178402',
        updated: '2023-12-22T17:01:41.225181797',
        version: 1,
        organizationId: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
        afc86ec812cb4ac5b780c4b0dbbc8b8d: 999999999.99
      }
    ],
    version: 1,
    created: '2023-12-22T17:01:41.225',
    updated: '2023-12-22T17:01:41.225',
    deleted: null,
    deletionReason: null
  }
];

export const LOADED_DATA = {
  users: {
    'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a': { id: 'bd3fd6a8-a67e-47e5-8ffc-2b0144d3032a', name: 'Погуляй А. А.' }
  },
  organizations: {
    '1e25b3ee-612f-4d52-9391-dd257260f8ac': {
      id: '1e25b3ee-612f-4d52-9391-dd257260f8ac',
      name: 'Департамент информационных технологий города Москвы',
      shortName: 'Департамент информационных технологий города Москвы',
      legalAddress: '107078 г. Москва, Новая Басманная улица, дом 10, строение 1',
      postAddress: '107078, город Москва, улица Новая Басманная, дом 10, строение 1',
      okpo: '70051275',
      inn: '7710878000',
      kpp: '770101001',
      bik: '044583001',
      ks: '40201810200000000179',
      ogrn: null,
      rs: null,
      phone: null,
      fax: null,
      email: null,
      chiefPost: 'РУКОВОДИТЕЛЬ ДЕПАРТАМЕНТА',
      chiefFio: 'ЕРМОЛАЕВ АРТЁМ ВАЛЕРЬЕВИЧ',
      bankName: 'ОТДЕЛЕНИЕ 1 МОСКВА',
      deleted: null,
      system: 'ODS_2',
      userId: null,
      districtIds: [],
      parentId: null,
      type: 'MANAGEMENT_COMPANY',
      federal: false
    }
  }
};
