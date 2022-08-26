import { rest } from 'msw'
export const handlers = [
    //thit viet

    rest.get('/user', (req, res, ctx) => {
        // Check if the user is authenticated in this session
        
        // If authenticated, return a mocked user details
        return res(
          ctx.status(200),
          ctx.json([
            {id: 1},
            {id: 2}
          ]),
        )
      }),

  rest.post('/register',async (req, res, ctx) => {
    const user= await req.json()
    sessionStorage.setItem('user', JSON.stringify(user))
    return res(
      ctx.status(200),
      ctx.json({
        user
      })
    )
  }),
  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      )
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: sessionStorage.getItem('is-authenticated')
      }),
    )
  }),
]