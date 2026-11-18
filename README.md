# OpenAcademy

## Access and lesson media

The server loads the signed-in user through `Auth/whoami`; frontend role checks control navigation and server actions, but the API must still enforce authorization and course ownership. Lesson Markdown is sanitized with DOMPurify before rendering. Lesson assets are uploaded as multipart data through the server and rendered from the lesson-assets endpoint. With adapter-node, configure `BODY_SIZE_LIMIT` in the deployment environment to accommodate the allowed media file sizes.

The generated SDK exposes no lesson-update operation, so uploaded asset IDs cannot currently be persisted into lesson content. If the API adds lesson editing, use a strict text token such as `[[asset:<id>]]` and render it only by looking up that ID in the lesson's returned assets; do not inject token text as HTML.
