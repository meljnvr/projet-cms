export default gql`
query BlogPost {
    allBlogPosts {
      title
      content
      blog_slug
      id
      _createdAt
      _allContentLocales {
        value
      }
      _seoMetaTags {
        content
        attributes
      }
      _status
    }
}`
