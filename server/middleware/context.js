import { getAccount } from '../actions/account'
import { createServerState } from '../../client/state'
import actions from '../../client/actions'

/**
 * Middleware for creating the context
 * @param req
 * @param res
 * @param next
 */
export default async function(req, res, next) {
  // Get our token from headers (server) or cookies (client)
  req.token = req.headers.token || req.cookies.token
  const account = await getAccount(req.token)
  req.account = account
  next()
}
