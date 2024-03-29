export default gql`
  query recipe_post($slug:String) {
    recipePost(filter: {slug: {eq: $slug}}) {
      id
      content
      image {
        url
      }
      recipeStep {
        content
        id
        image {
          url
        }
      }
      title
    }
  }
`;