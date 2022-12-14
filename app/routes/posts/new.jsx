import {Link} from "@remix-run/react";
import { redirect } from "@remix-run/cloudflare";

export const action = async({request}) => {
const form = await request.formData()
const title = form.get('title')
const body = form.get('body')

const fields = {title, body}

console.log(fields)
//@todo - submit to database

return redirect('/posts')
}

function NewPost() {
  return (
    <>
    <div className="page-header">
        <h1>New Post</h1>
        <Link to='/posts' className="btn btn-reverse">
          Back
        </Link>
    </div>
        <div className="page-content">
          <form method="POST">
            <div className="form-control">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title"/>
            </div>
            <div className="form-control">
              <label htmlFor="body">Post Body</label>
              <textarea name='body' id="body"/>
            </div>
            <button type="submit" className="btn btn-block">
              Add Post
            </button>
          </form>
        </div>
    </>
  )
}

export default NewPost