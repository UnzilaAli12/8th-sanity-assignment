import { list, documentTypeListItem } from 'sanity/structure';  // Correct named imports directly from 'sanity/structure'

export const structure = list()
  .title("Content")
  .items([
    documentTypeListItem("post").title("Posts"),
    documentTypeListItem("author").title("Authors"),
  ]);
export { list, documentTypeListItem };

