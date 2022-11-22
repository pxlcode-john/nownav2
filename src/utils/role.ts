const rootUsers = [
  // firebase user id
  "635kvzQThVaMK7UB6PEM5wVMyp83"
]

export const isRootUser = (userId: string) =>
  rootUsers.find(user => user === userId)