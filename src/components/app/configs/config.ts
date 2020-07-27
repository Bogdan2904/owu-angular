import {environment} from '../../../environments/environment';

export const config = {
  ALL_POSTS_URL: environment.allPostsUrl || '',
  ALL_USERS_URL: environment.allUsersUrl || '',
  ALL_COMMENTS_URL: environment.allCommentsUrl || ''
}
