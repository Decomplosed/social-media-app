let db = {
  users: [
    {
      userId: 'CxTCJist2fANudS0ds0I',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2020-04-11T10:37:25.013Z',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/socialape-43478.appspot.com/o/93727243.png?alt=media',
      bio: 'Hello, my name is user',
      website: 'https://www.user.com',
      location: 'London, UK',
    },
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: '2020-04-10T16:44:03.339Z',
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'kdjsfgdksuufhgkdsufky',
      body: 'nice one mate!',
      createdAt: '2019-03-15T10:59:52.798Z'
    }
}

const userDetails = {
  // Redux data
  credentials: {
    userId: 'N43KJ5H43KJHREW4J5H3JWMERHB',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2019-03-15T10:59:52.798Z',
    imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
    bio: 'Hello, my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'Lonodn, UK',
  },
  likes: [
    {
      userHandle: 'user',
      screamId: 'hh7O5oWfWucVzGbHH2pa',
    },
    {
      userHandle: 'user',
      screamId: '3IOnFoQexRcofs5OhBXO',
    },
  ],
}
