import { Dispatcher } from 'flux';
import assign from 'object-assign';

const PostItDispatcher = assign(new Dispatcher(), {
  handleViewAction(action) {
    const payload = {
      source: 'VIEW_ACTION',
      action,
    };
    this.dispatch(payload);
  },
});
export default PostItDispatcher;
