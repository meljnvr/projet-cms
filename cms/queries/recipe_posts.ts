export default gql`
query recipePosts {
    allRecipePosts {
      title
      id
      content
      slug
      image {
        url
      }
      recipeStep {
        id
        content
        image {
          url
        }
      }
    }
}`
